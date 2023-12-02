<script>
    import Event from "./Event.svelte";
    import { eventsToByDayList } from "$lib/utils";
    /**
     * @type {any}
     */
     export let events;

    $: eventsList = eventsToByDayList(events);
</script>

<tr>
    {#each eventsList as day}
        <td>
            <div class="stacked-calendar-col">
                {#each day as event}
                    <Event event={event}/>
                {/each}
            </div>
        </td>
    {/each}
</tr>

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