/* 
API retorna erro: o 'Access-Control-Allow-Origin' header is present on the requested resource. (25/04/22)

async function getAudioBook(searchQuery) {
    const url = `https://librivox.org/api/feed/audiobooks?format=json`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

export { getAudioBook } 

*/