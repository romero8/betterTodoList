
let inputElement = document.querySelector('input')
let formElement = document.querySelector('form')
let listElement = document.querySelector('ul')
let totalTaskElement = document.getElementById('totalTasks')


let taskList = [];

function deleteItem(e){
    let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = taskList.indexOf(task);
    if(index !== -1){
        taskList.splice(index,1);
    }

    populateList();
}


function populateList(){
    listElement.innerHTML = '';
    taskList.forEach(function(item){
        let newItem = document.createElement('li');

        //Add new span for text
        let span = document.createElement('span');
        span.innerHTML= item;
        newItem.appendChild(span)
        

                
        //Add delete button
        let deleteElement = document.createElement('a');
        deleteElement.classList.add('delete');
        deleteElement.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        newItem.appendChild(deleteElement);
        deleteElement.addEventListener('click',(e)=> deleteItem(e))
        

                      
        //add Li to UL
        listElement.appendChild(newItem);
        
    })

    totalTaskElement.innerHTML = taskList.length
    

    
}

populateList();

function doesntHaveSpace(s){
    let stringWithoutSpace = s.trim();
    return stringWithoutSpace.length > 0;
}

function addTask(){
    if(inputElement.value && doesntHaveSpace(inputElement.value) && !taskList.includes(inputElement.value)){
        taskList.push(inputElement.value);
        populateList();
    }
    inputElement.value='';
}

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    addTask();
})













































