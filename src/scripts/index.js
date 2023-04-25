// gutenber api test
/* async function searchEbook(ebook) {
    const url =  `https://gutendex.com/books?search=${ebook}`

    const response = await fetch(url)
    console.log(response);
    const data = await response.json()
    console.log(data);
}

searchEbook('Pride and Prejudice') */
import { getBookKey } from "./services/book-key.js";

let bookKey = await getBookKey('Pride and Prejudice')
console.log(bookKey);

async function getBookInfo(bookKey) {
    const url = `https://openlibrary.org${bookKey}.json`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
}

getBookInfo(bookKey)