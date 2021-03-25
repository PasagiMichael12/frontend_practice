/*
1.)Add a label to each of the input fields: username, password, confirm password.
2.)Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
3.) Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
4.)Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
5.) When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
6.)Add a required validation to each input that shows an error message next to the entry if it does not have any text entered
*/

// const usernameInput = document.querySelector('#username');
// const passwordInput = document.querySelector('#password');
// const confirmInput = document.querySelector('#confirm_pass');
// const firstName = document.querySelector('#firstName');
// const lastName = document.querySelector('#lastName');
// const age = document.querySelector('#age');
// const address = document.querySelector('#address');
// const gender = document.querySelector('#gender');
// const bday = document.querySelector('#bday');

// firstName.insertAdjacentHTML('beforeBegin', '<label for="username">FirstName: </label>');
// lastName.insertAdjacentHTML('beforeBegin', '<label for="username">LastName: </label>');
// address.insertAdjacentHTML('beforeBegin', '<label for="username">Address: </label>');
// age.insertAdjacentHTML('beforeBegin', '<label for="username">Age: </label>');
// bday.insertAdjacentHTML('beforeBegin', '<label for="username">Birthday: </label>');
// gender.insertAdjacentHTML('beforeBegin', '<label for="username">Gender: </label>');
// usernameInput.insertAdjacentHTML('beforeBegin', '<label for="username">Username: </label>');
// passwordInput.insertAdjacentHTML('beforeBegin', '<label for="username">Password: </label>');
// confirm_pass.insertAdjacentHTML('beforeBegin', '<label for="username">Confirm Password: </label>');

const _handleOnBlur = (e) => {

    const errorMessage = document.querySelector(`span.${e.id}`);
    const matchs = document.querySelector(`span.${match.id}`)
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const confirmInput = document.querySelector('#confirm_pass');
    const button = document.querySelector('#submit');

    if(e.validity.valid) {
        errorMessage.classList.add('d-none');
    }
    else {
       errorMessage.classList.remove('d-none');
    }

    errorMessage.classList[e.validity.valid ? 'add' : "remove"]('d-none');
    button.disabled = usernameInput.validity.valueMissing || passwordInput.validity.valueMissing || confirmInput.validity.valueMissing;

    confirmInput.value !== passwordInput.value ? matchs.classList.remove('d-none') : matchs.classList.add('d-none');

}

const button = document.querySelector('#submit');
    button.addEventListener('click',(e) => {
        e.preventDefault();
        alert(`Created Successfully`);
        window.location.href = "index.html";   
});






