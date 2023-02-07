import { User } from '../../models/User.js';

export const signIn = async (req, res) => {
  const {
    body: { phoneNumber, password },
  } = req;
  try {
    const user = await User.findByCredentials(phoneNumber, password);
    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
