const app = document.getElementById("app");

function renderApp(){
    app.innerHTML = `
        <div class="container1">
        <img src="https://drive.google.com/thumbnail?id=1qvcWttCiGbPp_7TZTxlKQUF3emhJ_McK" width="500px">
            Me perdonas?
        </div>
    `;
}

setTimeout(()=>{
    renderApp();
}, 1)
