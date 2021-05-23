<script>
    import router from 'page';
    import Header from '@components/Header.svelte';
    import ErrorPage from '@components/Error.svelte';
    import DasboardPage from '@src/pages/dashboard/index.svelte';
    import CollectionsPage from '@src/pages/collections/index.svelte';

    // Routing Variables
    let page;
    let params;

    // Set up the pages to watch for
    router('/', () => (page = DasboardPage));
    router('/collections', () => (page = CollectionsPage));
    // router(
    //     '/blog/:id',
    //     (ctx, next) => {
    //         params = ctx.params;
    //         next();
    //     },
    //     () => (page = SingleBlog),
    // );
    router('*', ErrorPage);

    // Set up the router to start and actively watch for changes
    router.start({
        hashbang: true,
    });

</script>

<section class="flex flex-col w-full h-full bg-gray-100">
    <Header />
    <section class="flex-1 p-3">
        <svelte:component this={page} {params} />
    </section>
</section>
