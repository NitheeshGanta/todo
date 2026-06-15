const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let count = 0;

function updateCount() {
    taskCount.textContent = `Tasks: ${count}`;
}

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.classList.add("complete-btn");

    completeBtn.onclick = () => {
        span.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = () => {
        li.remove();
        count--;
        updateCount();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    taskInput.value = "";

    count++;
    updateCount();
}

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});