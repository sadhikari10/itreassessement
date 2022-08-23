const form=document.getElementById('form')
const firstname = document.getElementById('firstname')
const lastname= document.getElementById('lastname')
const password = document.getElementById('password')
const email = document.getElementById('email')

form.addEventListener('submit', (e) =>
{
    let messages = []
    if(firstname.value === ""  || firstname.value == null){
    alert('Name is required')
}

    else if(lastname.value === "" ||  lastname.value == null){
    alert('Last name is required')
}

    else if(password.value === "" ||  password.value == null){
    alert('password is required')
}

    else if(email.value === "" ||  email.value == null){
    alert('Email is required')
}
if (messages.length > 0){
    e.preventDefault()
}

})