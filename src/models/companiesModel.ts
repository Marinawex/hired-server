import mongoose from 'mongoose';

interface IStatus {
  inProcess: boolean;
  applied: boolean;
  followUp: boolean;
  noReply: boolean;
  rejected: boolean;
}

interface ICompany {
  name: string;
  applicationDate: string;
  status: IStatus;
}

const companySchema = new mongoose.Schema<ICompany>({
  name: { type: String, require: true, unique: true },
  applicationDate: { type: String, require: true },
  status: { type: Object, require: true },
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
