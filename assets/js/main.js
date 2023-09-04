
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;
const maxRecords = 151

function loadPokemonItens(offset, limit) {
    pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types"> 
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</l1>`).join('')}
            </ol>
            <img src=${pokemon.photo} 
                alt="${pokemon.name}" srcset="">
        </div>
        <div class="pagination">
            <button type="button" id="seeDetail" onclick="redirectToDetail(${pokemon.number})">See Details</button>
        </div>
        </li>
    `).join("")
        pokemonList.innerHTML += newHtml;
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
    offset += limit

    const qtdRecordsNextPage = offset + limit

    if (qtdRecordsNextPage >= maxRecords) {
        const newlImit = maxRecords - offset
        loadPokemonItens(offset, newlImit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else {
        loadPokemonItens(offset, limit)
    }

})

function redirectToDetail(idPokemon) {
    localStorage.setItem("idPokemon", idPokemon)
    window.location.href = "pokemonDetail.html"

}