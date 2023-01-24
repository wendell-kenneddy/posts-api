import { Request, Response } from 'express';
import { UsersRepository } from '@/repositories/UsersRepository';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
  constructor(private readonly usersRepository: UsersRepository) {}

  handle = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const createUserService = new CreateUserService(this.usersRepository);
    await createUserService.execute({ name, email });
    res.json({ success: true });
  };
}
