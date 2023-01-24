import { CommentsRepository } from '@/repositories/CommentsRepository';
import { Comment } from '@prisma/client';
import { Request, Response } from 'express';
import { GetCommentsService } from '../services/GetCommentsService';
import { GetCommentsByPostService } from '../services/GetCommentsByPostService';
import { GetCommentsByUserAndPostService } from '../services/GetCommentsByUserAndPostService';
import { GetCommentsByUserIdService } from '../services/GetCommentsByUserIdService';

export class GetCommentsController {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  handle = async (req: Request, res: Response) => {
    const { userId, postId } = req.query;
    let comments: Comment[] = [];

    if (userId && postId) {
      comments = await new GetCommentsByUserAndPostService(
        this.commentsRepository
      ).execute(String(userId), String(postId));
    } else if (userId && !postId) {
      comments = await new GetCommentsByUserIdService(
        this.commentsRepository
      ).execute(String(userId));
    } else if (!userId && postId) {
      comments = await new GetCommentsByPostService(
        this.commentsRepository
      ).execute(String(postId));
    } else {
      comments = await new GetCommentsService(
        this.commentsRepository
      ).execute();
    }

    res.json({ success: true, comments });
  };
}
