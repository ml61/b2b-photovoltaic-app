import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { TOKEN_KEYWORD } from '../utils/constants.js';

const userSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
      // uppercase: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    // email: {
    //   type: String,
    //   unique: true,
    //   required: true,
    //   validate(value) {
    //     if (!validator.isEmail(value)) {
    //       throw new Error('Email is invalid');
    //     }
    //   },
    //   trim: true,
    //   lowercase: true,
    // },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
      validate(value) {
        let lowerCaseValue = value.toLowerCase();
        if (lowerCaseValue.includes('password')) {
          throw new Error('Password should not contain a word "password".');
        }
      },
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'delivery'],
      default: 'user',
    },
    tempOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TempOrder' }],
    confirmedOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],

    avatar: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual('paidOrders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'userId',
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.token;

  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, TOKEN_KEYWORD);

  return token;
};

userSchema.statics.findByCredentials = async (phoneNumber, password) => {
  const user = await User.findOne({ phoneNumber });
  if (!user) {
    throw new Error(`No user with phone number ${phoneNumber} was found`);
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Wrong password');
  }

  return user;
};

// hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

export const User = mongoose.model('User', userSchema);
