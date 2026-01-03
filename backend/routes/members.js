import express from 'express';
import { getDatabase } from '../db.js';

const router = express.Router();
const pool = getDatabase();

router.post('/join', async (req, res) => {
  const { name, email, plan } = req.body;

  if (!name || !email || !plan) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO members (name, email, plan) VALUES ($1, $2, $3) RETURNING *',
      [name, email, plan]
    );
    
    res.status(201).json({
      ...result.rows[0],
      message: 'Member joined successfully'
    });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    console.error('Database error:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});

router.get('/all', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM members ORDER BY "createdAt" DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});

export default router;
