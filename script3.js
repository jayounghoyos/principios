// Obtén referencias a los elementos
const tipoUrbanizacion = document.querySelector("#urbanizacion");
const zonas = document.querySelector(".visibility.zonas");

// Agrega un evento de cambio al elemento "urbanizacion"
tipoUrbanizacion.addEventListener("change", () => {
    if (tipoUrbanizacion.value === "cerrada") {
        zonas.style.display = "block";
    } else {
        zonas.style.display = "none";
    }
});