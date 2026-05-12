const container = document.querySelector('.container');
const SignupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');

loginButton.addEventListener('click',() => {
    container.classList.add('active');
});

SignupButton.addEventListener('click', ()=> {
    container.classList.remove('active');
});