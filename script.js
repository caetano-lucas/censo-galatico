let buttonlist = document.getElementById('buttonlist');
let planetsData = document.getElementById('planetsData');
let inputPlanet = document.getElementById('inputPlanet');

async function listPlanets() {
  let allPlanets = [];
  let url = 'https://swapi.dev/api/planets/';

  while (url) {
    let result = await fetch(url);
    let { results, next } = await result.json();
    allPlanets = allPlanets.concat(results);
    url = next;
  }

  allPlanets.forEach(planet => {
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.textContent = planet.name;

    button.addEventListener('click', () => {
      showData(planet);
    });

    li.appendChild(button);
    buttonlist.appendChild(li);
  });
}

async function showData(planet) {  
  planetsData.innerHTML = '';

  let li = document.createElement('li');
  
  li.innerHTML = `<div>
                    <h2>Nome: ${planet.name}</h2>
                    <p>Clima: ${planet.climate}</p>
                    <p>População: ${planet.population} habitantes</p>
                    <p>Tipo de terreno: ${planet.terrain}</p>
                    <p><strong>Habitantes mais famosos:</strong></p>
                    <table id="residentsTable">
                      <tr>
                        <th>Nome</th>
                        <th>Data de nascimento</th>
                      </tr>
                    </table>
                  </div>`;
  
  planetsData.appendChild(li);

  if (planet.residents.length > 0) {
    let residentsTable = document.getElementById('residentsTable');

     for (let resident of planet.residents) {
      
        let residentResponse = await fetch(resident);
        let residentData = await residentResponse.json();

        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${residentData.name}</td>
                        <td>${residentData.birth_year}</td>`;
        residentsTable.appendChild(tr);
    }
  }
}

async function searchPlanets() {
  let allPlanets = [];
  let url = 'https://swapi.dev/api/planets/';

  while (url) {
    let result = await fetch(url);
    let { results, next } = await result.json();
    allPlanets = allPlanets.concat(results);
    url = next;
  }
  
  planetsData.innerHTML = '';
  allPlanets.forEach(planet => {
    if (planet.name.toLowerCase() === inputPlanet.value.toLowerCase()) {
      showData(planet); 
    }
  });
}
