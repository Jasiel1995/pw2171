//agrega al codigo (un enlace) al main.js para que crea que el codigo esta alla
const rq = require('electron-require')
const main = rq.remote('./main.js')
var botonesNumero = ["btn00","btn01","btn02","btn03","btn05","btn06","btn07","btn08","btn09"]
var botonesOperador = ["btnSumar","btnRestar","btnMultiplicar","btnDividir"]

function numeros(){
	alert(this.value)
	alert(this.id)
}
function operadores(){

}
function igual(){

}
function borrar(){

}


//Asignacion de eventos a los botone de numero
for (var i = 0; i < botonesNumero; i++ ) {
	document.getElementByID(botonesNumero[i]).addEventListener('clic',numeros)
};
//Asignacion de eventos a los botone de operador
for (var i = 0; i < botonesOperador; i++ ) {
	document.getElementByID(botonesOperador[i]).addEventListener('clic',operadores)
};
//Evento click del boton igual
document.getElementByID("btnIgual").addEventListener('clic',igual)
document.getElementByID("btnCE").addEventListener('clic',borrar)