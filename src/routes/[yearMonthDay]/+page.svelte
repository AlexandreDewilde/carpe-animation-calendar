<script>
	import StackedCalendar from "$lib/components/StackedCalendar/StackedCalendar.svelte";
	export let data;
</script>

<svelte:head>
	<title>Calendrier</title>
	<meta name="description" content="Calendrier des événéments" />
</svelte:head>

<section>
	<StackedCalendar start={data.monday} end={data.sunday} viewType={1} events={data.events}/>
</section>

<style>
	section {
		display: flex;
		flex: 1;
		width: 100%;
		height: 100%;
	}
</style>
