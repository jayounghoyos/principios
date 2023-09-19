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