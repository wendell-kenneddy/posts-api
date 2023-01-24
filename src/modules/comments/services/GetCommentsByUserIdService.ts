import { CommentsRepository } from '@/repositories/CommentsRepository';
import { validateUUID } from '@/utils/validateUUID';

export class GetCommentsByUserIdService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async execute(userId: string) {
    validateUUID(userId);

    const posts = await this.commentsRepository.getCommentsByUser(userId);
    return posts;
  }
}
