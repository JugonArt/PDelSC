const btn1 = document.getElementById("boton1");

btn1.addEventListener("mouseover", () => {
    btn1.style.backgroundColor = "#4CAF50";
    btn1.style.color = "white";
});
btn1.addEventListener("mouseout", () => {
    btn1.style.backgroundColor = "";
    btn1.style.color = "";
});
const btn2 = document.getElementById("boton2");

btn2.addEventListener("mousedown", () => {
    btn2.style.transform = "scale(0.95)";
    btn2.style.boxShadow = "inset 2px 2px 5px rgba(0,0,0,0.4)";
});
btn2.addEventListener("mouseup", () => {
    btn2.style.transform = "scale(1)";
    btn2.style.boxShadow = "inset -2px -2px 5px rgba(0,0,0,0.4)";
});
const btn3 = document.getElementById("boton3");

btn3.addEventListener("focus", () => {
    btn3.style.border = "2px solid #FF6347";
    btn3.style.outline = "none"; // Eliminar el borde por defecto
});

btn3.addEventListener("blur", () => {
    btn3.style.border = "";
});
    const btn4 = document.getElementById("boton4");
    btn4.addEventListener("dblclick", () => {
        btn4.textContent = "¡Has hecho doble clic!";
    });
    const btn5 = document.getElementById("boton5");
    btn5.addEventListener("contextmenu", (e) => {
        e.preventDefault(); // Prevenir el menú contextual
        btn5.style.backgroundColor = "orange"; // Cambiar el color
    });

    const btnContar = document.getElementById("verCantidad");
    const contenedor = document.getElementById("contenedor");
    const resultado = document.getElementById("resultado");

    btnContar.addEventListener("click", () => {
        const cantidad = contenedor.children.length;
        resultado.textContent = `El contenedor tiene ${cantidad} elementos hijos.`;
    });