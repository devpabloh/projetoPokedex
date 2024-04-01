const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = ` http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody)=> jsonBody.results)
    .then((pokemons)=> pokemons.map((pokemon) => fetch(pomenon.url)))  
    .then((detailRequest)=> promisse.all(detailRequest))
    .then((pokemonsDetails)=>{
        debugger
        console.log(pokemonsDetails)
    })
}