// part1 start
// Function to generate a random quote and display it
function generateQuote() {
    var quotes = [
        "Your talents will be recognized and suitably rewarded.",
        "He who hurries cannot walk with dignity.",
        "Your success in life must be earned with earnest efforts.",
        "You love peace.",
        "A friend asks only for your time and not your money.",
        "You will soon inherit a piece of land.",
        "Your luck is about to change.",
        "Things will soon go your way.",
        "He who stands on toilet is high on pot.",
        "Everybody is ignorant, only on different subjects.",
        "Fortune favors the brave.",
        "There is nothing permanent except change.",
        "You haven't failed until you give up.",
        "True wisdom comes not from knowledge, but from understanding.",
        "Patience is the companion of wisdom.",
        "A journey of a thousand miles begins with a single step.",
        "Happiness is not something ready-made; it comes from your actions.",
        "Opportunities multiply as they are seized.",
        "A calm sea never made a skilled sailor.",
        "Kindness is a language that the deaf can hear and the blind can see.",
        "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "The best way to predict the future is to create it.",
        "What you do today can improve all your tomorrows."
    ];    
    
    var length = quotes.length;
    // Generate a random index to select a quote
    var number = Math.floor(Math.random() * length);
    document.getElementById('quote').innerText = quotes[number];
  }
  
  // Function to change the styling of the quote container based on the selected box
  function changeStyle(box) {
    if (box === 'box1') {
        document.getElementById('quote-container').style.color = 'blue';
        document.getElementById('quote-container').style.borderColor = 'blue';
        document.getElementById('quote-container').style.backgroundColor = 'greenyellow';
        document.getElementById('quote-container').style.fontSize = '14px';
        document.getElementById('quote-container').style.fontFamily = 'Serif';
    }
    else if (box === 'box2') {
        document.getElementById('quote-container').style.color = 'red';
        document.getElementById('quote-container').style.border = 'red';
        document.getElementById('quote-container').style.backgroundColor = 'orange';
        document.getElementById('quote-container').style.fontSize = '16px';
        document.getElementById('quote-container').style.fontFamily = 'Arial';
    }
    else if (box === 'box3') {
        document.getElementById('quote-container').style.color = 'yellow';
        document.getElementById('quote-container').style.borderColor = 'yellow';
        document.getElementById('quote-container').style.backgroundColor = 'skyblue';
        document.getElementById('quote-container').style.fontSize = '12px';
        document.getElementById('quote-container').style.fontFamily = 'Lucida Sans';
    }
    else {
        document.getElementById('quote-container').style.color = 'purple';
        document.getElementById('quote-container').style.borderColor = 'purple';
        document.getElementById('quote-container').style.backgroundColor = 'goldenrod';
        document.getElementById('quote-container').style.fontSize = '18px';
        document.getElementById('quote-container').style.fontFamily = 'Times New Romans';
    }
  }
  
  // part2 start     
  // Variables to manage the timer
  let time = 0;
  let interval = null;
  
  // Function to start the timer, increasing time every 3 seconds up to 30 seconds
  function startTimer() {
    if (!interval && time < 30) {
        interval = setInterval(() => {
            if (time < 30) {
                time += 3;
                document.getElementById("display").innerText = time + " sec";
            }
            if (time >= 30) {
                clearInterval(interval);
                interval = null;
            }
        }, 3000);
    }
  }
  
  // Function to stop the timer
  function stopTimer() {
    clearInterval(interval);
    interval = null;
  }
  
  // Function to reset the timer
  function resetTimer() {
    clearInterval(interval);
    interval = null;
    time = 0;
    document.getElementById("display").innerText = "0 sec";
  }
  
  // part3 start
  // Load saved tasks when the page is loaded
  document.addEventListener("DOMContentLoaded", loadTasks);
  
  // Function to add a new task
  function addTask() {
  const input = document.getElementById("taskText");
  const taskText = input.value.trim();
  if (!taskText) return;
  
  const task = { text: taskText, completed: false };
  saveTask(task);
  input.value = "";
  }
  
  // Function to save a task in localStorage
  function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.unshift(task); // Add new task to the beginning of the list
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  }
  
  // Function to load tasks from localStorage
  function loadTasks() {
  renderTasks();
  }
  
  // Function to render tasks on the page
  function renderTasks() {
  const taskList = document.getElementById("taskItems");
  taskList.innerHTML = "";
  
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.className = "checkbox";
    checkbox.onchange = () => toggleTask(index);
  
    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "task-text";
    if (task.completed) span.classList.add("completed");
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTask(index);
  
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
  }
  
  // Function to toggle the completion status of a task
  function toggleTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  }
  
  // Function to delete a task from the list
  function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  }