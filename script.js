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
    } else {
        return false;
    }
}

function validasiEmail(event) {
    let mailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (event.value.match(mailCheck)) {
        return true;
    } else if (event.value == '') {
        event.nextElementSibling.nextElementSibling.innerHTML = 'Please provide an email';
        event.nextElementSibling.style.display = 'block';
        return false;
    } else {
        event.nextElementSibling.nextElementSibling.innerHTML = 'Looks like this is not an email';
        event.nextElementSibling.style.display = 'block';
        return false;
    }
}

function validasiNama(event) {
    if (event.value == '') {
        event.nextElementSibling.nextElementSibling.innerHTML = event.placeholder + ' cannot be empty';
        event.nextElementSibling.style.display = 'block';
        return false;
    } else {
        return true;
    }
}

function validasiPassword(event) {
    let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?-_&])[A-Za-z\d@$#-_!%*?&]{8,}$/
    if (event.value.match(passCheck)) {
        return true;
    } else if (event.value == '') {
        console.log(event.value)
        event.nextElementSibling.nextElementSibling.innerHTML = pass.placeholder + ' cannot be empty';
        event.nextElementSibling.style.display = 'block';
        return false;
    } else {
        event.nextElementSibling.nextElementSibling.innerHTML = pass.placeholder + ' is not correct';
        event.nextElementSibling.style.display = 'block';
    }
}