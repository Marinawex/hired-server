import mongoose from 'mongoose';

export interface Company {
  name: string;
  description?: string;
  website?: string;
  location?: string;
}

export type ApplicationStatus = 'inProcess' | 'applied' | 'followUp' | 'noReply' | 'rejected';

export interface ContactInfo {
  name?: string;
  email?: string;
  phoneNumber?: string; // Todo: Check how valueAsNumber works.
}

export interface Position {
  title: string;
  requirements?: string;
  company?: Company;
  applicationDate: string; // Format: YYYY-MM-DD
  status: ApplicationStatus;
  contact?: ContactInfo;
}

const positionSchema = new mongoose.Schema<Position>({
  title: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: false,
    default: '',
  },
  company: { type:Object,
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    website: {
      type: String,
      required: false,
      default: '',
    },
    location: {
      type: String,
      required: false,
      default: '',
    },
  },
  applicationDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['inProcess', 'applied', 'followUp', 'noReply', 'rejected'],
    default: 'applied',
  },
  contact: {
    type:Object,
    name: {
      type: String,
      required: false,
      default: '',
    },
    email: {
      type: String,
      required: false,
      default: '',
      // validate: {
      //   validator: (value: string) => {
      //     return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
      //   },
      //   message: 'Invalid email address',
      // },
    },
    phoneNumber: {
      type: String,
      required: false,
      default: '',
    },
  },
});

export const PositionModel = mongoose.model('Position', positionSchema);

// export  interface IStatus {
//   inProcess: boolean;
//   applied: boolean;
//   followUp: boolean;
//   noReply: boolean;
//   rejected: boolean;
// }

// const positionSchema = new mongoose.Schema<Position>({
//   company: { type: Object, require: true, unique: true },
//   positionTitle: { type: String, required: true },
//   applicationDate: { type: String, require: true },
//   applicationStatus: { type: String, require: true },
//   contactInfo: { type: Object },
// });

// export const Position = mongoose.model('position', positionSchema);

// companySchema.pre('save' , async function (next) {
//   this.status: {
//     inProcess: false,
//     applied: true,
//     followUp: false,
//     noReply: false,
//     rejected: false,
//   };

// })

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
