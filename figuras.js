//Codigo del cuadrado 
const ladoCuadrado = 5;


function perimetroCuadrado(lado){
  return  lado*4;
} 
// console.log(`el perimetro del cuadro es ${perimetroCuadrado}`);

 function areaCuadrado(ladoCuadrado){
    return (ladoCuadrado*ladoCuadrado);
 } 

// console.log(areaCuadrado);

//fin del cuadrado

//inicio del triangulo
// console.group("TRiangulos")
// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(`los lados del triangulo miden ${ladoTriangulo} ${ladoTriangulo2} ${baseTriangulo}  `);



function perimetroTriangulo(ladoTriangulo,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo + ladoTriangulo2+ baseTriangulo;
    }
// console.log("el perimetro es de:"+ perimetroCuadrado);

function areaTriangulo (baseTriangulo,alturaTriangulo){ 
    return (baseTriangulo * alturaTriangulo)/2;}
// console.log("el area del triangulo es de " + areaTriangulo);
// console.groupEnd();
//fin del triangulo

//Inicio circulos
// console.group("Circulo")
// const radio =4;
// console.log("radio es " + radio);

function radio(radio){  return radio *2};

// const pi = Math.PI;
function perimetro (radio){ 
    var diametro = radio(radio);
    return diametro* pi;
}
// console.log("el perimetro es" + perimetro);
function areaCirculo(radio) { 
    
    return (radio*radio)* Math.PI;
}
// console.log("el area es "+ areaCirculo);

// console.groupEnd();

function calcularPermitroCuadrado(){
    var input = document.getElementById("inputCuadrado");
    var value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    var input = document.getElementById("inputCuadrado");
    var value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}