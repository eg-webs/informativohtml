
// para mostrar la receta de la pizza
function mostrarReceta(){
    document.getElementById('receta1').style.display = 'block';
}


let btnOcultar = document.getElementById("receta1");
btnOcultar.addEventListener("click", ocultarBoton);

// funcion para ocultar el boton de ver receta
function ocultarBoton(){
    document.getElementById('btnOcultar').style.display = "none";
}
