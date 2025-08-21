const produtos = [
  { nome: "Camiseta", preco: 39.90 },
  { nome: "Boné", preco: 24.90 },
  { nome: "Tênis", preco: 119.90 }
];

let carrinho = [];

function atualizarCarrinho() {
  const carrinhoItens = document.getElementById("carrinho-itens");
  const carrinhoTotal = document.getElementById("carrinho-total");
  const finalizarBtn = document.getElementById("finalizar-compra");
  let total = 0;
  carrinhoItens.innerHTML = "";
  carrinho.forEach((item, idx) => {
    const div = document.createElement("div");
    div.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
    const btnRemove = document.createElement("button");
    btnRemove.textContent = "Remover";
    btnRemove.onclick = () => {
      carrinho.splice(idx, 1);
      atualizarCarrinho();
    };
    div.appendChild(btnRemove);
    carrinhoItens.appendChild(div);
    total += item.preco;
  });
  carrinhoTotal.textContent = `Total: R$${total.toFixed(2)}`;
  document.getElementById("cart-count").textContent = carrinho.length;
  finalizarBtn.style.display = carrinho.length > 0 ? "block" : "none";
}

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
}

window.onload = () => {
  const lista = document.getElementById("produtos-lista");
  produtos.forEach(produto => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `<h3>${produto.nome}</h3><p>R$${produto.preco.toFixed(2)}</p>`;
    const btn = document.createElement("button");
    btn.textContent = "Adicionar ao carrinho";
    btn.onclick = () => adicionarAoCarrinho(produto);
    div.appendChild(btn);
    lista.appendChild(div);
  });

  document.getElementById("finalizar-compra").onclick = () => {
    alert("Compra finalizada! Obrigado.");
    carrinho = [];
    atualizarCarrinho();
  };
  atualizarCarrinho();
};
