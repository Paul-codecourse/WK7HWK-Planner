//Make table template global (hopefully ;)
function mTable() {
    // Clear existing table content
    $("#schedule-body").empty();
    
    // Generate rows for each hour from 9 am to 5 pm
    for (let hour = 9; hour <= 17; hour++) {
        let time = (hour < 12) ? hour + " AM" : (hour === 12) ? "12 PM" : (hour - 12) + " PM";
        $("#schedule-body").append(`<tr>
                                        <td>${time}</td>
                                        <td><a class="task-link" href="#">Click to Add Task</a></td>
                                        <td></td>
                                    </tr>`);
    }
}
$(document).ready(function() {
  //today's date and time
  var currentDay = dayjs().format("dddd DD MMM YYYY");
  $("#3a").text(currentDay);

  // Generate table when the page loads
  mTable();

  // Regenerate table when "Make Table" button is clicked
  $('#makeTable').click(mTable);

  //onclicking the task link add the text to the cell
  $(document).on("click", ".task-link", function() {
      // Replace the link with a text input for task entry
      let inputElement = $("<input type='text' class='task-input' />");
      $(this).replaceWith(inputElement);
      console.log("this is a test of the text box")
  });
});

function testLog() {
    console.log("This is a test")
}
