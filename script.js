const email = document.querySelector('.email-form');
const firstName = document.querySelector('.text-form-first');
const lastName = document.querySelector('.text-form-last');
const pass = document.querySelector('.pass-form')

function checkAll() {
    validasiNama(firstName);
    validasiNama(lastName);
    validasiEmail(email);
    validasiPassword(pass);
    if (validasiNama == true && validasiEmail == true && validasiPassword == true) {
        return true;
    }
}

function validasiEmail() {
    let mailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailCheck)) {
        return true;
    } else {
        email.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}

function validasiNama(event) {
    if (event.value == '') {
        event.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    } else {
        return true;
    }
}

function validasiPassword(event) {
    let passCheck = /[A-Za-z0-9*@#$%&]/
    if (event.value.length >= 8 && event.value == passCheck) {
        return true;
    } else {
        pass.nextElementSibling.nextElementSibling.style.display = 'block'
    }
}