export class CalendarUtil{

    getNumberOfDaysTokenIsAvailable (expires){
      let currentData = new Date();
        return (Date.parse(expires) - currentData)/86400000;
    }
}