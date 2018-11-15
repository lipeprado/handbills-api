/**
 * Bills Routes
 */

import express from 'express';
import { authVerify } from '../services/auth';

import * as BillsController from '../controllers/bills.controller';

const routes = express.Router();
routes.post('/', authVerify, BillsController.store);
routes.get('/', authVerify, BillsController.index);

export default routes;
