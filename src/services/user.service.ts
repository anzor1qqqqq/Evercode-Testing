import { db } from '../config/db';

export const findAll = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

export const findById = async (id: number) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return (rows as any[])[0] || null;
};

export const create = async (name: string, email: string) => {
  const [result] = await db.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email]
  );
  return { id: (result as any).insertId, name, email };
};

export const remove = async (id: number) => {
  await db.query('DELETE FROM users WHERE id = ?', [id]);
};
