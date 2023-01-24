import { UsersRepository } from '@/repositories/UsersRepository';

export class GetUsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute() {
    const users = await this.usersRepository.getUsers();
    return users;
  }
}
