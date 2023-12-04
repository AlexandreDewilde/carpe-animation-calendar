import prisma from "$lib/prisma";

/**
 * @param {Date} monday
 * @param {Date} sunday
 */
export async function getEvents(monday, sunday) {
    return prisma.eventDate.findMany({
        select: {
            id: true,
            start: true,
            end: true,
            event: {
                include: {
                    category: true,
                }
            }
        },
        where: {
            start: {
                gte: monday,
                lte: sunday,
            },
        },
    });
}