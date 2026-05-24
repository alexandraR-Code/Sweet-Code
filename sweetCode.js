// ==========================================
// EXPLICACIONES DE CONCEPTOS EN TEXTO
// ==========================================
const explicacionMateriaPrimaHTML = `
    <p style="margin-bottom: 0.8rem; line-height: 1.6; color: var(--texto-blanco);">
        <strong>¿Qué es la Materia Prima?</strong> Corresponde a todos los insumos primarios que se adquieren para ser transformados o consumidos directamente en el flujo operativo de la cafetería para generar los productos finales de venta.
    </p>
    <ul style="margin-left: 1.5rem; line-height: 1.6; color: var(--texto-gris); list-style-type: square;">
        <li><strong style="color: var(--celeste-tech);">Materia Prima Directa:</strong> Elementos esenciales incorporados físicamente de forma principal en cada taza (Ej: Café espresso, agua filtrada, leche).</li>
        <li><strong style="color: var(--celeste-tech);">Materia Prima Indirecta:</strong> Insumos complementarios de servicio indispensables para el expendio comercial (Ej: Vasos, tapas, servilletas).</li>
    </ul>
`;

const explicacionRecetasHTML = `
    <p style="margin-bottom: 0.5rem; line-height: 1.6; color: var(--texto-blanco);">
        <strong>¿Cómo se calcula el Costo de una Receta?</strong> Consiste en desglosar cada ingrediente utilizado multiplicando la <strong>Cantidad Requerida</strong> por su <strong>Costo Neto Unitario</strong> (calculado con su merma).
    </p>
    <p style="line-height: 1.6; color: var(--texto-gris);">
        <strong style="color: var(--rosa-marca);">Nota académica de edición:</strong> Conforme a las especificaciones del proyecto, puedes seleccionar cualquier insumo base de la receta y modificar libremente sus cantidades, unidades, el tiempo total de preparación de la taza y el número de porciones producidas.
    </p>
`;

// ==========================================
// ARREGLO DE MEMORIA DE MATERIAS PRIMAS
// ==========================================
let materiasPrimas = [
    { nombre: "Café molido espresso", unidad: "kg", cantidad: 1.00, precio: 10.00, merma: 5.00, tipo: "DIRECTA" },
    { nombre: "Café en grano (moler)", unidad: "kg", cantidad: 1.00, precio: 12.00, merma: 8.00, tipo: "DIRECTA" },
    { nombre: "Leche entera", unidad: "litro", cantidad: 1.00, precio: 1.50, merma: 3.00, tipo: "DIRECTA" },
    { nombre: "Leche en polvo", unidad: "kg", cantidad: 1.00, precio: 5.20, merma: 2.00, tipo: "DIRECTA" },
    { nombre: "Crema de leche", unidad: "litro", cantidad: 1.00, precio: 2.80, merma: 5.00, tipo: "DIRECTA" },
    { nombre: "Chocolate en polvo / cacao", unidad: "kg", cantidad: 1.00, precio: 6.50, merma: 3.00, tipo: "DIRECTA" },
    { nombre: "Sirope de chocolate", unidad: "litro", cantidad: 1.00, precio: 4.80, merma: 5.00, tipo: "DIRECTA" },
    { nombre: "Agua purificada", unidad: "litro", cantidad: 1.00, precio: 0.75, merma: 0.00, tipo: "DIRECTA" },
    { nombre: "Azúcar blanca", unidad: "kg", cantidad: 1.00, precio: 1.50, merma: 1.00, tipo: "INDIRECTA" },
    { nombre: "Vasos desechables 8 oz", unidad: "paquete x100", cantidad: 100.00, precio: 4.00, merma: 2.00, tipo: "INDIRECTA" },
    { nombre: "Vasos desechables 12 oz", unidad: "paquete x100", cantidad: 100.00, precio: 5.00, merma: 2.00, tipo: "INDIRECTA" },
    { nombre: "Vasos desechables 6 oz", unidad: "paquete x100", cantidad: 100.00, precio: 3.00, merma: 1.00, tipo: "INDIRECTA" },
    { nombre: "Tapas para vasos", unidad: "paquete x100", cantidad: 100.00, precio: 2.00, merma: 1.00, tipo: "INDIRECTA" },
    { nombre: "Servilletas", unidad: "paquete x200", cantidad: 200.00, precio: 2.00, merma: 2.00, tipo: "INDIRECTA" },
    { nombre: "Paletas agitadoras", unidad: "paquete x100", cantidad: 100.00, precio: 1.00, merma: 1.00, tipo: "INDIRECTA" }
];

// ==========================================
// ESTRUCTURA BASE DE RECETAS (Ingredientes Fijos, Valores Editables)
// ==========================================
let recetasBase = [
    {
        idReceta: 0,
        nombreReceta: "ESPRESSO",
        tiempoPreparacion: 3, // Solicitado por el deber (Modificable)
        numeroPorciones: 1,    // Solicitado por el deber (Modificable)
        ingredientes: [
            { buscarNombre: "Café molido espresso", cantidadReceta: 7.00, unidadReceta: "gramos", esConversion: true },
            { buscarNombre: "Agua purificada", cantidadReceta: 30.00, unidadReceta: "ml", esConversion: true },
            { buscarNombre: "Vasos desechables 6 oz", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Tapas para vasos", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Paletas agitadoras", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Servilletas", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false }
        ]
    },
    {
        idReceta: 1,
        nombreReceta: "CAFÉ AMERICANO",
        tiempoPreparacion: 4,
        numeroPorciones: 1,
        ingredientes: [
            { buscarNombre: "Café molido espresso", cantidadReceta: 7.00, unidadReceta: "gramos", esConversion: true },
            { buscarNombre: "Agua purificada", cantidadReceta: 150.00, unidadReceta: "ml", esConversion: true },
            { buscarNombre: "Vasos desechables 6 oz", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Tapas para vasos", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Paletas agitadoras", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Servilletas", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false }
        ]
    },
    {
        idReceta: 2,
        nombreReceta: "CAFÉ CON LECHE",
        tiempoPreparacion: 5,
        numeroPorciones: 1,
        ingredientes: [
            { buscarNombre: "Café molido espresso", cantidadReceta: 7.00, unidadReceta: "gramos", esConversion: true },
            { buscarNombre: "Leche entera", cantidadReceta: 150.00, unidadReceta: "ml", esConversion: true },
            { buscarNombre: "Azúcar blanca", cantidadReceta: 10.00, unidadReceta: "gramos", esConversion: true },
            { buscarNombre: "Vasos desechables 6 oz", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Tapas para vasos", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Paletas agitadoras", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Servilletas", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false }
        ]
    },
    {
        idReceta: 3,
        nombreReceta: "CAPPUCCINO",
        tiempoPreparacion: 6,
        numeroPorciones: 1,
        ingredientes: [
            { buscarNombre: "Café molido espresso", cantidadReceta: 7.00, unidadReceta: "gramos", esConversion: true },
            { buscarNombre: "Leche entera", cantidadReceta: 120.00, unidadReceta: "ml", esConversion: true },
            { buscarNombre: "Crema de leche", cantidadReceta: 30.00, unidadReceta: "ml", esConversion: true },
            { buscarNombre: "Azúcar blanca", cantidadReceta: 10.00, unidadReceta: "gramos", esConversion: true },
            { buscarNombre: "Chocolate en polvo / cacao", cantidadReceta: 2.00, unidadReceta: "gramos", esConversion: true },
            { buscarNombre: "Vasos desechables 6 oz", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Tapas para vasos", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Paletas agitadoras", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Servilletas", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false }
        ]
    },
    {
        idReceta: 4,
        nombreReceta: "MOCACHINO",
        tiempoPreparacion: 7,
        numeroPorciones: 1,
        ingredientes: [
            { buscarNombre: "Café molido espresso", cantidadReceta: 7.00, unidadReceta: "gramos", esConversion: true },
            { buscarNombre: "Leche entera", cantidadReceta: 120.00, unidadReceta: "ml", esConversion: true },
            { buscarNombre: "Sirope de chocolate", cantidadReceta: 20.00, unidadReceta: "ml", esConversion: true },
            { buscarNombre: "Crema de leche", cantidadReceta: 30.00, unidadReceta: "ml", esConversion: true },
            { buscarNombre: "Azúcar blanca", cantidadReceta: 10.00, unidadReceta: "gramos", esConversion: true },
            { buscarNombre: "Vasos desechables 6 oz", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Tapas para vasos", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Paletas agitadoras", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Servilletas", cantidadReceta: 1.00, unidadReceta: "unidad", esConversion: false }
        ]
    }
];

// ==========================================
// CALCULAR COSTOS NETOS DE INSUMOS
// ==========================================
function obtenerCostoNetoUnitarioInsumo(item) {
    let cantidadUtilizable = item.cantidad * (1 - (item.merma / 100));
    if (cantidadUtilizable > 0) {
        return item.precio / cantidadUtilizable;
    }
    return 0;
}

// ==========================================
// RENDERIZADO VISUAL DE LA TABLA MATERIA PRIMA
// ==========================================
function actualizarTablaMateria() {
    let tablaBody = document.getElementById("tabla_materia_prima");
    if (!tablaBody) return; 
    
    tablaBody.innerHTML = ""; 
    
    materiasPrimas.forEach((item, index) => {
        let costoNetoUnidad = obtenerCostoNetoUnitarioInsumo(item);

        let fila = `
            <tr>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--texto-gris);">${index + 1}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: var(--texto-blanco);">${item.nombre}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--texto-gris);">${item.unidad}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--celeste-tech); font-weight: 500;">${item.cantidad.toFixed(2)}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--celeste-tech); font-weight: 500;">$${item.precio.toFixed(2)}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--rosa-marca); font-weight: 500;">${item.merma.toFixed(2)}%</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: bold; color: #10b981;">$${costoNetoUnidad.toFixed(4)}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); font-style: italic; font-size: 0.85rem; color: ${item.tipo === 'DIRECTA' ? '#38bdf8' : '#94a3b8'};">
                    ${item.tipo}
                </td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: center;">
                    <button onclick="cargarMateriaParaEditar(${index})" style="background: transparent; border: 1px solid var(--celeste-tech); color: var(--celeste-tech); padding: 0.3rem 0.6rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">Editar</button>
                </td>
            </tr>
        `;
        tablaBody.innerHTML += fila;
    });

    actualizarPantallaRecetas();
}

// ==========================================
// RENDERIZADO DE LAS TABLAS DE RECETAS
// ==========================================
function actualizarPantallaRecetas() {
    let contenedor = document.getElementById("contenedor_recetas_dinamicas");
    if (!contenedor) return;

    contenedor.innerHTML = ""; 

    recetasBase.forEach((receta, rIndex) => {
        let tablaHTML = `
            <div class="receta-card" style="background: var(--bg-tarjetas); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 10px 20px rgba(0,0,0,0.2);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                    <h3 style="color: var(--rosa-marca); font-size: 1.3rem; text-transform: uppercase; margin: 0;">${receta.nombreReceta}</h3>
                    <div style="background: rgba(56, 189, 248, 0.1); padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; color: var(--celeste-tech);">
                        <strong>Tiempo prep.:</strong> ${receta.tiempoPreparacion} min | <strong>Porciones (Tazas):</strong> ${receta.numeroPorciones}
                    </div>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; text-align: left; margin-top: 1rem;">
                    <thead style="background: rgba(56, 189, 248, 0.1); color: var(--celeste-tech);">
                        <tr>
                            <th style="padding: 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.1); width: 40px;">#</th>
                            <th style="padding: 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.1);">Ingrediente / Insumo Base</th>
                            <th style="padding: 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.1); width: 110px; text-align: center;">Cantidad</th>
                            <th style="padding: 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.1); width: 110px;">Unidad</th>
                            <th style="padding: 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.1); width: 130px; text-align: right;">Costo/Ud ($)</th>
                            <th style="padding: 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.1); width: 130px; text-align: right;">Subtotal ($)</th>
                            <th style="padding: 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.1); width: 90px; text-align: center;">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        let totalMateriaPrimaReceta = 0;

        receta.ingredientes.forEach((ingrediente, iIndex) => {
            let insumoEncontrado = materiasPrimas.find(m => m.nombre.toLowerCase().trim() === ingrediente.buscarNombre.toLowerCase().trim());
            
            let costoUnitarioCalculado = 0;
            let subtotalCalculado = 0;

            if (insumoEncontrado) {
                let costoNetoInsumoCompleto = obtenerCostoNetoUnitarioInsumo(insumoEncontrado);

                if (ingrediente.esConversion) {
                    costoUnitarioCalculado = costoNetoInsumoCompleto / 1000;
                } else {
                    costoUnitarioCalculado = costoNetoInsumoCompleto / insumoEncontrado.cantidad;
                }

                subtotalCalculado = costoUnitarioCalculado * ingrediente.cantidadReceta;
                totalMateriaPrimaReceta += subtotalCalculado;
            }

            tablaHTML += `
                <tr>
                    <td style="padding: 0.5rem 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--texto-gris);">${iIndex + 1}</td>
                    <td style="padding: 0.5rem 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: white; font-weight: 500;">${ingrediente.buscarNombre}</td>
                    <td style="padding: 0.5rem 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: center; color: var(--celeste-tech); font-weight: bold;">${ingrediente.cantidadReceta.toFixed(2)}</td>
                    <td style="padding: 0.5rem 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--texto-gris); font-style: italic;">${ingrediente.unidadReceta}</td>
                    <td style="padding: 0.5rem 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: right; color: var(--texto-gris);">$${costoUnitarioCalculado.toFixed(4)}</td>
                    <td style="padding: 0.5rem 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: right; color: white; font-weight: 500;">$${subtotalCalculado.toFixed(4)}</td>
                    <td style="padding: 0.5rem 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: center;">
                        <button onclick="cargarIngredienteParaEditar(${rIndex}, ${iIndex})" style="background: transparent; border: 1px solid var(--rosa-marca); color: var(--rosa-marca); padding: 0.2rem 0.5rem; border-radius: 4px; cursor: pointer; font-size: 0.75rem; font-weight: bold;">Editar</button>
                    </td>
                </tr>
            `;
        });

        tablaHTML += `
                    </tbody>
                    <tfoot>
                        <tr style="background: rgba(16, 185, 129, 0.05);">
                            <td colspan="5" style="padding: 0.8rem; text-align: right; font-weight: bold; color: #10b981; text-transform: uppercase;">Total Costo por Taza:</td>
                            <td colspan="2" style="padding: 0.8rem; text-align: left; padding-left: 2.5rem; font-weight: bold; color: #10b981; font-size: 1.1rem;">$${totalMateriaPrimaReceta.toFixed(4)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        `;

        contenedor.innerHTML += tablaHTML;
    });
}

// ==========================================
// CARGAR DATOS EN EL FORMULARIO DE EDICIÓN DE RECETA
// ==========================================
function cargarIngredienteParaEditar(recetaIndex, ingredienteIndex) {
    let receta = recetasBase[recetaIndex];
    let ingrediente = receta.ingredientes[ingredienteIndex];

    // Subimos los datos a los inputs usando tus utilitarios
    mostrarTextoEnCaja("receta_ingrediente_nombre", ingrediente.buscarNombre);
    mostrarTextoEnCaja("receta_ingrediente_cantidad", ingrediente.cantidadReceta);
    mostrarTextoEnCaja("receta_ingrediente_unidad", ingrediente.unidadReceta);
    mostrarTextoEnCaja("receta_tiempo", receta.tiempoPreparacion);
    mostrarTextoEnCaja("receta_porciones", receta.numeroPorciones);

    // Guardamos los índices de control en los campos ocultos
    document.getElementById("receta_id_editar").value = recetaIndex;
    document.getElementById("ingrediente_id_editar").value = ingredienteIndex;

    // Desplegamos visualmente el contenedor del formulario
    document.getElementById("formulario_edicion_receta").style.display = "block";
    document.getElementById("receta_formulario_titulo").innerText = `Modificando Insumo de la Receta: ${receta.nombreReceta}`;
    
    // Desplazamiento suave al formulario superior
    document.getElementById("formulario_edicion_receta").scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// GUARDAR CAMBIOS PROCESADOS EN EL FORMULARIO DE RECETAS
// ==========================================
function guardarCambiosParametrosReceta() {
    let rIndex = parseInt(document.getElementById("receta_id_editar").value);
    let iIndex = parseInt(document.getElementById("ingrediente_id_editar").value);

    let nuevaCantidad = recuperarFloat("receta_ingrediente_cantidad");
    let nuevaUnidad = recuperaraTexto("receta_ingrediente_unidad");
    let nuevoTiempo = recuperarInt("receta_tiempo");
    let nuevasPorciones = recuperarInt("receta_porciones");

    if (isNaN(nuevaCantidad) || nuevaUnidad === "" || isNaN(nuevoTiempo) || isNaN(nuevasPorciones)) {
        alert("Por favor, rellene todos los campos con valores numéricos válidos.");
        return;
    }

    // Sobrescribimos los valores de forma dinámica en la matriz
    recetasBase[rIndex].tiempoPreparacion = nuevoTiempo;
    recetasBase[rIndex].numeroPorciones = nuevasPorciones;
    recetasBase[rIndex].ingredientes[iIndex].cantidadReceta = nuevaCantidad;
    recetasBase[rIndex].ingredientes[iIndex].unidadReceta = nuevaUnidad;

    // Ocultamos el formulario y refrescamos la pantalla
    cancelarEdicionParametrosReceta();
    actualizarPantallaRecetas();
}

function cancelarEdicionParametrosReceta() {
    document.getElementById("receta_id_editar").value = "-1";
    document.getElementById("ingrediente_id_editar").value = "-1";
    document.getElementById("formulario_edicion_receta").style.display = "none";
    
    mostrarTextoEnCaja("receta_ingrediente_nombre", "");
    mostrarTextoEnCaja("receta_ingrediente_cantidad", "");
    mostrarTextoEnCaja("receta_ingrediente_unidad", "");
    mostrarTextoEnCaja("receta_tiempo", "");
    mostrarTextoEnCaja("receta_porciones", "");
}

// ==========================================
// CONTROLADOR MODO EDICIÓN FORMULARIO MATERIA PRIMA
// ==========================================
function cargarMateriaParaEditar(index) {
    let item = materiasPrimas[index];
    
    mostrarTextoEnCaja("mat_nombre", item.nombre);
    mostrarTextoEnCaja("mat_unidad", item.unidad);
    mostrarTextoEnCaja("mat_cantidad", item.cantidad);
    mostrarTextoEnCaja("mat_precio", item.precio);
    mostrarTextoEnCaja("mat_merma", item.merma);
    document.getElementById("mat_tipo").value = item.tipo;
    
    document.getElementById("mat_index_editar").value = index;
    
    document.getElementById("formulario_titulo").innerText = "Modificar Datos del Insumo";
    document.getElementById("btn_guardar_materia").innerText = "Guardar Cambios";
    document.getElementById("btn_guardar_materia").style.background = "#10b981"; 
    document.getElementById("btn_cancelar_edicion").style.display = "inline-block";
    
    document.getElementById("formulario_titulo").scrollIntoView({ behavior: 'smooth' });
}

function procesarFormularioMateria() {
    let nombre = recuperaraTexto("mat_nombre");
    let unidad = recuperaraTexto("mat_unidad");
    let cantidad = recuperarFloat("mat_cantidad");
    let precio = recuperarFloat("mat_precio");
    let merma = recuperarFloat("mat_merma");
    let tipo = document.getElementById("mat_tipo").value;
    let indexEditar = parseInt(document.getElementById("mat_index_editar").value);
    
    if(nombre === "" || unidad === "" || isNaN(cantidad) || isNaN(precio) || isNaN(merma)) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }
    
    let datosInsumo = { nombre, unidad, cantidad, precio, merma, tipo };
    
    if (indexEditar === -1) {
        if (tipo === "DIRECTA") {
            let ultimoIndiceDirecta = materiasPrimas.findLastIndex(item => item.tipo === "DIRECTA");
            if (ultimoIndiceDirecta !== -1) {
                materiasPrimas.splice(ultimoIndiceDirecta + 1, 0, datosInsumo);
            } else {
                materiasPrimas.unshift(datosInsumo);
            }
        } else {
            materiasPrimas.push(datosInsumo);
        }
    } else {
        materiasPrimas[indexEditar] = datosInsumo;
        materiasPrimas.sort((a, b) => {
            if (a.tipo === "DIRECTA" && b.tipo === "INDIRECTA") return -1;
            if (a.tipo === "INDIRECTA" && a.tipo === "DIRECTA") return 1;
            return 0;
        });
        cancelarEdicionMateria();
    }
    
    limpiarFormularioMateria();
    actualizarTablaMateria();
}

function cancelarEdicionMateria() {
    document.getElementById("mat_index_editar").value = "-1";
    document.getElementById("formulario_titulo").innerText = "Agregar Nuevo Insumo";
    document.getElementById("btn_guardar_materia").innerText = "Guardar Insumo";
    document.getElementById("btn_guardar_materia").style.background = "var(--rosa-marca)";
    document.getElementById("btn_cancelar_edicion").style.display = "none";
    limpiarFormularioMateria();
}

function limpiarFormularioMateria() {
    mostrarTextoEnCaja("mat_nombre", "");
    mostrarTextoEnCaja("mat_unidad", "");
    mostrarTextoEnCaja("mat_cantidad", "");
    mostrarTextoEnCaja("mat_precio", "");
    mostrarTextoEnCaja("mat_merma", "");
}

// ==========================================
// NAVEGACIÓN GENERAL DEL PROYECTO
// ==========================================
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

function mostrarSeccion(id) {
    ocultarSecciones(); 
    document.getElementById(id).classList.add("activa");
}

// Carga inicial del DOM
document.addEventListener("DOMContentLoaded", function() {
    let divExplicacionMat = document.getElementById("bloque_explicacion_materia");
    if(divExplicacionMat) {
        divExplicacionMat.innerHTML = explicacionMateriaPrimaHTML;
    }
    
    let divExplicacionRec = document.getElementById("bloque_explicacion_recetas");
    if(divExplicacionRec) {
        divExplicacionRec.innerHTML = explicacionRecetasHTML;
    }
    
    actualizarTablaMateria();
});