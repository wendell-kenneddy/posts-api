import { PostsRepository } from '@/repositories/PostsRepository';
import { Post } from '@prisma/client';
import { Request, Response } from 'express';
import { GetPostsByUserService } from '../services/GetPostsByUserService';
import { GetPostsService } from '../services/GetPostsService';

export class GetPostsController {
  constructor(private readonly postsRepository: PostsRepository) {}

  handle = async (req: Request, res: Response) => {
    const { authorId } = req.query;
    let posts: Post[] = [];

    if (authorId) {
      posts = await new GetPostsByUserService(this.postsRepository).execute(
        String(authorId)
      );
    } else {
      posts = await new GetPostsService(this.postsRepository).execute();
    }

    res.json({ success: true, posts });
  };
}
