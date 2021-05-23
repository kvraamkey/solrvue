<script>
    import { url } from '@src/_store';
    import { toCamelCase } from '@src/_utils';
    function navigation(e) {
        let comp = e.target.dataset.url;
        window.history.replaceState(null, null, `?p=${comp}`);
        url.update((u) => toCamelCase(comp));
    }

</script>

<header class="header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow">
    <div class="flex-initial flex items-center space-x-3">
        <img class="w-8" src="./logo.png" alt="" />
        <span class="text-xl tracking-widest">Solr-Vue</span>
    </div>
    <div class="flex items-center justify-center">
        <div class="flex space-x-4">
            <button on:click={navigation} data-url={'dashboard'} class="text-blue-600 hover:underline px-3 py-2 cursor-pointer">Dashboard</button>
            <button on:click={navigation} data-url={"collections"} class="text-blue-600 hover:underline px-3 py-2 cursor-pointer">Collections</button>
            <span class="text-blue-600 hover:underline px-3 py-2 cursor-pointer">Logout</span>
        </div>
    </div>
</header>
