function getBookCover(coverId) {
  const url = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg?default=false`;
  return url
}

export { getBookCover };
