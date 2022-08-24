// Passando "pokemon" como parâmetro para que seja pesquisado as infos sobre o pokemon
export const fetchPokemon = async (pokemon) => {

    // aqui vai o endpoint
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);


    // Tratando
    // Se o pokemon for ok, o status da resposta é 200. Então, ele é válido
    if(APIResponse.status ===200){
        // Atribuindo em data os dados extraidos da api só que transformados em json
    const data = await APIResponse.json();
    return data
    }
}


