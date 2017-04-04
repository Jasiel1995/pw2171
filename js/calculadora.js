//variable global
var operador="";
function operadores(ope){
	operador=ope
}
function borrar(){
	operador="";
	document.calculadora.operando1.value=0
	document.calculadora.operando2.value=0
	document.calculadora.resultado.value=0

}
function igual(){
	var valor1 = document.calculadora.operando1.value
	var valor2 = document.calculadora.operando2.value
	document.calculadora.resultado.value=eval(valor1+operador+valor2)
}
function numeros(num){
	if(operador==""){
		//escribir en el operando 1
		var valorInicial = document.calculadora.operando1.value
		if (valorInicial=="0") {
			document.calculadora.operando1.value=""
		}
		document.calculadora.operando1.value =
		document.calculadora.operando1.value + num
	}
	else{
		var valorInicial = document.calculadora.operando2.value
		if (valorInicial=="0") {
			document.calculadora.operando2.value=""
		}
		document.calculadora.operando2.value =
		document.calculadora.operando2.value + num
	}
}