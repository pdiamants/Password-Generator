//saved vaiables and elements//
var password = document.querySelector('#password');
var button = document.querySelector('button');

//Data for password//
var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^';
var passwordLength = 15;
var passwordValue = '';

//Password Creation//
var createPassword = () => {
    passwordValue = '';

    for (var i = 0; i < passwordLength; i++) {
        var number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number, number + 1);
    }

    password.value = passwordValue;
}
//Button Effect//
button.addEventListener('click', createPassword);