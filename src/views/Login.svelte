<script>
    // @ts-nocheck
    import store from '@store';
    import { router } from 'tinro';

    let solr_url = '';
    let solr_username = '';
    let solr_password = '';

    function navigation() {
        sessionStorage.setItem('sessionStarted', JSON.stringify(true));
        sessionStorage.setItem('credentials', JSON.stringify({ solr_url, solr_username, solr_password }));
        store.update((self) => {
            self.isConnected = true;
            return self;
        });
        router.goto('/collections');
    }

</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<section class="flex items-center justify-center h-full mx-auto" style={{ width: 500 }}>
    <div class="bg-white w-full shadow-xl rounded p-5">
        <img class="w-8" src="./logo.png" alt="" />
        <h1 class="text-2xl">Welcome to SolrVue</h1>
        <p class="text-xs">Apache Solr gui for the browser {solr_url}</p>
        <div class="space-y-5 mt-5" autocomplete="off">
            <input bind:value={solr_url} type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="url" />
            <div class="flex space-x-3">
                <input bind:value={solr_username} type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="username" />
                <input bind:value={solr_password} type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="password" />
            </div>
            <button on:click={navigation} disabled={!solr_url || !solr_username || !solr_password} class:selected={solr_url && solr_username && solr_password} class="cursor-not-allowed text-center w-full rounded-md bg-blue-400 text-white py-3">Connect</button>
        </div>
    </div>
</section>
