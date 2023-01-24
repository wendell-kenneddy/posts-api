import { prisma } from '@/lib/prisma';
import { CommentsRepository, CreateCommentData } from '../CommentsRepository';

export class PrismaCommentsRepository implements CommentsRepository {
  async create(createCommentData: CreateCommentData) {
    await prisma.comment.create({ data: createCommentData });
  }

  async delete(id: string) {
    await prisma.comment.delete({ where: { id } });
  }

  async getComments() {
    const comments = await prisma.comment.findMany({});
    return comments;
  }

  async getCommentById(id: string) {
    const comment = await prisma.comment.findUnique({
      where: { id },
    });
    return comment;
  }

  async getCommentsByUser(userId: string) {
    const comments = await prisma.comment.findMany({
      where: { userId },
    });
    return comments;
  }

  async getCommentsByPost(postId: string) {
    const comments = await prisma.comment.findMany({
      where: { postId },
    });
    return comments;
  }

  async getCommentsByUserAndPost(userId: string, postId: string) {
    const comments = await prisma.comment.findMany({
      where: { userId, postId },
    });
    return comments;
  }
}
