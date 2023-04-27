import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { PositionModel } from '../models/positionsModel';
import { positions } from '../models/positions';

dotenv.config({ path: '../../.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

// IMPORT DATA INTO DB
export const importData = async () => {
  try {
    await PositionModel.create(positions);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
export const deleteData = async () => {
  try {
    await PositionModel.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
