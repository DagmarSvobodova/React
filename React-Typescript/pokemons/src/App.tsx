import React from 'react';
import { useState, useEffect } from 'react';


interface Pokemon {
  name: string;
  url: string;
  img: string;
}

interface State  { 
  pokemons: Array<Pokemon>;
  loading: boolean;
  error: boolean;
}

interface PokeApiResponse  {
  count: number;
  next: string;
  previous: string;
  results: Array<Pokemon>
}


const App = () => {
  const [state, setState] = useState<State>({
    pokemons:[],
    loading: true,
    error: false,
  });
  
  async function fetchData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=5`);
    const responseText = await response.text();
    try {
      const data: PokeApiResponse = JSON.parse(responseText);
      const pokemons: Array<Pokemon> = data.results;
      const newState: State = {pokemons, loading: false,  error: false};
      setState(newState);
    }
    catch(error){
      const newState: State = {pokemons:[], loading: false,  error: true};
      setState(newState);
    }
}

  
  useEffect( () => {
    fetchData()
  }
      ,[])


  return (
    <div className="pokemons">
      
        
          
            {state.pokemons ? state.pokemons.map((pokemon, index) =>
          <div className="pokemon" key={index}>
              <h2>{pokemon.name.toUpperCase()}</h2>

              <img src="http://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-go/f/f3/1.jpg" alt={pokemon.name}/>
              </div>
           ) : <p>Loading...</p>} 
          
         
          
     
      
    </div>
  );
};

export default App;