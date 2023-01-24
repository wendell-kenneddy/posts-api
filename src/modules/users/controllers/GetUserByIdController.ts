import { Request, Response } from 'express';
import { UsersRepository } from '@/repositories/UsersRepository';
import { GetUserByIdService } from '../services/GetUserByIdService';

export class GetUserByIdController {
  constructor(private readonly usersRepository: UsersRepository) {}

  handle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const getUserByIdService = new GetUserByIdService(this.usersRepository);
    const user = await getUserByIdService.execute(id);
    return res.json({
      succes: true,
      user,
    });
  };
}
