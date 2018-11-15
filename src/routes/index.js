import express from 'express';
import HTTPStatus from 'http-status';

// Middlewares
import APIError from '../services/error';
import logErrorService from '../services/log';

// Controllers
import UserRoutes from './user.routes';
import AuthRoutes from './auth.routes';
import BillsRoutes from './bills.routes';

const routes = express.Router();
routes.use('/users', UserRoutes);
routes.use('/auth', AuthRoutes);
routes.use('/bills', BillsRoutes);

routes.all('*', (req, res, next) => next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true)));

routes.use(logErrorService);

export default routes;
