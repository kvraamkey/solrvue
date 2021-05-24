var qe=Object.defineProperty;var Ee=(t,e)=>{for(var n in e)qe(t,n,{get:e[n],enumerable:!0})};function x(){}function re(t){return t()}function le(){return Object.create(null)}function A(t){t.forEach(re)}function Ae(t){return typeof t=="function"}function k(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Me(t){return Object.keys(t).length===0}function Le(t,...e){if(t==null)return x;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Q(t,e,n){t.$$.on_destroy.push(Le(e,n))}function u(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function X(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function b(){return M(" ")}function Y(){return M("")}function N(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ne(t){return Array.from(t.childNodes)}function V(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}var W;function G(t){W=t}function De(){if(!W)throw new Error("Function called outside component initialization");return W}function B(t){De().$$.on_mount.push(t)}var J=[],ae=[],R=[],ie=[],He=Promise.resolve(),ee=!1;function Te(){ee||(ee=!0,He.then(ce))}function te(t){R.push(t)}var ne=!1,se=new Set;function ce(){if(!ne){ne=!0;do{for(let t=0;t<J.length;t+=1){let e=J[t];G(e),Oe(e.$$)}for(G(null),J.length=0;ae.length;)ae.pop()();for(let t=0;t<R.length;t+=1){let e=R[t];se.has(e)||(se.add(e),e())}R.length=0}while(J.length);for(;ie.length;)ie.pop()();ee=!1,ne=!1,se.clear()}}function Oe(t){if(t.fragment!==null){t.update(),A(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}var Z=new Set,D;function H(){D={r:0,c:[],p:D}}function T(){D.r||A(D.c),D=D.p}function y(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function C(t,e,n,s){if(t&&t.o){if(Z.has(t))return;Z.add(t),D.c.push(()=>{Z.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function L(t){t&&t.c()}function q(t,e,n,s){let{fragment:r,on_mount:l,on_destroy:i,after_update:o}=t.$$;r&&r.m(e,n),s||te(()=>{let a=l.map(re).filter(Ae);i?i.push(...a):A(a),t.$$.on_mount=[]}),o.forEach(te)}function E(t,e){let n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(t,e){t.$$.dirty[0]===-1&&(J.push(t),Te(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(t,e,n,s,r,l,i=[-1]){let o=W;G(t);let a=t.$$={fragment:null,ctx:null,props:l,update:x,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o?o.$$.context:e.context||[]),callbacks:le(),dirty:i,skip_bound:!1},p=!1;if(a.ctx=n?n(t,e.props||{},(d,c,...h)=>{let m=h.length?h[0]:c;return a.ctx&&r(a.ctx[d],a.ctx[d]=m)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](m),p&&Fe(t,d)),c}):[],a.update(),p=!0,A(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){let d=Ne(e.target);a.fragment&&a.fragment.l(d),d.forEach(v)}else a.fragment&&a.fragment.c();e.intro&&y(t.$$.fragment),q(t,e.target,e.anchor,e.customElement),ce()}G(o)}var j=class{$destroy(){E(this,1),this.$destroy=x}$on(e,n){let s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Me(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var I=[];function ue(t,e=x){let n,s=[];function r(o){if(k(t,o)&&(t=o,n)){let a=!I.length;for(let p=0;p<s.length;p+=1){let d=s[p];d[1](),I.push(d,t)}if(a){for(let p=0;p<I.length;p+=2)I[p][0](I[p+1]);I.length=0}}}function l(o){r(o(t))}function i(o,a=x){let p=[o,a];return s.push(p),s.length===1&&(n=e(r)||x),o(t),()=>{let d=s.indexOf(p);d!==-1&&s.splice(d,1),s.length===0&&(n(),n=null)}}return{set:r,update:l,subscribe:i}}var Ie=ue({activePage:"Dashboard",isConnected:!1}),O=Ie;var K={};Ee(K,{Collections:()=>we,Dashboard:()=>pe});function Ue(t){let e;return{c(){e=_("section"),e.textContent="dashboard"},m(n,s){w(n,e,s)},p:x,i:x,o:x,d(n){n&&v(e)}}}var fe=class extends j{constructor(e){super();S(this,e,null,Ue,k,{})}},de=fe;var pe=de;function me(t){let e,n;return{c(){e=_("div"),n=M(t[1])},m(s,r){w(s,e,r),u(e,n)},p(s,r){r&2&&V(n,s[1])},d(s){s&&v(e)}}}function ze(t){let e,n,s,r,l=(t[0]||"Not Found")+"",i,o=t[1]&&me(t);return{c(){e=_("div"),n=_("div"),o&&o.c(),s=b(),r=_("div"),i=M(l),f(r,"class","pl-3"),f(n,"class","flex items-center divide-x divide-gray-400 space-x-3 select-none text-gray-500"),f(e,"class","flex h-full w-full items-center justify-center")},m(a,p){w(a,e,p),u(e,n),o&&o.m(n,null),u(n,s),u(n,r),u(r,i)},p(a,[p]){a[1]?o?o.p(a,p):(o=me(a),o.c(),o.m(n,s)):o&&(o.d(1),o=null),p&1&&l!==(l=(a[0]||"Not Found")+"")&&V(i,l)},i:x,o:x,d(a){a&&v(e),o&&o.d()}}}function Be(t,e,n){let{message:s}=e,{stausCode:r}=e;return t.$$set=l=>{"message"in l&&n(0,s=l.message),"stausCode"in l&&n(1,r=l.stausCode)},[s,r]}var _e=class extends j{constructor(e){super();S(this,e,Be,ze,k,{message:0,stausCode:1})}},oe=_e;function he(t,e,n){let s=t.slice();return s[1]=e[n],s}function ge(t){let e,n;return e=new oe({props:{message:"there is no collection or alias"}}),{c(){L(e.$$.fragment)},m(s,r){q(e,s,r),n=!0},p:x,i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){C(e.$$.fragment,s),n=!1},d(s){E(e,s)}}}function xe(t){let e,n,s=t[1]+"",r,l;return{c(){e=_("div"),n=_("p"),r=M(s),l=b(),f(n,"class","text-gray-600"),f(e,"class","flex cursor-pointer hover:bg-gray-100 space-y-1 py-2 px-3 border-b")},m(i,o){w(i,e,o),u(e,n),u(n,r),u(e,l)},p:x,d(i){i&&v(e)}}}function Je(t){let e,n,s,r,l,i,o,a,p,d=t[0],c=[];for(let m=0;m<d.length;m+=1)c[m]=xe(he(t,d,m));let h=null;return d.length||(h=ge(t)),a=new oe({props:{message:"Please select a collection or alias"}}),{c(){e=_("section"),n=_("div"),s=_("div"),s.innerHTML=`<h2 class="text-xl ">Collections</h2> 
            <p class="text-sm text-gray-500">Personal details and application.</p>`,r=b(),l=_("div");for(let m=0;m<c.length;m+=1)c[m].c();h&&h.c(),i=b(),o=_("div"),L(a.$$.fragment),f(s,"class","flex-initial p-4 border-b bg-gray-50"),f(l,"class","flex-1 flex flex-col overflow-auto"),f(n,"class","flex-initial flex flex-col bg-white w-1/6 rounded-lg shadow-xl overflow-hidden"),f(o,"class","flex-1 flex flex-col bg-white rounded-lg shadow-xl"),f(e,"class","flex w-full h-full space-x-3")},m(m,$){w(m,e,$),u(e,n),u(n,s),u(n,r),u(n,l);for(let g=0;g<c.length;g+=1)c[g].m(l,null);h&&h.m(l,null),u(e,i),u(e,o),q(a,o,null),p=!0},p(m,[$]){if($&1){d=m[0];let g;for(g=0;g<d.length;g+=1){let P=he(m,d,g);c[g]?c[g].p(P,$):(c[g]=xe(P),c[g].c(),c[g].m(l,null))}for(;g<c.length;g+=1)c[g].d(1);c.length=d.length,!d.length&&h?h.p(m,$):d.length?h&&(H(),C(h,1,1,()=>{h=null}),T()):(h=ge(m),h.c(),y(h,1),h.m(l,null))}},i(m){p||(y(a.$$.fragment,m),p=!0)},o(m){C(a.$$.fragment,m),p=!1},d(m){m&&v(e),X(c,m),h&&h.d(),E(a)}}}function Ve(t){let e=[];return B(async()=>{try{let n=await fetch("http://10.64.4.29:8983/solr/azure_optix/select?q=*%3A*",{headers:{"Content-Type":"application/json",Authorization:"Basic c29scmFkbWluOnNvbHJAZG1pbkAyMDIx"}});console(await n.json())}catch(n){console.log(n)}}),[e]}var be=class extends j{constructor(e){super();S(this,e,Ve,Je,k,{})}},ve=be;var we=ve;var ye=t=>new URLSearchParams(window.location.search).get(t),U=t=>t.charAt(0).toUpperCase()+t.slice(1);function We(t){let e,n,s,r,l,i,o,a,p,d,c,h,m,$,g,P;return{c(){e=_("header"),n=_("div"),n.innerHTML=`<img class="w-8" src="./logo.png" alt=""/> 
        <span class="text-xl tracking-widest">Solr-Vue</span>`,s=b(),r=_("div"),r.innerHTML=`<span class="relative inline-flex"><span class="inline-flex tracking-wider items-center px-3 py-1 font-medium text-green-800">http://127.0.0.1:8080/solr</span> 
            <span class="flex absolute h-3 w-3 -top-0.5 right-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> 
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></span>`,l=b(),i=_("div"),o=_("div"),a=_("button"),a.textContent="Dashboard",d=b(),c=_("button"),c.textContent="Collections",m=b(),$=_("span"),$.textContent="Logout",f(n,"class","flex-initial flex items-center space-x-3"),f(r,"class","flex items-center"),f(a,"data-url",p="dashboard"),f(a,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),f(c,"data-url",h="collections"),f(c,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),f($,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),f(o,"class","flex space-x-4"),f(i,"class","flex items-center justify-center"),f(e,"class","header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow")},m(F,z){w(F,e,z),u(e,n),u(e,s),u(e,r),u(e,l),u(e,i),u(i,o),u(o,a),u(o,d),u(o,c),u(o,m),u(o,$),g||(P=[N(a,"click",t[0]),N(c,"click",t[0]),N($,"click",t[1])],g=!0)},p:x,i:x,o:x,d(F){F&&v(e),g=!1,A(P)}}}function Ge(t){function e(s){let r=s.target.dataset.url;window.history.replaceState(null,null,`?p=${r}`),O.update(l=>(l.activePage=U(r),l))}function n(){window.history.replaceState(null,null,""),sessionStorage.clear(),O.update(s=>(s.activePage=U("Dashboard"),s.isConnected=!1,s))}return[e,n]}var $e=class extends j{constructor(e){super();S(this,e,Ge,We,k,{})}},ke=$e;function Ce(t){let e,n;return e=new ke({}),{c(){L(e.$$.fragment)},m(s,r){q(e,s,r),n=!0},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){C(e.$$.fragment,s),n=!1},d(s){E(e,s)}}}function Re(t){let e,n,s;var r=K[t[0].activePage];function l(i){return{}}return r&&(e=new r(l(t))),{c(){e&&L(e.$$.fragment),n=Y()},m(i,o){e&&q(e,i,o),w(i,n,o),s=!0},p(i,o){if(r!==(r=K[i[0].activePage])){if(e){H();let a=e;C(a.$$.fragment,1,0,()=>{E(a,1)}),T()}r?(e=new r(l(i)),L(e.$$.fragment),y(e.$$.fragment,1),q(e,n.parentNode,n)):e=null}},i(i){s||(e&&y(e.$$.fragment,i),s=!0)},o(i){e&&C(e.$$.fragment,i),s=!1},d(i){i&&v(n),e&&E(e,i)}}}function Ze(t){let e,n,s,r,l,i,o,a,p,d,c,h,m,$,g,P,F;return{c(){e=_("section"),n=_("div"),s=_("img"),l=b(),i=_("h1"),i.textContent="Welcome to SolrVue",o=b(),a=_("p"),a.textContent="Apache Solr gui for the browser",p=b(),d=_("div"),c=_("input"),h=b(),m=_("div"),m.innerHTML=`<input type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="username"/> 
                            <input type="password" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="password"/>`,$=b(),g=_("button"),g.textContent="Connect",f(s,"class","w-8"),s.src!==(r="./logo.png")&&f(s,"src",r),f(s,"alt",""),f(i,"class","text-2xl"),f(a,"class","text-xs"),f(c,"type","text"),f(c,"class","w-full h-10 border border-gray-400 rounded px-3"),f(c,"placeholder","url"),f(m,"class","flex space-x-3"),f(g,"class","text-center w-full bg-blue-900 rounded-md text-white py-3"),f(d,"class","space-y-5 mt-5"),f(d,"autocomplete","off"),f(n,"class","bg-white w-1/3 shadow-xl rounded p-5"),f(e,"class","flex items-center justify-center h-full")},m(z,Pe){w(z,e,Pe),u(e,n),u(n,s),u(n,l),u(n,i),u(n,o),u(n,a),u(n,p),u(n,d),u(d,c),u(d,h),u(d,m),u(d,$),u(d,g),P||(F=N(g,"click",t[1]),P=!0)},p:x,i:x,o:x,d(z){z&&v(e),P=!1,F()}}}function Ke(t){let e,n,s,r,l,i,o=t[0].isConnected&&Ce(t),a=[Ze,Re],p=[];function d(c,h){return c[0].isConnected?1:0}return r=d(t,-1),l=p[r]=a[r](t),{c(){e=_("section"),o&&o.c(),n=b(),s=_("section"),l.c(),f(s,"class","flex-1 flex flex-col p-3 overflow-hidden"),f(e,"class","flex flex-col w-full h-full")},m(c,h){w(c,e,h),o&&o.m(e,null),u(e,n),u(e,s),p[r].m(s,null),i=!0},p(c,[h]){c[0].isConnected?o?h&1&&y(o,1):(o=Ce(c),o.c(),y(o,1),o.m(e,n)):o&&(H(),C(o,1,1,()=>{o=null}),T());let m=r;r=d(c,h),r===m?p[r].p(c,h):(H(),C(p[m],1,1,()=>{p[m]=null}),T(),l=p[r],l?l.p(c,h):(l=p[r]=a[r](c),l.c()),y(l,1),l.m(s,null))},i(c){i||(y(o),y(l),i=!0)},o(c){C(o),C(l),i=!1},d(c){c&&v(e),o&&o.d(),p[r].d()}}}function Qe(t,e,n){let s;Q(t,O,l=>n(0,s=l)),B(async()=>{let l=JSON.parse(sessionStorage.getItem("sessionStarted"))||!1,i=ye("p")||"dashboard";O.update(o=>(o.isConnected=l,o.activePage=U(i),o))});function r(){let l="collections";window.history.replaceState(null,null,`?p=${l}`),sessionStorage.setItem("sessionStarted",!0),O.update(i=>(i.activePage=U(l),i.isConnected=!0,i))}return[s,r]}var je=class extends j{constructor(e){super();S(this,e,Qe,Ke,k,{})}},Se=je;var Xe=new Se({target:document.getElementById("app")}),Ye=Xe;export{Ye as default};
