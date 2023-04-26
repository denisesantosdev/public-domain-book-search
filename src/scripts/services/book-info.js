async function getBookInfo(bookKey) {
    const url = `https://openlibrary.org/works/${bookKey}.json`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

export { getBookInfo }