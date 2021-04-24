import React from 'react';
import { useState, useEffect } from 'react';
import { Person, State } from './Interfaces';
import PropTypes, { InferProps} from "prop-types";


FetchingComponent.propTypes = {
    url: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired
    
  };



function FetchingComponent ({url, pageNumber}: InferProps<typeof FetchingComponent.propTypes> )  {
  
    const [state, setState] = useState<State>({
        results:[],
        loading: true,
        error: false,
      });
    
   
 const number: number = Math.floor(Math.random()* 20)

  async function fetchData() {
    
    const response = await fetch(url);
    const responseText = await response.text();
    try {
      const characters: Array<Person>  = JSON.parse(responseText);
      
      if (!pageNumber){
      const newState: State = {results: characters.slice(number, number + 4), loading: false,  error: false};
      setState(newState);
      
    }else{
        const newState: State = {results: characters, loading: false,  error: false};
      setState(newState);
    console.log(pageNumber)
    }
     
    }
    catch(error){
      const newState: State = {results: [], loading: false,  error: true};
      setState(newState);
    }
}

  
  useEffect( () => {
    fetchData()
  }
      , [pageNumber] )


  return (
      
    <div className="people" > 
      
        
          
            {state.results ? state.results.map((result, index) =>
          <div className="person" key={index}>
              <h2>{result.name}</h2>

              <img className="person_img" src={result.image} alt={result.name}/>
              </div>
            
           ) : <p>Loading...</p>} 
          
         
          
     
      
    </div>
  );
};


export default FetchingComponent;