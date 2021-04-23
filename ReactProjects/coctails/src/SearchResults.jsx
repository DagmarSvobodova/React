import { useState, useEffect } from 'react';
function SearchResults(props){
    const [drinkInfo, setDrinkInfo] = useState([]);
    const [detailId, setDetailId] = useState(0);
       
    async function fetchData() {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${detailId}`);
        const data = await response.json();
        setDrinkInfo([data.drinks[0].strDrink, data.drinks[0].strInstructions]);
      console.log(data);
       
        
  }
  useEffect( () => {detailId && fetchData()}
      ,[detailId])

    return(
        <div className="searchRes">
              <div className="info">
               {drinkInfo && <div> <h2>{drinkInfo[0]}</h2> <p>{drinkInfo[1]} </p> </div> 
               }
            </div>

          {props.searchResults.map((result, index) =>
          <div className="results" key={index} onClick={ () => {setDetailId(result.idDrink)} 
            
               
              } >
              <h2>{result.strDrink}</h2>

              <img src={`${result.strDrinkThumb}/preview`} alt={result.strDrink}/>
              </div>
            )}
          

        </div>
        
    );
}


export default SearchResults;