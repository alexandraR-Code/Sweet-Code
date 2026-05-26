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
// EXPLICACIÓN COSTOS FIJOS
// ==========================================
const explicacionCostosFijosHTML = `
    <p style="margin-bottom: 0.8rem; line-height: 1.6; color: var(--texto-blanco);">
        <strong>¿Qué son los Costos Fijos?</strong> Son obligaciones que la cafetería debe pagar independientemente de cuántas tazas venda en el mes. No varían con el volumen de producción o ventas.
    </p>
    <ul style="margin-left: 1.5rem; line-height: 1.6; color: var(--texto-gris); list-style-type: square;">
        <li><strong style="color: var(--celeste-tech);">No cambian a corto plazo:</strong> Se pagan igual aunque se vendan 10 o 500 tazas.</li>
        <li><strong style="color: var(--celeste-tech);"> Son obligatorios: </strong> La cafetería debe pagarlos para poder operar.</li>
        <li><strong style="color: var(--celeste-tech);"> Permiten planificar: </strong> Al conocerlos, sabemos cuánto debemos vender mínimo para no perder dinero.</li>
    </ul>
`;
// ==========================================
// EXPLICACIÓN COSTOS VARIABLES
// ==========================================


const explicacionCostosVariablesHTML = `
    <p style="margin-bottom: 0.8rem; line-height: 1.6; color: var(--texto-blanco);"><strong>¿Qué son los Gastos Variables?</strong>Son costos que cambian dependiendo de cuánto produce o vende la cafetería.</p>

    <ul style="margin-left: 1.5rem; line-height: 1.6; color: var(--texto-gris); list-style-type: square;">
        <li><strong style="color: var(--celeste-tech);">Aumentan con las ventas: </strong> Mientras más productos se preparen, mayor será el gasto.</li>
        <li><strong style="color: var(--celeste-tech);">Dependen de la producción: </strong> Se consumen según la cantidad de bebidas vendidas.</li>
        <li><strong style="color: var(--celeste-tech);">Son operativos: </strong> Incluyen insumos diarios como leche, vasos, azúcar y servilletas.</li> 
    </ul>
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
// ARREGLO DE GASTOS FIJOS 
// ==========================================
let costosFijos = [
    { concepto: "Arriendo del local", categoria: "Infraestructura", frecuencia: "Mensual", montoMensual: 350.00, inputId: "fijo_arriendo", notas: "Contrato fijo anual" },
    { concepto: "Sueldo barista", categoria: "Personal", frecuencia: "Mensual", montoMensual: 645.44, inputId: "fijo_barista", notas: "Incluye beneficios de ley" },
    { concepto: "Sueldo cajera", categoria: "Personal", frecuencia: "Mensual", montoMensual: 645.44, inputId: "fijo_cajera", notas: "Incluye beneficios de ley" },
    { concepto: "Sueldo administrador", categoria: "Personal", frecuencia: "Mensual", montoMensual: 1094.17, inputId: "fijo_admin", notas: "Cargo gerencial" },
    { concepto: "Depreciación maquinaria", categoria: "Activos fijos", frecuencia: "Mensual", montoMensual: 50.00, inputId: "fijo_depreciacion", notas: "Máquina espresso / molino" },
    { concepto: "Electricidad", categoria: "Servicios básicos", frecuencia: "Mensual", montoMensual: 10.00, inputId: "fijo_electricidad", notas: "Tarifa base estimada" },
    { concepto: "Agua potable", categoria: "Servicios básicos", frecuencia: "Mensual", montoMensual: 15.00, inputId: "fijo_agua", notas: "Consumo base mensual" },
    { concepto: "Internet y teléfono", categoria: "Servicios básicos", frecuencia: "Mensual", montoMensual: 35.00, inputId: "fijo_internet", notas: "Plan fijo empresarial" },
    { concepto: "Honorarios contabilidad", categoria: "Servicios profesionales", frecuencia: "Mensual", montoMensual: 50.00, inputId: "fijo_contabilidad", notas: "Contador externo" },
    { concepto: "Seguros", categoria: "Gastos legales", frecuencia: "Mensual", montoMensual: 30.00, inputId: "fijo_seguro", notas: "Seguro del local y equipos" },
    { concepto: "Licencias y permisos", categoria: "Gastos legales", frecuencia: "Mensual", montoMensual: 12.00, inputId: "fijo_licencias", notas: "Permiso municipal / SRI" },
    { concepto: "Publicidad fija", categoria: "Marketing", frecuencia: "Mensual", montoMensual: 30.00, inputId: "fijo_publicidad", notas: "Redes sociales / impresiones" }
];
// ==========================================
// ARREGLO DE GASTOS VARIABLES 
// ==========================================
let costosVariables = [
    { concepto: "Café molido espresso", unidad: "kg", costoUnitario: 8.5000, usoDiario: 0.35, notas: "7g/taza × 50 tazas = 350g" },
    { concepto: "Leche entera", unidad: "litro", costoUnitario: 0.9000, usoDiario: 6.00, notas: "120ml prom. × 50 tazas (no espresso)" },
    { concepto: "Chocolate en polvo / sirope", unidad: "kg/litro", costoUnitario: 6.5000, usoDiario: 0.10, notas: "Mocachino y decoración cappuccino" },
    { concepto: "Crema de leche", unidad: "litro", costoUnitario: 2.8000, usoDiario: 0.75, notas: "Cappuccino y Mocachino" },
    { concepto: "Azucar", unidad: "kg", costoUnitario: 0.7500, usoDiario: 0.25, notas: "5g por taza promedio" },
    { concepto: "Agua purificada", unidad: "litro", costoUnitario: 0.0500, usoDiario: 9.00, notas: "180ml por americano/espresso" },
    { concepto: "Vasos desechables(mix)", unidad: "unidad", costoUnitario: 0.0420, usoDiario: 20.00, notas: "~40% de pedidos para llevar" },
    { concepto: "Tapas para vasos", unidad: "unidad", costoUnitario: 0.0150, usoDiario: 20.00, notas: "Par con vasos desechables" },
    { concepto: "Servilletas", unidad: "unidad", costoUnitario: 0.006, usoDiario: 50.00, notas: "1 por taza servida" },
    { concepto: "Paletas agitadoras", unidad: "unidad", costoUnitario: 0.0080, usoDiario: 25.00, notas: "Para bebidas para llevar" },
    { concepto: "Servicio de electricidad", unidad: "servicio", costoUnitario: 3.500, usoDiario: 0.17, notas: "1 cilindro cada 6 días aprox." },
    { concepto: "Suministro limpieza diaria", unidad: "usoDiario", costoUnitario: 0.9000, usoDiario: 1.00, notas: "Pastillas, paños limpieza máquina" },
    { concepto: "Empaques / bolsas adicionales", unidad: "unidad", costoUnitario: 0.0500, usoDiario: 10.00, notas: "Clientes que llevan productos extra" },
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

    if (nombre === "" || unidad === "" || isNaN(cantidad) || isNaN(precio) || isNaN(merma)) {
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
// ACTUALIZACION DE TABLA DE COSTOS FIJOS
// ==========================================
function actualizarTablaCostosFijos() {
    let totalMensual = 0;
    for (let i = 0; i < costosFijos.length; i++) {
        totalMensual = totalMensual + costosFijos[i].montoMensual;
    }
    let tablaBody = document.getElementById("tabla_costos_fijos");
    if (!tablaBody) return;
    tablaBody.innerHTML = "";

    for (let i = 0; i < costosFijos.length; i++) {
        let item = costosFijos[i];
        let montoAnual = item.montoMensual * 12;
        let porcentaje = (item.montoMensual / totalMensual) * 100;

        let fila = `
            <tr>
                <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--texto-gris);">${i + 1}</td>
                <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); font-weight:600; color:var(--texto-blanco);">${item.concepto}</td>
                <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--celeste-tech);">${item.categoria}</td>
                <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--texto-gris);">${item.frecuencia}</td>
                <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); font-weight:bold; color:#10b981;">$${item.montoMensual.toFixed(2)}</td>
                <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--texto-gris);">$${montoAnual.toFixed(2)}</td>
                <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--rosa-marca); font-weight:500;">${porcentaje.toFixed(2)}%</td>
                <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--texto-gris); font-style:italic; font-size:0.85rem;">${item.notas}</td>
            </tr>
        `;

        tablaBody.innerHTML += fila;
    }
    let totalAnual = totalMensual * 12;

    let tfoot = document.createElement("tfoot");
    tfoot.innerHTML = `
        <tr style="background: rgba(16, 185, 129, 0.05);">
            <td colspan="4" style="padding:0.8rem 1rem; font-weight:bold; color:#10b981; text-transform:uppercase;">Total</td>
            <td style="padding:0.8rem 1rem; font-weight:bold; color:#10b981;">$${convertirMoneda(totalMensual)}</td>
            <td style="padding:0.8rem 1rem; font-weight:bold; color:#10b981;">$${convertirMoneda(totalAnual)}</td>
            <td style="padding:0.8rem 1rem; font-weight:bold; color:#10b981;">100%</td>
            <td></td>
        </tr>
    `;

    tablaBody.parentElement.appendChild(tfoot);
}
function calcularCostosFijos() {
    let arriendo = recuperarFloatSeguro("fijo_arriendo")|| costosFijos[0].montoMensual;
    let barista = recuperarFloatSeguro("fijo_barista")|| costosFijos[1].montoMensual;
    let cajera = recuperarFloatSeguro("fijo_cajera")|| costosFijos[2].montoMensual;
    let admin = recuperarFloatSeguro("fijo_admin") || costosFijos[3].montoMensual;
    let depreciacion = recuperarFloatSeguro("fijo_depreciacion") || costosFijos[4].montoMensual;
    let luz = recuperarFloatSeguro("fijo_electricidad") || costosFijos[5].montoMensual;
    let agua = recuperarFloatSeguro("fijo_agua")|| costosFijos[6].montoMensual;
    let internet = recuperarFloatSeguro("fijo_internet")|| costosFijos[7].montoMensual;
    let contabilidad = recuperarFloatSeguro("fijo_contabilidad")|| costosFijos[8].montoMensual;
    let seguro = recuperarFloatSeguro("fijo_seguro") || costosFijos[9].montoMensual;
    let licencia = recuperarFloatSeguro("fijo_licencias")|| costosFijos[10].montoMensual;
    let publicidad = recuperarFloatSeguro("fijo_publicidad")|| costosFijos[11].montoMensual;

    //actualizamos los costos 
    costosFijos[0].montoMensual = arriendo;
    costosFijos[1].montoMensual = barista;
    costosFijos[2].montoMensual = cajera;
    costosFijos[3].montoMensual = admin;
    costosFijos[4].montoMensual = depreciacion;
    costosFijos[5].montoMensual = luz;
    costosFijos[6].montoMensual = agua;
    costosFijos[7].montoMensual = internet;
    costosFijos[8].montoMensual = contabilidad;
    costosFijos[9].montoMensual = seguro;
    costosFijos[10].montoMensual = licencia;
    costosFijos[11].montoMensual = publicidad;

    let tablaBody = document.getElementById("tabla_costos_fijos");

    if (!tablaBody) return;

    tablaBody.innerHTML = "";

    // ELIMINAMOS EL TFOOT ANTERIOR
    let tfootViejo = tablaBody.parentElement.querySelector("tfoot");

    if (tfootViejo) {
        tfootViejo.remove();
    }


    let total = arriendo + barista + cajera + admin + depreciacion + luz + agua + internet + contabilidad + seguro + licencia + publicidad;
    document.getElementById("resultado_fijos").style.display = "block";
    mostrarTexto("resultado_fijos", "Total Costos Fijos Mensuales: $" + total.toFixed(2));

    //acttualizamos tabla de costos fijod
    actualizarTablaCostosFijos();
    

}
// ==========================================
// ACTUALIZACION DE TABLA DE COSTOS VARIABLES
// ==========================================

function actualizarTablaCostosVariables() {
    let totalMensual = 0;
    for (let i = 0; i < costosVariables.length; i++) {
        let costoDiario = costosVariables[i].costoUnitario * costosVariables[i].usoDiario;
        let costoMensual = costoDiario * 26;
        totalMensual = totalMensual + costoMensual;
    }
    let tablaBody = document.getElementById("tabla_costos_variables");
    if (!tablaBody) return;
    tablaBody.innerHTML = "";

    let tfootViejo = tablaBody.parentElement.querySelector("tfoot");
    if (tfootViejo) {
        tfootViejo.remove();
    }
    for (let i = 0; i < costosVariables.length; i++) {
        let item = costosVariables[i];
        let costoDiario = item.costoUnitario * item.usoDiario;
        let costoMensual = costoDiario * 26;

        let fila = `
        <tr>
        <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05);  color:var(--texto-gris);">${i + 1}</td>
        <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); font-weight:600; color:var(--texto-blanco);">${item.concepto}</td>
        <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--texto-gris);">${item.unidad}</td>
        <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--celeste-tech); font-weight:bold;">$${convertirMoneda(item.costoUnitario)}</td>
        <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--texto-gris);">${item.usoDiario}</td>
        <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); font-weight:bold; color:#10b981;">$${convertirMoneda(costoDiario)}</td>
        <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); font-weight:bold; color:var(--rosa-marca);">$${convertirMoneda(costoMensual)}</td>
        <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--texto-gris); font-style:italic; font-size:0.85rem;"> ${item.notas}</td>
    </tr>`;
        tablaBody.innerHTML += fila;

    }
    let tfoot = document.createElement("tfoot");
    tfoot.innerHTML = `
        <tr style="background: rgba(56, 189, 248, 0.07);">
            <td colspan="6" style="padding:0.8rem 1rem; font-weight:bold; color:var(--celeste-tech); text-transform:uppercase;">Total Costos Variables Mensuales</td>
            <td style="padding:0.8rem 1rem; font-weight:bold; color:var(--celeste-tech); font-size:1.05rem;">$${convertirMoneda(totalMensual)}</td>
            <td></td>
        </tr>
    `;
    tablaBody.parentElement.appendChild(tfoot);
}
function calcularCostosVariables() {
    let cafe = recuperarFloatSeguro("variable_cafe") || costosVariables[0].costoUnitario;
    let leche = recuperarFloatSeguro("variable_leche") || costosVariables[1].costoUnitario;
    let chocolate = recuperarFloatSeguro("variable_chocolate") || costosVariables[2].costoUnitario;
    let crema = recuperarFloatSeguro("variable_crema") || costosVariables[3].costoUnitario;
    let azucar = recuperarFloatSeguro("variable_azucar") || costosVariables[4].costoUnitario;
    let agua = recuperarFloatSeguro("variable_agua") || costosVariables[5].costoUnitario;
    let vasos = recuperarFloatSeguro("variable_vasos") || costosVariables[6].costoUnitario;
    let tapas = recuperarFloatSeguro("variable_tapas") || costosVariables[7].costoUnitario;
    let servilletas = recuperarFloatSeguro("variable_servilletas") || costosVariables[8].costoUnitario;
    let agitadores = recuperarFloatSeguro("variable_paletas") || costosVariables[9].costoUnitario;
    let electricidad = recuperarFloatSeguro("variable_electricidad") || costosVariables[10].costoUnitario;
    let limpieza = recuperarFloatSeguro("variable_limpieza") || costosVariables[11].costoUnitario;
    let empaques = recuperarFloatSeguro("variable_empaques") || costosVariables[12].costoUnitario;

    //actualizamos los costos 
    costosVariables[0].costoUnitario = cafe;
    costosVariables[1].costoUnitario = leche;
    costosVariables[2].costoUnitario = chocolate;
    costosVariables[3].costoUnitario = crema;
    costosVariables[4].costoUnitario = azucar;
    costosVariables[5].costoUnitario = agua;
    costosVariables[6].costoUnitario = vasos;
    costosVariables[7].costoUnitario = tapas;
    costosVariables[8].costoUnitario = servilletas;
    costosVariables[9].costoUnitario = agitadores;
    costosVariables[10].costoUnitario = electricidad;
    costosVariables[11].costoUnitario = limpieza;
    costosVariables[12].costoUnitario = empaques;

    //recalculamos el costo con los nuevos valores 
    let totalMensual = 0;
    for(let i =0; i < costosVariables.length; i++){
        let costoDiario = costosVariables[i].costoUnitario * costosVariables[i].usoDiario;
        totalMensual =  totalMensual + (costoDiario * 26);
    }
    //redibujamos 
    actualizarTablaCostosVariables();
    //mostramos resulatdo 
    document.getElementById("resultado_variables").style.display = "block";
    mostrarTexto("resultado_variables", "Total Costos Variables Mensuales: $" + totalMensual.toFixed(2));
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

// Función que muestra solo la sección cuyo ID recibe como parámetro
function mostrarSeccion(id) {
    ocultarSecciones();
    document.getElementById(id).classList.add("activa");
}

// Carga inicial del DOM
document.addEventListener("DOMContentLoaded", function () {
    let divExplicacionMat = document.getElementById("bloque_explicacion_materia");
    if (divExplicacionMat) {
        divExplicacionMat.innerHTML = explicacionMateriaPrimaHTML;
    }

    let divExplicacionRec = document.getElementById("bloque_explicacion_recetas");
    if (divExplicacionRec) {
        divExplicacionRec.innerHTML = explicacionRecetasHTML;
    }

    actualizarTablaMateria();

    let divExplicacionFijos = document.getElementById("bloque_explicacion_fijos");
    if (divExplicacionFijos) {
        divExplicacionFijos.innerHTML = explicacionCostosFijosHTML;
    }
    actualizarTablaCostosFijos();

    let divExplicacionVariables = document.getElementById("bloque_explicacion_variables");
    if (divExplicacionVariables) {
        divExplicacionVariables.innerHTML = explicacionCostosVariablesHTML;
    }
    actualizarTablaCostosVariables();
});