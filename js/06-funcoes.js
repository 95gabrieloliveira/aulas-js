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
function soma ( valor1, valor2){
    let total = valor1 + valor2;
    return total; //return é utilizado quando o resultado só existe dentro da função
}

console.log(soma (10,5) );
// console.log (total); // erro pois é variável

let resultado = soma(100, 50);
console.log(resultado);

if(resultado <1000) {
    console.log("abaixo da meta");
}