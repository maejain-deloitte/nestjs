import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const player1 = await prisma.player.upsert(
        {
            where: { id: 1 },
            update: {},
            create: {
                name: "viratKohli",
                isNational: true,
                joiningDate: new Date("2023-03-03"),
                role: ["captain", "batsman"],
                // Team: "India"
            }
        }
    )

    const player2 = await prisma.player.upsert(
        {
            where: { id: 2 },
            update: {},
            create: {
                name: "rahulDravid",
                isNational: true,
                joiningDate: new Date("2023-03-01"),
                role: ["baller", "batsman"],
                // Team: "India"
            }
        }
    )

    console.log(player1, player2);
}


main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
