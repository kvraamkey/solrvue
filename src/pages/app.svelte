<script>
    import { onMount } from 'svelte';
    import store from '@src/_store';
    import * as Components from '@src/pages';
    import { getUrlParam, toCamelCase } from '@src/_utils';
    import Header from '@components/Header.svelte';
    onMount(async () => {
        const sessionStarted = JSON.parse(sessionStorage.getItem('sessionStarted')) || false;
        const activePage = getUrlParam('p') || 'dashboard'
        store.update((self) => {
            self.isConnected = sessionStarted;
            self.activePage = toCamelCase(activePage);
            return self;
        });
    });

    function navigation() {
        let comp = 'collections';
        window.history.replaceState(null, null, `?p=${comp}`);
        sessionStorage.setItem('sessionStarted', true);
        store.update((self) => {
            self.activePage = toCamelCase(comp);
            self.isConnected = true;
            return self;
        });
    }

</script>

<section class="flex flex-col w-full h-full bg-gray-100">
    {#if $store.isConnected}
        <Header />
    {/if}
    <!-- <pre>{JSON.stringify($store, null, 2)}</pre> -->
    <section class="flex-1 p-3 flex items-center justify-center">
        {#if !$store.isConnected}
            <div class="bg-white w-1/3 shadow-xl rounded p-5">
                <img class="w-8" src="./logo.png" alt="" />
                <h1 class="text-2xl">Welcome to SolrVue</h1>
                <p class="text-xs">Apache Solr gui for the browser</p>
                <div class="space-y-5 mt-5" autocomplete="off">
                    <input type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="url" />
                    <div class="flex space-x-3">
                        <input type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="username" />
                        <input type="password" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="password" />
                    </div>
                    <button on:click={navigation} class="text-center w-full bg-blue-900 rounded-md text-white py-3">Connect</button>
                </div>
            </div>
        {:else}
            <svelte:component this={Components[$store.activePage]} />
        {/if}
    </section>
</section>
