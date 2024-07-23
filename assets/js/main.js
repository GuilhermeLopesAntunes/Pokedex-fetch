const addOl = document.getElementById('pokemonList')
let loadMore = document.getElementById('next-pokemon')
const offset = 0;
let limit = 10;



function addLiTypesHtml(pokemon){
    return `<li class="type " >${pokemon}</li>`
}

function addLiTypes(pokemon){
    const liTypes = []
    for (let index = 0; index < pokemon.types.length; index++) {
        liTypes.push(addLiTypesHtml(pokemon.types[index].type.name)) 
    }
    return liTypes
}

function addLiAbilitesHtml(pokemon){
   
    return`<li class="ability">${pokemon}</li>`
}

function addLiAbilites(pokemon){
    const liAbilities = []
    for (let index = 0; index < pokemon.abilities.length; index++) {
        liAbilities.push(addLiAbilitesHtml(pokemon.abilities[index].ability.name)) 
    }
    return liAbilities
}

function arrayStats(pokemon){
    const liStats = []
    for (let index = 0; index < pokemon.stats.length; index++) {
        liStats.push(pokemon.stats[index].base_stat)
    }
    return liStats
}

function principalType(pokemon){
    const liTypes = []
    for (let index = 0; index < pokemon.types.length; index++) {
        liTypes.push(pokemon.types[index].type.name) 
    }
    return liTypes[0]
}




function pokemonAddOl(pokemon){
    return `
    
    <li class="pokemon ${principalType(pokemon)}" >
                <span class="number">${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>
                <span class="base-experience">Base experience: ${pokemon.base_experience}</span>
                 
                <div class="detail">
                    <div> 
                        <ol class="types ${principalType(pokemon)}">
                            <span>Tipos<span>
                            ${addLiTypes(pokemon).join('')}
                            
                        </ol>

                        <ol class="abilities">
                            Habilidades:
                            ${addLiAbilites(pokemon).join('')}
                        </ol>
                    </div>
                
                    
                    

                    <img src="${pokemon.sprites.other.showdown.front_default}"
                        alt="${pokemon.name}">
                </div>

                <div class="stats" id="hp">
                        Vida: 
                        
                        <div class="barprogress" >
                            <div class="progress" style="width: ${arrayStats(pokemon)[0]}%; "></div>
                        </div>
                        ${arrayStats(pokemon)[0]}   
                    </div>
                    <div class="stats" id="atack">
                        Ataque: 
                        
                        <div class="barprogress">
                            <div class="progress" style="width: ${arrayStats(pokemon)[1]}%; "></div>
                        </div>
                        ${arrayStats(pokemon)[1]}     
                    </div>
                    <div class="stats" id="defense">
                        Defesa: 
                        
                        <div class="barprogress">
                            <div class="progress" style="width: ${arrayStats(pokemon)[2]}%;"></div>
                        </div>
                        ${arrayStats(pokemon)[2]}     
                    </div>

                    <div class="stats" id="special-atack">
                        <span>Ataque Especial:  </span>
                        
                        <div class="barprogress">
                            <div class="progress" style="width: ${arrayStats(pokemon)[3]}% ;"></div>
                        </div>
                        ${arrayStats(pokemon)[3]}      
                    </div>

                    <div class="stats" id="special-defense">
                        <span>Defesa Especial:  </span>
                        
                        <div class="barprogress">
                            <div class="progress" style="width: ${arrayStats(pokemon)[4]}% ;"></div>
                        </div>
                        ${arrayStats(pokemon)[4]}      
                    </div>

                    <div class="stats" id="speed">
                        <span>Velocidade:  </span>
                        
                        <div class="barprogress">
                            <div class="progress" style="width: ${arrayStats(pokemon)[5]}% ;"></div>
                        </div>
                        ${arrayStats(pokemon)[5]}      
                    </div>  
        </li>
        
    
    `
}



function pokemonList(pokemon){
        const pokemonList = []
        for (let index = 0; index < pokemon.length; index++) {

            pokemonList.push(pokemonAddOl(pokemon[index]))  
        }
        return pokemonList
}

function addLi(pokemon) {
    addOl.innerHTML = pokemonList(pokemon).join('');
    
    const elemento = document.getElementById("hp-progress")
    
    
}


loadMore.addEventListener('click',()=>{
    limit += 10
    main(limit)

})


function main(){
    
    

    pokeApi.ResponseJson(offset,limit)
    .then((pokemon)=> addLi(pokemon))

    
    
}

main()
