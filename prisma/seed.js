import { PrismaClient } from "@prisma/client";
import data from "../results.json" assert { type: "json" };

const prisma = new PrismaClient();

async function main() {
    console.log("Start adding events");

    for (const event of data) {
        const price = event.infos.price === "Gratuit" ? 0 : parseFloat(event.infos.price);

        let category = await prisma.category.findFirst({
            where: {
                name: event.infos.category,
            },
        });

        if (!category) {
            category = await prisma.category.create({
                data: {
                    name: event.infos.category,
                    color: "black",
                    backgroundColor: "white",
                }
            });
        }

        const new_event = await prisma.event.create({
            data: {
                name: event.name,
                categoryId: category.id,
                description: event.description,
                organizer: event.infos.organizer,
                price: price,
                place: event.infos.place,
                imgUrl: event.img_url,
            }
        });
        for (const date of event.dates) {
            const new_date = await prisma.eventDate.create({
                data: {
                    start: new Date(date[0]),
                    end: new Date(date[1]),
                    eventId: new_event.id,
                }
            })
        }
    }
}

main().then(async e => {
    await prisma.$disconnect()
}).catch(async e => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
});