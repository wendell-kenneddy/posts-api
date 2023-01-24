import { Comment, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

const prisma = new PrismaClient();

const USERS = [
  {
    id: v4(),
    name: 'Radagon',
    email: 'radagon@erdtree.com',
  },
  {
    id: v4(),
    name: 'Marika',
    email: 'marika@erdtree.com',
  },
  {
    id: v4(),
    name: 'Maliketh',
    email: 'maliketh@farumazula.com',
  },
  {
    id: v4(),
    name: 'Malenia',
    email: 'malenia@farumazula.com',
  },
];
const POSTS = Array(8)
  .fill({})
  .map(() => ({
    id: v4(),
    title: faker.lorem.sentence(3),
    content: faker.lorem.sentence(6),
    authorId: USERS[Math.floor(Math.random() * 4)].id,
  }));
const COMMENTS = Array(12)
  .fill({})
  .map(() => ({
    id: v4(),
    content: faker.lorem.sentence(6),
    userId: USERS[Math.floor(Math.random() * 4)].id,
    postId: POSTS[Math.floor(Math.random() * 8)].id,
  }));

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.comment.deleteMany();

  for (let i = 0; i < USERS.length; i++) {
    await prisma.user.create({
      data: USERS[i],
    });
  }

  for (let i = 0; i < POSTS.length; i++) {
    await prisma.post.create({
      data: POSTS[i],
    });
  }

  for (let i = 0; i < COMMENTS.length; i++) {
    await prisma.comment.create({
      data: COMMENTS[i],
    });
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
