import express from 'express';
import { getDatabase } from '../db.js';

const router = express.Router();
const db = getDatabase();

router.post('/join', (req, res) => {
  const { name, email, plan } = req.body;

  if (!name || !email || !plan) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  db.run(
    'INSERT INTO members (name, email, plan) VALUES (?, ?, ?)',
    [name, email, plan],
    function(err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(400).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({
        id: this.lastID,
        name,
        email,
        plan,
        message: 'Member joined successfully'
      });
    }
  );
});

router.get('/all', (req, res) => {
  db.all('SELECT * FROM members ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

export default router;
