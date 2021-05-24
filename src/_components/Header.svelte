<script>
    import store from '@src/_store';
    import { toCamelCase } from '@src/_utils';
    function navigation(e) {
        let comp = e.target.dataset.url;
        window.history.replaceState(null, null, `?p=${comp}`);
        store.update((self) => {
            self.activePage = toCamelCase(comp);
            return self;
        });
    }

    function logout() {
        window.history.replaceState(null, null, ``);
        sessionStorage.clear();
        store.update((self) => {
            self.activePage = toCamelCase('Dashboard');
            self.isConnected = false;
            return self;
        });
    }

</script>

<header class="header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow">
    <div class="flex-initial flex items-center space-x-3">
        <img class="w-8" src="./logo.png" alt="" />
        <span class="text-xl tracking-widest">Solr-Vue</span>
    </div>
    <div class="flex items-center">
        <span class="relative inline-flex">
            <span class="inline-flex tracking-wider items-center px-3 py-1 font-medium text-green-800"> http://127.0.0.1:8080/solr </span>
            <span class="flex absolute h-3 w-3 -top-0.5 right-0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
        </span>
        <!-- <span class="px-2 text-gray-400 tracking-wider font-norma">http://127.0.0.1:8080/solr</span> -->
    </div>
    <div class="flex items-center justify-center">
        <div class="flex space-x-4">
            <button on:click={navigation} data-url={'dashboard'} class="text-blue-600 hover:underline px-3 py-2 cursor-pointer">Dashboard</button>
            <button on:click={navigation} data-url={'collections'} class="text-blue-600 hover:underline px-3 py-2 cursor-pointer">Collections</button>
            <span on:click={logout} class="text-blue-600 hover:underline px-3 py-2 cursor-pointer">Logout</span>
        </div>
    </div>
</header>
