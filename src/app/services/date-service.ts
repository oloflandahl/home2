
class DateService {

  getYearsToNow(year: number, month: number, day: number) : number {
    const then = new Date(year, month-1, day);
    const now = new Date();
    const monthsDiff = now.getMonth() - then.getMonth();
    let yearsDiff = now.getFullYear() - then.getFullYear();

    if (monthsDiff <= -6) {
      yearsDiff--;
    }

    return yearsDiff;
  }
  
}

export default new DateService();