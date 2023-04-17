import app from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const port = parseInt(process.env.PORT) || 3333;

app.listen(port, '0.0.0.0', () => {
  console.log(`lisening on port ${port}`);
});
