<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        #todo-list {
            max-width: 400px;
            margin: 0 auto;
        }

        .task {
            display: flex;
            justify-content: space-between;
            padding: 8px;
            border-bottom: 1px solid #ccc;
        }

        .task input {
            margin-right: 10px;
        }

        #task-input {
            width: 70%;
        }

        #add-task-btn {
            width: 30%;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="todo-list">
        <h2>ToDo List</h2>
        <div>
            <input type="text" id="task-input" placeholder="Enter a new task">
            <button id="add-task-btn" onclick="addTask()">Add Task</button>
        </div>
        <div id="tasks-container"></div>
    </div>

    <script>
        // Array to store tasks
        let tasks = [];

        // Function to render tasks
        function renderTasks() {
            const tasksContainer = document.getElementById('tasks-container');
            tasksContainer.innerHTML = '';

            tasks.forEach((task, index) => {
                const taskDiv = document.createElement('div');
                taskDiv.className = 'task';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.completed;
                checkbox.addEventListener('change', () => toggleTask(index));

                const taskText = document.createElement('span');
                taskText.textContent = task.text;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteTask(index));

                taskDiv.appendChild(checkbox);
                taskDiv.appendChild(taskText);
                taskDiv.appendChild(deleteButton);

                tasksContainer.appendChild(taskDiv);
            });
        }

        // Function to add a new task
        function addTask() {
            const taskInput = document.getElementById('task-input');
            const newTaskText = taskInput.value.trim();

            if (newTaskText !== '') {
                tasks.push({ text: newTaskText, completed: false });
                taskInput.value = '';
                renderTasks();
            }
        }

        // Function to toggle task completion status
        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        }

        // Function to delete a task
        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }

        // Initial rendering of tasks
        renderTasks();
    </script>
</body>
</html>
