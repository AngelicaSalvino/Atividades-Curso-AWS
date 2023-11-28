//Capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.  

// Capturar os elementos HTML usando document.getElementById ou document.querySelector
const elementoH1 = document.getElementById('titulo');
const elementoA = document.querySelector('a');
const listaNaoOrdenada = document.querySelector('ul');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicione conteúdo aos elementos usando .innerText para 'h1' e 'a', e .innerHTML para as listas
elementoH1.innerText = 'Título da Página';
elementoA.innerText = 'Clique aqui para visitar o site';

// Adicione itens à lista não ordenada usando .innerHTML
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

// Adicione itens à lista ordenada com links usando .innerHTML
listaOrdenada.innerHTML = '<li><a href="Item 1">https://prozeducacao.com.br/quem-somos/</a></li>' +
                          '<li><a href="Item 2">https://prozeducacao.com.br/cursos/</a></li>' +
                          '<li><a href="Item 3">https://blog.prozeducacao.com.br/</a></li>';
