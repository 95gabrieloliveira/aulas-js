/* 
if (se), else(senão), else if (senão se)

Operadores relacionais (usados com condicionais)

> maior que
< Menor que
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente
*/

/* Exemplo 1: condicional simples */

let numero = 10;

if (numero > 0) {
    console.log(`${numero} é maior que 0`)
}

//exemplo 2 : condicional composta (IF/ElSE)
let aluno = "João";
let nota1 = 8;
let nota2 = 9;
let media = (nota1+nota2) /2;

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Media: ${media}`);

let situacao // Refatoração
if (media >= 7) {
    situacao = "Aprovado";


}else { situacao = "Reprovado";

}
console.log(situacao);

// Exemplo 3: condicional Encadeada (IF, Else If, Else)

let desempenho;
if (media < 3) {
    desempenho = "Pessimo";
} else if (media < 5) {
    desempenho = "Ruim";
} else if (media < 7) {
    desempenho = "Regular";
} else if (media < 9) {
    desempenho = "bom";
} else {
    desempenho = "ótimo"
}
console.log(desempenho);

let faltas = 14;
console.log(`Faltas: ${faltas}`);

//if ( Media >= 7) {

// && -> operador lógico E
// Usado quando precisamos avaliar mais de uma condição ao mesmo tempo.

if(media >= 7 && faltas <15) {
    situacao = "aprovado";
} else {
    situacao = "reprovado";
}

console.log(situacao);