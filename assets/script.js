//today's date and time
var gradDate = dayjs("1999/02/15").format("YYYY MM d");
$("#1a").text(gradDate);
var currentDay = dayjs().format("dddd DD MMM YYYY");
$("#3a").text(currentDay);