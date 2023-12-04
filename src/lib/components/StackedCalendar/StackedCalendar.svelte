<script>
    import Events from "./Events.svelte";
    import Header from "./Header.svelte";

    import TableHead from "./TableHead.svelte";

    import { twoDatesToRead, getDateString, getPrevUrl, getNextUrl } from "$lib/utils";
    /**
        * @type {Date}
    */
    export let start;
    /**
        * @type {Date}
    */
    export let end;

    /**
     * @type {number}
     * 0 == day View
     * 1 == week view
     * 2 == month view
     */
    export let viewType;

    export let events;

    $: dateString = getDateString(start, end, viewType);
    $: nextMondayUrl = getNextUrl(start, end, viewType);
    $: prevMondayUrl = getPrevUrl(start, end, viewType);

</script>

<div class="calendar">
    <Header title={dateString} prevUrl={prevMondayUrl} nextUrl={nextMondayUrl}/>
    <table>
        <thead>
            <TableHead/>
        </thead>
        <tbody>
            <Events events={events} start={start} end={end}/>
        </tbody>
    </table>
</div>

<style>
    .calendar {
        display: block;
        width: 100%;
        height: 100%;
        margin: 20px;
    }
    table {
        border: 1px solid #ddd;
        table-layout:fixed;
        width:100%;
        border-collapse: collapse;

    }
</style>