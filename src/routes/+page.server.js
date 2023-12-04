import { getMonday, getSunday } from "$lib/utils";
import { getEvents } from "$lib/server/getEvents";
import { getCategories } from "$lib/server/getCategories";

/**
 *
 * @returns
 */
export async function load() {
    const monday = getMonday(new Date());
    const sunday = getSunday(monday);
    const events = await getEvents(monday, sunday);
	return {monday: monday, sunday: sunday, events: events, categories: await getCategories()};
}