import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // const player1 = await prisma.player.upsert(
    //     {
    //         where: { id: 1 },
    //         update: {},
    //         create: {
    //             name: "viratKohli",
    //             isNational: true,
    //             joiningDate: new Date("2023-03-03"),
    //             role: ["captain", "batsman"],
    //             // teamId: 1,
    //             // Team: "India"
    //         }
    //     }
    // )

    // const player2 = await prisma.player.upsert(
    //     {
    //         where: { id: 5 },
    //         update: {},
    //         create: {
    //             name: "rahulDravid",
    //             isNational: true,
    //             joiningDate: new Date("2023-03-01"),
    //             role: ["baller", "batsman"],
    //             // teamId: 1
    //             // Team: "India"
    //         }
    //     }
    // )

    // const team1 = await prisma.team.upsert(
    //     {
    //         where: { id: 1 },
    //         update: {},
    //         create: {
    //             id: 1,
    //             name: "India",
    //             description: "best team",
    //             // members: [1, 2]
    //         }
    //     }
    // )

    // const team2 = await prisma.team.upsert(
    //     {
    //         where: { id: 2 },
    //         update: {},
    //         create: {
    //             id: 2,
    //             name: "Australia",
    //             description: "worst team",
    //             // members: []
    //         }
    //     }
    // )
    
    
    // console.log(team1, team2);

    const team1 = await prisma.team.upsert(
        {
            where: { id: 1 },
            update: {},
            create: {
                id: 1,
                name: "India",
                description: "best team",
                players: {
                create: [
                    {
                            name: "rahulDravid",
                            isNational: true,
                            joiningDate: new Date("2023-03-01"),
                            role: ["baller", "batsman"]
                    },
                    {
                        name: "viratKohli",
                        isNational: true,
                        joiningDate: new Date("2023-03-03"),
                        role: ["captain", "batsman"],
                    },
                ]
            }
        }
    }
    )

    const team2 = await prisma.team.upsert(
        {
            where: { id: 2 },
            update: {},
            create: {
                id: 2,
                name: "Australia",
                description: "worst team",
                players: {
                create: [
                    {
                            name: "samBateman",
                            isNational: true,
                            joiningDate: new Date("2023-03-01"),
                            role: ["baller", "batsman"]
                    },
                {
                        name: "andyWarhol",
                        isNational: true,
                        joiningDate: new Date("2023-03-03"),
                        role: ["captain", "batsman"],
                    },
                ]
            }
        }
    }
    )

    // const team1 = await prisma.team.upsert(
    //     {
    //         where: { id: 1 },
    //         update: {},
    //         create: {
    //             id: 1,
    //             name: "India",
    //             description: "best team",
    //             players: {
    //             create: 
    //                 {
    //                         name: "rahulDravid",
    //                         isNational: true,
    //                         joiningDate: new Date("2023-03-01"),
    //                         role: ["baller", "batsman"]
    //                 },
    //         }
    //     }
    // }
    // )

    console.log(team1, team2);
}


main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
