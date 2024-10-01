
let buttonlist = document.getElementById('buttonlist');
let planetsData = document.getElementById('planetsData');
let inputPlanet = document.getElementById('inputPlanet');
let planetsSearch = document.getElementById('planetsSearch');

async function listPlanets() {
  let result = await fetch('https://swapi.dev/api/planets/')
  let {results} = await result.json();
  console.log(results)
  
  results.forEach(planet => {

    let li = document.createElement('li');

    li.innerHTML = `<button onclick="showData('${planet.name}','${planet.climate}','${planet.population}','${planet.terrain}')">${planet.name}</button>`
                         
    buttonlist.appendChild(li)
  });
}

function showData(planetName, planetClimate, planetPopulation, planetTerrain){
  let li = document.createElement('li');

    li.innerHTML = `<div>
                      <h2>Nome: ${planetName}</h2>
                      <p>Clima: ${planetClimate}</p>
                      <p>População: ${planetPopulation} habitantes</p>
                      <p>Tipo de terreno: ${planetTerrain}</p>
                     </div>`
                         
    planetsData.appendChild(li)

}

async function searchPlanets() {
  let result = await fetch('https://swapi.dev/api/planets/')
  let {results} = await result.json();
  console.log(results)
  
  results.forEach(planet => {
    let li = document.createElement('li');
    if (planet.name.toLowerCase() === inputPlanet.value.toLowerCase()) {
    

    li.innerHTML = `<div>
                    <h2>Nome: ${planet.name}</h2>
                    <p>Clima: ${planet.climate}</p>
                    <p>População: ${planet.population} habitantes</p>
                    <p>Tipo de terreno: ${planet.terrain}</p>
                   </div>`
    planetsSearch.appendChild(li)
    }
    

  });
}