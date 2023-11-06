<script>
    import Event from "./Event.svelte";
    /**
     * @type {any}
     */
     export let events;
</script>
<div class="stacked-calendar-row">
    {#each events as day}
        <div class="stacked-calendar-col">
            {#each day as event}
                <Event event={event}/>
            {/each}
        </div>
    {/each}
</div>