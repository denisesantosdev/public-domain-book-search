import { getBookKey } from "./services/book-key.js";
import { getBookInfo } from "./services/book-info.js";
//import { getAudioBook } from "./services/audio-book.js";
import { getEbook } from "./services/ebook.js";
import { getBookCover } from "./services/book-cover.js";
import { book } from "./objects/book.js";

const query = "frankenstein";

const bookKey = await getBookKey(query);
const bookInfoOpenLibrary = await getBookInfo(bookKey);
const bookInfoGutenberg = await getEbook(query);

book.setBookInfo(bookInfoOpenLibrary, bookInfoGutenberg);

console.log(book);
