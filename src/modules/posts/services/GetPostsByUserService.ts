import { PostsRepository } from '@/repositories/PostsRepository';
import { validateUUID } from '@/utils/validateUUID';

export class GetPostsByUserService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async execute(authorId: string) {
    validateUUID(authorId);
    const posts = await this.postsRepository.getPostsByAuthor(authorId);
    return posts;
  }
}
