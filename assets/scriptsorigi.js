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
const eventState = localStorage.getItem('eventState')
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
// Function to extract tasks from the table
function getTasksFromTable() {
    let tasks = [];
    $("#schedule-body").find(".task-input").each(function() {
        tasks.push($(this).val());
    });
    return tasks;
}

// Function to generate table
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
    // Restore task data from local storage
 /*   const storedTasks = localStorage.getItem('taskData');
    console.log(storedTasks)
    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        tasks.forEach(function(taskText, index) {
            $(`#schedule-body .task-input:eq(${index})`).val(taskText);
        });
    }

    const storedTasks = localStorage.getItem('taskData');
console.log(storedTasks); */
const storedTasks = localStorage.getItem('taskData');
console.log(storedTasks)
if (storedTasks) {
  // Preprocess the string if it's not valid JSON

  const tasks = storedTasks.startsWith("[") && storedTasks.endsWith("]") ?
    JSON.parse(storedTasks) :
    storedTasks.split(","); // Split string into array if not JSON

  // Iterate through the tasks, handling potential missing elements
  tasks.forEach(function(taskText, index) {
    const inputElement = $(`#schedule-body .task-input:eq(${index})`);
    if (inputElement.length > 0) {
      inputElement.val(taskText.trim()); // Trim task text to remove extra spaces
    } else {
      console.log("Input element not found at index", index);
    }
  });
}


    // Generate table when the page loads
    mTable();

    // Regenerate table when "Make Table" button is clicked
    $('#makeTable').click(mTable);

    // Handle click event for adding tasks
    $(document).on("click", ".task-link", function() {
        // Replace the link with a text input for task entry
        let inputElement = $("<input type='text' class='task-input' />");
        $(this).replaceWith(inputElement);
    });

    // Handle blur event for task input (when focus is lost)
    $(document).on("blur", ".task-input", function() {
        // Get all existing tasks
        let existingTasks = getTasksFromTable();
        console.log("currently existingTasks says ".existingTasks)
        console.log("currently Tasks says ".Tasks)
        console.log("currently taskData says ".taskData)
        // Store updated tasks in local storage (using JSON)
        localStorage.setItem('taskData', JSON.stringify(existingTasks));
    });
});
