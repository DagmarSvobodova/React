import { useState, useEffect } from 'react';
import Pokemons from './Pokemons';



function FetchComponent(){
    const [pokemons, setPokemons] = useState([]);
  
       
    async function fetchPokemons() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=5`);
        const data = await response.json();
        setPokemons(data.results);
      console.log(data);
       
        
  }
  

    return(
        <Pokemons
        pokemons = {pokemons}
        fetchPokemons = {fetchPokemons}
        />
        
    );
}


export default FetchComponent;