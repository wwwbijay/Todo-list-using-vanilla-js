
//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(e){
  e.preventDefault();

  //create todo-item div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'Todo list item';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //Check button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  //Trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);
}