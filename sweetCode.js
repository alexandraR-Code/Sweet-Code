
// Función que apaga absolutamente todas las pantallas una por una
function ocultarSecciones() {
    document.getElementById("fijos").classList.remove("activa");
    document.getElementById("variables").classList.remove("activa");
    document.getElementById("directos").classList.remove("activa");
    document.getElementById("materia").classList.remove("activa");
    document.getElementById("personal").classList.remove("activa");
    document.getElementById("recetas").classList.remove("activa");
    document.getElementById("ganancias").classList.remove("activa");
    document.getElementById("equilibrio").classList.remove("activa");
}

// Función que muestra solo la sección cuyo ID recibe como parámetro
function mostrarSeccion(id) {
    // 1. Primero borramos y apagamos todo llamando a la función de arriba
    ocultarSecciones(); 
    
    // 2. Agregamos la clase activa solo a la sección indicada
    document.getElementById(id).classList.add("activa");
}