const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
/**
 * @param {Date} date1
 * @param {Date} date2
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