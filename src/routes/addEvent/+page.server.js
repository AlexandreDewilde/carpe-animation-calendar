import {getCategories} from "$lib/server/getCategories.js";
import { fail } from '@sveltejs/kit';
import prisma from "$lib/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {categories: getCategories()};
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const name = data.get("event-name");
        if (name === "") {
            return fail(400, { name, missing: true });
        }

        const description = data.get("event-description");
        if (description === "") {
            return fail(400, { description, missing: true });
        }

        const place = data.get("event-place");
        if (place === "") {
            return fail(400, { place, missing: true });
        }

        const category = Number(data.get("event-category"));
        if (category === 0) {
            return fail(400, { category, missing: true });
        }

        const organizer = data.get("event-organizer");
        if (organizer === "") {
            return fail(400, { organizer, missing: true });
        }

        const email = data.get("event-email");
        if (email === "") {
            return fail(400, { email, missing: true });
        }

        const price = Number(data.get("event-price"));
        if (price < 0) {
            return fail(400, { price, invalid: true});
        }

        const start = new Date(data.get("event-start"));
        if (start === null) {
            return fail(400, { start, invalid: true});
        }

        const end = new Date(data.get("event-end"));
        if (end === null) {
            return fail(400, { end, invalid: true});
        }

        const event = await prisma.event.create({
            data: {
                name,
                description,
                organizer,
                price,
                place,
                imgUrl: "",
                category: {
                    connect: {id: category}
                },
                dates: {
                    create: [
                        {start, end}
                    ]
                }
            },
        });

        return { success: true };
    }
}