//**Seleccionar contenido */

//**QuerySelector */

const heading = document.querySelector(".header__texto h2"); //** 0 a 1 Elementos */
heading.textContent = "Nuevo Heading";
// heading.classList.add('nueva-clase');
console.log(heading);

//**QuerySelectorAll */

const enlaces = document.querySelectorAll(".navegacion a"); //**Retorna todo lo que se seleccione */
enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add("nueva-clase");
// enlaces[0].classList.remove('navegacion__enlace')
// enlaces[0].href = 'http://google.com/';

//**getElementById */

const heading2 = document.getElementById("heading");
console.log(heading2);

//** Generar un nuevo enlace */

const nuevoEnlace = document.createElement("A");

//* Agregar el href

nuevoEnlace.href = "nuevo-enlace.html";

//* Agregar el texto

nuevoEnlace.textContent = "Tienda virtual";

//*Agregar la clase

nuevoEnlace.classList.add("navegacion__enlace");

//* Agregarlo al documento

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//** Eventos */

console.log(1);

window.onload = function () {
  console.log(3);
};

window.addEventListener("load", imprimir); //** imprimir mediante la función cuando son muchas funciones*/

document.addEventListener("DOMContentLoaded", function () {
  //** DomContentLoaded, solo espera a que se descargue el html, pero no espera CSS o imagenes */
  console.log(4);
});

console.log(5);

function imprimir() {
  console.log(2);
}

window.onscroll = function () {
  console.log("scrolling");
};

//** */ Seleccionar elementos y asociarles un evento*/
// const btnEnviar = document.querySelector(".boton--primario");

// btnEnviar.addEventListener("click", function (evento) {
//   console.log(evento.target);
//   evento.preventDefault(); //** no hace la acción de llevarnos a otra pagina, es util para valiar un formulario */

//   //** Validar un formulario */

//   console.log("enviando formulario");
// });

//*** Eventos de los inputs y textarea */

//*Para hacer la validación
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const mensajeInput = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombreInput.addEventListener("input", leerTexto);
emailInput.addEventListener("input", leerTexto);
mensajeInput.addEventListener("input", leerTexto);
//**El evento del submit */

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  //**validar el formulario */

  const { nombre, email, mensaje } = datos;

  console.log(nombre);
  console.log(email);
  console.log(mensaje);

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", 'error');

    return; //**Corta la ejecución del código */
  }

  //**Crear alerta de enviar correctamente */
  mostrarAlerta("Enviado correctamente");

  //**Enviar el formulario*/

  console.log("Enviando formulario");
});

function leerTexto(e) {
  // console.log(e.target.value);
  datos[e.target.id] = e.target.value;

  // console.log(e.target);

  // console.log(datos);
}

//**Refactorizando el codigo que esta comentado abajo */

function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;

  if(error) {
    alerta.classList.add('error');
  } else {
    alerta.classList.add('correcto');
  }

  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 2000)
}

//**Mostar envio en pantalla*/

// function mostrarMensaje(mensaje) {
//   const alerta = documetn.createElement('P');
//   alerta.textContent = mensaje;
//   alerta.classList.add("correcto");

//   formulario.appendChild(alerta);

//   //**Dezaparezca despues de 2 segundos */

//   setTimeout(() => {
//     alerta.remove();
//   }, 2000);
// }

//** Muestra un error en pantalla */

// function mostrarError(mensaje) {
//   const error = document.createElement("P");
//   error.textContent = mensaje;
//   error.classList.add("error");

//   formulario.appendChild(error);

//   //**Dezaparezca despues de 2 segundos */

//   setTimeout(() => {
//     error.remove();
//   }, 2000);
// }
