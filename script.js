document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

// clearError()

var nameFieldValue = document.getElementById('name').value
console.log(nameFieldValue)

// check and make sure name is not empty
if (nameFieldValue === '') {
    showEmptyNameError()
} else {
    var validName = document.getElementById('name-field')
    validName.classList.add('input-valid')
}
})

function showEmptyNameError() {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    errorDiv.innerText = 'cannot be blank'

    var field = document.getElementById('name')
    field.parentElement.appendChild(errorDiv)
    field.parentElement.classList.add('input-invalid')
}

