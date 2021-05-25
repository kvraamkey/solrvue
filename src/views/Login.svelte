<script>
    import store from '@store';
    import { router } from 'tinro';

    function navigation() {
        sessionStorage.setItem('sessionStarted', JSON.stringify(true));
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
</section>
