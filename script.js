document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });
        
        taskItem.appendChild(deleteButton);
        document.getElementById('tasks').appendChild(taskItem);
        
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});