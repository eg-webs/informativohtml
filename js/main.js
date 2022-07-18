
// para mostrar la receta de la pizza
function mostrarReceta(){
    document.getElementById('receta1').style.display = 'block';
}


let btnOcultar = document.getElementById("receta1");
btnOcultar.addEventListener("click", ocultarBoton);

// funcion para ocultar la receta y ver otra receta
function ocultarReceta(){
    document.getElementById('receta1').style.display = "none";
}
