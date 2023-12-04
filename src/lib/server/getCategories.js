import prisma from "$lib/prisma";

export async function getCategories() {
    return prisma.category.findMany({
        select: {
            id: true,
            name: true,
            color: true,
            backgroundColor: true
        },
    });
}