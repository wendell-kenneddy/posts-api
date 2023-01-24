import { UsersRepository } from '@/repositories/UsersRepository';
import { Request, Response } from 'express';
import { DeleteUserService } from '../services/DeleteUserService';

export class DeleteUserController {
  constructor(private readonly usersRepository: UsersRepository) {}

  handle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleteUserService = new DeleteUserService(this.usersRepository);
    await deleteUserService.execute(id);
    res.json({ success: true });
  };
}
