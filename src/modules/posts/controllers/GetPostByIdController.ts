import { PostsRepository } from '@/repositories/PostsRepository';
import { Request, Response } from 'express';
import { GetPostByIdService } from '../services/GetPostByIdService';

export class GetPostByIdController {
  constructor(private readonly postsRepository: PostsRepository) {}

  handle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const getPostByIdService = new GetPostByIdService(this.postsRepository);
    const post = await getPostByIdService.execute(id);
    res.json({ success: true, post });
  };
}
