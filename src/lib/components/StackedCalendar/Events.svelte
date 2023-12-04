<script>
    import Event from "./Event.svelte";
    import { eventsToByDayList } from "$lib/utils";
    /**
     * @type {any}
     */
    export let events;

    /**
     * @type {Date}
     */
    export let start;

    /**
     * @type {Date}
     */
    export let end;

    export let categoriesShow;


    $: eventsList = eventsToByDayList(events, start, end);
    // console.log(eventsList[0][0]);
</script>

{#each eventsList as week}
    <tr>
        {#each week as day}
            <td>
                <div class="stacked-calendar-col">
                    {#each day as event}
                        {#if categoriesShow[event.event.categoryId]}
                            <Event event={event}/>
                        {/if}
                    {/each}
                </div>
            </td>
        {/each}
    </tr>
{/each}

<style>
    .stacked-calendar-col {
        min-width: 0;
        display: flex;
        flex-direction: column;
    }
    td {
        border: 1px solid #dddddd;
        text-align: left;
        border-collapse: collapse;
        padding: 2px;
        vertical-align: top;
    }
</style>