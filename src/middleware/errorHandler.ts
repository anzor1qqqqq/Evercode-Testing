import { Request, Response, NextFunction } from 'express';
import HttpException from '../errors/HttpException';

const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof HttpException) {
    return res.status(err.status).json({ error: err.message })
  }

  if (err instanceof Error) {
    return res.status(500).json({ error: err.message })
  }

  console.error(err)
  res.status(500).json({ error: 'Internal Server Error' })
}

export default errorHandler