import { PostCreateData, PostsRepository } from '../PostsRepository';
import { prisma } from '../../lib/prisma';
import { validateUUID } from '../../utils/validateUUID';
import z from 'zod';

export class PrismaPostsRepository implements PostsRepository {
  async create(data: PostCreateData) {
    await prisma.post.create({ data });
  }

  async delete(id: string) {
    validateUUID(id);
    await prisma.post.delete({
      where: { id },
    });
  }

  async getPosts() {
    const posts = await prisma.post.findMany({
      include: { author: true },
    });
    return posts;
  }

  async getPostById(id: string) {
    validateUUID(id);

    const post = await prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
    return post;
  }

  async getPostsByAuthor(authorId: string) {
    validateUUID(authorId);

    const posts = await prisma.post.findMany({
      where: { authorId },
    });
    return posts;
  }

  async getPostsByTitle(title: string) {
    z.string().min(3).parse(title);

    const posts = await prisma.post.findMany({
      where: { title },
    });
    return posts;
  }
}
