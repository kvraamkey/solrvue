<script>
    import { onMount } from 'svelte';
    import { url } from '@src/_store';
    import * as Components from '@src/pages';
    import { getUrlParam, toCamelCase } from '@src/_utils';
    import Header from '@components/Header.svelte';
    onMount(async () => {
        url.update((u) => (getUrlParam('p') ? toCamelCase(getUrlParam('p')) : 'Dashboard'));
    });

</script>

<section class="flex flex-col w-full h-full bg-gray-100">
    <Header />
    <section class="flex-1 p-3">
        <svelte:component this={$url ? Components[$url] : Components['Dashboard']} />
    </section>
</section>
