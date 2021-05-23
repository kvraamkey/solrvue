<script>
    export let message, stausCode;

</script>

<div class="flex h-full w-full items-center justify-center">
    <div class="flex items-center divide-x divide-gray-400 space-x-3 select-none text-lg text-gray-500">
        {#if stausCode}
            <div>{stausCode}</div>
        {/if}
        <div class="pl-3">{message || 'Not Found'}</div>
    </div>
</div>
