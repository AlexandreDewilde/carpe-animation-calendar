import prisma from "$lib/prisma";

/**
 * @param {Date} monday
 * @param {Date} sunday
 */
export async function getEvents(monday, sunday) {
    return await prisma.eventDate.findMany({
        select: {
            id: true,
            start: true,
            end: true,
            event: true,
        },
        where: {
            start: {
                gte: monday,
                lte: sunday,
            },
        },
    });
}