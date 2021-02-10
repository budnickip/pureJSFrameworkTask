import { route } from '../router';


const home = () =>{
   document.querySelector('#app').innerHTML =`<div id="home" class="login">
   <h1><%= title %></h1>
   <form class="login-form">
     <input id="login" class="login-form__input" type="text" placeholder="Login" name="login" required>
     <input id="password" class="login-form__input" type="password" placeholder="Password" name="password" required>
     <button class="login-form__button" type="submit"><%= action %></button>
   </form>
 </div>`

}

export default home