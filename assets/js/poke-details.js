const idPokemon = localStorage.getItem('idPokemon')
const body = document.getElementById('poke-details-page')

function createDetailsPage() {
    pokeapi.getPokemonToDetailPage(idPokemon)
        .then(pokemon => {
            const pokeDetailHtml = `
        <section class="container ${pokemon.type}">
        <div class="title">
            <span class="number">${pokemon.number}</span>
            <h1 class="name_detail">${pokemon.name}</h1>
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</l1>`).join('')}
            </ol>

        </div>

        <img class="img_detail"
            src=${pokemon.photo}
            alt=${pokemon.name} srcset="">

    </section>

    <section class="pokeinfos">
        <h2>About</h2>

        <ol>
            <li>Height: ${pokemon.height}</li>
            <li>Weight: ${pokemon.weight}</li>
            <li>Abilities: ${pokemon.abilities.join(" , ")}</li>
        </ol>
    </section>

    <div class="pagination">
            <button type="button" id="back" onClick="backToHome()">Back to home</button>
        </div>

    `
            body.innerHTML = pokeDetailHtml
        })
}

createDetailsPage()

function backToHome() {
    window.location.href = "index.html"
}