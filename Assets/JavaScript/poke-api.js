const pokeApi = {}

pokeApi.getpokemons = (offset = 0, limit = 10) => {
    const url = ` http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    fetch(url)
    .then((response) => response.json())
    .then((jsonBody)=> jsonBody.results)
}