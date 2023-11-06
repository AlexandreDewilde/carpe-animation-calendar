<script>
    import Events from "./Events.svelte";
    import Header from "./Header.svelte";
    import { twoDatesToRead } from "$lib/utils";
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimance"];
    import {events} from "../data";

    const date = new Date();
    const idx = date.getDay();
    const monday = new Date();
    monday.setHours(0); monday.setMinutes(0); monday.setSeconds(0);
    monday.setDate(monday.getDate() - idx + 1);

    const sunday = new Date();
    sunday.setHours(23); sunday.setMinutes(59); sunday.setSeconds(59);
    sunday.setDate(monday.getDate() + 6);

    let dateString = twoDatesToRead(monday, sunday);
    function changeWeek(decrease=false) {
        const constant = decrease ? -1 : 1;
        monday.setDate(monday.getDate() + 7 * constant);
        sunday.setDate(sunday.getDate() + 7 * constant);
        dateString = twoDatesToRead(monday, sunday);
    }


</script>


<div class="container">
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
    <div class="calendar">
        <Header days={days}/>
        <Events events={events}/>
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
    .container {
        display: block;
        width: 100%;
        height: 100%;
        margin: 20px;
    }
    :global(.stacked-calendar-row) {
        display: flex;
        width: 100%;
        border-bottom: 1px solid gray;
    }
    :global(.stacked-calendar-col) {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-right: 1px solid gray;

    }
    :global(.stacked-calendar-row .stacked-calendar-col:first-child) {
        border-left: 1px solid gray;
    }
</style>