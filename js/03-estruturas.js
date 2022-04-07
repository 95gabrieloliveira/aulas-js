/* Estruturas de dados no JavaScript

ARRAY (Vetor)
Lista de Dados indexados */

let alunos = ["Tiago", "João", "Marília", "Vagner"]
console.log(alunos[1]); //João
console.log(alunos[3]); //Vagner

//Da forma abaixo, conseguimos ver os índices (números)
console.log(alunos)

/* Exercício Array:
Crie um array contendo os seguintes dados de uma pessoa:
Nome e Sobrenome
Idade
Cidade
Estado 

2) Mostre uma frase no console conforme o exemplo abaixo:
Ex. Fulano da silva é da cidade de São Paulo e tem 20 anos.
*/

let pessoas = ["André Barros", 18, "Santos", "SP"]
console.log ( `${pessoas[0]} é da cidade de ${pessoas [2]} e tem ${pessoas[1]} anos`
)

console.log ("--------------------------------------------------");

/* Objeto
Lista de dados não indexados */

let filme = {
    // Propiedade: valor
    titulo: "Homem Aranha",
    ano: 2021,
    genero: "Ação/Ficção",
    classificacao: 16

};

console.log(filme.titulo);
console.log(filme.genero);
console.log(`${filme.titulo} foi lançado em ${filme.ano} com classificação de + ${filme.classificacao}`);

/* Exercício de Objeto
1)Crie um novo objeto contendo os dados (Fictícios)
de um pedido de uma loja Virtual. Exemplo:
-Data do pedido
-produto comprado
-preço do pedido
-prazo de entrega */

let celular = {
    dataDoPedido: "07/01/2022",
    produtoComprado: "LG C206",
    preçoDoPedido: 1200,
    prazoDeEntrega: 7,
};


/* 2)Mostre uma frase conendo as seguintes informações:
o produto XYZ foi comprado em 07/04/2022 com entrega em 7 dias utéis */
console.log(`O ${celular.produtoComprado} foi comprado em ${celular.dataDoPedido} pelo valor de ${celular.preçoDoPedido} o prazo de entrega é ${celular.prazoDeEntrega}`);