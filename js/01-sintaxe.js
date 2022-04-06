/*  ALT SHIFT A 
comentário de multiplas linhas */
// CRL ; comentário de linha única

// Comando de saída de dados

// Sempre que trabalhar com textos devemos colocá los entre aspas ssimples'',
// Duplas""" ou crase `` 

console.log("Olá JavaScript!");

/* Variaveis e constantes 
Espaços identificados na memória para armazenar dados temporariamente */

//Variável: Valor pode mudar
//Obs.: antigamente era usado "var"
let ano = 2022;

// Constante: Valor imutavel (não muda)

/*  const aluno = "Gabriel";*/
const aluno = prompt();
console.log(ano);
console.log(aluno);

console.log(aluno, ano);

/* Operações matematicas

+(adição)
-Subtração
/ (divisão)
* Multiplicação
*/ 

let preco = 1500;
let desconto = 250;
let precoFinal = preco - desconto;

console.log(preco, desconto, precoFinal);

let produto = "TV Led";

/* A TV Led custava 1500 Reais */

/* 1ª Forma (tradicional) */


console.log ("A " +produto+ " custava "+preco+" Reais");

/* 2ª Forma (moderna) - Template String/Literal */

console.log(`A ${produto} custava ${preco} reais `);
