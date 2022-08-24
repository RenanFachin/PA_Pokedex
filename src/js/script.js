import {fetchPokemon} from './api.js'

import {pokemonName, pokemonNumber, pokemonImage} from './utils.js'

import {pokemonAbilitie,pokemonType,pokemonStats,pokemonHeightAndWeight,pokemonImageChange,pokemonNameAndIdChange,cleanPokemon} from './events.js'


const form = document.querySelector('.form')
const input = document.querySelector('.input__search')

const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

// variável de controle
let searchPokemon = 1


const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = ''

    const data = await fetchPokemon(pokemon)
   
    if(data){
    pokemonImage.style.display = 'block'

    // Alterando o nome e o número da dex
    pokemonNameAndIdChange(pokemon)

    // Alterando a imagem
    pokemonImageChange(pokemon)

    // Alterando a altura do pokemon e o peso do pokemon
    pokemonHeightAndWeight(pokemon)

    // Alterando os stats
    pokemonStats(pokemon)

    // Alterando as habilidades
    pokemonAbilitie(pokemon)

    // Alterando o tipo
    pokemonType(pokemon)



    // Limpando o input após a pesquisa
    input.value= ''
    // atulizando a variável de controle para poder funcionar os botões de next e prev
    searchPokemon = data.id

} else{
    cleanPokemon()
}
}

form.addEventListener('submit', (event) => {
    if(input.value > 898){
        alert("Você digitou um pokemon que não é válido")
    } else{
        event.preventDefault()
        renderPokemon(input.value.toLowerCase())
    }
}) 

buttonPrev.addEventListener('click', () => {
    if(searchPokemon >1){
    searchPokemon -= 1
    renderPokemon(searchPokemon)
    } else{
        alert('Não tem mais como voltar')
    }

})

buttonNext.addEventListener('click', () => {
    if(searchPokemon<898){
        searchPokemon += 1
        renderPokemon(searchPokemon)
    } else {
        alert('O último pokemon existente é o de id 898')
    }
})


// Inicializando com o pokemon número 1
renderPokemon(searchPokemon)