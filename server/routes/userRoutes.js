import express from 'express';
import Joi from 'joi';

import { signIn } from '../controllers/user/signIn.js';
import { signUp } from '../controllers/user/signUp.js';
import { signInValidation } from '../middlewares/validations/signInValidation.js';
import { signUpValidation } from '../middlewares/validations/signUpValidation.js';
import { joiValidator } from '../utils/expressJoiValidation.js';

const userRouter = express.Router();

// JOI schema example
// const signUpBodySchema = Joi.object({
//   // email: Joi.string().email().trim().required(),
//   companyName: Joi.string().trim().required(),
//   password: Joi.string().trim().min(5).required(),
//   phoneNumber: Joi.string()
//     .pattern(/^\+?3?8?(0\d{9})$/)
//     .required(),
//   role: Joi.string(),
// });
// const signInBodySchema = Joi.object({
//   // email: Joi.string().email().trim().required(),
//   password: Joi.string().trim().min(5).required(),
//   phoneNumber: Joi.string().pattern(/^\+?3?8?(0\d{9})$/),
// });

// JOI validator example
// userRouter.post('/signUp', joiValidator.body(signUpBodySchema), signUp);
// userRouter.post('/signIn', joiValidator.body(signInBodySchema), signIn);

userRouter.post('/signUp', signUpValidation, signUp);
userRouter.post('/signIn', signInValidation, signIn);

export { userRouter };
