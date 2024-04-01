const pokeApi = {}

pokeApi.getpokemon = (pokemon)=> {
    return fetch(pokemon.url)
        .then((response)=>response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = ` http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody)=> jsonBody.results)
    .then((pokemons)=> pokemons.map(pokeApi.getPokemonDetail))  
    .then((detailRequest)=> promisse.all(detailRequest))
    .then((pokemonsDetails)=>{
        debugger
        console.log(pokemonsDetails)
    })
}