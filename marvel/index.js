const rq = require('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");
//posiciona el cursor en cuadro de texto
$("#txtPersonaje").focus();
//evento del boton bynbuscar-click
$("#btnBuscar").on("click",buscarPersonaje);



























