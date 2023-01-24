import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetUsersController } from './controllers/GetUsersController';
import { GetUserByIdController } from './controllers/GetUserByIdController';
import { PrismaUsersRepository } from '@/repositories/prisma/PrismaUsersRepository';
import { DeleteUserController } from './controllers/DeleteUserController';

const router = Router();
const usersRepository = new PrismaUsersRepository();

router.get('/users', new GetUsersController(usersRepository).handle);
router.get('/users/:id', new GetUserByIdController(usersRepository).handle);
router.post('/users', new CreateUserController(usersRepository).handle);
router.delete('/users/:id', new DeleteUserController(usersRepository).handle);

export { router as usersRouter };
