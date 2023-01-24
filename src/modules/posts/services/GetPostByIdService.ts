import { PostsRepository } from '@/repositories/PostsRepository';
import { validateUUID } from '@/utils/validateUUID';

export class GetPostByIdService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async execute(id: string) {
    validateUUID(id);
    const post = await this.postsRepository.getPostById(id);
    return post;
  }
}
