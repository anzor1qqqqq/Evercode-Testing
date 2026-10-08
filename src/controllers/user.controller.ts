import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getUsers = async (_req: Request, res: Response) => {
  /* const users = await userService.findAll();
  res.json(users); */
  res.json({ message: '1' })
};

export const getUser = async (req: Request, res: Response) => {
  /* const user = await userService.findById(Number(req.params.id));
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(user); */
};

export const createUser = async (req: Request, res: Response) => {
  /* const { name, email } = req.body;
  const user = await userService.create(name, email);
  res.status(201).json(user); */
};

export const deleteUser = async (req: Request, res: Response) => {
  /* await userService.remove(Number(req.params.id));
  res.status(204).send(); */
};
