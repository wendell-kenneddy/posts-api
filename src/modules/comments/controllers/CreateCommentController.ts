import { CommentsRepository } from '@/repositories/CommentsRepository';
import { Request, Response } from 'express';
import { CreateCommentService } from '../services/CreateCommentService';

export class CreateCommentController {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  handle = async (req: Request, res: Response) => {
    const data = req.body;

    const createCommentService = new CreateCommentService(
      this.commentsRepository
    );
    await createCommentService.execute(data);
    res.json({
      success: true,
    });
  };
}
