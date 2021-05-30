<script>
    import store from '@store';
    import { router, active } from 'tinro';

    const url = JSON.parse(sessionStorage.getItem('credentials'))
    function logout() {
        sessionStorage.clear();
        store.update((self) => {
            self.isConnected = false;
            return self;
        });
        router.goto('/login');
    }

</script>

<header class="header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow">
    <div class="flex-initial flex items-center space-x-3">
        <img class="w-8" src="./logo.png" alt="" />
        <span class="text-stroke-md text-transparent opacity-75 overflow-hidden text-stroke-red-600 text-2xl tracking-widest">SolrVue</span>
    </div>
    <div class="flex items-center">
        <span class="relative inline-flex">
            <span class="inline-flex tracking-wider items-center px-3 py-1 font-medium text-green-600"> {url?.solr_url} </span>
            <span class="flex absolute h-3 w-3 -top-0.5 right-0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
        </span>
    </div>
    <div class="flex items-center justify-center">
        <div class="flex">
            <a use:active data-exact data-active-class="underline" href="/" class="font-medium tracking-wider text-blue-600 hover:underline px-3 py-2 cursor-pointer">Dashboard</a>
            <a use:active data-exact data-active-class="underline" href="/collections" class="font-medium tracking-wider text-blue-600 hover:underline px-3 py-2 cursor-pointer">Collections</a>
            <span on:click={logout} class="font-medium tracking-wider text-blue-600 hover:underline px-3 py-2 cursor-pointer">Logout</span>
        </div>
    </div>
</header>
