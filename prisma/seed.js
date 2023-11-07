import { PrismaClient } from "@prisma/client";
import data from "../results.json" assert { type: "json" };

const prisma = new PrismaClient();

async function main() {
    console.log("Start adding events");

    for (const event of data) {
        const price = event.infos.price === "Gratuit" ? 0 : parseFloat(event.infos.price);
        const new_event = await prisma.event.create({
            data: {
                id: parseInt(event.id),
                name: event.name,
                category: event.infos.category,
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
                    eventId: parseInt(event.id),
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