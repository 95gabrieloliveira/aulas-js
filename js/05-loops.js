/* Estruturas tradicionais

while    -> enquanto
do/while -> faça/enquanto
for       -> para
*/

console.log("while");

// Variável de controle do loop
/* OBS.: Normalmente é chamada de i, J ou k */
let i = 1;

while ( i <= 10) {
    console.log(`Valor de contador: ${i}`)
    i++;// incremento
}

console.log("---------------------------------");

console.log("do/while");

let j = 1; // Variável de controle

do {
    console.log(`J vale ${j}`);
    j++
}while( j <=3 ) //ou j < 4 

console.log("-------------------------");

console.log("FOR");

for ( let i = 1; i <=5; i++) {
    console.log(`I vale: ${i}`);
}

console.log("______________________");

console.log("Loop e Estrutura");

//Array (Vetor)
let alunos = ["Eduardo", "Vagner", "Thalia", "Claudio", "Jessica"];

for ( let i = 0; i < 5; i++) {
    console.log(alunos [i]);
}

/* Sort() -> função para ordenar arrays 
console.log( alunos.sort() );*/

console.log("------------------------------");

console.log("Loops exclusivos JS");
//for/of: ótimo para Arrays
for ( let aluno of alunos) {
    console.log(aluno);
}

//Objeto
let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3

};

// for/in 
for ( let dados in livro )  {
    console.log( livro[dados] );
}


