const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
/**
 * @param {Date} date1
 * @param {Date} date2
 * @returns {string}
 */
export function twoDatesToRead(date1, date2) {
    const day1 = date1.getDate();
    const day2 = date2.getDate();
    const m1 = date1.getMonth();
    const m2 = date2.getMonth();
    const y1 = date1.getFullYear();
    const y2 = date2.getFullYear();
    return `${day1} ${m1 !== m2 ? months[m1] : ""} - ${day2} ${months[m2]} ${y2}`
}

//https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
/**
 *
 * @param {Date} date
 * @returns {Date}
 */
export function getMonday(date) {
    const new_date = new Date(date);
    const day = new_date.getDay();
    const diff = new_date.getDate() - day + (day == 0 ? -6 : 1);
    new_date.setDate(diff)
    new_date.setHours(0);
    new_date.setMinutes(0);
    new_date.setSeconds(0);
    return new_date;
  }

/**
 *
 * @param {Date} monday
 */
export function getSunday(monday) {
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23); sunday.setMinutes(59); sunday.setSeconds(59);
    return sunday;
}

export function eventsToByDayList(events) {
    const listEvents = [];
    for (let i = 0; i < 7; i++) {
        listEvents.push([]);
    }
    for (const event of events) {
        const day = (event.start.getDay() + 6) % 7;
        listEvents[day].push(event);
    }
    return listEvents;
}

/**
 * @param {Date} date
 */
export function dateToStringHours(date) {
    return `${date.getHours()}h${date.getMinutes().toString().padStart(2,"0")}`;
}