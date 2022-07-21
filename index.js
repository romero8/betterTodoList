let inputElement = document.querySelector('input')
let formElement = document.querySelector('form')


let taskList = JSON.parse(localStorage.getItem("taskList")) || [];





function addTask() {
    if (inputElement.value && doesntHaveSpace(inputElement.value) && !taskList.includes(inputElement.value)) {
        taskList.push(inputElement.value);
        localStorage.setItem("taskList", JSON.stringify(taskList))
        populateList();
    }
    inputElement.value = '';
}

formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
})