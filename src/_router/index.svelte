<script>
    import { onMount } from 'svelte';
    import store from '@store';
    import { Route, router } from 'tinro';
    import { checkAuth } from '@utils';
    import Header from '@components/Header.svelte';
    import Error from '@components/Error.svelte';

    import LoginPage from '@views/Login.svelte';
    import Dashboard from '@views/Dashboard.svelte';
    import Collections from '@views/Collections.svelte';
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
