function Agrega() {
    var contenedor = document.getElementById("contenedor");
    var btn = document.getElementById("button1");

    if (contenedor.classList.contains("textoin")) {
        contenedor.classList.remove("textoin", "textochange");
        btn.textContent = "Agregar componente";
    } else {
        contenedor.classList.add("textoin");
        btn.textContent = "Quitar componente";
    }
}
function Cambia() {
    var contenedor = document.getElementById("contenedor");

    if (contenedor.classList.contains("textoin")) {
        if (contenedor.classList.contains("textochange")) {
            contenedor.classList.remove("textochange");
        } else {
            contenedor.classList.add("textochange");
        }
    }
}
function Color() {
    var contenedor = document.getElementById("contenedor");

    if (contenedor.classList.contains("textoin")) {
        if (contenedor.classList.contains("red")) {
            contenedor.classList.remove("red");
            contenedor.classList.add("black");
        } else {
            contenedor.classList.remove("black");  
            contenedor.classList.add("red");
        }
    }
}
function Imagen() {
    var contenedor = document.getElementById("imagen");
    var btn = document.getElementById("button2");
    var img = document.getElementById("miImagen");

    if (img) {
        contenedor.removeChild(img);
        btn.textContent = "Agregar imagen";
    } else {
        var nuevaImg = document.createElement("img");
        nuevaImg.src = "https://i.pinimg.com/736x/9c/54/ee/9c54eee45ed987261a1fe725d7695557.jpg"; // Cambiá por tu URL de imagen
        nuevaImg.alt = "Imagen agregada";
        nuevaImg.id = "miImagen";
        nuevaImg.classList.add("grande");
        nuevaImg.style.transition = "0.2s ease-in-out";
        contenedor.appendChild(nuevaImg);
        btn.textContent = "Quitar imagen";
    }
}
function CambiarImagen() {
    var img = document.getElementById("miImagen");

    if (!img) {
        alert("Primero tenés que agregar la imagen.");
        return;
    }

    var url1 = "https://i.pinimg.com/736x/9c/54/ee/9c54eee45ed987261a1fe725d7695557.jpg";
    var url2 = "https://i.pinimg.com/736x/ff/35/63/ff3563cee25efd15531bff5336161d9f.jpg";

    if (img.src === url1 || img.src.endsWith("/150")) {
        img.src = url2;
        img.alt = "Imagen cambiada";
    } else {
        img.src = url1;
        img.alt = "Imagen original";
    }
}
function CambiaTamano(){
    var img = document.getElementById("miImagen");
    if(!img){
        alert("Primero tenés que agregar la imagen.");
        return;
    }
    if(img.classList.contains("grande")){
        img.classList.remove("grande");
        img.classList.add("chico");
    } else {
        img.classList.remove("chico");
        img.classList.add("grande");
    }
}