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
        <strong style="color: var(--rosa-marca);">Nota académica de edición:</strong> Puedes seleccionar cualquier insumo de la receta y modificar sus cantidades, unidades, tiempo de preparación y número de porciones.
    </p>
`;

const explicacionCostosFijosHTML = `
    <p style="margin-bottom: 0.8rem; line-height: 1.6; color: var(--texto-blanco);">
        <strong>¿Qué son los Costos Fijos?</strong> Son obligaciones que la cafetería debe pagar independientemente de cuántas tazas venda en el mes. No varían con el volumen de producción o ventas.
    </p>
    <ul style="margin-left: 1.5rem; line-height: 1.6; color: var(--texto-gris); list-style-type: square;">
        <li><strong style="color: var(--celeste-tech);">No cambian a corto plazo:</strong> Se pagan igual aunque se vendan 10 o 500 tazas.</li>
        <li><strong style="color: var(--celeste-tech);">Son obligatorios:</strong> La cafetería debe pagarlos para poder operar.</li>
        <li><strong style="color: var(--celeste-tech);">Permiten planificar:</strong> Al conocerlos, sabemos cuánto debemos vender mínimo para no perder dinero.</li>
    </ul>
`;

const explicacionCostosVariablesHTML = `
    <p style="margin-bottom: 0.8rem; line-height: 1.6; color: var(--texto-blanco);">
        <strong>¿Qué son los Gastos Variables?</strong> Son costos que cambian dependiendo de cuánto produce o vende la cafetería.
    </p>
    <ul style="margin-left: 1.5rem; line-height: 1.6; color: var(--texto-gris); list-style-type: square;">
        <li><strong style="color: var(--celeste-tech);">Aumentan con las ventas:</strong> Mientras más productos se preparen, mayor será el gasto.</li>
        <li><strong style="color: var(--celeste-tech);">Dependen de la producción:</strong> Se consumen según la cantidad de bebidas vendidas.</li>
        <li><strong style="color: var(--celeste-tech);">Son operativos:</strong> Incluyen servicios, limpieza y empaques adicionales.</li>
    </ul>
`;

// ==========================================
// ARREGLO DE MEMORIA DE MATERIAS PRIMAS
// ==========================================
let materiasPrimas = [
    { nombre: "Café molido espresso",        unidad: "kg",           cantidad: 1.00, precio: 10.00, merma: 5.00,  tipo: "DIRECTA"   },
    { nombre: "Café en grano (moler)",        unidad: "kg",           cantidad: 1.00, precio: 12.00, merma: 8.00,  tipo: "DIRECTA"   },
    { nombre: "Leche entera",                 unidad: "litro",        cantidad: 1.00, precio: 1.50,  merma: 3.00,  tipo: "DIRECTA"   },
    { nombre: "Leche en polvo",               unidad: "kg",           cantidad: 1.00, precio: 5.20,  merma: 2.00,  tipo: "DIRECTA"   },
    { nombre: "Crema de leche",               unidad: "litro",        cantidad: 1.00, precio: 2.80,  merma: 5.00,  tipo: "DIRECTA"   },
    { nombre: "Chocolate en polvo / cacao",   unidad: "kg",           cantidad: 1.00, precio: 6.50,  merma: 3.00,  tipo: "DIRECTA"   },
    { nombre: "Sirope de chocolate",          unidad: "litro",        cantidad: 1.00, precio: 4.80,  merma: 5.00,  tipo: "DIRECTA"   },
    { nombre: "Agua purificada",              unidad: "litro",        cantidad: 1.00, precio: 0.75,  merma: 0.00,  tipo: "DIRECTA"   },
    { nombre: "Azúcar blanca",               unidad: "kg",           cantidad: 1.00, precio: 1.50,  merma: 1.00,  tipo: "INDIRECTA" },
    { nombre: "Vasos desechables 8 oz",       unidad: "paquete x100", cantidad: 100.00, precio: 4.00, merma: 2.00, tipo: "INDIRECTA" },
    { nombre: "Vasos desechables 12 oz",      unidad: "paquete x100", cantidad: 100.00, precio: 5.00, merma: 2.00, tipo: "INDIRECTA" },
    { nombre: "Vasos desechables 6 oz",       unidad: "paquete x100", cantidad: 100.00, precio: 3.00, merma: 1.00, tipo: "INDIRECTA" },
    { nombre: "Tapas para vasos",             unidad: "paquete x100", cantidad: 100.00, precio: 2.00, merma: 1.00, tipo: "INDIRECTA" },
    { nombre: "Servilletas",                  unidad: "paquete x200", cantidad: 200.00, precio: 2.00, merma: 2.00, tipo: "INDIRECTA" },
    { nombre: "Paletas agitadoras",           unidad: "paquete x100", cantidad: 100.00, precio: 1.00, merma: 1.00, tipo: "INDIRECTA" }
];

// ==========================================
// ESTRUCTURA BASE DE RECETAS
// ==========================================
let recetasBase = [
    {
        idReceta: 0,
        nombreReceta: "ESPRESSO",
        tiempoPreparacion: 3,
        numeroPorciones: 1,
        ingredientes: [
            { buscarNombre: "Café molido espresso",  cantidadReceta: 7.00,  unidadReceta: "gramos",  esConversion: true  },
            { buscarNombre: "Agua purificada",        cantidadReceta: 30.00, unidadReceta: "ml",      esConversion: true  },
            { buscarNombre: "Vasos desechables 6 oz", cantidadReceta: 1.00,  unidadReceta: "unidad",  esConversion: false },
            { buscarNombre: "Tapas para vasos",       cantidadReceta: 1.00,  unidadReceta: "unidad",  esConversion: false },
            { buscarNombre: "Paletas agitadoras",     cantidadReceta: 1.00,  unidadReceta: "unidad",  esConversion: false },
            { buscarNombre: "Servilletas",            cantidadReceta: 1.00,  unidadReceta: "unidad",  esConversion: false }
        ]
    },
    {
        idReceta: 1,
        nombreReceta: "CAFÉ AMERICANO",
        tiempoPreparacion: 4,
        numeroPorciones: 1,
        ingredientes: [
            { buscarNombre: "Café molido espresso",  cantidadReceta: 7.00,   unidadReceta: "gramos", esConversion: true  },
            { buscarNombre: "Agua purificada",        cantidadReceta: 150.00, unidadReceta: "ml",     esConversion: true  },
            { buscarNombre: "Vasos desechables 6 oz", cantidadReceta: 1.00,   unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Tapas para vasos",       cantidadReceta: 1.00,   unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Paletas agitadoras",     cantidadReceta: 1.00,   unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Servilletas",            cantidadReceta: 1.00,   unidadReceta: "unidad", esConversion: false }
        ]
    },
    {
        idReceta: 2,
        nombreReceta: "CAFÉ CON LECHE",
        tiempoPreparacion: 5,
        numeroPorciones: 1,
        ingredientes: [
            { buscarNombre: "Café molido espresso",  cantidadReceta: 7.00,   unidadReceta: "gramos", esConversion: true  },
            { buscarNombre: "Leche entera",           cantidadReceta: 150.00, unidadReceta: "ml",     esConversion: true  },
            { buscarNombre: "Azúcar blanca",         cantidadReceta: 10.00,  unidadReceta: "gramos", esConversion: true  },
            { buscarNombre: "Vasos desechables 6 oz", cantidadReceta: 1.00,   unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Tapas para vasos",       cantidadReceta: 1.00,   unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Paletas agitadoras",     cantidadReceta: 1.00,   unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Servilletas",            cantidadReceta: 1.00,   unidadReceta: "unidad", esConversion: false }
        ]
    },
    {
        idReceta: 3,
        nombreReceta: "CAPPUCCINO",
        tiempoPreparacion: 6,
        numeroPorciones: 1,
        ingredientes: [
            { buscarNombre: "Café molido espresso",        cantidadReceta: 7.00,  unidadReceta: "gramos", esConversion: true  },
            { buscarNombre: "Leche entera",                cantidadReceta: 120.00, unidadReceta: "ml",    esConversion: true  },
            { buscarNombre: "Crema de leche",              cantidadReceta: 30.00, unidadReceta: "ml",     esConversion: true  },
            { buscarNombre: "Azúcar blanca",              cantidadReceta: 10.00, unidadReceta: "gramos",  esConversion: true  },
            { buscarNombre: "Chocolate en polvo / cacao",  cantidadReceta: 2.00,  unidadReceta: "gramos", esConversion: true  },
            { buscarNombre: "Vasos desechables 6 oz",      cantidadReceta: 1.00,  unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Tapas para vasos",            cantidadReceta: 1.00,  unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Paletas agitadoras",          cantidadReceta: 1.00,  unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Servilletas",                 cantidadReceta: 1.00,  unidadReceta: "unidad", esConversion: false }
        ]
    },
    {
        idReceta: 4,
        nombreReceta: "MOCACHINO",
        tiempoPreparacion: 7,
        numeroPorciones: 1,
        ingredientes: [
            { buscarNombre: "Café molido espresso",  cantidadReceta: 7.00,  unidadReceta: "gramos", esConversion: true  },
            { buscarNombre: "Leche entera",           cantidadReceta: 120.00, unidadReceta: "ml",   esConversion: true  },
            { buscarNombre: "Sirope de chocolate",    cantidadReceta: 20.00, unidadReceta: "ml",     esConversion: true  },
            { buscarNombre: "Crema de leche",         cantidadReceta: 30.00, unidadReceta: "ml",     esConversion: true  },
            { buscarNombre: "Azúcar blanca",         cantidadReceta: 10.00, unidadReceta: "gramos",  esConversion: true  },
            { buscarNombre: "Vasos desechables 6 oz", cantidadReceta: 1.00,  unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Tapas para vasos",       cantidadReceta: 1.00,  unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Paletas agitadoras",     cantidadReceta: 1.00,  unidadReceta: "unidad", esConversion: false },
            { buscarNombre: "Servilletas",            cantidadReceta: 1.00,  unidadReceta: "unidad", esConversion: false }
        ]
    }
];

// ==========================================
// ARREGLO DE GASTOS FIJOS
// ==========================================
let costosFijos = [
    { concepto: "Arriendo del local",      categoria: "Infraestructura",         frecuencia: "Mensual", montoMensual: 350.00,  inputId: "fijo_arriendo",     notas: "Contrato fijo anual" },
    { concepto: "Sueldo barista",           categoria: "Personal",                frecuencia: "Mensual", montoMensual: 645.44,  inputId: "fijo_barista",      notas: "Incluye beneficios de ley" },
    { concepto: "Sueldo cajera",            categoria: "Personal",                frecuencia: "Mensual", montoMensual: 645.44,  inputId: "fijo_cajera",       notas: "Incluye beneficios de ley" },
    { concepto: "Sueldo administrador",     categoria: "Personal",                frecuencia: "Mensual", montoMensual: 1094.17, inputId: "fijo_admin",        notas: "Cargo gerencial" },
    { concepto: "Depreciación maquinaria", categoria: "Activos fijos",           frecuencia: "Mensual", montoMensual: 50.00,   inputId: "fijo_depreciacion", notas: "Máquina espresso / molino" },
    { concepto: "Electricidad",             categoria: "Servicios básicos",       frecuencia: "Mensual", montoMensual: 10.00,   inputId: "fijo_electricidad", notas: "Tarifa base estimada" },
    { concepto: "Agua potable",             categoria: "Servicios básicos",       frecuencia: "Mensual", montoMensual: 15.00,   inputId: "fijo_agua",         notas: "Consumo base mensual" },
    { concepto: "Internet y teléfono",     categoria: "Servicios básicos",       frecuencia: "Mensual", montoMensual: 35.00,   inputId: "fijo_internet",     notas: "Plan fijo empresarial" },
    { concepto: "Honorarios contabilidad", categoria: "Servicios profesionales", frecuencia: "Mensual", montoMensual: 50.00,   inputId: "fijo_contabilidad", notas: "Contador externo" },
    { concepto: "Seguros",                  categoria: "Gastos legales",          frecuencia: "Mensual", montoMensual: 30.00,   inputId: "fijo_seguro",       notas: "Seguro del local y equipos" },
    { concepto: "Licencias y permisos",    categoria: "Gastos legales",          frecuencia: "Mensual", montoMensual: 12.00,   inputId: "fijo_licencias",    notas: "Permiso municipal / SRI" },
    { concepto: "Publicidad fija",          categoria: "Marketing",               frecuencia: "Mensual", montoMensual: 30.00,   inputId: "fijo_publicidad",   notas: "Redes sociales / impresiones" }
];

// ==========================================
// ARREGLO DE GASTOS VARIABLES OPERATIVOS
// (Solo servicios/consumibles que NO están en materia prima)
// ==========================================
let costosVariables = [
    { concepto: "Servicio de electricidad", costoUnitario: 3.500, usoDiario: 0.17, notas: "1 cilindro cada 6 días aprox." },
    { concepto: "Suministros de limpieza",     unidad: "usoDiario", costoUnitario: 0.900, usoDiario: 1.00, notas: "Pastillas, paños limpieza máquina" }
];

// ==========================================
// FUNCIÓN CENTRAL: CALCULAR TOTALES MPD Y MPI
// (Usada por Materia Prima, Variables y Directos)
// ==========================================
function calcularTotalesMateriaPrima() {
    let totalDirecta = 0;
    let totalIndirecta = 0;
    for (let i = 0; i < materiasPrimas.length; i++) {
        if (materiasPrimas[i].tipo === "DIRECTA") {
            totalDirecta = totalDirecta + materiasPrimas[i].precio;
        } else {
            totalIndirecta = totalIndirecta + materiasPrimas[i].precio;
        }
    }
    return { totalDirecta, totalIndirecta };
}

// ==========================================
// ACTUALIZAR TODOS LOS PANELES QUE MUESTRAN TOTALES MP
// ==========================================
function sincronizarTotalesMateriaPrima() {
    let totales = calcularTotalesMateriaPrima();
    let mpd = totales.totalDirecta;
    let mpi = totales.totalIndirecta;
    let combinado = mpd + mpi;

    // --- Sección Materia Prima ---
    let elMPD = document.getElementById("total_materia_directa");
    let elMPI = document.getElementById("total_materia_indirecta");
    let elMPGeneral = document.getElementById("total_materia_general");
    if (elMPD) elMPD.innerText = convertirMoneda(mpd);
    if (elMPI) elMPI.innerText = convertirMoneda(mpi);
    if (elMPGeneral) elMPGeneral.innerText = convertirMoneda(combinado);

    // --- Sección Variables ---
    let elVarMPD = document.getElementById("var_total_mpd");
    let elVarMPI = document.getElementById("var_total_mpi");
    let elVarCombinado = document.getElementById("var_total_mp_combinado");
    let elVarResumenMP = document.getElementById("var_resumen_mp");
    if (elVarMPD) elVarMPD.innerText = convertirMoneda(mpd);
    if (elVarMPI) elVarMPI.innerText = convertirMoneda(mpi);
    if (elVarCombinado) elVarCombinado.innerText = convertirMoneda(combinado);
    if (elVarResumenMP) elVarResumenMP.innerText = convertirMoneda(combinado);

    // --- Sección Directos e Indirectos ---
    let elDirectosMPD = document.getElementById("directos_mpd");
    let elDirectosMPI = document.getElementById("directos_mpi");
    // En directos/indirectos: los costos indirectos incluyen los gastos fijos también
    let totalFijos = 0;
    for (let i = 0; i < costosFijos.length; i++) {
        totalFijos = totalFijos + costosFijos[i].montoMensual;
    }
    if (elDirectosMPD) elDirectosMPD.innerText = convertirMoneda(mpd);
    if (elDirectosMPI) elDirectosMPI.innerText = convertirMoneda(mpi + totalFijos);
}

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
// RENDERIZADO TABLA MATERIA PRIMA
// ==========================================
function actualizarTablaMateria() {
    let tablaBody = document.getElementById("tabla_materia_prima");
    if (!tablaBody) return;

    tablaBody.innerHTML = "";

    materiasPrimas.forEach(function(item, index) {
        let costoNetoUnidad = obtenerCostoNetoUnitarioInsumo(item);
        let colorTipo = item.tipo === "DIRECTA" ? "var(--celeste-tech)" : "var(--rosa-marca)";

        let fila = `
            <tr>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--texto-gris);">${index + 1}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 600; color: var(--texto-blanco);">${item.nombre}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--texto-gris);">${item.unidad}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--celeste-tech); font-weight: 500;">${item.cantidad.toFixed(2)}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--celeste-tech); font-weight: 500;">$${item.precio.toFixed(2)}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--rosa-marca); font-weight: 500;">${item.merma.toFixed(2)}%</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); font-style: italic; font-size: 0.85rem; color: ${colorTipo};">${item.tipo}</td>
                <td style="padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: center;">
                    <button onclick="cargarMateriaParaEditar(${index})" style="background: transparent; border: 1px solid var(--celeste-tech); color: var(--celeste-tech); padding: 0.3rem 0.6rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">Editar</button>
                </td>
            </tr>
        `;
        tablaBody.innerHTML += fila;
    });

    // Sincronizamos todos los totales cada vez que se actualiza la tabla
    sincronizarTotalesMateriaPrima();
    actualizarPantallaRecetas();
}

// ==========================================
// RENDERIZADO TABLA COSTOS FIJOS
// ==========================================
function actualizarTablaCostosFijos() {
    let tablaBody = document.getElementById("tabla_costos_fijos");
    if (!tablaBody) return;

    // Eliminamos tfoot anterior si existe
    let tfootViejo = tablaBody.parentElement.querySelector("tfoot");
    if (tfootViejo) { tfootViejo.remove(); }

    let totalMensual = 0;
    for (let i = 0; i < costosFijos.length; i++) {
        totalMensual = totalMensual + costosFijos[i].montoMensual;
    }

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
                <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); text-align:center;">
                    <button onclick="cargarFijoParaEditar(${i})" style="background: transparent; border: 1px solid var(--celeste-tech); color: var(--celeste-tech); padding: 0.3rem 0.6rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">Editar</button>
                </td>
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
            <td></td>
        </tr>
    `;
    tablaBody.parentElement.appendChild(tfoot);

    // Actualizamos el total visible en el pie de sección
    let elTotal = document.getElementById("total_fijos_calculado");
    if (elTotal) { elTotal.innerText = convertirMoneda(totalMensual); }

    // Resincronizamos directos (que incluyen fijos en sus indirectos)
    sincronizarTotalesMateriaPrima();
}

// ==========================================
// GUARDAR / EDITAR GASTO FIJO
// ==========================================
function guardarGastoFijo() {
    let nombre   = recuperaraTexto("fijo_nombre");
    let categoria = recuperaraTexto("fijo_categoria");
    let valor    = recuperarFloatSeguro("fijo_valor");
    let notas    = recuperaraTexto("fijo_notas");
    let indexEditar = parseInt(document.getElementById("fijo_index_editar").value);

    if (nombre === "" || valor <= 0) {
        alert("Por favor ingresa un nombre y un valor mayor a cero.");
        return;
    }

    let datosFijo = {
        concepto: nombre,
        categoria: categoria !== "" ? categoria : "Otros",
        frecuencia: "Mensual",
        montoMensual: valor,
        inputId: "",
        notas: notas
    };

    if (indexEditar === -1) {
        costosFijos.push(datosFijo);
    } else {
        costosFijos[indexEditar] = datosFijo;
        cancelarEdicionFijo();
        actualizarTablaCostosFijos();
        return;
    }

    limpiarFormularioFijo();
    actualizarTablaCostosFijos();
}

function cargarFijoParaEditar(index) {
    let item = costosFijos[index];
    mostrarTextoEnCaja("fijo_nombre",     item.concepto);
    mostrarTextoEnCaja("fijo_categoria",  item.categoria);
    mostrarTextoEnCaja("fijo_valor",      item.montoMensual);
    mostrarTextoEnCaja("fijo_notas",      item.notas);
    document.getElementById("fijo_index_editar").value = index;

    document.getElementById("fijo_formulario_titulo").innerText = "Modificar Gasto Fijo";
    document.getElementById("btn_guardar_fijo").innerText = "Guardar Cambios";
    document.getElementById("btn_guardar_fijo").style.background = "#10b981";
    document.getElementById("btn_cancelar_fijo").style.display = "inline-block";
    document.getElementById("fijo_formulario_titulo").scrollIntoView({ behavior: "smooth" });
}

function cancelarEdicionFijo() {
    document.getElementById("fijo_index_editar").value = "-1";
    document.getElementById("fijo_formulario_titulo").innerText = "Agregar Nuevo Gasto Fijo";
    document.getElementById("btn_guardar_fijo").innerText = "Guardar Gasto Fijo";
    document.getElementById("btn_guardar_fijo").style.background = "var(--rosa-marca)";
    document.getElementById("btn_cancelar_fijo").style.display = "none";
    limpiarFormularioFijo();
}

function limpiarFormularioFijo() {
    mostrarTextoEnCaja("fijo_nombre",    "");
    mostrarTextoEnCaja("fijo_categoria", "");
    mostrarTextoEnCaja("fijo_valor",     "");
    mostrarTextoEnCaja("fijo_notas",     "");
}

// ==========================================
// GUARDAR GASTO VARIABLE NUEVO (botón del formulario)
// ==========================================
function guardarGastoVariable() {
    // 1. Recuperamos las variables usando tus utilitarios seguros
    let nombre = recuperaraTexto("var_nombre");
    let costoMensual = recuperarFloatSeguro("var_costo");

    // Validación de seguridad para la auditoría de costos
    if (nombre === "" || costoMensual <= 0) {
        alert("Por favor completa el concepto y el costo mensual con un valor mayor a cero.");
        return;
    }

    // 2. LÓGICA MATEMÁTICA: Calculamos el costo diario de manera automática
    let costoDiario = costoMensual / 26;

    // 3. Empujamos el objeto al arreglo global costosVariables
    // Guardamos la propiedad montoMensualOriginal para asegurar un renderizado exacto
    costosVariables.push({ 
        concepto: nombre, 
        costoUnitario: costoDiario, 
        usoDiario: 1,               
        montoMensualOriginal: costoMensual, 
        notas: "" 
    });

    // 4. Limpiamos las cajas de texto utilizando tus funciones de utilitarios.js
    mostrarTextoEnCaja("var_nombre", "");
    mostrarTextoEnCaja("var_costo", "");

    // 5. Redibujamos la tabla
    actualizarTablaCostosVariables();
}
// ==========================================
// ==========================================
function actualizarTablaCostosVariables() {
    let tablaBody = document.getElementById("tabla_costos_variables");
    if (!tablaBody) return;

    // Limpiamos elementos repetidos de tfoot si existen
    let tfootViejo = tablaBody.parentElement.querySelector("tfoot");
    if (tfootViejo) { tfootViejo.remove(); }

    let totalMensualVariables = 0;
    tablaBody.innerHTML = "";

    // Iteración matemática sobre el arreglo de costos variables
    for (let i = 0; i < costosVariables.length; i++) {
        let item = costosVariables[i];
        
        let costoDiario = item.costoUnitario * item.usoDiario;
        
        // Manejo inteligente: Si es un valor precargado calcula diario * 26, si es nuevo usa su mensual original
        let costoMensual = item.montoMensualOriginal ? item.montoMensualOriginal : (costoDiario * 26);
        
        totalMensualVariables = totalMensualVariables + costoMensual;

        // Inyección dinámica respetando el orden: N°, Concepto, Diario, Mensual
        let fila = `
        <tr>
            <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--texto-gris);">${i + 1}</td>
            <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); font-weight:600; color:var(--texto-blanco);">${item.concepto}</td>
            <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); color:var(--celeste-tech); font-weight:bold;">$${costoDiario.toFixed(4)}</td>
            <td style="padding:0.8rem 1rem; border-bottom:1px solid rgba(255,255,255,0.05); font-weight:bold; color:var(--rosa-marca);">$${costoMensual.toFixed(2)}</td>
        </tr>`;
        tablaBody.innerHTML += fila;
    }

    // Pie de tabla que consolida la suma total acumulada
    let tfoot = document.createElement("tfoot");
    tfoot.innerHTML = `
        <tr style="background: rgba(56, 189, 248, 0.07);">
            <td colspan="3" style="padding:0.8rem 1rem; font-weight:bold; color:var(--celeste-tech); text-transform:uppercase;">Total Otros Costos Variables Mensuales</td>
            <td style="padding:0.8rem 1rem; font-weight:bold; color:var(--celeste-tech); font-size:1.05rem;">$${convertirMoneda(totalMensualVariables)}</td>
        </tr>
    `;
    tablaBody.parentElement.appendChild(tfoot);

    // Sincronización automática de los paneles informativos del sistema
    let elResumenOp = document.getElementById("var_resumen_operativos");
    if (elResumenOp) { elResumenOp.innerText = convertirMoneda(totalMensualVariables); }

    let totalesMP = calcularTotalesMateriaPrima();
    let totalGeneral = totalesMP.totalDirecta + totalesMP.totalIndirecta + totalMensualVariables;
    
    let elTotalVar = document.getElementById("total_variables_calculado");
    if (elTotalVar) { elTotalVar.innerText = convertirMoneda(totalGeneral); }
}

// ==========================================
// RENDERIZADO DE LAS TABLAS DE RECETAS
// ==========================================
function actualizarPantallaRecetas() {
    let contenedor = document.getElementById("contenedor_recetas_dinamicas");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    recetasBase.forEach(function(receta, rIndex) {
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

        receta.ingredientes.forEach(function(ingrediente, iIndex) {
            let insumoEncontrado = materiasPrimas.find(function(m) {
                return m.nombre.toLowerCase().trim() === ingrediente.buscarNombre.toLowerCase().trim();
            });
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
// EDICIÓN DE INGREDIENTE EN RECETA
// ==========================================
function cargarIngredienteParaEditar(recetaIndex, ingredienteIndex) {
    let receta = recetasBase[recetaIndex];
    let ingrediente = receta.ingredientes[ingredienteIndex];

    mostrarTextoEnCaja("receta_ingrediente_nombre", ingrediente.buscarNombre);
    mostrarTextoEnCaja("receta_ingrediente_cantidad", ingrediente.cantidadReceta);
    mostrarTextoEnCaja("receta_ingrediente_unidad", ingrediente.unidadReceta);
    mostrarTextoEnCaja("receta_tiempo", receta.tiempoPreparacion);
    mostrarTextoEnCaja("receta_porciones", receta.numeroPorciones);

    document.getElementById("receta_id_editar").value = recetaIndex;
    document.getElementById("ingrediente_id_editar").value = ingredienteIndex;

    document.getElementById("formulario_edicion_receta").style.display = "block";
    document.getElementById("receta_formulario_titulo").innerText = "Modificando Insumo de la Receta: " + receta.nombreReceta;
    document.getElementById("formulario_edicion_receta").scrollIntoView({ behavior: 'smooth' });
}

function guardarCambiosParametrosReceta() {
    let rIndex = parseInt(document.getElementById("receta_id_editar").value);
    let iIndex = parseInt(document.getElementById("ingrediente_id_editar").value);

    let nuevaCantidad = recuperarFloat("receta_ingrediente_cantidad");
    let nuevaUnidad = recuperaraTexto("receta_ingrediente_unidad");
    let nuevoTiempo = recuperarInt("receta_tiempo");
    let nuevasPorciones = recuperarInt("receta_porciones");

    if (isNaN(nuevaCantidad) || nuevaUnidad === "" || isNaN(nuevoTiempo) || isNaN(nuevasPorciones)) {
        alert("Por favor, rellene todos los campos con valores válidos.");
        return;
    }

    recetasBase[rIndex].tiempoPreparacion = nuevoTiempo;
    recetasBase[rIndex].numeroPorciones = nuevasPorciones;
    recetasBase[rIndex].ingredientes[iIndex].cantidadReceta = nuevaCantidad;
    recetasBase[rIndex].ingredientes[iIndex].unidadReceta = nuevaUnidad;

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
// EDICIÓN DE MATERIA PRIMA
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
    let nombre   = recuperaraTexto("mat_nombre");
    let unidad   = recuperaraTexto("mat_unidad");
    let cantidad = recuperarFloat("mat_cantidad");
    let precio   = recuperarFloat("mat_precio");
    let merma    = recuperarFloat("mat_merma");
    let tipo     = document.getElementById("mat_tipo").value;
    let indexEditar = parseInt(document.getElementById("mat_index_editar").value);

    if (nombre === "" || unidad === "" || isNaN(cantidad) || isNaN(precio) || isNaN(merma)) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }

    let datosInsumo = { nombre, unidad, cantidad, precio, merma, tipo };

    if (indexEditar === -1) {
        if (tipo === "DIRECTA") {
            let ultimoIndiceDirecta = -1;
            for (let i = materiasPrimas.length - 1; i >= 0; i--) {
                if (materiasPrimas[i].tipo === "DIRECTA") { ultimoIndiceDirecta = i; break; }
            }
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
        materiasPrimas.sort(function(a, b) {
            if (a.tipo === "DIRECTA" && b.tipo === "INDIRECTA") return -1;
            if (a.tipo === "INDIRECTA" && b.tipo === "DIRECTA") return 1;
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
    let ids = ["fijos", "variables", "directos", "materia", "personal", "recetas", "ganancias", "equilibrio"];
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).classList.remove("activa");
    }
}

function mostrarSeccion(id) {
    ocultarSecciones();
    document.getElementById(id).classList.add("activa");
}

// ==========================================
// CARGA INICIAL DEL DOM
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    // Explicaciones de texto
    let divMat = document.getElementById("bloque_explicacion_materia");
    if (divMat) { divMat.innerHTML = explicacionMateriaPrimaHTML; }

    let divRec = document.getElementById("bloque_explicacion_recetas");
    if (divRec) { divRec.innerHTML = explicacionRecetasHTML; }

    let divFijos = document.getElementById("bloque_explicacion_fijos");
    if (divFijos) { divFijos.innerHTML = explicacionCostosFijosHTML; }

    let divVariables = document.getElementById("bloque_explicacion_variables");
    if (divVariables) { divVariables.innerHTML = explicacionCostosVariablesHTML; }

    // Renderizado inicial de tablas
    actualizarTablaCostosFijos();
    actualizarTablaMateria();       // también llama sincronizarTotalesMateriaPrima
    actualizarTablaCostosVariables();
});
