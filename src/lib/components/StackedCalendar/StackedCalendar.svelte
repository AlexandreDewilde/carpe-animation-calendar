<script>
    import Events from "./Events.svelte";
    import Header from "./Header.svelte";

    import TableHead from "./TableHead.svelte";
    /**
        * @type {Date}
    */
    export let monday;
    /**
        * @type {Date}
    */
    export let sunday;
    export let events;
</script>

<div class="calendar">
    <Header monday={monday} sunday={sunday}/>
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