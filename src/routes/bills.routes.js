/**
 * Bills Routes
 */

import express from 'express';
import authVerify from '../services/auth';

import * as BillsController from '../controllers/bills.controller';

const routes = express.Router();
routes.get('/', authVerify, BillsController.index);
routes.post('/', authVerify, BillsController.store);
routes.put('/:id', authVerify, BillsController.update);
routes.put('/:id', authVerify, BillsController.destroy);

export default routes;
