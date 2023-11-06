<script>
	import StackedCalendar from "$lib/components/StackedCalendar/StackedCalendar.svelte";
</script>

<svelte:head>
	<title>Calendrier</title>
	<meta name="description" content="Calendrier des événéments" />
</svelte:head>

<section>
	<StackedCalendar></StackedCalendar>
</section>

<style>
	section {
		display: flex;
		flex: 1;
		width: 100%;
		height: 100%;
	}
</style>
