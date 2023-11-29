// Adicionando "li"
let elementoJavaScript = document.createElement("li");

elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-js"

let listaLinguagens = document.querySelector(".lista-linguagens");
listaLinguagens.appendChild(elementoJavaScript);

// Adicionando "div"
const postagemJavascript = document.createElement('div');

postagemJavascript.innerHTML=
`<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
Javascript é uma linguagem de programação
</p>`

const postagens = document.querySelector(".postagens");
postagens.appendChild(postagemJavascript);


// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Doces";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>doce</h2>
    <p>Brigadeiro de colher.</p>
    <p id="preco-doce">R$ 5.90</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)

