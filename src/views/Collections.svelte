<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
    import { checkAuth, fetchApi } from '@/_utils';
    import Error from '@components/Error.svelte';
    import { router } from 'tinro';

    let collections = fetchApi('collections', 'listing');
    let collection = undefined;

    const columns = ['ID', 'Product', 'User', 'Price', 'Date', 'Status'];

    onMount(async () => {
        checkAuth();
        collection = router.location.query.set('c', active_collection);
    });

    const handleCollection = (active_collection) => {
        collection = active_collection;
        router.location.query.set('c', active_collection); //URL: /foo?name=alex
    };

</script>

<section class="flex w-full h-full space-x-3">
    <div class="flex-initial flex flex-col bg-white w-1/6 rounded-lg shadow-xl overflow-hidden">
        <div class="flex-initial p-4 border-b bg-gray-50">
            <h2 class="text-xl ">Collections</h2>
            <p class="text-sm text-gray-500">Personal details and application.</p>
        </div>
        <div class="flex-1 flex flex-col overflow-auto">
            {#await collections}
                <p>...loading</p>
            {:then collections}
                {#each collections.data as index}
                    <div on:click={() => handleCollection(index)} class:bg-gray-100={collection === index} class="flex cursor-pointer hover:bg-gray-100 space-y-1 py-2 px-3 border-b">
                        <p class="text-gray-600">{index}</p>
                    </div>
                {:else}
                    <Error message="there is no collection or alias" />
                {/each}
            {:catch error}
                <Error message={error.message} />
            {/await}
        </div>
    </div>
    <div class="flex-1 flex flex-col bg-white rounded-lg shadow-xl w-10/12">
        <header class="flex-initial bg-gray-50 flex items-center justify-between border-b py-2 px-3">
            <h2 class="sc-fzoLsD fYZyZu">Collection Name</h2>
            <div class="flex items-center justify-center space-x-3">
                <span class="cursor-pointer inline-flex items-center justify-center">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" color="#718096" stroke-linejoin="round" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                </span>
                <span class="cursor-pointer inline-flex items-center justify-center">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="#718096" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6 2.984V2h-.09c-.313 0-.616.062-.909.185a2.33 2.33 0 0 0-.775.53 2.23 2.23 0 0 0-.493.753v.001a3.542 3.542 0 0 0-.198.83v.002a6.08 6.08 0 0 0-.024.863c.012.29.018.58.018.869 0 .203-.04.393-.117.572v.001a1.504 1.504 0 0 1-.765.787 1.376 1.376 0 0 1-.558.115H2v.984h.09c.195 0 .38.04.556.121l.001.001c.178.078.329.184.455.318l.002.002c.13.13.233.285.307.465l.001.002c.078.18.117.368.117.566 0 .29-.006.58-.018.869-.012.296-.004.585.024.87v.001c.033.283.099.558.197.824v.001c.106.273.271.524.494.753.223.23.482.407.775.53.293.123.596.185.91.185H6v-.984h-.09c-.2 0-.387-.038-.563-.115a1.613 1.613 0 0 1-.457-.32 1.659 1.659 0 0 1-.309-.467c-.074-.18-.11-.37-.11-.573 0-.228.003-.453.011-.672.008-.228.008-.45 0-.665a4.639 4.639 0 0 0-.055-.64 2.682 2.682 0 0 0-.168-.609A2.284 2.284 0 0 0 3.522 8a2.284 2.284 0 0 0 .738-.955c.08-.192.135-.393.168-.602.033-.21.051-.423.055-.64.008-.22.008-.442 0-.666-.008-.224-.012-.45-.012-.678a1.47 1.47 0 0 1 .877-1.354 1.33 1.33 0 0 1 .563-.121H6zm4 10.032V14h.09c.313 0 .616-.062.909-.185.293-.123.552-.3.775-.53.223-.23.388-.48.493-.753v-.001c.1-.266.165-.543.198-.83v-.002c.028-.28.036-.567.024-.863-.012-.29-.018-.58-.018-.869 0-.203.04-.393.117-.572v-.001a1.502 1.502 0 0 1 .765-.787 1.38 1.38 0 0 1 .558-.115H14v-.984h-.09c-.196 0-.381-.04-.557-.121l-.001-.001a1.376 1.376 0 0 1-.455-.318l-.002-.002a1.415 1.415 0 0 1-.307-.465v-.002a1.405 1.405 0 0 1-.118-.566c0-.29.006-.58.018-.869a6.174 6.174 0 0 0-.024-.87v-.001a3.537 3.537 0 0 0-.197-.824v-.001a2.23 2.23 0 0 0-.494-.753 2.331 2.331 0 0 0-.775-.53 2.325 2.325 0 0 0-.91-.185H10v.984h.09c.2 0 .387.038.562.115.174.082.326.188.457.32.127.134.23.29.309.467.074.18.11.37.11.573 0 .228-.003.452-.011.672-.008.228-.008.45 0 .665.004.222.022.435.055.64.033.214.089.416.168.609a2.285 2.285 0 0 0 .738.955 2.285 2.285 0 0 0-.738.955 2.689 2.689 0 0 0-.168.602c-.033.21-.051.423-.055.64a9.15 9.15 0 0 0 0 .666c.008.224.012.45.012.678a1.471 1.471 0 0 1-.877 1.354 1.33 1.33 0 0 1-.563.121H10z"
                        />
                    </svg>
                </span>
                <span class="cursor-pointer inline-flex items-center justify-center">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="#718096" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L2.5 8.207l1.646 1.647a.5.5 0 00.708-.708l-2-2zm13-1a.5.5 0 00-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 000-.708z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M8 3a4.995 4.995 0 00-4.192 2.273.5.5 0 01-.837-.546A6 6 0 0114 8a.5.5 0 01-1.001 0 5 5 0 00-5-5zM2.5 7.5A.5.5 0 013 8a5 5 0 009.192 2.727.5.5 0 11.837.546A6 6 0 012 8a.5.5 0 01.501-.5z" clip-rule="evenodd" />
                    </svg>
                </span>
            </div>
        </header>
        <div class="flex-1 flex flex-col w-full h-full overflow-hidden">
            <section class="t-wr flex flex-col h-full w-full">
                <div class="t-h flex-shrink">
                    <div class="block relative">
                        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
                            </svg>
                        </span>
                        <input placeholder="Search" class="appearance-none border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div class="t-b flex-1 w-full overflow-auto">
                    <div class="table w-full">
                        <div class="table-header-group">
                            <div class="table-row">
                                <div class="table-cell sticky top-0 p-1 shadow shadow-dark-700 font-medium">Items</div>
                                <div class="table-cell sticky top-0 p-1 shadow shadow-dark-700 font-medium">Expenditure</div>
                            </div>
                        </div>
                        <div class="table-row-group">
                            <div class="table-row">
                                <div class="table-cell border-b p-1.5">Donuts</div>
                                <div class="table-cell border-b p-1.5">3,000</div>
                            </div>
                            <div class="table-row">
                                <div class="table-cell border-b p-1.5">Stationery</div>
                                <div class="table-cell border-b p-1.5">18,000</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="t-f flex-shrink bg-gray-100 p-2">
                    <div class="flex items-center justify-between">
                        <div class="table-cell text-emerald-600">Totals</div>
                        <div class="table-cell text-emerald-600">21,000</div>
                    </div>
                </div>
            </section>
        </div>
        <!-- <Error message="Please select a collection or alias" /> -->
    </div>
</section>
