'use strict'; //Modo ESTRITO/RESTRITO

/* Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer parte da sua aplicação  
Usar funções também é uma forma de separar a lógica e organizar melhor sua programação.*/

/* Sintaxe tradicional */
function linha () {
    console.log("----------------");
}

let curso = "Programador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso ${curso}`);
linha ()
console.log(`Escola ${escola}`);
linha()
console.log(`Ano ${ano}`);
linha()



                //Parametros/argumentos
/* Versão 1 * function soma ( valor1, valor2){
    let total = valor1 + valor2;
    return total;  return é utilizado quando o resultado só existe dentro da função
}   */

/* Versão 2: sintaxe ARROW FUNCTION (Função Seta/Flecha) */
const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total;
};

// Arrow function com retorno Implicito
const soma1 = (valor1, valor2) => valor1 + valor2;
console.log( soma1(150, 55));


console.log(soma (10,5) );

// console.log (total); // erro pois é variável

let resultado = soma(100, 50);
console.log(resultado);

if(resultado <1000) {
    console.log("abaixo da meta");
}

linha()

/*
Versão 1: Tradicional 
function dobra(numero) {
    let resultado = numero * 2;
    return resultado;
} */

/*  function dobra(numero) {
    return numero *2;
    
} */

/* Versão 2 Arrow function:*/

/* const dobra = (numero) => {
    let resultado = numero * 2;
    return resultado;
}; */

/* const dobra = (numero) => {
    return numero * 2;
}
 */

// retorno implicito
const dobra = numero => numero * 2;


console.log( dobra (10));
console.log( dobra (150));


linha ()

let nota1 = 8.5;
let nota2 = 7.4;

const calculaMedia = (n1, n2) => (n1 + n2) / 2;

console.log( calculaMedia (nota1, nota2));

const linha2 = () => console.log("******");
/* Parenteses não colocar apenas se tiver 1 unico parametro */