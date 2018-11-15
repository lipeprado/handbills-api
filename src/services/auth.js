import config from 'config';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = config.get(process.env.NODE_ENV);

const verifyJWTToken = async token => jwt.verify(token, JWT_SECRET);

export default async (req, res, next) => {
  const token = req.headers.authorization;
  const splitedToken = token.split(' ');
  const verify = await verifyJWTToken(splitedToken[1]);
  req.user = verify;
  next();
};
