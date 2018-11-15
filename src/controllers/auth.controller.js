import bcrypt from 'bcrypt';
import HTTPSTATUS from 'http-status';
import UserModel from '../models/user.model';
import createJWToken from '../services/tokenize';

// eslint-disable-next-line import/prefer-default-export
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Email and password are both required' });
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
  }
  return res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Invalid password' });
};
