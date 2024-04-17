const dialog = document.querySelector('dialog')
const openL = document.getElementById('open')

document.getElementById('loginBtn').addEventListener('click', login)
function login() {
    let email = document.getElementById('email').value
    let pwd = document.getElementById('password').value

    person = {
        user: 'William',
        password: '123'
    }

    if (email == person.user && pwd == person.password) {
        dialog.close()
        document.querySelector('.popup-text').innerHTML = `Wecome Back ${person.user}`
        const popup = document.querySelector('.popup')
        const loginIc = document.querySelector('#login-icon')
        popup.style.animation = 'pop 7s ease'
        openL.style.display = 'none'
        loginIc.style.display = 'block'
        loginIc.style.marginLeft = '-30px'
    }
     else
    {
        document.getElementById('erroMsg').innerHTML = 'Username Or Password Are Incorrect'
    }

    if (email == '' && pwd == '') {
        document.getElementById('erroMsg').innerHTML = 'Username Or Password Are Empty'
    }
}

openL.addEventListener('click', () => {
  dialog.showModal();
});

dialog.addEventListener('click', (event) => {
    if (event.target == dialog) {
        dialog.close()
    }
});
