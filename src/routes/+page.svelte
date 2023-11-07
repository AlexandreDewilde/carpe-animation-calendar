<script>
	import StackedCalendar from "$lib/components/StackedCalendar/StackedCalendar.svelte";
	export let data;
</script>

<svelte:head>
	<title>Calendrier</title>
	<meta name="description" content="Calendrier des événéments" />
</svelte:head>

<section>
	<StackedCalendar monday={data.monday} sunday={data.sunday} events={data.events}/>
</section>

<style>
	section {
		display: flex;
		flex: 1;
		width: 100%;
		height: 100%;
	}
</style>
