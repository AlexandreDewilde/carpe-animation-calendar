<script>
    import { twoDatesToRead } from "$lib/utils";

    /**
     * @type {Date}
     */
     export let monday;
    /**
     * @type {Date}
     */
     export let sunday;

    let dateString = twoDatesToRead(monday, sunday);
    function changeWeek(decrease=false) {
        const constant = decrease ? -1 : 1;
        monday.setDate(monday.getDate() + 7 * constant);
        sunday.setDate(sunday.getDate() + 7 * constant);
        dateString = twoDatesToRead(monday, sunday);
    }
</script>

<div class="calendar-header">
    <div class="calendar-header-left">
        <a href="/">Jour</a>
    </div>
    <div class="calendar-title">
        <span>{dateString}</span>
    </div>
    <div class="calendar-header-right">
        <button on:click={() => changeWeek(true)}>⬅️</button>
        <button on:click={() => changeWeek(false)}>➡️</button>
    </div>
</div>

<style>
    .calendar-header {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .calendar-header-left {
        flex: auto;
    }
    .calendar-title {
        flex: auto;
        display: flex;
        justify-content: center;
        font-size: 2em;
        padding: 10px;
    }
    .calendar-header-right {
        flex: auto;
        display: flex;
        justify-content: right;
    }
    a {
        text-decoration: none;
    }
</style>
