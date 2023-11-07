<script>

    /**
     * @type {string[]}
     */
     export let days;
</script>

<div class="stacked-calendar-row calendar-head">
    {#each days as day}
        <div class="stacked-calendar-col calendar-col-head">
            <span class="calendar-day">{day}</span>
        </div>
    {/each}
</div>

<style>
    .calendar-col-head {
        border-top: 1px solid gray;
        padding: 5px;
        box-sizing: border-box;
        align-items: center;
    }
    .calendar-day {
        font-weight: bold;
    }
</style>
