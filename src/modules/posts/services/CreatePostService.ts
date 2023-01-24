import {
  PostCreateData,
  PostsRepository,
} from '@/repositories/PostsRepository';
import z from 'zod';

export class CreatePostService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async execute(data: PostCreateData) {
    const schema = z.object({
      title: z.string().min(5),
      content: z.string(),
      authorId: z.string().uuid(),
    });

    schema.parse(data);
    await this.postsRepository.create(data);
  }
}
