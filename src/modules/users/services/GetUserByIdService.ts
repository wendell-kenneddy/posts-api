import { UsersRepository } from '@/repositories/UsersRepository';

export class GetUserByIdService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id: string) {
    const user = await this.usersRepository.getUserById(id);
    return user;
  }
}
