/**
 * User Routes
 */

import express from 'express';

import * as UsersController from '../controllers/user.controller';
// import * as AuthController from '../controllers/auth.controller';
//import { authLocal } from '../services/auth';

const routes = express.Router();
routes.get('/', UsersController.index);
routes.post('/register', UsersController.store);
// routes.post('/login', authLocal, AuthController.login);

export default routes;
