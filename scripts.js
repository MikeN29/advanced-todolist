const addToDoItemToProjects = document.getElementById(
  "addToDoItemToProjectsButton"
);

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dueDateInput = document.getElementById("dueDate");
const priorityInput = document.getElementById("priority");

let projects = [];

function ToDoItem(title, description, dueDate, priority, checklist) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.checklist = checklist;
  this.id = Math.floor(Math.random() * 10000);
}

addToDoItemToProjects.addEventListener(
  "click",
  function addToDoItemToProjectsButton() {
    let title = titleInput.value;
    let description = descriptionInput.value;
    let dueDate = dueDateInput.value;
    let priority = priorityInput.value;
    this.checklist = false;
    let newProject = new ToDoItem(
      title,
      description,
      dueDate,
      priority,
      checklist
    );
    projects.push(newProject);
    console.log(projects);
  },
  false
);

//when submit new to do rerender the dom

//function to update the dom with to do item

//set to do as complete

//change priorty of to do
