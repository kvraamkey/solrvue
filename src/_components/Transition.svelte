<!-- Transition.svelte -->
<script>
    import { router } from 'tinro';
    import { fade } from 'svelte/transition';
</script>

{#key $router.path}
    <section class="flex-1 flex flex-col p-3 overflow-hidden" in:fade={{ duration: 150 }}>
        <slot />
    </section>
{/key}
