import { AuthController } from '../controllers/authController';
import { UserController } from '../controllers/userController';
import { Request, Response, Router } from 'express';

export const userRouter = Router();

const userController = new UserController();
const authController = new AuthController();

userRouter.post('/signup', authController.signup)



userRouter.route('/').get(userController.getAllUsers).post(userController.createUser);

userRouter.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);
