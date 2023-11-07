import { error } from '@sveltejs/kit';
import { getEvents } from "$lib/server/getEvents"
import { getMonday, getSunday } from "$lib/utils";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const [year_s, month_s, day_s] = params.yearMonthDay.split("-");
    const year = parseInt(year_s);
    const month = parseInt(month_s);
    const day = parseInt(day_s);
	if (isNaN(year) || isNaN(month) || isNaN(day)) {
        throw error(404, 'Not found');
	}
    const monday = getMonday(new Date(year, month-1, day));
    const sunday = getSunday(monday);
    const events = await getEvents(monday, sunday);
	return {monday: monday, sunday: sunday, events: events};
}