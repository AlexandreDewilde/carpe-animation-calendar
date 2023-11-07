<script>
    import { onMount } from 'svelte';
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    /**
     * @type {any}
     */
     export let event;
     console.log(event);
     /**
     * @type {any}
     */
     let eventDiv;

     onMount(() => {
        tippy(eventDiv, {
            placement: "right",
            allowHTML: true,
            content: `${event.event.name}<br>${event.event.place}<br>${event.event.category}`,
        });
     });
</script>

<a href="/">
    <div class="event" bind:this={eventDiv}>
        <span class="event-title">{event.event.name}</span>
        <span class="event-place">{event.event.place}</span>
        <!-- {#each event.category as category} -->
            <span class="event-category">{event.event.category}</span>
        <!-- {/each} -->
        <!-- <span class="event-hour">{event.start}h - {event.end}h</span> -->
    </div>
</a>

<style>
    .event {
        display: flex;
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
        content: "🕒";
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