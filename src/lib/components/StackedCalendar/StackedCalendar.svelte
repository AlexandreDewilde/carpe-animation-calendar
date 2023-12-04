<script>
    import Events from "./Events.svelte";
    import Header from "./Header.svelte";

    import TableHead from "./TableHead.svelte";

    import { twoDatesToRead } from "$lib/utils";
    /**
        * @type {Date}
    */
    export let monday;
    /**
        * @type {Date}
    */
    export let sunday;
    export let events;

    $: dateString = twoDatesToRead(monday, sunday);
    $: nextMonday = new Date(monday);
    $: prevMonday = new Date(monday);
    let nextMondayUrl = "";
    let prevMondayUrl = "";
    $: {
        nextMonday.setDate(monday.getDate() + 7);
        nextMondayUrl = `/${nextMonday.getFullYear()}-${nextMonday.getMonth()+1}-${nextMonday.getDate()}`;
        prevMonday.setDate(monday.getDate() - 7);
        prevMondayUrl = `/${prevMonday.getFullYear()}-${prevMonday.getMonth()+1}-${prevMonday.getDate()}`;
    }
</script>

<div class="calendar">
    <Header title={dateString} prevUrl={prevMondayUrl} nextUrl={nextMondayUrl}/>
    <table>
        <thead>
            <TableHead/>
        </thead>
        <tbody>
            <Events events={events}/>
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