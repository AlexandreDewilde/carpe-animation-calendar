<script>
    import { dateToStringHours } from '$lib/utils';
    import { onMount } from 'svelte';
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';

    export let event;
    let eventDiv;

    onMount(() => {
        tippy(eventDiv, {
            placement: "right",
            arrow: true,
            allowHTML: true,
            content: `<div class="tooltip-content">
                          <div class="tooltip-header">${event.event.name}</div>
                          <div class="tooltip-info">${event.event.place}</div>
                          <div class="tooltip-info">${event.event.category.name}</div>
                      </div>`,
        });
    });
</script>

<a href="/">
    <div class="event" bind:this={eventDiv} style="background-color:{event.event.category.backgroundColor};color:{event.event.category.color}">
        <span class="event-title">{event.event.name}</span>
        <span class="event-place">{event.event.place}</span>
        <span class="event-hour">{dateToStringHours(event.start)} - {dateToStringHours(event.end)}</span>
        {#if event.event.category}
            <span class="event-category">{event.event.category.name}</span>
        {/if}
    </div>
</a>

<style>
    .event {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background-color: #5E81AC;
        color: #E5E9F0;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid white;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .event-title {
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
    }

    .event-place {
        font-style: italic;
        font-size: 0.8em;
    }

    .event-category {
        font-size: 0.9em;
    }

    .event-hour::before {
        content: "🕒 ";
    }

    .event-hour {
        font-weight: bold;
        font-size: 0.8em;
    }

    a {
        color: #E5E9F0;
        text-decoration: none;
    }

    /* Tooltip styles */
    .tippy-box {
        background-color: #5E81AC;
        color: #E5E9F0;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        transition: opacity 0.2s;
    }

    .tippy-box[data-placement^='left'] .tippy-arrow::before {
        border-left-color: #5E81AC;
    }

    .tooltip-content {
        text-align: left;
    }

    .tooltip-header {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 5px;
    }

    .tooltip-info {
        font-size: 0.9em;
    }

    /* Tooltip animation */
    .tippy-box[data-state='hidden'] {
        opacity: 0;
        transform: scale(0.8);
    }

    .tippy-box[data-state='visible'] {
        opacity: 1;
        transform: scale(1);
    }
</style>
