import prisma from "$lib/prisma.js";

/**
 * @param {number} id
 */
export async function getEvent(id) {
    return await prisma.event.findUnique({
        select: {
            name: true,
            description: true,
            organizer: true,
            place: true,
            category: true,
            price: true,
            imgUrl: true,
            dates: true
        },
        where: {
            id: Number(id)
        }
    })
}