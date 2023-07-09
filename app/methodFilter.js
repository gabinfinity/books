const buttons = document.querySelectorAll('.btn')

buttons.forEach(buttonsItem => buttonsItem.addEventListener('click', filterBooks))

function filterBooks() {
    const elementBtn = document.getElementById(this.id)
    const categoria = elementBtn.value
    let booksFiltered = books.filter(bookItem => bookItem.categoria == categoria)
    showBooksOnScreen(booksFiltered)
}