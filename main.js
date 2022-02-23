const todoListForm = document.querySelector('.input-box'); // 할 것 제출
const InputContent = document.querySelector('input'); // 추가 할 내용


todoListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (InputContent.value) {
        // InputContent.value에 내용이 담겼으면
        const todo = document.createElement('div');
        const todoContent = document.createElement('span');
        todoContent.textContent = InputContent.value;
        // div 안 todoContent에 input 내용을 넣어줌
        todoContent.classList.add('todolist-content');
        todo.append(todoContent);

        todoContent.addEventListener('dblclick',


        not yet ...