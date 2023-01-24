import z from 'zod';

export function validateUUID(uuid: string) {
  z.string().uuid().parse(uuid);
}
