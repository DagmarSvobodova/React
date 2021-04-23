import { useState, useEffect } from 'react';


function Pokemons(props){    
  
  useEffect( () => {props.fetchPokemons()}
      ,[])

    return(
        <div className="pokemons">
            {props.pokemons.map((pokemon, index) =>
          <div className="pokemon" key={index}>
              <h2>{pokemon.name.toUpperCase()}</h2>

              <img src="http://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-go/f/f3/1.jpg" alt={pokemon.name}/>
              </div>
            )}
              

        </div>
        
    );
}


export default Pokemons;