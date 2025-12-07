const app = document.getElementById("app");

function renderApp(){
    app.innerHTML = `
        <div class="container1">
        <img src="foto2.jpeg" width="500px">
            Me perdonas?
        </div>
    `;
}

setTimeout(()=>{
    renderApp();
}, 1)
