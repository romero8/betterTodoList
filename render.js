function populateList() {

    let listElement = document.querySelector('ul')
    let totalTaskElement = document.getElementById('totalTasks')

    listElement.innerHTML = '';
    taskList.forEach(function (item) {
        let newItem = document.createElement('li');

        //Add new input for text
        let inputTaskElement = document.createElement('input');
        inputTaskElement.type = "text"
        inputTaskElement.value = item;
        inputTaskElement.setAttribute("readonly", "readonly")
        newItem.appendChild(inputTaskElement)



        //Add delete button
        let deleteElement = document.createElement('a');

        deleteElement.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        newItem.appendChild(deleteElement);
        deleteElement.addEventListener('click', () => {

            let index = taskList.indexOf(item)

            if (item !== -1) {
                taskList.splice(index, 1)
            }
            populateList()
        })


        //Add Change button
        let changeElement = document.createElement('a');
        changeElement.innerHTML = '<i class="fa-solid fa-pen"></i>';
        newItem.appendChild(changeElement);
        changeElement.addEventListener('click', () => {
            if (inputTaskElement.value.length !== 0) {
                inputTaskElement.removeAttribute("readonly")
                inputTaskElement.focus()
            }

        })


        //Add Confirm button
        let confirmElement = document.createElement('a');
        confirmElement.innerHTML = '<i class="fa-solid fa-check"></i>';
        newItem.appendChild(confirmElement);
        confirmElement.addEventListener('click', () => {

            let index = taskList.indexOf(item)

            if (inputTaskElement.value.length !== 0) {
                inputTaskElement.setAttribute("readonly", "readonly")
                taskList[index] = inputTaskElement.value
            }

        })



        //add Li to UL
        listElement.appendChild(newItem);

    })

    totalTaskElement.innerHTML = taskList.length



}
populateList()