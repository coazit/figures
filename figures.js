//Codigo Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}
console.groupEnd();


//Codigo del Triangulo
console.group("Trinagulo");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
console.groupEnd();

//Codigo del Circulo
console.group("Circulos");
const PI = Math.PI;

function diametroCirculo (radio){    
    return radio * 2;    
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio)    
    return diametro * PI;    
}

function areaCirculo (radio){
    return (Math.pow(radio, 2)) * PI;
}
console.groupEnd();

//Function de HTML CUADRADO
function calcularPerimetroCuadrado() {
    const lado = document.getElementById("InputCuadrado");    
    const value = lado.value;
    alert(perimetroCuadrado(value));
}

function calcularAreaCuadrado() {
    const lado = document.getElementById("InputCuadrado");    
    const value = lado.value;   
    alert(areaCuadrado(value));
}


//Function de HTML TRIANGULO
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputLado1");    
    const value1 = Number(lado1.value);
    const lado2 = document.getElementById("InputLado2");    
    const value2 = Number(lado2.value);
    const base = document.getElementById("InputBase");    
    const valuebase = Number(base.value);

    alert(perimetroTriangulo(value1, value2, valuebase));
}


function calcularAreaTriangulo() {
    const lado1 = document.getElementById("InputLado1");    
    const value1 = lado1.value;
    const lado2 = document.getElementById("InputLado2");    
    const value2 = lado2.value;
    const base = document.getElementById("InputBase");    
    const valuebase = base.value;

    alert(areaTriangulo(value1, valuebase));
}


//Function de HTML TRIANGULO
function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputRadio");
    const radiovalue = radio.value;
    alert(perimetroCirculo(radiovalue));
}
function calcularAreaCirculo() {
    const radio = document.getElementById("InputRadio");
    const radiovalue = radio.value;
    alert(areaCirculo(radiovalue));
}

