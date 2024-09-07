let taskCountIndex = 0;
const listofTasks = document.getElementById("listOfTasks");
const tasks = [];
const noteContent = document.getElementById("noteContent");
const taskHeading = document.querySelector(".taskHeading");
const addTaskForm = document.querySelector("#taskForm");
const markAsCompleteButton = document.querySelector("#markAsCompleteButton");
const defaultText=document.getElementById("defaultText");
addTaskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const namefield = document.getElementById("addTaskInput");
    const name = namefield.value;
    const trimmedName = name.trim();
    if (trimmedName) {
        defaultText.style.visibility="hidden";
        addTask(trimmedName);
        namefield.value = ''; // Clear the input field after adding the task
    }
    console.log("Task added via form submit");
});

function addTask(name) {
    console.log("Adding new task");

    const newTask = {
        taskName: name,
        id: taskCountIndex,
        Notes: "",
    };

    // Adding new task to the array of all tasks
    tasks.push(newTask);

    // Creating a new list item (li)
    const task = document.createElement("li");
    task.textContent = name;
    task.id = `${taskCountIndex}`; 
    task.className = "taskItems"; // Set a unique ID for the task

    // Appending the task to the list
    listofTasks.appendChild(task);

    // Incrementing the task count index
    taskCountIndex++;

    console.log("Current tasks:", tasks);
}

// Attach event listener to the parent element
listofTasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('taskItems')) {
        const indexofElement = event.target.id;

        // If there's an existing task being edited, store its content
        if (currentTaskIndex !== null) {
            storeContent(currentTaskIndex);
        }

        displayProperties(indexofElement);
        noteContent.contentEditable = true;
        currentTaskIndex = indexofElement; // Set the current task index

        // Remove previous event listener and add a new one
        markAsCompleteButton.removeEventListener('click', markAsCompleteListener);
        markAsCompleteButton.addEventListener('click', markAsCompleteListener.bind(null, indexofElement));
    }
});

let currentTaskIndex = null; // Keep track of the currently selected task

function displayProperties(index) {
    noteContent.textContent = tasks[index].Notes;
    taskHeading.textContent = "Task: " + tasks[index].taskName;
}

function markAsCompleteListener(index) {
    markAsComplete(index);
    setToDefault();
}

function markAsComplete(index) {
    const taskElement = document.getElementById(`${index}`);
    if (taskElement) {
        taskElement.classList.add("strikeOff");
    }
    // Optionally remove the task from the array
    tasks[index] = null; // Marking as null; adapt as needed for your logic
    console.log("Task marked as complete");
    console.log("Remaining tasks:", tasks);
}

function setToDefault() {
    taskHeading.classList.add("default");
    noteContent.classList.add("default");
    noteContent.contentEditable = false;
    taskHeading.textContent = "Task: Click on a Task to view.";
    noteContent.textContent = "You can view and edit the Notes of the Selected Task here...";
}

window.onload = function() {
    setToDefault();
};

function storeContent(index) {
    const note = noteContent.innerText; // Use innerText for plain text content
    if (tasks[index]) { // Ensure the task exists
        tasks[index].Notes = note;
    }
    console.log("Notes have been updated");
    console.log("Current tasks:", tasks);
}
