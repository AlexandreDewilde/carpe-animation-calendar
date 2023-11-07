import { getEvents } from "$lib/server/getEvents";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    // TODO for security reasons should we check the params?
    const monday = new Date(url.searchParams.get("monday"));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23); sunday.setMinutes(59); sunday.setSeconds(59);
    return new Response(JSON.stringify(await getEvents(monday, sunday)));
}
