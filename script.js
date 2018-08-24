document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    clearError()

var nameFieldValue = document.getElementById('name').value
console.log(nameFieldValue)

// check and make sure name is not empty

var validName = document.getElementById('name-field')

if (nameFieldValue === '') {
    showEmptyNameError()
    validName.classList.remove('input-valid')
    validName.classList.add('input-invalid')
} else {
    validName.classList.add('input-valid')
}
})

function showEmptyNameError() {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('errorDiv')
    errorDiv.innerText = 'cannot be blank'

    var field = document.getElementById('name')
    field.parentElement.appendChild(errorDiv)
    // field.parentElement.classList.add('input-invalid')
}

// clear function

function clearError() {
    var errorMsgs = document.querySelectorAll('.errorDiv')
    for (var errorMsg of errorMsgs) {
        errorMsg.remove()
    }
 }
 

//CAR FIELD

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    clearError()

var carFieldValue = document.getElementById('car-year').value


// check and make sure field is not empty

var validCar = document.getElementById('car-year')

if (carFieldValue === '') {
    showEmptyCarError()
    validCar.classList.remove('input-valid')
    validCar.classList.add('input-invalid')
} else {
    validCar.classList.add('input-valid')
}
})

function showEmptyCarError() {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('errorDiv')
    errorDiv.innerText = 'cannot be blank'

    var field = document.getElementById('car-year')
    field.parentElement.appendChild(errorDiv)
    // field.parentElement.classList.add('input-invalid')
}

// clear function

function clearError() {
    var errorMsgs = document.querySelectorAll('.errorDiv')
    for (var errorMsg of errorMsgs) {
        errorMsg.remove()
    }
 }

