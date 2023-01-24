import { PrismaCommentsRepository } from '@/repositories/prisma/PrismaCommentsRepository';
import { Router } from 'express';
import { CreateCommentController } from './controllers/CreateCommentController';
import { DeleteCommentController } from './controllers/DeleteCommentController';
import { GetCommentsController } from './controllers/GetCommentsController';

const router = Router();
const commentsRepository = new PrismaCommentsRepository();

router.get('/comments', new GetCommentsController(commentsRepository).handle);
router.delete(
  '/comments/:id',
  new DeleteCommentController(commentsRepository).handle
);
router.post(
  '/comments',
  new CreateCommentController(commentsRepository).handle
);

export { router as commentsRouter };
