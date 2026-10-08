import type { Request, NextFunction, Response } from 'express';

export type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>