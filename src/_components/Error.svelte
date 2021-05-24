<script>
    export let message, stausCode = undefined;

</script>

<div class="flex h-full w-full items-center justify-center">
    <div class="flex items-center divide-x divide-gray-400 space-x-3 select-none text-gray-400">
        {#if stausCode}
            <div>{stausCode}</div>
        {/if}
        <div class="pl-3 tracking-wider">{message || 'Not Found'}</div>
    </div>
</div>
