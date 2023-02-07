import { User } from '../../models/User.js';

export const signUp = async (req, res) => {
  const { phoneNumber } = req.body;
  const exists = await User.exists({ phoneNumber });
  if (exists)
    return res
      .status(403)
      .send(`User with ${phoneNumber} phone number already exists`);

  const user = new User(req.body);

  const token = await user.generateAuthToken();

  try {
    await user.save();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
