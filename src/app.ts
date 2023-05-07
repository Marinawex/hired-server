import express from 'express';
import cors from 'cors';
import { router } from './routes/positionsRoutes';
import BodyParser from 'body-parser';
import { userRouter } from './routes/usersRoutes';
import compression from 'compression'

const app = express();
app.use(cors());
app.use(compression())
app.use(BodyParser.json());

app.use('/api/v1/positions', router);
app.use('/api/v1/users', userRouter);

export default app;
