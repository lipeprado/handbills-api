import UserModel, { decrypt } from '../models/user.model';
import HTTPSTATUS from 'http-status';
import bcrypt from 'bcrypt';
import { createJWToken } from '../services/tokenize';

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    res
      .status(HTTPSTATUS.BAD_REQUEST)
      .json({ message: 'Email and password are both required' });
  const currentUser = await UserModel.where({ email }).fetch();
  const hashedPass = currentUser.get('password');
  const isValid = bcrypt.compareSync(password, hashedPass);
  if (isValid) {
    const details = {
      id: currentUser.get('id'),
      firstName: currentUser.get('firstName'),
      lastName: currentUser.get('lastName'),
      email: currentUser.get('email'),
    };
    const token = createJWToken(details);
    return res.status(HTTPSTATUS.OK).json({ token, type: 'Bearer' });
  } else {
    return res
      .status(HTTPSTATUS.BAD_REQUEST)
      .json({ message: 'Invalid password' });
  }
};
