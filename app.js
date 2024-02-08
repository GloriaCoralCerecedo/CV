//Menú lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    // Si esta oculto
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}
// Ocultar el menú una vez seleccionada una opción
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}
// Crear las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}
// Selecciona todas las barras generales para luegoo manipularlas
let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let net = document.getElementById("net");
crearBarra(net);
let laravel = document.getElementById("laravel");
crearBarra(laravel);
let c = document.getElementById("c");
crearBarra(c);
let drupal = document.getElementById("drupal");
crearBarra(drupal);
let sqlserver = document.getElementById("sqlserver");
crearBarra(sqlserver);
let mysql = document.getElementById("mysql");
crearBarra(mysql);
let canva = document.getElementById("canva");
crearBarra(canva);
let balsamiq = document.getElementById("balsamiq");
crearBarra(balsamiq);
//Guardar la cantidad de barritas que se van a ir pintando por casa barra
// para eso se utiliz un arreglo, casa posición pertenece a un elemento
// Se comienza en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
//Esta variable se utiliza como bandera para saber si ya se ejecuto la animación
let bandera = false;
//Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && bandera == false) {
    bandera = true;
    const intervalHtml = setInterval(function () {
      pintarBarra(html, 16, 0, intervalHtml);
    }, 100);
    const intervalCss = setInterval(function () {
      pintarBarra(css, 13, 1, intervalCss);
    }, 100);
    const intervalJavascript = setInterval(function () {
      pintarBarra(javascript, 9, 2, intervalJavascript);
    }, 100);
    const intervalWordPress = setInterval(function () {
      pintarBarra(wordpress, 15, 3, intervalWordPress);
    }, 100);
    const intervalNet = setInterval(function () {
      pintarBarra(net, 11, 4, intervalNet);
    }, 100);
    const intervalLaravel = setInterval(function () {
      pintarBarra(laravel, 10, 5, intervalLaravel);
    }, 100);
    const intervalC = setInterval(function () {
      pintarBarra(c, 13, 6, intervalC);
    }, 100);
    const intervalDrupal = setInterval(function () {
      pintarBarra(drupal, 15, 7, intervalDrupal);
    }, 100);
    const intervalSqlServer = setInterval(function () {
      pintarBarra(sqlserver, 15, 8, intervalSqlServer);
    }, 100);
    const intervalMySql = setInterval(function () {
      pintarBarra(mysql, 15, 9, intervalMySql);
    }, 100);
    const intervalCanva = setInterval(function () {
      pintarBarra(canva, 13, 10, intervalCanva);
    }, 100);
    const intervalBalsamiq = setInterval(function () {
      pintarBarra(balsamiq, 16, 11, intervalBalsamiq);
    }, 100);
  }
}
// Se llena una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#6b0294";
  } else {
    clearInterval(interval);
  }
}
// Se detecta el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function () {
  efectoHabilidades();
};
