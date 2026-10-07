import express from 'express';
import 'dotenv/config';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'user',
  password: 'userpassword',
  database: 'myapp'
});

const [rows] = await db.query('SELECT 1');
console.log('DB connected:', rows);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});