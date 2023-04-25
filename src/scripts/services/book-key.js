// open library api test

// get work key with
// https://openlibrary.org/search.json?q=pride+and+prejudice

async function getBookKey(searchQuery) {
  const url = `https://openlibrary.org/search.json?q=${searchQuery}&fields=key&limit=1`;

  const response = await fetch(url);
  const data = await response.json();
  return data.docs[0].key;
}

export { getBookKey };
