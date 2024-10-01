
let buttonlist = document.getElementById('buttonlist');
let planetsData = document.getElementById('planetsData');
let inputPlanet = document.getElementById('inputPlanet');
let planetsSearch = document.getElementById('planetsSearch');

async function listPlanets() {
  let allPlanets = [];
  let url = 'https://swapi.dev/api/planets/';

  while (url) {
    let result = await fetch(url);
    let {results, next} = await result.json();
    
    allPlanets = allPlanets.concat(results); 
    url = next; 
  }
  
  allPlanets.forEach(planet => {

    let li = document.createElement('li');

    li.innerHTML = `<button onclick="showData('${planet.name}','${planet.climate}','${planet.population}',
    '${planet.terrain}','${planet.residents}')">${planet.name}</button>`
                         
    buttonlist.appendChild(li)
  });
}

function showData(planetName, planetClimate, planetPopulation, planetTerrain,planetResidents){
  let li = document.createElement('li');

    li.innerHTML = `<div>
                      <h2>Nome: ${planetName}</h2>
                      <p>Clima: ${planetClimate}</p>
                      <p>População: ${planetPopulation} habitantes</p>
                      <p>Tipo de terreno: ${planetTerrain}</p>
                      <p>Habitantes mais famosos: ${planetResidents}</p>
                     </div>`
                         
    planetsData.appendChild(li)

}

async function searchPlanets() {
  let allPlanets = [];
  let url = 'https://swapi.dev/api/planets/';

  while (url) {
    let result = await fetch(url);
    let {results, next} = await result.json();
    
    allPlanets = allPlanets.concat(results); 
    url = next; 
  }
  
  allPlanets.forEach(planet => {
    let li = document.createElement('li');
    if (planet.name.toLowerCase() === inputPlanet.value.toLowerCase()) {
    

    showData(planet.name, planet.climate, planet.population, planet.terrain, planet.residents);
    
    }
    

  });
}