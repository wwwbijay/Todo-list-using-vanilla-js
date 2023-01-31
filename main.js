
//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(e){
  e.preventDefault();
  console.log('Hello');

  //create todo-item div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'Hey';

  


}