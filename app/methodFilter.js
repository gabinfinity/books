const buttons = document.querySelectorAll('.btn')

buttons.forEach(buttonsItem => buttonsItem.addEventListener('click', filterBooks))

function filterBooks() {
    const elementBtn = document.getElementById(this.id)
    const categoria = elementBtn.value
    let booksFiltered = categoria == 'disponivel' ? books.filter(books => books.quantidade > 0) : books.filter(bookItem => bookItem.categoria == categoria)
    showBooksOnScreen(booksFiltered)
    if (categoria == 'disponivel') {
        const getTotalValue = getTotalValueBooksAvailable(booksFiltered)
        showTotalValue(getTotalValue)
    }
}

function showTotalValue(getTotalValue) {
    totalValue.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$<span id="valor">${getTotalValue}</span></p>
    </div>`
}