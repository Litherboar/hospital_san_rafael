
/* Cambio No12. Crear script app.js con lógica base */
/* ACTUALIZACIÓN AUTOMÁTICA */
/* Cambio No17. Configurar intervalo de actualización automática (setInterval) */
setInterval(() => {

    console.log("Actualizando estado del sistema...");

}, 30000);

/* LOGIN FRONTEND */

const loginBtn = document.getElementById("login-btn");

if(loginBtn){
/* Cambio No27 Implementar lógica de login frontend (login-btn click) */
    loginBtn.addEventListener("click", function(e){

        e.preventDefault();
/* Cambio No28 Redirigir a admin.html tras login exitoso*/
        window.location.href = "admin.html";

    });

}

/* DETALLE DINÁMICO */


const params = new URLSearchParams(window.location.search);

const sistema = params.get("sistema");

const titulo = document.querySelector(".titulo-sistema");

if(sistema && titulo){

    /* Cambio No14. Mapear parámetros a nombres de sistemas (objeto nombres) */
    const nombres = {

        citas:"Sistema de citas médicas",

        historia:"Historia clínica electrónica",

        laboratorio:"API de laboratorio",

        facturacion:"Sistema de facturación",

        servidor:"Servidor de base de datos"

    };
/* Cambio No15. Actualizar título dinámico en detalle.html via JS */
    titulo.innerHTML = nombres[sistema];
}
