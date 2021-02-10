const success = () =>{
    document.querySelector('#app').innerHTML =`
    <div id="success" class="login">
        <nav class="navigation">
            <a class="navigation__link" href="#">← Powrót do logowania</a>
        </nav>
        <h1><%= title %></h1>
    </div>
    `
}

export default success