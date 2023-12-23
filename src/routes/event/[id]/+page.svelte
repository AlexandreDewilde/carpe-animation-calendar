<script>
    import { dateToStringHours, toLocaleDateString } from '$lib/utils';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.event.name}</title>
	<meta name="évènement" content="{data.event.name}" />
</svelte:head>

<section>
	<img src="{data.event.imgUrl}"/>
	<h1>{data.event.name}</h1>
	<h2>{data.event.organizer}</h2>
	<h3>{data.event.price}€</h3>
	<h3>Lieu: {data.event.place}</h3>
	<p>{data.event.category.name}</p>
	<p>{data.event.description}</p>

	<ul>
		{#each data.event.dates as eventDate}
			<li>
				{toLocaleDateString(eventDate.start)} - {dateToStringHours(eventDate.end)}
			</li>
		{/each}
	</ul>
</section>

<style>
	
</style>