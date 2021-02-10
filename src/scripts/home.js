const home = () =>{
   document.querySelector('#app').innerHTML =`
   <div id="home">
   <div class="login">
    <h1 class="login__header"><%= title %></h1>
    <div class="form">
    <form class="login-form">
        <input id="login" class="login-form__input" type="text" placeholder="Login" name="login" required>
        <input id="password" class="login-form__input" type="password" placeholder="Password" name="password" required>
        <button class="login-form__button" type="submit"><%= action %></button>
    </form>
    </div>
    </div>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
   </div>`
}

export default home