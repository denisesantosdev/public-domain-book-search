async function getBookKey(searchQuery) {
  const url = `https://openlibrary.org/search.json?q=${searchQuery}&fields=key&limit=1`;

  const response = await fetch(url);
  const data = await response.json();
  const key = data.docs[0].key;
  return key.slice(7);
}

export { getBookKey };
