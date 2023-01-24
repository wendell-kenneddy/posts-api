import { PostsRepository } from '@/repositories/PostsRepository';
import { Request, Response } from 'express';
import { CreatePostService } from '../services/CreatePostService';

export class CreatePostController {
  constructor(private readonly postsRepository: PostsRepository) {}

  handle = async (req: Request, res: Response) => {
    const data = req.body;
    const createPostService = new CreatePostService(this.postsRepository);
    await createPostService.execute(data);
    res.json({ success: true });
  };
}
