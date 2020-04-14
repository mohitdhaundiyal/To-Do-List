//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event Listeners
todoButton.addEventListener("click", addTodo);
//Functions
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //ToDo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //CHECK MARK BUTTON
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class ="fa fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //CHECK trash BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class ="fa fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);
}