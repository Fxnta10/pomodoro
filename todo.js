let taskCountIndex = 0;
const listofTasks = document.getElementById("listOfTasks");
const tasks = [
    {
        taskName: "Do your Homework of DEVC.",
        status: "Pending",
        Notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];

const addTaskForm = document.querySelector("#taskForm");

addTaskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const namefield = document.getElementById("addTaskInput");
    const name = namefield.value;
    const trimmedName = name.trim();
    if (trimmedName) {
        addTask(trimmedName);
        namefield.value = ''; // Clear the input field after adding the task
    }
    console.log("into the event listener");
});

function addTask(name) {
    console.log("into the function");

    const newTask = {
        taskName: name,
        id:taskCountIndex,
        Notes: "",
    };``

    // Adding new task to the array of all tasks
    tasks.push(newTask);

    // Creating a new list item (li)
    const task = document.createElement("li");
    task.textContent = name;
    task.id = `${taskCountIndex}`; 
    task.className="taskItems";// Set a unique ID for the task

    // Appending the task to the list
    listofTasks.appendChild(task);

    // Incrementing the task count index
    taskCountIndex++;

    console.log(tasks);
}

// Select all elements with the class 'taskItems'
const taskItems = document.querySelectorAll(".taskItems");

// Iterate over each selected element
taskItems.forEach(item => {
    // Add an event listener for the 'click' event
    item.addEventListener('click', () => {
        console.log("clicked on task");
        // Add the 'strikeOff' class to the clicked element
        if(item.classList.contains("strikeOff")){
            console.log("already striked off");
        }else{
            item.classList.add("strikeOff");
        }
    });
});

