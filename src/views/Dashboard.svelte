<script>
    import { onMount } from 'svelte';
    import { checkAuth } from '@utils';
    import Error from '@components/Error.svelte';

    onMount(async () => {
        checkAuth();
    });

</script>

<section class="flex h-full">
    <Error message="Coming Soon" />
</section>
