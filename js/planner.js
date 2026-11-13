// Academic planner: tasks are stored in an array and displayed in the page.
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDate = document.getElementById("task-date");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const plannerMessage = document.getElementById("planner-message");
const clearCompletedButton = document.getElementById("clear-completed");

let tasks = JSON.parse(localStorage.getItem("studentPlannerTasks") || "[]");

function saveTasks() {
  localStorage.setItem("studentPlannerTasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  const remaining = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = `${remaining} remaining / ${tasks.length} total`;

  if (tasks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = "No tasks yet. Add your first task.";
    taskList.appendChild(empty);
    return;
  }

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `task-item${task.completed ? " completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.title} as complete`);
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const details = document.createElement("div");
    details.className = "task-text";
    const title = document.createElement("span");
    title.textContent = task.title;
    details.appendChild(title);

    if (task.dueDate) {
      const date = document.createElement("span");
      date.className = "task-date";
      date.textContent = `Due: ${task.dueDate}`;
      details.appendChild(date);
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-task";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${task.title}`);
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    item.append(checkbox, details, deleteButton);
    taskList.appendChild(item);
  });
}

function addTask(title, dueDate) {
  tasks.push({ id: Date.now(), title, dueDate, completed: false });
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (!title) {
    plannerMessage.textContent = "Please enter a task description.";
    return;
  }

  addTask(title, taskDate.value);
  taskForm.reset();
  plannerMessage.textContent = "Task added successfully.";
  taskInput.focus();
});

clearCompletedButton.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
  plannerMessage.textContent = "Completed tasks cleared.";
});

renderTasks();
