import mongoose from 'mongoose';

interface IStatus {
  inProcess: boolean;
  applied: boolean;
  followUp: boolean;
  noReply: boolean;
  rejected: boolean;
}

interface IContactInfo {
  ContactName: string;
  ContactEmail: string;
  ContactPhoneNumber: string; // Todo : check how to valueAsNumber works
}

interface ICompany {
  companyName: string;
  position: string;
  applicationDate: string;
  status: IStatus;
  contactInfo: IContactInfo;
}

const companySchema = new mongoose.Schema<ICompany>({
  companyName: { type: String, require: true, unique: true },
  position: { type: String, required: true },
  applicationDate: { type: String, require: true },
  status: { type: Object, require: true },
  contactInfo: { type: Object },
});

export const Company = mongoose.model('Company', companySchema);

//   const testCompany = new Company({
//     name: 'Facebook',
//     applicationDate: '2023-03-18',
//     status: {
//       inProcess: false,
//       applied: true,
//       followUp: false,
//       noReply: false,
//       rejected: false,
//     },
//   });

//   testCompany
//     .save()
//     .then((document) => {
//       console.log(document);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
