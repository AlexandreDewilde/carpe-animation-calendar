<script>
    import { dateToStringHours } from '$lib/utils';
    import { onMount } from 'svelte';
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    /**
     * @type {any}
     */
     export let event;
     /**
     * @type {any}
     */
     let eventDiv;

     onMount(() => {
        tippy(eventDiv, {
            placement: "right",
            allowHTML: true,
            content: `${event.event.name}<br>${event.event.place}<br>${event.event.category.name}`,
        });
     });
</script>

<a href="/">
    <div class="event" bind:this={eventDiv} style="background-color:{event.event.category.backgroundColor};color:{event.event.category.color}">
        <span class="event-title">{event.event.name}</span>
        <span class="event-place">{event.event.place}</span>
        <span class="event-hour">{dateToStringHours(event.start)} - {dateToStringHours(event.end)}</span>
        <!-- {#each event.category as category} -->
            <span class="event-category">{event.event.category.name}</span>
        <!-- {/each} -->
    </div>
</a>

<style>
    .event {
        display: flex;
        row-gap: 5px;
        box-sizing: border-box;
        flex-direction: column;
        background-color: #5E81AC;
        color: #E5E9F0;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid white;
        width: 100%;
    }
    .event-title {
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
</style>