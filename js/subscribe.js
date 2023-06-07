const form = document.querySelector('.content-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const countrySelect = document.getElementById('select-country');
const termCheckbox = document.getElementById('term');
const genderRadios = document.getElementsByName('gender');
const successMessage = document.getElementById('success-message');
const successHeading = successMessage.querySelector('h2');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        showSuccessMessage();
    }
});

function showSuccessMessage() {
    successHeading.style.display = 'block';
}

function validateForm() {
    let isValid = true;

    clearErrorMessages();

    if (!validateName()) {
        displayErrorMessage(nameInput, 'Please enter your name ( characters >= 5)');
        isValid = false;
    }

    if (!validateEmail()) {
        displayErrorMessage(emailInput, 'Please enter a valid email address');
        isValid = false;
    }

    if (!validatePhone()) {
        displayErrorMessage(phoneInput, "Phone number starts with '+ calling code'");
        isValid = false;
    }

    if (!validateCountry()) {
        displayErrorMessage(countrySelect, 'Please select a country');
        isValid = false;
    }

    if (!validateGender()) {
        const genderContainer = document.getElementById('select-gender');
        displayErrorMessage(genderContainer, 'Please select a gender');
        isValid = false;
    }

    if (!validateTerms()) {
        displayErrorMessage(termCheckbox, 'Please agree to the terms and conditions');
        isValid = false;
    }

    return isValid;
}

function validateName() {
    const nameValue = nameInput.value.trim();
    return nameValue.length >= 5;
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        return false;
    }
    return emailValue.includes('@') && emailValue.includes('.');
}

function validatePhone() {
    const phoneValue = phoneInput.value.trim();
    return phoneValue.startsWith('+');
}

function validateCountry() {
    const countryValue = countrySelect.value;
    return countryValue !== '';
}

function validateGender() {
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            return true;
        }
    }
    return false;
}

function validateTerms() {
    return termCheckbox.checked;
}

function displayErrorMessage(inputElement, message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
    errorElement.style.color = 'red';

    if (inputElement.parentNode.id === 'select-gender') {
        inputElement.parentNode.parentNode.appendChild(errorElement);
    } else {
        inputElement.parentNode.appendChild(errorElement);
    }
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.remove();
    });
}
