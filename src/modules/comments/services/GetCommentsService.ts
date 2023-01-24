import { CommentsRepository } from '@/repositories/CommentsRepository';

export class GetCommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async execute() {
    const comments = await this.commentsRepository.getComments();
    return comments;
  }
}
