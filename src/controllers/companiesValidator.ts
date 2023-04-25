import { ICompany } from 'models/companiesModel';
import validator from 'validator';

export const validateCompany = (payload: ICompany): ICompany => {
  if (!payload) {
    throw new Error('the value is empty');
  }

  const { companyName, position, applicationDate, contactInfo } = payload;

  validator.escape(companyName).trim();
  validator.escape(position).trim();
  validator.escape(contactInfo.ContactEmail).trim();
  validator.escape(contactInfo.ContactName).trim();
  validator.escape(contactInfo.ContactPhoneNumber).trim();

  if (!validator.isLength(companyName, { min: 2, max: 40 })) {
    throw new Error('company name must be 2 to 40 chars length');
  }

  if (validator.isAlphanumeric(companyName)) {
    throw new Error('company name must be a valid name');
  }

  if (!validator.isAlpha(position)) {
    throw new Error('invalid position');
  }

  if (!validator.isLength(position, { min: 2, max: 40 })) {
    throw new Error('position must be 2 to 40 chars length');
  }

  if (!validator.isTime(applicationDate)) {
    throw new Error('applicationDate must be a valid date');
  }

  if (!validator.isEmail(contactInfo.ContactEmail)) {
    throw new Error('invalid email');
  }

  return payload as ICompany;
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
