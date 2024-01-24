//today's date and time
var gradDate = dayjs("1999/02/15").format("YYYY MM d");
$("#1a").text(gradDate);
var currentDay = dayjs().format("dddd DD MMM YYYY");
$("#3a").text(currentDay);

//Make table template
function Table() {
      $(document).ready(function() {
    // Generate rows for each hour from 9 am to 5 pm
    for (let hour = 9; hour <= 17; hour++) {
      let time = (hour < 12) ? hour + " AM" : (hour === 12) ? "12 PM" : (hour - 12) + " PM";
      $("#schedule-body").append(`<tr>
                                    <td>${time}</td>
                                    <td><a class="task-link" href="#">Click to Add Task</a></td>
                                    <td></td>
                                  </tr>`);
                                  console.log("this is line 18")
    }
})}
/*

for (let hour = 9; hour <= 17; hour++) {
    let time = (hour < 12) ? hour + " AM" : (hour === 12) ? "12 PM" : (hour - 12) + " PM";
    $("#schedule-body").append(`<tr>
                                  <td>${time}</td>
                                  <td><a class="task-link" href="#">Click to Add Task</a></td>
                                  <td></td>
                                </tr>`)};
  }*/

function testLog() {
    console.log("This is a test")
}




function makeTable() {
var $table = $('<table>');
    $table.append('<caption>MyTable</caption>')
// thead
.append('<thead>').children('thead')
.append('<tr />').children('tr').append('<th>A</th><th>B</th><th>C</th><th>D</th>');

//tbody
var $tbody = $table.append('<tbody />').children('tbody');

// add row
$tbody.append('<tr />').children('tr:last')
.append("<td>val</td>")
.append("<td>val</td>")
.append("<td>val</td>")
.append("<td>val</td>");

// add another row
$tbody.append('<tr />').children('tr:last')
.append("<td>val</td>")
.append("<td>val</td>")
.append("<td>val</td>")
.append("<td>val</td>");

// add table to dom
$table.appendTo('#dynamicTable');
}