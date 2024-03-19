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

    // Get current time
    const currentHour = new Date().getHours();


  // Generate rows for each hour from 9 am to 5 pm
  for (let hour = 9; hour <= 17; hour++) {
      let time = (hour < 12) ? hour + " AM" : (hour === 12) ? "12 PM" : (hour - 12) + " PM";

        // Set background color based on current time
        let backgroundColor;
        if (hour < currentHour) {
            backgroundColor = "gray";
        } else if (hour === currentHour) {
            backgroundColor = "red";
        } else {
            backgroundColor = "green";
        }

        $("#schedule-body").append(`<tr style="background-color: ${backgroundColor};">
                                        <td>${time}</td>
                                        <td><input type="text" class="task-input" placeholder="Enter task"></td>
                                        <td><input type="checkbox" class="completion-checkbox"></td>
                                        <td><button class="btn btn-primary save-btn">Save Task</button></td>
                                    </tr>`);
                                    }
}
$(document).ready(function() {
  // Attempt to restore task data from local storage
/*  try {
      const storedTasks = localStorage.getItem('taskData');
      if (storedTasks) {
          const tasks = JSON.parse(storedTasks);
          tasks.forEach(function(taskText, index) {
              $(`#schedule-body .task-input:eq(${index})`).val(taskText);
          });
      }
  } catch (error) {
      console.error('Error restoring task data:', error);
      // Handle the error appropriately, e.g., clear invalid data
      localStorage.removeItem('taskData');
  }
*/
  // Generate table when the page loads
  mTable();

  // Regenerate table when "Make Table" button is clicked
  $('#makeTable').click(mTable);

    // Event for the "Save Task" button click
    $(document).on("click", ".save-btn", function() {
      // Get the task text from the corresponding input field in the same row
      let taskText = $(this).closest("tr").find(".task-input").val();

       // Store the task text in local storage
       localStorage.setItem('taskData', taskText);

      alert("Saved!")
/*
  // Handle blur event for task input
  $(document).on("blur", ".task-input", function() {
      // Get all existing tasks
      let existingTasks = getTasksFromTable();

      // Store updated tasks in local storage
      localStorage.setItem('taskData', JSON.stringify(existingTasks));
      */
  });
});
