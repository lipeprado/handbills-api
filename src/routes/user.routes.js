/**
 * User Routes
 */

import express from 'express';

import * as UsersController from '../controllers/user.controller';

const routes = express.Router();
routes.get('/', UsersController.index);
routes.post('/register', UsersController.store);

export default routes;
