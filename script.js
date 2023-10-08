const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem() {
  const taskText = taskInput.value;
  if (taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';

    // Mark task as completed when clicked
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    // Delete task when delete button is clicked
    const deleteButton = li.querySelector('.deleteButton');
    deleteButton.addEventListener('click', function(event) {
      event.stopPropagation();
      li.remove();
    });
  }
}

// Add event listener to the add button
addButton.addEventListener('click', createTaskItem);

// Add event listener to the input field for Enter key press
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    createTaskItem();
  }
});
