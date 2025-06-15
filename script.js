// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create <li> element for task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add click event listener to remove button
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

        // Append remove button to task item, then add to list
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
