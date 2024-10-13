const inputField = document.getElementById('inputField');
const errorMessage = document.getElementById('errorMessage');

document.getElementById('myForm').addEventListener('submit', function(event) {

    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    const inputValue = inputField.value;

    if (!alphanumericPattern.test(inputValue)) {
      errorMessage.textContent = 'Error: Input must be alphanumeric.';


        event.preventDefault();

    } else {
      errorMessage.textContent = '';

      
        alert('Form submitted successfully!');
    }
});