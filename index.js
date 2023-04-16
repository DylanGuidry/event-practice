const button = document.getElementById('button')
const body = document.body
const img = document.getElementById('image');
const closingButton = document.getElementById('close-button')
const image = document.getElementById('image')
const form = document.getElementById('form')
const userInput  = document.getElementById('input')
const list = document.getElementById('listing')
const toDo = document.getElementById('to-do')
const formButton = document.getElementById('sub-button')
const removeItem = document.getElementById('remove-button-engaged')
const imageSpin = document.getElementById('image-spin')

//===================================================================

//Displaying Biscuit and Removing Biscuit

let showBiskit = () => {
    img.style.display = 'block'
    body.style.backgroundColor = '#b0fba5'
    img.setAttribute('src','./images/LittleBiscuit.png');
    image.appendChild(img);
}

let close = () => {
    img.style.display = 'none'
    body.style.backgroundColor = '#FF6961'
}

closingButton.addEventListener('click', close)
button.addEventListener('click', showBiskit)

//===================================================================

//To-Do List Adding and Removing

let addingToDo = (event) => {
    event.preventDefault()
    const li = document.createElement('li')
    li.setAttribute('id', 'to-dos')
    const myInput = userInput.value
    li.innerText = myInput
    list.appendChild(li)
    userInput.value = ''
    li.setAttribute('class', 'li-list')
    formButton.innerText = 'Submitted!'
    const removeButton = document.createElement('button')
    removeButton.setAttribute('id', 'remove-button-engaged')
    removeButton.setAttribute('class', 'remove-button')
    removeButton.innerText = 'Done!'
    li.appendChild(removeButton)
}


//Since our element was not set before the list became available, we can use the event.target method to target the button
let remove = (event) => {
    if(event.target.classList.contains('remove-button')) {
        event.target.parentNode.remove()
    }
}

//We use document for our targetEvent becasue the element has not been created yet
document.addEventListener('click', remove)
form.addEventListener('submit', addingToDo)

//===================================================================

//To-Do List Fun Stuff

let hoverColorChange = () => {  
    toDo.style.backgroundColor = '#ffd8d8'
}

let submitButton = () => {
    formButton.style.backgroundColor = '#ffb0b0'
}

formButton.addEventListener('click', submitButton)
toDo.addEventListener('mouseover', hoverColorChange)

//===================================================================

// Rotating Biscuit Manipulations

let BiskitSpin = () => {
    imageSpin.style.transform = 'rotate(180deg)';
}

imageSpin.addEventListener('click', BiskitSpin)