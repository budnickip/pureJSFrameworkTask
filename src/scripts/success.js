const success = () =>{
    document.querySelector('#app').innerHTML =`
    <div id="success">
        <nav class="navigation">
            <a class="navigation__link" href="#">← Powrót do logowania</a>
        </nav>
        <div class="success">
             <h1 class="success__header"><%= title %></h1>
        </div>
    </div>
    `
}

export default success