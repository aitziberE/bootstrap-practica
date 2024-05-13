const userName = document.getElementById('inpName')
const userMail = document.getElementById('inpMail')
const userPasswd = document.getElementById('inpPasswd')
const userRepeatPasswd =document.getElementById('inpRepeatPasswd')
const messageSpace =document.getElementById('messageSpace')
const form = document.querySelector('.form');


const btnSubmit=document.getElementById('btnSubmit')
btnSubmit.addEventListener('click', onSubmit)

let message
let i=0

function onSubmit(event){
    event.preventDefault()

    if(validateInput()){
        
        localStorage.setItem(`user ${i}`, JSON.stringify({
            name: userName.value,
            mail: userMail.value,
            passwd: userPasswd.value
        }))
        message = "Usuario creado correctamente"
        messageSpace.innerHTML=`<div class="alert alert-success" role="alert">${message}</div>`
        setTimeout(function () {
            messageSpace.innerHTML=``
            window.location.href = './user.html'
        }, 2000)
        i++
    }
    else{
        messageSpace.innerHTML=`<div class="alert alert-primary" role="alert">${message}</div>`
        setTimeout(function(){
            messageSpace.innerHTML=``
        }, 2000)
    }
    form.reset()
}

function validateInput(){
    if(userName.value!=="" && userMail.value!=="" && userPasswd.value!=="" && userRepeatPasswd.value!==""){
        if(validateMail() && validatePasswdMatch()){
            return true
        }
        console.log(message)
        return false
    }
    message="Debe rellenar todos los campos"
    //console.log(message)
    return false
}
function validateMail(){
    const emailPattern = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,}$/
    if(emailPattern.test(userMail.value)){
        return true
    }
    message="Formato de correo incorrecto"
    return false 
}
function validatePasswdMatch(){
    if(userPasswd.value===userRepeatPasswd.value){
        return true
    }
    message="La contraseña debe coincidir"
    return false
}