<script>
    import { onMount } from 'svelte';
    import Error from '../../_components/Error.svelte';
    let collections = [];

    onMount(async () => {
        try {
            const response = await fetch('http://10.64.4.29:8983/solr/azure_optix/select?q=*%3A*', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic c29scmFkbWluOnNvbHJAZG1pbkAyMDIx',
                },
            });
            console(await response.json());
        } catch (error) {
            console.log(error);
        }
    });

</script>

<section class="flex w-full h-full space-x-3">
    <div class="flex-initial flex flex-col bg-white w-1/6 rounded-lg shadow-xl overflow-hidden">
        <div class="flex-initial p-4 border-b bg-gray-50">
            <h2 class="text-xl ">Collections</h2>
            <p class="text-sm text-gray-500">Personal details and application.</p>
        </div>
        <div class="flex-1 flex flex-col overflow-auto">
            {#each collections as collection}
                <div class="flex cursor-pointer hover:bg-gray-100 space-y-1 py-2 px-3 border-b">
                    <p class="text-gray-600">{collection}</p>
                </div>
            {:else}
                <Error message="there is no collection or alias" />
            {/each}
        </div>
    </div>
    <div class="flex-1 flex flex-col bg-white rounded-lg shadow-xl">
        <Error message="Please select a collection or alias" />
    </div>
</section>
