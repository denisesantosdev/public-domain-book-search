async function getEbook(searchQuery) {
    const url =  `https://gutendex.com/books?search=${searchQuery}`

    const response = await fetch(url)
    const data = await response.json()
    return data.results[0];
}

export { getEbook }