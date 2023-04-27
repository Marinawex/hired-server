export class PositionsService {
  constructor() {}

  async daysPassedSinceDate(dateToCheck: string) {
    const today = new Date().getTime();
    const oneDayInMs = 1000 * 60 * 60 * 24; // milliseconds in one day
    const dateInMs = new Date(dateToCheck).getTime();
    const daysPassed = Math.round((today - dateInMs) / oneDayInMs);

    return daysPassed;
  }

  //  daysPassedSinceApplication() companies.map((company) => {
  //   return {
  //     ...company,
  //     daysPassedSinceApplication: daysPassedSinceDate(company.applicationDate),
  //   };
  // });
}
