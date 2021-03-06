const taskInput = document.querySelector("#task");
const form = document.querySelector('#task-form');  //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection');  //The ul
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const reloadIcon = document.querySelector('.fa');
const sortSelect = document.querySelector('#sort')



// Add Event Listener  [Form , clearBtn and filter search input ]

form.addEventListener('submit', addNewTask)
clearBtn.addEventListener('click', clearAllTasks)
filter.addEventListener('keyup', filterTasks )
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage)
sortSelect.addEventListener('change', sortTasks)



function addNewTask(e) {
    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);

    // making the input field empty
    taskInput.value = ""


    // adding date object for sorting
    const date = new Date().getTime();
    li.dataset.date = date

    sortTasks()

}

function clearAllTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}

function filterTasks() {
    let keyWord = filter.value;
    let collection_list = document.querySelectorAll('.collection-item')
    

    collection_list.forEach(element => {
        
        if (element.firstChild.textContent.indexOf(keyWord)) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}




function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}


function reloadPage() {
    location.reload()
}


function sortTasks() {
    list_of_dates = []
    let collection_list = document.querySelectorAll('.collection-item')
    collection_list.forEach(task => {
        list_of_dates.push(task.dataset.date)
    });
    
    list_of_dates.sort()

    if (sortSelect.value == '2') {
        list_of_dates.reverse()
    }

    clearAllTasks()
    for (let i = 0; i < list_of_dates.length; i++) {
        for (let j = 0; j < collection_list.length; j++) {
            if (collection_list[j].dataset.date == list_of_dates[i]) {
                taskList.appendChild(collection_list[j])
            }
            
        }
    
    }

}