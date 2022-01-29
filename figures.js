//Codigo Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`Lado del cuadrado: ${ladoCuadrado} cm`);

const perimetroCuadrado= ladoCuadrado *4;
console.log(`Perimetro del cuadrado: ${perimetroCuadrado} cm`);

const areaCuadrado= ladoCuadrado * ladoCuadrado;
console.log(`Area del cuadrado: ${areaCuadrado} cm^2`);

console.groupEnd();


//Codigo del Triangulo
console.group("Trinagulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`
Lado del Triangulo1: ${ladoTriangulo1} cm
Lado del Triangulo2: ${ladoTriangulo2} cm
Base del Triangulo: ${baseTriangulo} cm
`);


const perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`Perimetro del Triangulo: ${perimetroTriangulo} cm`);

const areaTriangulo= (baseTriangulo * alturaTriangulo) / 2;
console.log(`Area del Triangulo: ${areaTriangulo} cm^2`);

console.groupEnd();

//Codigo del Circulo
console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

console.log(`
Radio de Circulo: ${radioCirculo} cm
Diametro de Circulo: ${diametroCirculo} cm
`);

const perimetroCirculo= diametroCirculo * PI;
console.log(`Perimetro Circulo: ${perimetroCirculo} cm`);

const areaCirculo= PI * (Math.pow(radioCirculo, 2));
console.log(`Circunferencia Circulo: ${areaCirculo} cm^2`);


console.groupEnd();