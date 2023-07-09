function applyDiscount(books) {
    const discount = 0.3
    booksDiscount = books.map(booksItem => {
        return {...booksItem, preco: booksItem.preco - (booksItem.preco * discount)}
    })
    return booksDiscount
}