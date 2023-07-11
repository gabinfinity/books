function getTotalValueBooksAvailable(books) {
    return books.reduce((a, b) => a + b.preco, 0).toFixed(2)
}