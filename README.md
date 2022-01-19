# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Screenshot](./design/desktop-preview.jpg)


### Links

- Solution URL: [Github repo](https://github.com/hade21/intro-component-with-signup-form.git)
- Live Site URL: [Github page](https://hade21.github.io/intro-component-with-signup-form.git)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned


```html
<div class="form-wrapper">
    <form action="" name="formid" onsubmit="return checkAll()">
        <ul>
            <li>
                <input type="text" class="text-form-first" placeholder="First Name">
                <img src="./images/icon-error.svg" class="icon-error">
                <p class="error firstName"></p>
            </li>
            <li>
                <input type="text" class="text-form-last" placeholder="Last Name">
                <img src="./images/icon-error.svg" class="icon-error">
                <p class="error lastName"></p>
            </li>
            <li>
                <input type="text" class="email-form" placeholder="Email Address">
                <img src="./images/icon-error.svg" class="icon-error">
                <p class="error email"></p>
            </li>
            <li>
                <input type="password" class="pass-form" placeholder="Password">
                <img src="./images/icon-error.svg" class="icon-error">
                <p class="error password"></p>
            </li>
            <li>
                <button type="submit" value="submit">CLAIM YOUR FREE TRIAL</button>
            </li>
            <p class="term">By clicking the button, you are agreeing to our <b>Terms and Services</b></p>
        </ul>
    </form>
</div>
```

```js
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
```

## Author

- Frontend Mentor - [Rohman](https://www.frontendmentor.io/profile/hade21)
- LinkedIn - [Muhammad Abdurrohman](https://www.linkedin.com/in/muhammad-a-589675141/)

