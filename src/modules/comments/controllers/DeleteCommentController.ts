import { CommentsRepository } from '@/repositories/CommentsRepository';
import { Request, Response } from 'express';
import { DeleteCommentService } from '../services/DeleteCommentService';

export class DeleteCommentController {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  handle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleteCommentService = new DeleteCommentService(
      this.commentsRepository
    );
    await deleteCommentService.execute(id);
    res.json({ success: true });
  };
}
