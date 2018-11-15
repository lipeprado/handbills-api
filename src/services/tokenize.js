import config from 'config';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
const { JWT_SECRET } = config.get(process.env.NODE_ENV);

export const createJWToken = details => {
  let token = jwt.sign(
    {
      data: details,
    },
    JWT_SECRET,
    { expiresIn: 60 * 60 },
  );

  return token;
};
