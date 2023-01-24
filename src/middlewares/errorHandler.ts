import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: error.issues[0].message,
    });
    return;
  }

  if (
    error instanceof PrismaClientKnownRequestError &&
    error.code === 'P2002'
  ) {
    let message = 'Unique constraint error.';

    if (error.meta) {
      message = `${(error.meta['target'] as string[])[0]} already in use.`;
    }

    res.status(400).json({
      success: false,
      message,
    });
    return;
  }

  console.log(error);
  res.status(400).end();
}
