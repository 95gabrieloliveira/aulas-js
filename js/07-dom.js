/*  Funções (ou metodos) de acesso/seleção ao DOM

-getElementById () -> seleciona UM elemento atráves do id
-querySelector()  -> seleciona UM elemento atráves de um seletor
-querySelectorAll -> seleciona Vários elementos atráves de seletor () */

/* exemplos */
/* const titulo = document.getElementById("titulo-principal"); */
const titulo = document.querySelector("#titulo-principal");
const subtitulos = document.querySelectorAll("h2");

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos [0]);

// Leitura do conteúdo 

console.log(titulo.textContent);
console.log(subtitulos [1].textContent);


// alteração do conteúdo 
titulo.textContent = "Olá DOM, meu velho amigo";
subtitulos[0].innerHTML = "<i>Aprendendo DOM<i>"

// manipulando CSS via JS

// 1) Inline
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "lightblue";
pagina.style.fontFamily = "Verdana";
pagina.style.margin = 0;

// 2)classe

const primeiroItem = document.querySelectorAll("#lista-editores li:first-child"); //first-child para o primeiro e ntchild (2) para o segundo
console.log(primeiroItem [0]);

primeiroItem.classList.add("destaque-item");
