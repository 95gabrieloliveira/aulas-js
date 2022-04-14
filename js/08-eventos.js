/* Exemplo 01 */
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

//Monitor/Ouvinte/ de evento
subExemplo01.addEventListener("click", function() {
   msg.textContent = "oláaaaaaaaa!!!";
   msg.style.fontSize = "25px";
   subExemplo01.style.backgroundColor = "yellow";
});

subExemplo01.addEventListener("dbclick", function () {
    msg.textContent = "";
    
})

/* Exemplo 02: modo noturno */
const botao = document.querySelector ("#noturno");
const pagina = document.querySelector ("body");

botao.addEventListener("click", function () {
    pagina.classList.toggle("modo-noturno");
/* Se o texto do botão for Ativar... */
    if ( botao.textContent == "Ativar") {
     /* então, mudamos para Desativar */    
        botao.textContent = "Desativar";
    } else {
        /* Se não mudamos para Ativar */
        botao.textContent = "Ativar";
    }
});

/* Exemplo 03: Simulação de cadastro */

const formulario = document.querySelector ("form");
const campoNome = document.querySelector ("#nome");
const campoNota1 = document.querySelector ("#nota1");
const campoNota2 = document.querySelector ("#nota2");
const divResultados = document.querySelector ("#resultados");

//Detectar o acionamento do formulário
// OBS.: Função dentro do Listener, é chamada de Callback
formulario.addEventListener("submit", function (event) {
    /* anulando o comportamento padrão do navegador 
    (redirecionar o formulário) */
    event.preventDefault();
    console.log("ok");


// 1) capturar os dados digitados nos campos
let nome = campoNome.value;
let nota1 =  parseFloat (campoNota1.value);
let nota2 = parseFloat (campoNota2.value);

// 2) Calcular a média das notas
    let media = (nota1 + nota2) / 2;

    /* Exercicio 1 */
    let situacao // Refatoração
if (media >= 7) {
    situacao = "Aprovado";


}else { situacao = "Reprovado";

}
formulario.reset();
campoNome.focus();
// 3) Criando elemento dinamicamente via JS

//3.1) Criar o elemento/tag
let paragrafo = document.createElement("p");

//3.2) Montar o conteúdo da tag
paragrafo.innerHTML = `<b> ${nome}</b> - <i>${media}</i> 
${situacao}`; /* Exercicio 2 */

//3.3) Adicionar tag/conteúdo à div de resultados
divResultados.appendChild(paragrafo);

});
/* Exercícios
1) Programa o necessário para determinar se o aluno etá aprovado ou reprovado. Critério: Média maior ou igual a 7 aprovado caso contrário reprovado.*/

/*
2) Mostre a situação do aluno junto com o nome e a média */

/*
3) Desafio: Faça com que os campos do formulário e sejam resetados ao enviar
*/
// Devolvendo o foco (cursor) para o campo nome

/* Desafio transformar em função 

1- Calcula Media

2-Verifica situação


3- Criar elemento 
- conteudo
- colocação dom*/