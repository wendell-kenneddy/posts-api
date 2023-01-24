import { CommentsRepository } from '@/repositories/CommentsRepository';
import { validateUUID } from '@/utils/validateUUID';

export class GetCommentsByUserAndPostService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async execute(userId: string, postId: string) {
    validateUUID(userId);
    validateUUID(postId);

    const comments = await this.commentsRepository.getCommentsByUserAndPost(
      userId,
      postId
    );
    return comments;
  }
}
