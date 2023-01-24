import { PostsRepository } from '@/repositories/PostsRepository';

export class GetPostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async execute() {
    const posts = await this.postsRepository.getPosts();
    return posts;
  }
}
