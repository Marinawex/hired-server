import { Position } from 'models/positionsModel';
import validator from 'validator';

export const validatePosition = (payload: Position): Position => {
  if (!payload) {
    throw new Error('the value is empty');
  }

  const { company, title, applicationDate, contact } = payload;

  validator.escape(company.name).trim();
  validator.escape(title).trim();
  validator.escape(contact.email).trim();
  validator.escape(contact.name).trim();
  validator.escape(contact.phoneNumber).trim();

  if (!validator.isLength(company.name, { min: 2, max: 40 })) {
    throw new Error('company name must be 2 to 40 chars length');
  }

  if (validator.isAlphanumeric(company.name)) {
    throw new Error('company name must be a valid name');
  }

  if (!validator.isAlpha(title)) {
    throw new Error('invalid position');
  }

  if (!validator.isLength(title, { min: 2, max: 40 })) {
    throw new Error('position must be 2 to 40 chars length');
  }

  if (!validator.isTime(applicationDate)) {
    throw new Error('applicationDate must be a valid date');
  }

  if (!validator.isEmail(contact.email)) {
    throw new Error('invalid email');
  }

  return payload as Position;
};

//  export interface User {
//   id?: number;
//   email: string;
//   fname: string;
//   lname: string;
//   password: string;
// }

// export function validateUser(payload: unknown): User {
//   if (!payload) {
//     throw new Error('empty value is not a user');
//   }
//   const { email, lname, fname, password } = payload as User;

//   if (!validator.isEmail(email)) {
//     throw new Error('email not valid');
//   }

//   if (!validator.isAlpha(lname) && !validator.isAlpha(fname)) {
//     throw new Error('last name and first name should be string');
//   }
//   if (!validator.isLength(lname, { min: 3, max: 30 })) {
//     throw new Error('last name must be 3 to 30 chars length');
//   }
//   if (!validator.isLength(fname, { min: 3, max: 30 })) {
//     throw new Error('first name must be 3 to 30 chars length');
//   }
//   if (!validator.isLength(password, { min: 6, max: 30 })) {
//     throw new Error('password must be 6 to 30 chars length');
//   }
//   return payload as User;
// }

// export function validateFullUser(payload: unknown) {
//   const user = validateUser(payload);
//   if (!validator.isNumeric(`${user.id}`)) {
//     throw new Error('missing user ud');
//   }
//   return user;
// }
