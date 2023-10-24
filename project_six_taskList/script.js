//Define UI variables
const form = document.getElementById("task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.getElementById("filter");
const taskInput = document.getElementById("task");

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add task event
  form.addEventListener("submit", addtask);

  //Remove task event
  taskList.addEventListener("click", removeTask);

  //Clear task event
  clearBtn.addEventListener("click", clearTasks);

  //Fliter tasks event
  filter.addEventListener("keyup", filterTasks);
}

//Get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    //create li element
    const li = document.createElement("li");

    //Add class
    li.className = "collection-item";

    //Create text node and append to li
    li.appendChild(document.createTextNode(task));

    //create new link element
    const link = document.createElement("a");

    //add class
    link.className = "delete-item secondary-content";

    //add icon html
    link.innerHTML = "<i class ='fa fa-remove'></i>";

    //append the link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);
  });
}

//Add Task function
function addtask(e) {
  if (taskInput.value === "") {
    alert("add a task");
  }

  //create li element
  const li = document.createElement("li");

  //Add class
  li.className = "collection-item";

  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //create new link element
  const link = document.createElement("a");

  //add class
  link.className = "delete-item secondary-content";

  //add icon html
  link.innerHTML = "<i class ='fa fa-remove'></i>";

  //append the link to li
  li.appendChild(link);

  //append li to ul
  taskList.appendChild(li);

  //store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = "";

  e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  //setting back to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Confirm deletion?")) {
      e.target.parentElement.parentElement.remove();

      //Remove from Local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//Remove from Local storage function
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent == task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//clear tasks
function clearTasks() {
  // if (confirm("Confirm deletion of whole list?")) {
  //   taskList.innerHTML = "";
  // }

  //faster way
  if (confirm("Confirm deletion of whole list?")) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

  //Clear from Local Storage
  clearTasksFromLocalStorage();
}

//clear tasks from local storage function
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
