import config from 'config';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = config.get(process.env.NODE_ENV);

export default details => jwt.sign({ data: details }, JWT_SECRET, { expiresIn: '2d' });
