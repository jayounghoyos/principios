// Obtén referencias a los elementos
const tipoUrbanizacion = document.querySelector("#urbanizacion");
const zonas = document.querySelectorAll(".zonas");
const aceptaMascotas = document.querySelectorAll(".acepta-mascotas");


// Agrega un evento de cambio al elemento "urbanizacion"
tipoUrbanizacion.addEventListener("change", () => {
    if (tipoUrbanizacion.value === "abierta") {
        // Oculta todos los elementos con la clase "zonas"
        zonas.forEach(element => {
            element.style.display = "none";
        });
        aceptaMascotas.forEach(element => {
            element.style.display = "none";
        });
    } else {
        // Muestra todos los elementos con la clase "zonas"
        zonas.forEach(element => {
            element.style.display = "block";
        });
        aceptaMascotas.forEach(element => {
            element.style.display = "block";
        });
    }
});

const zonasVerdes = document.querySelector("#zonasVerdes");
const inputVerdes = document.querySelector("#areas-verdes");
const categorias = document.querySelector("#categoria");

categorias.addEventListener("change", () => {
    if (tipoUrbanizacion.value === "abierta" &&
        categorias.value === "apartamento") {
        zonasVerdes.style.display = "none";
        inputVerdes.style.display = "none";
    }
});
// Agregar un evento de cambio al campo de filtro de baños
const filtroBanos = document.getElementById('filtro-banos');
filtroBanos.addEventListener('change', () => {
    const valorFiltro = filtroBanos.value;
    filtrarTarjetasPorBanos(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la cantidad de baños
function filtrarTarjetasPorBanos(cantidadBanos) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const numBanos = tarjeta.dataset.numBanos; // Obtener la cantidad de baños desde el atributo data

        if (cantidadBanos === 'todos' || numBanos === cantidadBanos) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}
// Agregar un evento de cambio al campo de filtro de terraza
const filtroTerraza = document.getElementById('filtro-terraza');
filtroTerraza.addEventListener('change', () => {
    const valorFiltro = filtroTerraza.value;
    filtrarTarjetasPorTerraza(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la presencia de terraza
function filtrarTarjetasPorTerraza(terraza) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const tieneTerraza = tarjeta.dataset.terraza === 'true'; // Obtener la información de terraza desde el atributo data

        if (terraza === 'todos' || (terraza === 'true' && tieneTerraza) || (terraza === 'false' && !tieneTerraza)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}