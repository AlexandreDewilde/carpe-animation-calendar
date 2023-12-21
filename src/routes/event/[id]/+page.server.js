import { getEvent } from '$lib/server/getEvent';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const id = Number(params.id)
	return {event: await getEvent(id)};
}