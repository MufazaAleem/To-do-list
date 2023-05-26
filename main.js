function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  var task = document.createElement("li");
  task.textContent = taskInput.value;
  task.addEventListener("click", toggleTask);

  var deleteButton = document.createElement("span");
  deleteButton.textContent = "X";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", deleteTask);

  task.appendChild(deleteButton);
  taskList.appendChild(task);

  taskInput.value = "";
}

function toggleTask() {
  this.classList.toggle("completed");
}

function deleteTask(event) {
  event.stopPropagation();
  this.parentNode.remove();
}
