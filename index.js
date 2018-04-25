// write your code below!
function happyHolidays() {
  return `${"Happy holidays!"}`;
}

function happyHolidaysTo(holiday, name) {
  return `Happy holidays, ${name}!`;
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}

happyHolidays();
happyHolidaysTo("Susan");
happyHolidayTo("Easter", "Crystal");
holidayCountdown("Halloween", 120);