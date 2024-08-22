// npm i ts-node
import { _ingredients, categories, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from 'bcrypt';

async function generate() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: 'user@test.kz',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin Admin',
                email: 'admin@test.ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ]
    })

    await prisma.category.createMany({
        data: categories
    })

    await prisma.ingredient.createMany({
        data: _ingredients,
    });

    await prisma.product.createMany({
        data: products,
    });

    
}

async function reset() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await reset();
        await generate();
    } catch (error) {
        console.error(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });