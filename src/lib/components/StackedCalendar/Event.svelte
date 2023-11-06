<script>
    import { onMount } from 'svelte';
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    /**
     * @type {{ name: string; place: string; category: string[]; start: any; end: any; }}
     */
     export let event;

     /**
     * @type {any}
     */
     let eventDiv ;

     onMount(() => {
        tippy(eventDiv, {
            placement: "right",
            allowHTML: true,
            content: `${event.name}<br>${event.place}<br>${event.category}`,
        });
     });
</script>

<div class="event" bind:this={eventDiv}>
    <a href="#">
        <span class="event-title">{event.name}</span>
        <span class="event-place">{event.place}</span>
        {#each event.category as category}
            <span class="even-category">{category}</span>
        {/each}
        <span class="event-hour">{event.start}h - {event.end}h</span>
    </a>
</div>

<style>
    .event {
        display: flex;
        flex-direction: column;
        background-color: #5E81AC;
        color: #E5E9F0;
        padding: 10px;
        border-radius: 5px;
        border: 2px solid white;
    }
    .event-title {
        font-weight: bold;
    }
    .event-place {
        font-style: italic;
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