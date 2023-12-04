<script>
    import  FaArrowLeft from "svelte-icons/fa/FaArrowLeft.svelte";
    import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";

    /**
     * @type {string}
     */
    export let title;

    /**
     * @type {string}
     */
    export let prevUrl;
    /**
     * @type {string}
     */
    export let nextUrl;

</script>

<div class="calendar-header">
    <div class="calendar-header-left">
        <a href="/addEvent">Ajouter un événement</a>
    </div>
    <div class="calendar-title">
        <span>{title}</span>
    </div>
    <div class="calendar-header-right">
        <div class="header-button">
            <a href="/">Mois</a>
        </div>
        <div class="header-button">
            <a href="/">Aujourd'hui</a>
        </div>
        <div class="arrows">
            <a href={prevUrl}><FaArrowLeft/></a>
            <a href={nextUrl}><FaArrowRight/></a>
        </div>
    </div>
</div>

<style>
    .calendar-header {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .calendar-title {
        display: flex;
        font-size: 2em;
        padding: 10px;
    }
    .calendar-header-right {
        display: flex;
        align-items: center;
    }
    .arrows {
        display: flex;
    }
    a {
        text-decoration: none;
        width: 1em;
        color: black;
        margin: 5px;
    }
</style>
