import {
  CommentsRepository,
  CreateCommentData,
} from '@/repositories/CommentsRepository';
import { z } from 'zod';

export class CreateCommentService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async execute(data: CreateCommentData) {
    const schema = z.object({
      content: z.string().min(3),
      userId: z.string().uuid(),
      postId: z.string().uuid(),
    });
    schema.parse(data);

    await this.commentsRepository.create(data);
  }
}
