<script>
	import DayView from "$lib/components/StackedCalendar/DayView.svelte";
	import StackedCalendar from "$lib/components/StackedCalendar/StackedCalendar.svelte";
	export let data;
</script>

<svelte:head>
	<title>Calendrier</title>
	<meta name="description" content="Calendrier des événéments" />
</svelte:head>

<section class="large">
	<StackedCalendar start={data.monday} end={data.sunday} viewType={1} events={data.events} categories={data.categories}/>
</section>

<section class="small">
	<DayView/>
</section>

<style>
	section {
		display: flex;
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.small {
		display: none;
	}

	@media (max-width: 768px) {
    	.large { display: none; }
  	}
</style>
