function h(){}function he(e){return e()}function pe(){return Object.create(null)}function O(e){e.forEach(he)}function ze(e){return typeof e=="function"}function _(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Qe(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function K(e){return document.createTextNode(e)}function M(){return K(" ")}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function We(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}var de;function z(e){de=e}var N=[],me=[],Q=[],ge=[],Ze=Promise.resolve(),ne=!1;function Xe(){ne||(ne=!0,Ze.then(ve))}function re(e){Q.push(e)}var ie=!1,ae=new Set;function ve(){if(!ie){ie=!0;do{for(let e=0;e<N.length;e+=1){let t=N[e];z(t),Je(t.$$)}for(z(null),N.length=0;me.length;)me.pop()();for(let e=0;e<Q.length;e+=1){let t=Q[e];ae.has(t)||(ae.add(t),t())}Q.length=0}while(N.length);for(;ge.length;)ge.pop()();ne=!1,ie=!1,ae.clear()}}function Je(e){if(e.fragment!==null){e.update(),O(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}var W=new Set,L;function _e(){L={r:0,c:[],p:L}}function we(){L.r||O(L.c),L=L.p}function I(e,t){e&&e.i&&(W.delete(e),e.i(t))}function Z(e,t,n,r){if(e&&e.o){if(W.has(e))return;W.add(e),L.c.push(()=>{W.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function X(e){e&&e.c()}function H(e,t,n,r){let{fragment:i,on_mount:a,on_destroy:c,after_update:o}=e.$$;i&&i.m(t,n),r||re(()=>{let s=a.map(he).filter(ze);c?c.push(...s):O(s),e.$$.on_mount=[]}),o.forEach(re)}function q(e,t){let n=e.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ye(e,t){e.$$.dirty[0]===-1&&(N.push(e),Xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function w(e,t,n,r,i,a,c=[-1]){let o=de;z(e);let s=e.$$={fragment:null,ctx:null,props:a,update:h,not_equal:i,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o?o.$$.context:t.context||[]),callbacks:pe(),dirty:c,skip_bound:!1},l=!1;if(s.ctx=n?n(e,t.props||{},(f,C,...G)=>{let R=G.length?G[0]:C;return s.ctx&&i(s.ctx[f],s.ctx[f]=R)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](R),l&&Ye(e,f)),C}):[],s.update(),l=!0,O(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){let f=We(t.target);s.fragment&&s.fragment.l(f),f.forEach(d)}else s.fragment&&s.fragment.c();t.intro&&I(e.$$.fragment),H(e,t.target,t.anchor,t.customElement),ve()}z(o)}var v=class{$destroy(){q(this,1),this.$destroy=h}$on(t,n){let r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{let i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Qe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};function ye(){throw new Error("setTimeout has not been defined")}function be(){throw new Error("clearTimeout has not been defined")}var T=ye,$=be,k;typeof window!="undefined"?k=window:typeof self!="undefined"?k=self:k={};typeof k.setTimeout=="function"&&(T=setTimeout);typeof k.clearTimeout=="function"&&($=clearTimeout);function xe(e){if(T===setTimeout)return setTimeout(e,0);if((T===ye||!T)&&setTimeout)return T=setTimeout,setTimeout(e,0);try{return T(e,0)}catch(t){try{return T.call(null,e,0)}catch(n){return T.call(this,e,0)}}}function et(e){if($===clearTimeout)return clearTimeout(e);if(($===be||!$)&&clearTimeout)return $=clearTimeout,clearTimeout(e);try{return $(e)}catch(t){try{return $.call(null,e)}catch(n){return $.call(this,e)}}}var x=[],P=!1,U,J=-1;function tt(){!P||!U||(P=!1,U.length?x=U.concat(x):J=-1,x.length&&Ee())}function Ee(){if(!P){var e=xe(tt);P=!0;for(var t=x.length;t;){for(U=x,x=[];++J<t;)U&&U[J].run();J=-1,t=x.length}U=null,P=!1,et(e)}}function nt(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];x.push(new Te(e,t)),x.length===1&&!P&&xe(Ee)}function Te(e,t){this.fun=e,this.array=t}Te.prototype.run=function(){this.fun.apply(null,this.array)};var rt="browser",it="browser",at=!0,ot=[],st="",ct={},lt={},ft={};function j(){}var ut=j,ht=j,pt=j,dt=j,mt=j,gt=j,vt=j;function _t(e){throw new Error("process.binding is not supported")}function wt(){return"/"}function yt(e){throw new Error("process.chdir is not supported")}function bt(){return 0}var A=k.performance||{},xt=A.now||A.mozNow||A.msNow||A.oNow||A.webkitNow||function(){return new Date().getTime()};function Et(e){var t=xt.call(A)*.001,n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n=n-e[0],r=r-e[1],r<0&&(n--,r+=1e9)),[n,r]}var Tt=new Date;function $t(){var e=new Date,t=e-Tt;return t/1e3}var Ct={nextTick:nt,title:rt,browser:at,env:{NODE_ENV:"production"},argv:ot,version:st,versions:ct,on:ut,addListener:ht,once:pt,off:dt,removeListener:mt,removeAllListeners:gt,emit:vt,binding:_t,cwd:wt,chdir:yt,umask:bt,hrtime:Et,platform:it,release:lt,config:ft,uptime:$t},oe=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},B=$e,Rt=se,Ut=Lt,jt=Ce,kt=Re,Pt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function se(e){for(var t=[],n=0,r=0,i="",a;(a=Pt.exec(e))!=null;){var c=a[0],o=a[1],s=a.index;if(i+=e.slice(r,s),r=s+c.length,o){i+=o[1];continue}i&&(t.push(i),i="");var l=a[2],f=a[3],C=a[4],G=a[5],R=a[6],Ve=a[7],Ge=R==="+"||R==="*",Ke=R==="?"||R==="*",ue=l||"/",Me=C||G||(Ve?".*":"[^"+ue+"]+?");t.push({name:f||n++,prefix:l||"",delimiter:ue,optional:Ke,repeat:Ge,pattern:At(Me)})}return r<e.length&&(i+=e.substr(r)),i&&t.push(i),t}function Lt(e){return Ce(se(e))}function Ce(e){for(var t=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(t[n]=new RegExp("^"+e[n].pattern+"$"));return function(r){for(var i="",a=r||{},c=0;c<e.length;c++){var o=e[c];if(typeof o=="string"){i+=o;continue}var s=a[o.name],l;if(s==null){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to be defined')}if(oe(s)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received "'+s+'"');if(s.length===0){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(l=encodeURIComponent(s[f]),!t[c].test(l))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received "'+l+'"');i+=(f===0?o.prefix:o.delimiter)+l}continue}if(l=encodeURIComponent(s),!t[c].test(l))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+l+'"');i+=o.prefix+l}return i}}function Le(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function At(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function ce(e,t){return e.keys=t,e}function Ue(e){return e.sensitive?"":"i"}function St(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return ce(e,t)}function Ot(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push($e(e[i],t,n).source);var a=new RegExp("(?:"+r.join("|")+")",Ue(n));return ce(a,t)}function Nt(e,t,n){for(var r=se(e),i=Re(r,n),a=0;a<r.length;a++)typeof r[a]!="string"&&t.push(r[a]);return ce(i,t)}function Re(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,i="",a=e[e.length-1],c=typeof a=="string"&&/\/$/.test(a),o=0;o<e.length;o++){var s=e[o];if(typeof s=="string")i+=Le(s);else{var l=Le(s.prefix),f=s.pattern;s.repeat&&(f+="(?:"+l+f+")*"),s.optional?l?f="(?:"+l+"("+f+"))?":f="("+f+")?":f=l+"("+f+")",i+=f}}return n||(i=(c?i.slice(0,-2):i)+"(?:\\/(?=$))?"),r?i+="$":i+=n&&c?"":"(?=\\/|$)",new RegExp("^"+i,Ue(t))}function $e(e,t,n){return t=t||[],oe(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?St(e,t):oe(e)?Ot(e,t,n):Nt(e,t,n)}B.parse=Rt;B.compile=Ut;B.tokensToFunction=jt;B.tokensToRegExp=kt;var S=typeof document!="undefined",m=typeof window!="undefined",Y=typeof history!="undefined",It=typeof Ct!="undefined",le=S&&document.ontouchstart?"touchstart":"click",E=m&&!!(window.history.location||window.location);function u(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}u.prototype.configure=function(e){var t=e||{};this._window=t.window||m&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&m,this._click=t.click!==!1&&S,this._hashbang=!!t.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):m&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(le,this.clickHandler,!1):S&&n.document.removeEventListener(le,this.clickHandler,!1),this._hashbang&&m&&!Y?n.addEventListener("hashchange",this._onpopstate,!1):m&&n.removeEventListener("hashchange",this._onpopstate,!1)};u.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};u.prototype._getBase=function(){var e=this._base;if(e)return e;var t=m&&this._window&&this._window.location;return m&&this._hashbang&&t&&t.protocol==="file:"&&(e=t.pathname),e};u.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};u.prototype.start=function(e){var t=e||{};if(this.configure(t),t.dispatch!==!1){this._running=!0;var n;if(E){var r=this._window,i=r.location;this._hashbang&&~i.hash.indexOf("#!")?n=i.hash.substr(2)+i.search:this._hashbang?n=i.search+i.hash:n=i.pathname+i.search+i.hash}this.replace(n,null,!0,t.dispatch)}};u.prototype.stop=function(){if(!!this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(le,this.clickHandler,!1),m&&e.removeEventListener("popstate",this._onpopstate,!1),m&&e.removeEventListener("hashchange",this._onpopstate,!1)}};u.prototype.show=function(e,t,n,r){var i=new D(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,n!==!1&&this.dispatch(i,a),i.handled!==!1&&r!==!1&&i.pushState(),i};u.prototype.back=function(e,t){var n=this;if(this.len>0){var r=this._window;Y&&r.history.back(),this.len--}else setTimeout(e?function(){n.show(e,t)}:function(){n.show(n._getBase(),t)})};u.prototype.redirect=function(e,t){var n=this;typeof e=="string"&&typeof t=="string"&&ee.call(this,e,function(r){setTimeout(function(){n.replace(t)},0)}),typeof e=="string"&&typeof t=="undefined"&&setTimeout(function(){n.replace(e)},0)};u.prototype.replace=function(e,t,n,r){var i=new D(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),r!==!1&&this.dispatch(i,a),i};u.prototype.dispatch=function(e,t){var n=0,r=0,i=this;function a(){var o=i.exits[r++];if(!o)return c();o(t,a)}function c(){var o=i.callbacks[n++];if(e.path!==i.current){e.handled=!1;return}if(!o)return Ht.call(i,e);o(e,c)}t?a():c()};u.prototype.exit=function(e,t){if(typeof e=="function")return this.exit("*",e);for(var n=new F(e,null,this),r=1;r<arguments.length;++r)this.exits.push(n.middleware(arguments[r]))};u.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n){for(var r=0;r<n.length;r++)if(!!n[r].nodeName&&n[r].nodeName.toUpperCase()==="A"&&!!n[r].href){t=n[r];break}}for(;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!=="A")){var i=typeof t.href=="object"&&t.href.constructor.name==="SVGAnimatedString";if(!(t.hasAttribute("download")||t.getAttribute("rel")==="external")){var a=t.getAttribute("href");if(!(!this._hashbang&&this._samePath(t)&&(t.hash||a==="#"))&&!(a&&a.indexOf("mailto:")>-1)&&!(i?t.target.baseVal:t.target)&&!(!i&&!this.sameOrigin(t.href))){var c=i?t.href.baseVal:t.pathname+t.search+(t.hash||"");c=c[0]!=="/"?"/"+c:c,It&&c.match(/^\/[a-zA-Z]:\//)&&(c=c.replace(/^\/[a-zA-Z]:\//,"/"));var o=c,s=this._getBase();c.indexOf(s)===0&&(c=c.substr(s.length)),this._hashbang&&(c=c.replace("#!","")),!(s&&o===c&&(!E||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(o))}}}}};u.prototype._onpopstate=function(){var e=!1;return m?(S&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(n){if(!!e){var r=this;if(n.state){var i=n.state.path;r.replace(i,n.state)}else if(E){var a=r._window.location;r.show(a.pathname+a.search+a.hash,void 0,void 0,!1)}}}):function(){}}();u.prototype._which=function(e){return e=e||m&&this._window.event,e.which==null?e.button:e.which};u.prototype._toURL=function(e){var t=this._window;if(typeof URL=="function"&&E)return new URL(e,t.location.toString());if(S){var n=t.document.createElement("a");return n.href=e,n}};u.prototype.sameOrigin=function(e){if(!e||!E)return!1;var t=this._toURL(e),n=this._window,r=n.location;return r.protocol===t.protocol&&r.hostname===t.hostname&&(r.port===t.port||r.port===""&&(t.port==80||t.port==443))};u.prototype._samePath=function(e){if(!E)return!1;var t=this._window,n=t.location;return e.pathname===n.pathname&&e.search===n.search};u.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function je(){var e=new u;function t(){return ee.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=je,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(n){e.len=n}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(n){e.current=n}}),t.Context=D,t.Route=F,t}function ee(e,t){if(typeof e=="function")return ee.call(this,"*",e);if(typeof t=="function")for(var n=new F(e,null,this),r=1;r<arguments.length;++r)this.callbacks.push(n.middleware(arguments[r]));else typeof e=="string"?this[typeof t=="string"?"redirect":"show"](e,t):this.start(e)}function Ht(e){if(!e.handled){var t,n=this,r=n._window;n._hashbang?t=E&&this._getBase()+r.location.hash.replace("#!",""):t=E&&r.location.pathname+r.location.search,t!==e.canonicalPath&&(n.stop(),e.handled=!1,E&&(r.location.href=e.canonicalPath))}}function qt(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function D(e,t,n){var r=this.page=n||ee,i=r._window,a=r._hashbang,c=r._getBase();e[0]==="/"&&e.indexOf(c)!==0&&(e=c+(a?"#!":"")+e);var o=e.indexOf("?");this.canonicalPath=e;var s=new RegExp("^"+qt(c));if(this.path=e.replace(s,"")||"/",a&&(this.path=this.path.replace("#!","")||"/"),this.title=S&&i.document.title,this.state=t||{},this.state.path=e,this.querystring=~o?r._decodeURLEncodedURIComponent(e.slice(o+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~o?e.slice(0,o):e),this.params={},this.hash="",!a){if(!~this.path.indexOf("#"))return;var l=this.path.split("#");this.path=this.pathname=l[0],this.hash=r._decodeURLEncodedURIComponent(l[1])||"",this.querystring=this.querystring.split("#")[0]}}D.prototype.pushState=function(){var e=this.page,t=e._window,n=e._hashbang;e.len++,Y&&t.history.pushState(this.state,this.title,n&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};D.prototype.save=function(){var e=this.page;Y&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function F(e,t,n){var r=this.page=n||fe,i=t||{};i.strict=i.strict||r._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=B(this.path,this.keys=[],i)}F.prototype.middleware=function(e){var t=this;return function(n,r){if(t.match(n.path,n.params))return n.routePath=t.path,e(n,r);r()}};F.prototype.match=function(e,t){var n=this.keys,r=e.indexOf("?"),i=~r?e.slice(0,r):e,a=this.regexp.exec(decodeURIComponent(i));if(!a)return!1;delete t[0];for(var c=1,o=a.length;c<o;++c){var s=n[c-1],l=this.page._decodeURLEncodedURIComponent(a[c]);(l!==void 0||!hasOwnProperty.call(t,s.name))&&(t[s.name]=l)}return!0};var fe=je(),ke=fe,Bt=fe;ke.default=Bt;var V=ke;function Dt(e){let t;return{c(){t=p("header"),t.innerHTML=`<div class="flex-initial flex items-center space-x-3"><img class="w-8" src="./logo.png" alt=""/> 
        <span class="text-xl tracking-widest">Solr-Vue</span></div> 
    <div class="flex items-center justify-center"><div class="flex space-x-4"><a href="/" class="text-blue-600 hover:underline px-3 py-2 cursor-pointer">Dashboard</a> 
            <a href="/collections" class="text-blue-600 hover:underline px-3 py-2 cursor-pointer">Collections</a> 
            <span class="text-blue-600 hover:underline px-3 py-2 cursor-pointer">Logout</span></div></div>`,b(t,"class","header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow")},m(n,r){g(n,t,r)},p:h,i:h,o:h,d(n){n&&d(t)}}}var Pe=class extends v{constructor(t){super();w(this,t,null,Dt,_,{})}},Ae=Pe;function Se(e){let t,n;return{c(){t=p("div"),n=K(e[1])},m(r,i){g(r,t,i),y(t,n)},p(r,i){i&2&&te(n,r[1])},d(r){r&&d(t)}}}function Ft(e){let t,n,r,i,a=(e[0]||"Not Found")+"",c,o=e[1]&&Se(e);return{c(){t=p("div"),n=p("div"),o&&o.c(),r=M(),i=p("div"),c=K(a),b(i,"class","pl-3"),b(n,"class","flex items-center divide-x divide-gray-400 space-x-3 select-none text-lg text-gray-500"),b(t,"class","flex h-full w-full items-center justify-center")},m(s,l){g(s,t,l),y(t,n),o&&o.m(n,null),y(n,r),y(n,i),y(i,c)},p(s,[l]){s[1]?o?o.p(s,l):(o=Se(s),o.c(),o.m(n,r)):o&&(o.d(1),o=null),l&1&&a!==(a=(s[0]||"Not Found")+"")&&te(c,a)},i:h,o:h,d(s){s&&d(t),o&&o.d()}}}function Vt(e,t,n){let{message:r}=t,{stausCode:i}=t;return e.$$set=a=>{"message"in a&&n(0,r=a.message),"stausCode"in a&&n(1,i=a.stausCode)},[r,i]}var Oe=class extends v{constructor(t){super();w(this,t,Vt,Ft,_,{message:0,stausCode:1})}},Ne=Oe;function Gt(e){let t;return{c(){t=p("section"),t.textContent="dashboard"},m(n,r){g(n,t,r)},p:h,i:h,o:h,d(n){n&&d(t)}}}var Ie=class extends v{constructor(t){super();w(this,t,null,Gt,_,{})}},He=Ie;function Kt(e){let t;return{c(){t=p("section"),t.textContent="COLLECTIONS"},m(n,r){g(n,t,r)},p:h,i:h,o:h,d(n){n&&d(t)}}}var qe=class extends v{constructor(t){super();w(this,t,null,Kt,_,{})}},Be=qe;function Mt(e){let t,n,r,i,a,c;n=new Ae({});var o=e[0];function s(l){return{props:{params:l[1]}}}return o&&(a=new o(s(e))),{c(){t=p("section"),X(n.$$.fragment),r=M(),i=p("section"),a&&X(a.$$.fragment),b(i,"class","flex-1 p-3"),b(t,"class","flex flex-col w-full h-full bg-gray-100")},m(l,f){g(l,t,f),H(n,t,null),y(t,r),y(t,i),a&&H(a,i,null),c=!0},p(l,[f]){if(o!==(o=l[0])){if(a){_e();let C=a;Z(C.$$.fragment,1,0,()=>{q(C,1)}),we()}o?(a=new o(s(l)),X(a.$$.fragment),I(a.$$.fragment,1),H(a,i,null)):a=null}},i(l){c||(I(n.$$.fragment,l),a&&I(a.$$.fragment,l),c=!0)},o(l){Z(n.$$.fragment,l),a&&Z(a.$$.fragment,l),c=!1},d(l){l&&d(t),q(n),a&&q(a)}}}function zt(e,t,n){let r,i;return V("/",()=>n(0,r=He)),V("/collections",()=>n(0,r=Be)),V("*",Ne),V.start({hashbang:!0}),[r,i]}var De=class extends v{constructor(t){super();w(this,t,zt,Mt,_,{})}},Fe=De;var Qt=new Fe({target:document.getElementById("app")}),Wt=Qt;export{Wt as default};