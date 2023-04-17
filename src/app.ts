import express from 'express';
import cors from 'cors';
import { router } from './endPoints/companiesEndPoints';
import BodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(BodyParser.json());

app.use('/', router);

export default app;