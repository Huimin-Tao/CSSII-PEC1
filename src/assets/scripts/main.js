/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */



// Configuración del menú de hamburguesa
const hamburguesa = document.querySelector(".header__hamburguesa");
const navlinks = document.querySelector(".header__navigation");

if (hamburguesa && navlinks) {
    hamburguesa.addEventListener("click", () => {
        navlinks.classList.toggle("active");
    });
} else {
    console.error("Elementos del menú de hamburguesa no encontrados en el DOM.");
}