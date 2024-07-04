//Adicionando o título
let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Confeitaria"

let body = document.querySelector("body")
body.appendChild(titulo)

const produtoVenda = document.createElement("div")
produtoVenda.innerHTML = `
<h2>Bolo de cenoura</h2>
<p>Delicioso bolo de cenoura caseiro com cobertura de chocolate belga.</p>
<img src="https://delijoy.com.br/wordpress/wp-content/uploads/2022/03/20211021_163311.jpg" alt = "bolo de cenoura"
<h3>Tabela de preços</h3>
<ul>
   <li>Pequeno (serve 1 pessoa) -- R$ 8,50</li>
   <li>Médio (serve 2 pessoas) -- R$15,00</li>
   <li>Grande (serve 4 pessoas)-- R$22,00</li>
</ul>
`
body.appendChild(produtoVenda)