import z from 'zod';
import {
  UserCreateData,
  UsersRepository,
} from '@/repositories/UsersRepository';

export class CreateUserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(data: UserCreateData) {
    const schema = z.object({
      name: z.string().min(3),
      email: z.string().email(),
    });

    schema.parse(data);

    await this.usersRepository.create(data);
  }
}
