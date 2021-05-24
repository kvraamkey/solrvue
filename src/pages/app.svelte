<script>
    import { onMount } from 'svelte';
    import store from '@src/_store';
    import { Route, router } from 'tinro';
    import { checkAuth } from '@src/_utils';
    import Header from '@components/Header.svelte';
    import Error from '@components/Error.svelte';

    import LoginPage from './Login.svelte';
    import Dashboard from './Dashboard.svelte';
    import Collections from './Collections.svelte';
    import Transition from '@components/Transition.svelte';

    router.mode.hash();

    onMount(async () => {
        checkAuth();
    });

</script>

<section class="flex flex-col w-full h-full">
    {#if $store.isConnected}
        <Header />
    {/if}
    <Transition>
        <Route path="/login"><LoginPage /></Route>
        <Route path="/"><Dashboard /></Route>
        <Route path="/collections"><Collections /></Route>
        <Route fallback><Error message="No page found" /></Route>
    </Transition>
</section>
