import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

interface IUser {
  email: string;
  password: string;
  confirmPassword: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true, validate: [validator.isEmail, 'please provide a valid email'] },
  password: { type: String, required: true, minlength: 8 },
  confirmPassword: {
    type: String,
    required: true,
    // only works on save!!!!
    validate: {
      validator: function (el: string) {
        return el === this.password;
      },
      message: 'passwords are not the same',
    },
  },
});

userSchema.pre('save', async function (next) {
  // only run this func if password was modified
  if (!this.isModified('password')) return next();
  //hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // delete confirm password
  this.confirmPassword = undefined;
  next();
});

export const User = mongoose.model('User', userSchema);
