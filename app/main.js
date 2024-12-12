document.addEventListener("DOMContentLoaded", () => {
    const charactersList = document.getElementById("charactersList");
    fetch("https://rickandmortyapi.com/api/character")
    .then((data) => data.json())
    .then((data) => {
       const characters = data.results;

       characters.forEach(character => {
        const {image, name, status, species, gender} = character
        const card = document.createElement("div");
        card.className = "character-card";
        card.innerHTML = `
            <img src = "${image}" alt = "${name} image">
            <h3> ${name} </h3>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Gender:</strong> ${gender}</p>
        `;
        charactersList.appendChild(card);
        })
    })

})