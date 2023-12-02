<script>
    import { twoDatesToRead } from "$lib/utils";
    import  FaArrowLeft from "svelte-icons/fa/FaArrowLeft.svelte";
    import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";

    /**
     * @type {Date}
     */
     export let monday;
    /**
     * @type {Date}
     */
     export let sunday;

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

<div class="calendar-header">
    <div class="calendar-header-left">
        <a href="/">Jour</a>
    </div>
    <div class="calendar-title">
        <span>{dateString}</span>
    </div>
    <div class="calendar-header-right">
        <a href={prevMondayUrl}><FaArrowLeft/></a>
        <a href={nextMondayUrl}><FaArrowRight/></a>
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
        width: 1em;
        color: black;
        margin: 5px;
    }
</style>
