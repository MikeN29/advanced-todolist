let projects = [];

function ToDoItem(title, description, dueDate, priority, checklist) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.checklist = checklist;
  this.id = Math.floor(Math.random() * 10000);
}

addToDoItemToLibraryButton.addEventListener(
  "click",
  function addToDoItemToLibraryButton() {
    let title = titleInput.value;
    let description = description.value;
    let dueDate = dueDate.value;
    let priority = priority.value;
    this.checklist = false;
    let newProject = new ToDoItem(
      title,
      description,
      dueDate,
      priority,
      checklist
    );
    projects.push(newProject);
    console.log(mylibrary);
  },
  false
);
