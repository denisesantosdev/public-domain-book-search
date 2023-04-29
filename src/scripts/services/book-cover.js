function getBookCover(coverId) {
  const url = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg?default=false`;
  
  if(!coverId) return
  else return url
}

export { getBookCover };
