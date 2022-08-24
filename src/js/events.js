import {fetchPokemon} from './api.js'
import {
pokemonName,
pokemonNumber,
pokemonHeight,
pokemonWeight,
pokemonImage,
pokemonBaseStatusHP,
pokemonBaseStatusAttack,
pokemonBaseStatusDefense,
pokemonBaseStatusSpAttack,
pokemonBaseStatusSpDef,
pokemonBaseStatusSpeed,
pokemonFirstAbilitie,
pokemonSecondAbilitie,
pokemonHiddenAbilitie,
pokemonFirstType,
pokemonSecondType,
poke,
} from './utils.js'

export async function pokemonAbilitie(pokemon){
    const data = await fetchPokemon(pokemon)
    
    if(data.abilities['1'] == undefined){
        //Se tem só 1 habilidade, é true
        pokemonFirstAbilitie.innerHTML = data.abilities['0'].ability.name
        pokemonSecondAbilitie.classList.add('hide')
        pokemonHiddenAbilitie.classList.add('hide')
    }else if(data.abilities['2'] == undefined){
        //Se isso é true, é pq só tem 2 habilidades
        pokemonFirstAbilitie.innerHTML = data.abilities['0'].ability.name
        pokemonSecondAbilitie.innerHTML = data.abilities['1'].ability.name
        pokemonSecondAbilitie.classList.remove('hide')
        pokemonHiddenAbilitie.classList.add('hide')
    } else{
        pokemonSecondAbilitie.classList.remove('hide')
        pokemonHiddenAbilitie.classList.remove('hide')
        pokemonFirstAbilitie.innerHTML = data.abilities['0'].ability.name
        pokemonSecondAbilitie.innerHTML = data.abilities['1'].ability.name
        pokemonHiddenAbilitie.innerHTML = data.abilities['2'].ability.name
    }
    

}

export async function pokemonType(pokemon){
    const data = await fetchPokemon(pokemon)


    // pokemon[searchPokemon].type
    if(data.types['1'] == undefined){
        poke[0] = data.types['0'].type.name
        pokemonFirstType.src = `./src/images/types/${poke[0]}.png`

        poke.splice(1)
        pokemonSecondType.classList.add('hide')
    } else{
        poke[0] = data.types['0'].type.name
        poke[1] = data.types['1'].type.name

        pokemonFirstType.src = `./src/images/types/${poke[0]}.png`
        pokemonSecondType.src = `./src/images/types/${poke[1]}.png`

        pokemonSecondType.classList.remove('hide')
    }
    // console.log(poke)

}

export async function pokemonStats(pokemon){
    const data = await fetchPokemon(pokemon)

    pokemonBaseStatusHP.innerHTML = data['stats']['0']['base_stat']
    pokemonBaseStatusAttack.innerHTML = data['stats']['1']['base_stat']
    pokemonBaseStatusDefense.innerHTML = data['stats']['2']['base_stat']
    pokemonBaseStatusSpAttack.innerHTML = data['stats']['3']['base_stat']
    pokemonBaseStatusSpDef.innerHTML = data['stats']['4']['base_stat']
    pokemonBaseStatusSpeed.innerHTML = data['stats']['5']['base_stat']
}

export async function pokemonHeightAndWeight(pokemon){
    const data = await fetchPokemon(pokemon)

    pokemonWeight.innerHTML = (data.weight/10)

    pokemonHeight.innerHTML = (data.height/10)
}

export async function pokemonImageChange(pokemon){
const data = await fetchPokemon(pokemon)

pokemonImage.src = data.sprites.other['official-artwork'].front_default
}

export async function pokemonNameAndIdChange(pokemon){
    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name

    if(data.id >100){
        pokemonNumber.innerHTML = `#${data.id}`
    } else if(data.id>=10){
        pokemonNumber.innerHTML = `#0${data.id}`
    } else{
        pokemonNumber.innerHTML = `#00${data.id}`
    }
}

export function cleanPokemon(){
pokemonImage.style.display = 'none'
pokemonName.innerHTML = 'Not Found'
pokemonNumber.innerHTML = ''
pokemonHeight.innerHTML = ''
pokemonWeight.innerHTML =  ''
pokemonBaseStatusHP.innerHTML =  ''
pokemonBaseStatusAttack.innerHTML =  ''
pokemonBaseStatusDefense.innerHTML =  ''
pokemonBaseStatusSpAttack.innerHTML =  ''
pokemonBaseStatusSpDef.innerHTML =  ''
pokemonBaseStatusSpeed.innerHTML =  ''
pokemonFirstType.src =  ''
pokemonSecondType.src =  ''
pokemonFirstAbilitie.innerHTML =  ''
pokemonSecondAbilitie.innerHTML =  ''
pokemonHiddenAbilitie.innerHTML =  ''
}


