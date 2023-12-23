<script>
    import DayHeader from "./DayHeader.svelte";
    import TableHead from "./TableHead.svelte";

    export let day;
    export let events;
    export let categories;

</script>
<DayHeader></DayHeader>

<table>
    <thead>
        <tr>
            <th>Today</th>
        </tr>
    </thead>
    <tbody>
        {#each events as event}
        <tr>
            <td>
                {event.event.name}
            </td>
        </tr>
        {/each}
    </tbody>
</table>
