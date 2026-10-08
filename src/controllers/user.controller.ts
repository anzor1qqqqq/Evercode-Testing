import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import asyncHandler from '../middleware/asyncHandler';

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
})