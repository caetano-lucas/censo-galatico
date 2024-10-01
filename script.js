
async function listPlanets() {
  let result = await fetch('https://swapi.dev/api/planets/')
  let {results} = await result.json();
  console.log(results)
  
}