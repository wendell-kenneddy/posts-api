import { CommentsRepository } from '@/repositories/CommentsRepository';
import { validateUUID } from '@/utils/validateUUID';

export class DeleteCommentService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async execute(id: string) {
    validateUUID(id);

    await this.commentsRepository.delete(id);
  }
}
