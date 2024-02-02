document.getElementById("addTaskForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input value
    var inputValue = document.getElementById("taskTitle").value;

    // Do something with the input value (e.g., add it to the list)
    addTaskToList(inputValue);

    // Clear the input field
    document.getElementById("taskTitle").value = "";
});

function addTaskToList(taskTitle) {
    // Create a new list item
    var listItem = document.createElement("li");

    // Set the text content of the list item to the task title
    listItem.textContent = taskTitle;

    // Append the new list item to the task list
    const taskPreview = document.querySelector(".taskPreview");
    taskPreview.textContent = " "
    document.getElementById("taskList").prepend (listItem);
}
