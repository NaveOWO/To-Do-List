const todoListForm = document.querySelector('.input-box');
const inputText = document.querySelector('input');
const todoList = document.querySelector('#todo-list')
const doneList = document.querySelector('#done-list')

function init() {
    todoListForm.addEventListener('submit', creatTodo);
}

function creatTodo(event) {
    event.preventDefault()
    const todo = inputText.value;
    if (todo) {
        writeTodo(todo);
        inputText.value = "";
    }
}

function writeTodo(todo) {
    // const li = document.createElement('li');
    const li = document.createElement('li')
    const span = document.createElement('span');
    const check = document.createElement('input');
    check.setAttribute('type','checkbox');
    check.setAttribute('id','toDoCheck')
    // li.appendChild(div)
    li.appendChild(span)
    li.appendChild(check)
    span.textContent = todo
    todoList.appendChild(li)
    check.addEventListener('click', toDoCheck)
}


function toDoCheck(event) {
    event.preventDefault()
    const checkBox = event.target.parentNode;
    const check = event.target
    doneList.appendChild(checkBox)
    check.addEventListener('click', toDoDelete);
}

function toDoDelete(event) {
    event.preventDefault()
    const checkBox = event.target.parentNode;
    checkBox.remove();
}
init();