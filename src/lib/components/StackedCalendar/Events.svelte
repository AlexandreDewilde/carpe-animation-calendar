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

    $: eventsList = eventsToByDayList(events, start, end);
</script>

{#each eventsList as week}
    <tr>
        {#each week as day}
            <td>
                <div class="stacked-calendar-col">
                    {#each day as event}
                        <Event event={event}/>
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