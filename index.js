const app = document.getElementById("app");

function crearModal(){
    const fondo = document.createElement("div");
    fondo.style.cssText = `
        top: 0;
        padding: 0;
        position: fixed;
        background-color: transparent;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(6px);
        animation-name: fondoSpawn;
        animation-duration: 0.5s;
    `;

    const modal = document.createElement("div");
    modal.style.cssText = `
        margin: 4vh auto;
        position: relative;
        justify-content: center;
        justify-items: center;
        align-items: center;
        text-align: justify;
        padding: 16px;
        background: linear-gradient(45deg, rgba(255,0,0, 0.5), rgba(255, 255, 0, 0.5));
        border-radius: 12px;
        width: 80%;
        height: 80vh;
        overflow-y: scroll;
        filter: drop-shadow(0px 0px 16px white);
        animation-name: modalSpawn;
        animation-duration: 0.5s;
    `;
    modal.innerHTML=`
        <h1>Lo siento mucho Daysi =(</h1>
        <h3>Realmente se que no debi haberte negado, no debi haberte hecho sentir de esa manera y
        me duele en lo mas profundo de mi pecho :'), y justamente no queria irme, y aun cuando nada justifica
        mis acciones... Me queda enmendarlo, no volver a cometer esto NUNCA, pero aun asi me arrepiento profundamente 
        y quiero que trabajemos en lo que se pueda, me siento muy muy muy mal y de verdad te extraño, te extraño muchisimo mi Daysi :(, aunque.. realmente, quiero que sepas que estoy dispuesto a abrir una parte de mi para ti 
        y no se que pensaras, pero Daysi :'), toma un respiro y abre esto si te sientes comoda</h3>
        <button id="sig"><div style="display: flex; align-items: center; justify-content: center; text-align: center;"><h1>Continuar :')</h1>
        <img src="tesoro.png" width="32px"></div></button>
    `;
    fondo.appendChild(modal);
    app.appendChild(fondo);

    document.getElementById("sig").addEventListener("click", renderApp2);
}

function renderApp(){
    app.innerHTML = `
        <div class="container1">
            <div class="marcoFoto1">
                <img src="foto3.jpeg" class="foto3">
            </div>
            <div class="caja1">
            <h1>¿Me Perdonas?</h1>
            </div>
            <button id="disculpas">Continuar</button>
        </div>
    `;

    const disculpas = document.getElementById("disculpas");
    disculpas.addEventListener("click", crearModal);
}

function renderApp2(){
    app.innerHTML = `
        <div class="container1">
            <div class="caja1">
                <h1>No se me olvida ese amor, realmente me resuena en el pecho :')</h1>
                <button id="mostrar">Mostrar</button>
            </div>
        </div>
    `;

    document.getElementById("mostrar").addEventListener("click", mostrarFoto1);
}

function mostrarFoto1(){
    const fondo = document.createElement("div");
    fondo.style.cssText = `
        left: 0;
        top: 0;
        padding: 0;
        display: flex;
        position: fixed;
        background-color: transparent;
        width: 100vw;
        height: 100vh;
        align-items: center;
        backdrop-filter: blur(6px);
        animation-name: fondoSpawn;
        animation-duration: 0.5s;
    `;

    const foto = document.createElement("div");
    foto.classList.add("divFoto1");
    foto.style.cssText = `
        
    `;
    foto.innerHTML = `
        <img src="foto1.jpg">
    `;

    const button = document.createElement("button");
    button.style.cssText=`
        position: absolute; 
        top:20px; 
        left: 45%; 
        z-index: 999; 
        border-radius: 50%; 
        width: 32px; 
        height: 32px;
    `;
    button.innerHTML = ">"

    fondo.appendChild(foto);
    fondo.appendChild(button);
    app.appendChild(fondo);

    button.addEventListener("click", renderApp3);
}

function renderApp3(){
    app.innerHTML = `
        <div class="container1">
        <div class="caja1">
        <h4>Mi corazon sigue latiendo por ti, no quiero perderte ahora ni nunca Daysi, Recuerda todas 
        las veces que aunque esto se ha puesto dificil hemos luchado y salido adelante :')</h4>
        <h2>¿Me Perdonas? :')</h2>
        <button id="si">Si</button>
        <button id="no">No</button>
        </div>
        </div>
    `;

    let size = 1.0;
    const botonSi = document.getElementById("si");
    const botonNo = document.getElementById("no");
    botonNo.addEventListener("click", ()=>{
        size *= 1.5;
        botonSi.style.transform = `scale(${size})`;
        botonNo.style.transform = `translateX(${size*20}px)`;
    });
    botonSi.addEventListener("click", renderApp4);
}

function renderApp4(){
    app.innerHTML = `
        <div class="container1" style="display: block;">
            <div class="caja1">
            <h1>AHHHHHHHH TE AMO MI DAYSI HERMOSA!!!❤❤❤❤❤❤</h1>
            </div>
            <img src="dance.gif">
        </>
    `;
}

setTimeout(()=>{
    renderApp();
}, 1)
