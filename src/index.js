
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function renderCards() {
    const cards = document.querySelector('.cards');

    data.forEach(card => {
        const li1 = document.createElement('li');

        const statsList = card.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('');

        const gamesList = card.game_indices.map(game => `<li>GameVersion: ${game.version.name}</li>`).join('');

        li1.innerHTML = `
        <div class="card">
            <h2 class="card--title">${card.name}</h2>
            <img
                width="256"
                class="card--img"
                src="${card.sprites.other["official-artwork"].front_default}"
            />
            <ul class="card--text">
               ${statsList} 
            </ul>
            <h5>Pokemon appears in:</h5>
            <ul class="games-appeared-in"> ${gamesList}</ul>
        </div>
        `;
        cards.appendChild(li1);

    });
}

renderCards();