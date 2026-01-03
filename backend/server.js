import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initializeDatabase } from './db.js';
import memberRoutes from './routes/members.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

initializeDatabase();

app.use('/api/members', memberRoutes);

app.get('/', (req, res) => {
  res.send('NITHU GYM Backend API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
