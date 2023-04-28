import { getBookKey } from "./services/book-key.js";
import { getBookInfo } from "./services/book-info.js";
//import { getAudioBook } from "./services/audio-book.js";
import { getEbook } from "./services/ebook.js";
import { getBookCover } from "./services/book-cover.js";
import { book } from "./objects/book.js";
import { screen } from "./objects/screen.js";

const inputField = document.querySelector("#book-search");
const searchBtn = document.querySelector(".search-btn");
const downloadBtn = document.querySelector(".download-btn");

const bookContainer = document.querySelector(".book");

let query;

searchBtn.addEventListener("click", () => {
  query = inputField.value;
  validateEmptyInput();
  getBookData(query);
});

inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    query = inputField.value;
    validateEmptyInput();
    getBookData(query);
  }
});

function validateEmptyInput() {
  if (!query) return;
}

async function getBookData(query) {
  const bookKey = await getBookKey(query);
  const bookInfoOpenLibrary = await getBookInfo(bookKey);
  const bookInfoGutenberg = await getEbook(query);

  book.setBookInfo(bookInfoOpenLibrary, bookInfoGutenberg);
  screen.renderBook(book);
}
