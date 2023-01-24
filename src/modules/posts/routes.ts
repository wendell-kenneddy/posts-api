import { Router } from 'express';
import { PrismaPostsRepository } from '@/repositories/prisma/PrismaPostsRepository';
import { CreatePostController } from './controllers/CreatePostController';
import { GetPostsController } from './controllers/GetAllPostsController';
import { GetPostByIdController } from './controllers/GetPostByIdController';

const router = Router();
const postsRepository = new PrismaPostsRepository();

router.post('/posts', new CreatePostController(postsRepository).handle);
router.get('/posts', new GetPostsController(postsRepository).handle);
router.get('/posts/:id', new GetPostByIdController(postsRepository).handle);

export { router as postsRouter };
