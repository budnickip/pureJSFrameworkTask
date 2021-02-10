export const validateLogin = () =>{
    const login = document.querySelector('#login')
    if(login.value.length == 0){
        if(!login.classList.contains('loginInputError')){
            login.classList.add('loginInputError')
            let newError = createError('loginTextError', "To pole nie może być puste!")
            login.parentElement.insertBefore(newError, login.nextElementSibling)
        }
        return false
    }else{
        login.classList.remove('loginInputError')
        login.value = login.value.trim()
        document.querySelector('.loginTextError') ? document.querySelector('.loginTextError').remove() : ''
        return true
    }
}

export const validatePassword = () =>{
    const password = document.querySelector('#password')

    if(password.value.length == 0){
        if(!password.classList.contains('passwordInputError')){
            password.classList.add('passwordInputError')
            let newError = createError('passwordTextError', "To pole nie może być puste!")
            password.parentElement.insertBefore(newError, password.nextElementSibling)
        }
        return false
    }else{
        password.classList.remove('passwordInputError')
        password.value = password.value.trim()
        document.querySelector('.passwordTextError') ? document.querySelector('.passwordTextError').remove() : ''
        return true
    }
}



const createError = (className, text) => {
    let newError = document.createElement('p')
    newError.className = className
    newError.appendChild(document.createTextNode(text))
    return newError
}