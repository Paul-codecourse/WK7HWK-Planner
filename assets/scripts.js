/* //Make table template global (hopefully ;)
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
    //adding local storage

  //today's date and time
  var currentDay = dayjs().format("dddd DD MMM YYYY");
  $("#3a").text(currentDay);

  // Generate table when the page loads
  mTable();

  // Regenerate table when "Make Table" button is clicked
  $('#makeTable').click(mTable);
// restore event state from local storage
var eventState = localStorage.getItem('eventState')
if (eventState) {
    $("#schedule-body").html(eventState)
}


  //onclicking the task link add the text to the cell
  $(document).on("click", ".task-link", function() {
      // Replace the link with a text input for task entry
      let inputElement = $("<input type='text' class='task-input' />");
      $(this).replaceWith(inputElement);
      console.log("this is a test of the text box")
    // addto local storag
    localStorage.setItem('eventState', $("#schedule-body").html())
  });
})
function testLog() {
    console.log("This is a test")
}
*/
// Make table template global
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
    // Display today's date and time
    var currentDay = dayjs().format("dddd DD MMM YYYY");
    $("#3a").text(currentDay);

    // Generate table when the page loads or refreshes
    mTable();

    // Regenerate table when "Make Table" button is clicked
    $('#makeTable').click(mTable);

    // Restore event state from local storage
    var eventState = localStorage.getItem('eventState');
    if (eventState) {
        $("#schedule-body").html(eventState);

        // Reattach event handlers after regenerating the table
        attachEventHandlers();
    }

    // Handle task link click
    $(document).on("click", ".task-link", function() {
        // Replace the link with a text input for task entry
        let inputElement = $("<input type='text' class='task-input' />");
        $(this).replaceWith(inputElement);
        console.log("Task input created");

        // Store updated event state in local storage
        localStorage.setItem('eventState', $("#schedule-body").html());

        // Reattach event handlers after modifying the table content
        attachEventHandlers();
    });
});

// Function to attach event handlers to task links
function attachEventHandlers() {
    $(".task-link").off().on("click", function() {
        // Replace the link with a text input for task entry
        let inputElement = $("<input type='text' class='task-input' />");
        $(this).replaceWith(inputElement);
        console.log("Task input created");

        // Store updated event state in local storage
        localStorage.setItem('eventState', $("#schedule-body").html());

        // Reattach event handlers after modifying the table content
        attachEventHandlers();
    });
}

function testLog() {
    console.log("This is a test");
}
