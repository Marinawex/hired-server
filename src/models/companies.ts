export const companies = [
  {
    id: 1,
    name: 'Facebook',
    applicationDate: '2023-03-18',
    status: {
      inProcess: false,
      applied: false,
      followUp: true,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 2,
    name: 'Tesla',
    applicationDate: '2023-03-15',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: true,
      rejected: false,
    },
  },
  {
    id: 3,
    name: 'Hello Heart',
    applicationDate: '2023-03-05',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 4,
    name: 'IBM',
    applicationDate: '2023-03-01',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 5,
    name: 'Twitter',
    applicationDate: '2023-02-28',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 6,
    name: 'Salesforce',
    applicationDate: '2023-03-12',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 7,
    name: 'Intel',
    applicationDate: '2023-02-12',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: true,
    },
  },
  {
    id: 8,
    name: 'Uber',
    applicationDate: '2023-03-18',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: true,
      rejected: false,
    },
  },
  {
    id: 9,
    name: 'Airbnb',
    applicationDate: '2023-03-14',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 10,
    name: 'Snapchat',
    applicationDate: '2023-03-05',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 11,
    name: 'Dropbox',
    applicationDate: '2023-03-11',
    status: {
      inProcess: false,
      applied: false,
      followUp: true,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 12,
    name: 'Zoom',
    applicationDate: '2023-03-17',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: true,
      rejected: false,
    },
  },
  {
    id: 13,
    name: 'Square',
    applicationDate: '2023-03-07',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 14,
    name: 'PayPal',
    applicationDate: '2023-03-25',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: true,
    },
  },
  {
    id: 15,
    name: 'Github',
    applicationDate: '2023-03-26',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 16,
    name: 'Reddit',
    applicationDate: '2023-03-10',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 17,
    name: 'OpenAI',
    applicationDate: '2023-03-05',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 18,
    name: 'Google',
    applicationDate: '2023-03-02',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 19,
    name: 'Apple',
    applicationDate: '2023-03-19',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },

  {
    id: 20,
    name: 'Microsoft',
    applicationDate: '2023-03-17',
    status: {
      inProcess: false,
      applied: false,
      followUp: true,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 21,
    name: 'Amazon',
    applicationDate: '2023-03-07',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
];

export const newCompanies = companies.map((company) => {
  return {
    ...company,
    companyName: company.name,
    position: 'front end developer',
  };
});

newCompanies.forEach((company) => {
  delete company.name;
  delete company.id;
});

// console.log(newCompanies);

// for (const comp of newCompanies){
//   console.log(comp.name);

// }

export const positions = [
  {
    applicationDate: '2023-03-18',
    status: {
      inProcess: false,
      applied: false,
      followUp: true,
      noReply: false,
      rejected: false,
    },
    companyName: 'Facebook',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-15',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: true,
      rejected: false,
    },
    companyName: 'Tesla',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-05',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Netflix',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-01',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'IBM',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-02-28',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Twitter',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-12',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Salesforce',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-02-12',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: true,
    },
    companyName: 'Intel',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-18',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: true,
      rejected: false,
    },
    companyName: 'Uber',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-14',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Airbnb',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-05',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Snapchat',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-11',
    status: {
      inProcess: false,
      applied: false,
      followUp: true,
      noReply: false,
      rejected: false,
    },
    companyName: 'Dropbox',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-17',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: true,
      rejected: false,
    },
    companyName: 'Zoom',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-07',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Square',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-25',
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: true,
    },
    companyName: 'PayPal',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-26',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Github',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-10',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Reddit',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-05',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'OpenAI',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-02',
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Google',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-19',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Apple',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-17',
    status: {
      inProcess: false,
      applied: false,
      followUp: true,
      noReply: false,
      rejected: false,
    },
    companyName: 'Microsoft',
    position: 'front end developer',
  },
  {
    applicationDate: '2023-03-07',
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
    companyName: 'Amazon',
    position: 'front end developer',
  },
];

const titles = ['Applied', 'Follow Up', 'rejected', 'No Reply', 'All Companies'];
