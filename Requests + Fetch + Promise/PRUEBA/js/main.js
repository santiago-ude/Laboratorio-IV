


const url = " https://pokeapi.co/api/v2/pokemon/pikachu"



const traerPokemon = async() =>{

    const response = await fetch(url);
    const res = await response.json();

    console.log(res);

}

traerPokemon