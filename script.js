const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // Ignore empty tasks

  const listItem = document.createElement("li");

  // Task text with toggle complete functionality
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = ""; // Clear the input field
}

// Add task on button click
addTaskButton.addEventListener("click", addTask);

// Add task on pressing "Enter" key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
