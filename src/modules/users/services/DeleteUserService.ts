import { UsersRepository } from '@/repositories/UsersRepository';
import { validateUUID } from '@/utils/validateUUID';

export class DeleteUserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id: string) {
    validateUUID(id);
    await this.usersRepository.delete(id);
  }
}
