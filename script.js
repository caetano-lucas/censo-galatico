
let buttonlist = document.getElementById('buttonlist');
let planetsData = document.getElementById('planetsData');

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