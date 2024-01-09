function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const li = document.createElement('li');
        li.innerText = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
    } else {
        alert('Введите задачу!');
    }
}
