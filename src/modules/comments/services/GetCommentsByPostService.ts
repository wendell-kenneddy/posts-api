import { CommentsRepository } from '@/repositories/CommentsRepository';
import { validateUUID } from '@/utils/validateUUID';

export class GetCommentsByPostService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async execute(postId: string) {
    validateUUID(postId);

    const posts = await this.commentsRepository.getCommentsByPost(postId);
    return posts;
  }
}
