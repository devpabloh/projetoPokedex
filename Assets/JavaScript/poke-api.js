const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemmon = new pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    
    pokemon.types = 
    pokemon.type = pokemon.types.get(a)
}

pokeApi.getpokemonDetail = (pokemon)=> {
    return fetch(pokemon.url)
        .then((response)=> response.json())
        .then((pokemon) => {

        })
}           

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = ` http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))  
    .then((detailRequests)=> Promise.all(detailRequests))
    .then((pokemonsDetails)=>pokemonsDetails)
} 