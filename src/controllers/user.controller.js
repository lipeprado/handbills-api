import UserModel, { decrypt, encrypt } from '../models/user.model';

export const index = async (req, res, next) => {
  const users = await UserModel.forge()
    .fetchAll()
    .then(data => (data ? data.toJSON() : null));
  return res.status(200).json({ users });
};

export const store = async (req, res, next) => {
  const { firstName, lastName, password, email } = req.body;
  const hash = encrypt(password);
  const newUser = {
    firstName,
    lastName,
    password: hash,
    email,
  };

  try {
    const user = await new UserModel(newUser).save();
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error: 'something goes wrong' });
  }
};
