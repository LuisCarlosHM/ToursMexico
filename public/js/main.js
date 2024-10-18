const preload = document.querySelector('.preload');
const loginForm = document.querySelector('.login__form');
const btnCloseSession = document.querySelector('#btn-close-session');

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        preload.classList.add('hidden');
    }, 2000);
});


if(btnCloseSession){
    btnCloseSession.addEventListener('click', async function(e) {
        e.preventDefault();
        const response = await fetch('/api/v1/users/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status == 200){
            window.location.href = '/';   
        }
    });
}


if(loginForm){
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        
        const response = await fetch('/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        if (response.status == 200){
            window.location.href = '/';   
        }
    });
}