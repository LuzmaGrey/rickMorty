// Función para cargar y mostrar los personajes desde la API
async function loadCharacters() {
     const response = await fetch('https://rickandmortyapi.com/api/character');
     const data = await response.json();

     const charactersContainer = document.getElementById('characters-container');

     data.results.forEach(character => {
          const characterCard = document.createElement('div');
          characterCard.classList.add('col-md-4', 'mb-4');

          characterCard.innerHTML = `
         <div class="card">
           <img src="${character.image}" class="card-img-top" alt="${character.name}">
           <div class="card-body">
             <h5 class="card-title">${character.name}</h5>
             <p class="card-text">Location: ${character.location.name}</p>
             <a href="#" id="btnLocation"class="btn btn-primary" data-toggle="modal" data-target="#locationModal" onclick="showLocation('${character.location.url}')">Detalles de la Ubicación</a>
           </div>
         </div>
       `;

          charactersContainer.appendChild(characterCard);
     });
}

// Función para mostrar la información de la ubicación en el modal
async function showLocation(locationUrl) {
     const response = await fetch(locationUrl);
     const locationData = await response.json();

     const locationModalBody = document.getElementById('locationModalBody');
     locationModalBody.innerHTML = `
       <p><strong>Nombre:</strong> ${locationData.name}</p>
       <p><strong>Tipo:</strong> ${locationData.type}</p>
       <p><strong>Dimensión:</strong> ${locationData.dimension}</p>
     `;
}

// Cargar los personajes al cargar la página
window.onload = loadCharacters;