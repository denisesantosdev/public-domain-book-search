import { getBookKey } from "./services/book-key.js";
import { getBookInfo } from "./services/book-info.js";
//import { getAudioBook } from "./services/audio-book.js";
import { getEbook } from "./services/ebook.js";
import { getBookCover } from "./services/book-cover.js";

const bookKey = await getBookKey("the count");
const bookInfo = await getBookInfo(bookKey);
const bookCover = getBookCover(bookInfo.covers[0]);

console.log(bookKey, bookInfo, bookCover);
