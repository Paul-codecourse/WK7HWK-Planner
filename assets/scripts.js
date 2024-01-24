//today's date and time
var currentDay = dayjs().format("dddd DD MMM YYYY");
$("#3a").text(currentDay);
window.onload = mTable()
//Make table template
function mTable() {
      $(document).ready(function() {
    // Generate rows for each hour from 9 am to 5 pm
    for (let hour = 9; hour <= 17; hour++) {
      let time = (hour < 12) ? hour + " AM" : (hour === 12) ? "12 PM" : (hour - 12) + " PM";
      $("#schedule-body").append(`<tr>
                                    <td>${time}</td>
                                    <td><a class="task-link" href="#">Click to Add Task</a></td>
                                    <td></td>
                                  </tr>`);
    }
})

$(document).ready(function() {      
  $('#makeTable').click(function() { 
     mTable(); 
  }); 
});

//onclicking the task link add the text to the cell
$(".task-link").on("click", function() {
    // Replace the link with a text input for task entry
    let inputElement = $("<input type='text' class='task-input' />");
    $(this).replaceWith(inputElement);}
 )
}

function createaTable() {
for (let hour = 9; hour <= 17; hour++) {
    let time = hour;
    $("#schedule-body").append(`<tr>
                                  <td>${time}</td>
                                  <td><a class="task-link" href="#">Click to Add Task</a></td>
                                  <td></td>
                                </tr>`)};
  }



function testLog() {
    console.log("This is a test")
}

/*


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
}*/