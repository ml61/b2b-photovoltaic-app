export const signInValidation = (req, res, next) => {
  const {
    body: { phoneNumber, password },
  } = req;

  if (!/^\+?3?8?(0\d{9})$/.test(phoneNumber)) {
    res
      .status(400)
      .send({ message: 'Phone number should be in +380XXXXXXXXX format' });
  }
  if (password?.trim()?.length < 5) {
    res
      .status(400)
      .send({ message: 'Password is required. Should have minimum 5 chars.' });
  }

  next();
};
