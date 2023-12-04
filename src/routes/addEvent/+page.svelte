<script>
	import AddEvent from "$lib/components/AddEvent.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Calendrier</title>
	<meta name="description" content="Calendrier des événéments" />
</svelte:head>

<section>
	<AddEvent categories={data.categories}/>
</section>

<style>

</style>