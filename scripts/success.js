const success = () =>{
    document.querySelector('#app').innerHTML =`
    <div id="success" class="login">
    <h1><%= title %></h1>
    </div>
    `
}

export default success