let books = []
const API_URL = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getSearchBooksAPI()

async function getSearchBooksAPI() {
    const ret = await fetch(API_URL)
    books = await ret.json()
    let discountBooks = applyDiscount(books)
    showBooksOnScreen(discountBooks)
}