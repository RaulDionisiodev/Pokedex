

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon" class=${pokemon.type}>
    <span class="number">${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types"> 
         ${pokemon.types.map((type) => `<li class="type">${type}</l1>`).join('')}
        </ol>
        <img src=${pokemon.photo} 
            alt="${pokemon.name}" srcset="">
    </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("")

})