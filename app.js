import { route } from './router';



route('/', 'home', function() {
  this.title = 'Formularz logowania';
  this.action = 'send';
  this.$on('.login-form__button', 'click', (event)=>{
    const ob = {
      username: document.querySelector('#login').value,
      password: document.querySelector('#password').value
    }
    const url = "https://zwzt-zadanie.netlify.app/api/login";

    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    fetch(url, {
        method: "post",
        headers: headers,
        body: JSON.stringify(ob)
    })
    .then(response => response.json())
    .then(response => {
        if(response.message === "Login success!"){
            let link = window.location.href;
            if(link.charAt(link.length-1) === "#"){
                link = link.slice(0, -1)
            }
            sessionStorage.setItem('login', 'success');
            location.replace(`${link}#/success`)
        }else{
            const errorDiv = document.createElement('div')
            errorDiv.className = 'error'
            let errorText = document.createTextNode('Wprowadziłeś nieprawidłowy login lub hasło!')
            errorDiv.appendChild(errorText)
            document.querySelector('#app').appendChild(errorDiv)
            sessionStorage.setItem('login', 'failed');
        }
    })

    document.querySelector('#login').value=""
    document.querySelector('#password').value=""
    event.preventDefault();
  })
});

route('/success', 'success', function() {
  if(sessionStorage.getItem('login') === 'success'){
      this.title = 'Logowanie przebiegło pomyślnie.';
  }else{
      this.title = 'Strona dostępna tylko dla zalogowanych.';
  }
});

route('*', '404', function () {});
