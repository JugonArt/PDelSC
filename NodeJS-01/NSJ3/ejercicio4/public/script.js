function crearA(){
    if (document.getElementById("miEnlaceA")) return; 

    const enlace = document.createElement("a");

    enlace.href = "https://www.w3schools.com/css/css3_buttons.asp";
    enlace.textContent = "Ir a w3school";
    enlace.target = "_blank";
    enlace.id = "miEnlaceA";
    enlace.className = "link";
    const grid2 = document.getElementById("grid2");
    grid2.appendChild(enlace);
}
function crearB(){
    if (document.getElementById("miEnlaceB")) return; 

    const enlace = document.createElement("a");

    enlace.href = "https://music.youtube.com/";
    enlace.textContent = "Ir a youtube music";
    enlace.target = "_blank";
    enlace.id = "miEnlaceB";
    enlace.className = "link";
    const grid2 = document.getElementById("grid2");
    grid2.appendChild(enlace);
}
function crearC(){
    if (document.getElementById("miEnlaceC")) return; 

    const enlace = document.createElement("a");

    enlace.href = "https://www.youtube.com/";
    enlace.textContent = "Ir a youtube";
    enlace.target = "_blank";
    enlace.id = "miEnlaceC";
    enlace.className = "link";
    const grid2 = document.getElementById("grid2");
    grid2.appendChild(enlace);
}
function crearD(){
    if (document.getElementById("miEnlaceD")) return; 

    const enlace = document.createElement("a");

    enlace.href = "https://chatgpt.com/c/681228ad-874c-800a-99e4-91001a97c956";
    enlace.textContent = "Ir a chatgpt";
    enlace.target = "_blank";
    enlace.id = "miEnlaceD";
    enlace.className = "link";
    const grid2 = document.getElementById("grid2");
    grid2.appendChild(enlace);
}
function crearE(){
    if (document.getElementById("miEnlaceE")) return; 

    const enlace = document.createElement("a");

    enlace.href = "https://ar.pinterest.com/";
    enlace.textContent = "Ir a pinterest";
    enlace.target = "_blank";
    enlace.id = "miEnlaceE";
    enlace.className = "link";
    const grid2 = document.getElementById("grid2");
    grid2.appendChild(enlace);
}
function cambiarA() {
    const enlaceA = document.getElementById("miEnlaceA");
    const enlaceB = document.getElementById("miEnlaceB");
    const enlaceC = document.getElementById("miEnlaceC");
    const enlaceD = document.getElementById("miEnlaceD");
    const enlaceE = document.getElementById("miEnlaceE");

    if (!enlaceA && !enlaceB && !enlaceC && !enlaceD && !enlaceE) {
        alert("Primero tenés que crear al menos un enlace.");
        return;
    }

    if (enlaceA) {
        enlaceA.href = "https://developer.mozilla.org/docs/Web/CSS";
        enlaceA.textContent = "Ir a CSS en MDN";
    }

    if (enlaceB) {
        enlaceB.href = "https://open.spotify.com/";
        enlaceB.textContent = "Ir a Spotify";
    }

    if (enlaceC) {
        enlaceC.href = "https://www.netflix.com/";
        enlaceC.textContent = "Ir a Netflix";
    }

    if (enlaceD) {
        enlaceD.href = "https://www.wikipedia.org/";
        enlaceD.textContent = "Ir a Wikipedia";
    }

    if (enlaceE) {
        enlaceE.href = "https://www.instagram.com/";
        enlaceE.textContent = "Ir a Instagram";
    }
}