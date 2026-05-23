
/* Cambio No12. Crear script app.js con lógica base */
/* ACTUALIZACIÓN AUTOMÁTICA */

setInterval(() => {

    console.log("Actualizando estado del sistema...");

}, 30000);

/* LOGIN FRONTEND */

const loginBtn = document.getElementById("login-btn");

if(loginBtn){

    loginBtn.addEventListener("click", function(e){

        e.preventDefault();

        window.location.href = "admin.html";

    });

}

/* DETALLE DINÁMICO */

const params = new URLSearchParams(window.location.search);

const sistema = params.get("sistema");

const titulo = document.querySelector(".titulo-sistema");

if(sistema && titulo){

    const nombres = {

        citas:"Sistema de citas médicas",

        historia:"Historia clínica electrónica",

        laboratorio:"API de laboratorio",

        facturacion:"Sistema de facturación",

        servidor:"Servidor de base de datos"

    };

    titulo.innerHTML = nombres[sistema];
}
