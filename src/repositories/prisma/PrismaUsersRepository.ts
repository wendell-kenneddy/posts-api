import { validateUUID } from '@/utils/validateUUID';
import { z } from 'zod';
import { prisma } from '../../lib/prisma';
import { UserCreateData, UsersRepository } from '../UsersRepository';

export class PrismaUsersRepository implements UsersRepository {
  public async create(data: UserCreateData) {
    const schema = z.object({
      name: z.string().min(3),
      email: z.string().email(),
    });

    schema.parse(data);

    await prisma.user.create({ data });
  }

  public async delete(id: string) {
    validateUUID(id);

    await prisma.user.delete({ where: { id } });
  }

  public async getUserById(id: string) {
    validateUUID(id);

    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  public async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  }
}
