import { Request, Response } from 'express';
import { UsersRepository } from '@/repositories/UsersRepository';
import { GetUsersService } from '../services/GetUsersService';

export class GetUsersController {
  constructor(private readonly usersRepository: UsersRepository) {}

  handle = async (req: Request, res: Response) => {
    const getUsersService = new GetUsersService(this.usersRepository);
    const users = await getUsersService.execute();
    res.json({
      success: true,
      users,
    });
  };
}
