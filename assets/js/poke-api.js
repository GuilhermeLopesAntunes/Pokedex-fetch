pokeApi ={}

function urlInArray(pokemonUrl){
    const urlArray = []
    for (let index = 0; index < pokemonUrl.length; index++) {
        urlArray.push(pokemonUrl[index].url)
    }
    return urlArray
}

function urlToJson(pokemonUrl){
    const urlJsonList = []
    for (let index = 0; index < pokemonUrl.length; index++) {
          
        urlJsonList.push(fetch(pokemonUrl[index])
        .then(response => response.json()))

    }

    return urlJsonList
    
}

pokeApi.ResponseJson= (offset,limit )=> {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response)=>response.json())
    .then((bodyJson)=>bodyJson.results)
    .then((pokemonResults)=> urlInArray(pokemonResults))
    .then((pokemonUrl)=>Promise.all(urlToJson(pokemonUrl)))
    .catch((error)=>console.log(error))
}


