/**
 * User Routes
 */

import express from 'express';

import * as AuthController from '../controllers/auth.controller';

const routes = express.Router();
routes.post('/login', AuthController.login);

export default routes;
