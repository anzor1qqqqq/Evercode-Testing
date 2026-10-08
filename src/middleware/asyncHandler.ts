import { Request, Response, NextFunction } from 'express';
import { AsyncHandler } from './middleware.types';

const asyncHandler = (fn: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}

export default asyncHandler