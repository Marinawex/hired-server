import { NextFunction, Request, Response } from 'express';
import { User } from '../models/usersModel';

export class AuthController {
  constructor() {}
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await User.create(req.body);

      res.status(201).json({
        status: 'sucsess',
        data: {
          user: newUser,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
}
