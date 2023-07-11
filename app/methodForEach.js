const elementInsertBook = document.getElementById('livros')
const totalValue = document.getElementById('valor_total_livros_disponiveis')

function showBooksOnScreen(booksList) {
  totalValue.innerHTML = ``
  elementInsertBook.innerHTML = ``
  booksList.forEach(books => {
    /* let availableBooks = verifyAvailableBook(books) */
    let availableBooks = books.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    elementInsertBook.innerHTML += `
        <div class="livro">
      <img class="${availableBooks}" src="${books.imagem}" alt="${books.alt}" />
      <h2 class="livro__titulo">
        ${books.titulo}
      </h2>
      <p class="livro__descricao">${books.autor}</p>
      <p class="livro__preco" id="preco">R$${books.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${books.categoria}</span>
      </div>
    </div>
    `
  })
}

/* function verifyAvailableBook(books) {
  if (books.quantidade > 0) {
    return 'livro__imagens'

  } else {
    return 'livro__imagens indisponivel'
  }

} */