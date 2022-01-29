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