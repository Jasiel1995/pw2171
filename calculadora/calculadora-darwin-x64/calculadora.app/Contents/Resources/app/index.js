//agrega al codigo (un enlace) al main.js para que crea que el codigo esta alla
const rq = require('electron-require')
const main = rq.remote('./main.js')
var botonesNumero = ["btn00","btn01","btn02","btn03","btn05","btn06","btn07","btn08","btn09"]
var botonesOperador = ["btnSumar","btnRestar","btnMultiplicar","btnDividir"]
var operador =""
function numeros(){
	var num = String(this.value)
	if(operador==""){
		var va = document.getElementById("operando1").value
		if(va =="0"){
			document.getElementById("operando1").value=""
		}
		document.getElementById("operando1").value+=num
	}
	else{
		var va = document.getElementById("operando2").value
		if(va =="0"){
			document.getElementById("operando2").value=""
		}
		document.getElementById("operando2").value+=num
	}
}
function operadores(){
	operador = String(this.value)
}
function igual(){
	var valor1=document.getElementById("operando1").value
	var valor2=document.getElementById("operando2").value
	document.getElementById("resultado").value=eval(valor1+operador+valor2)
}
function borrar(){
	document.getElementById("operando1").value="0"
	document.getElementById("operando2").value="0"
	document.getElementById("resultado").value="0"
	operador=""
}


//Asignacion de eventos a los botone de numero
for (var i = 0; i < botonesNumero.length; i++ ) {
	document.getElementById(botonesNumero[i]).addEventListener('click',numeros)
};
//Asignacion de eventos a los botone de operador
for (var i = 0; i < botonesOperador.length; i++ ) {
	document.getElementById(botonesOperador[i]).addEventListener('click',operadores)
};
//Evento click del boton igual
document.getElementById("btnIgual").addEventListener('click',igual)
document.getElementById("btnCE").addEventListener('click',borrar)