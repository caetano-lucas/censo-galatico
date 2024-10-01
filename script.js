
let buttonlist = document.getElementById('buttonlist');

async function listPlanets() {
  let result = await fetch('https://swapi.dev/api/planets/')
  let {results} = await result.json();
  console.log(results)
  
  results.forEach(planet => {

    let li = document.createElement('li');

    li.innerHTML = `<button>${planet.name}</button>`
                         
    buttonlist.appendChild(li)
  });
}

