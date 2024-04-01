const offset = 0
const limit = 0
const url = ` http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
        <span class="number">${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
    
            <div class="detail">
                <ol class="types">
                     <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById(`pokemonList`)

    pokeApi.getPokemons().then((pokemons = []) => {  
        const newHtml = pokemons.map(convertPokemonToLi).join("")
        pokemonList.innerHTML += newHtml
    })