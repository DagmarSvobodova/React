
import './App.css';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
 

function App() {
  const [searchQuerry, setSearchQuerry] = useState('');
  const [searchIngrediens, setSearchIngrediens]= useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [lastSearch, setLastSearch]= useState('');
  const [randomCoctail, setRandomCoctail] = useState ('');
  
  
 
  const ingredience = 'filter.php?i=';
  const drink = 'search.php?s=';

  async function fetchData(searchingBy, key) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${key}${searchingBy}`);
    const responseText = await response.text();

try {
  const data = JSON.parse(responseText);
  setSearchResults(data.drinks);

}
catch(e){
  setSearchResults(null);
}
setLastSearch(searchingBy);
  }
 async function randomCoctailGenerate(){
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await response.json();
  
  setRandomCoctail([data.drinks[0].strDrink, data.drinks[0].strDrinkThumb]);
  }

 
  return (

    <div className="body">
      
     <div className="search">
        
     <button className="random" onClick={() => randomCoctailGenerate()}>Random coctail</button>
     
       <p>Search coctail:</p>
       <SearchBar searchQuerry={searchQuerry}
       setSearchQuerry = {setSearchQuerry}
       fetchData={fetchData}
       arg={drink}
      >
        </SearchBar>
        <p>Search coctail by ingrediens:</p>
        <SearchBar
       searchQuerry={searchIngrediens}
       setSearchQuerry = {setSearchIngrediens}
       fetchData={fetchData}
       arg={ingredience}
      ></SearchBar>
      
</div>
{randomCoctail && <div><h2>{randomCoctail[0]}</h2>
<img src={`${randomCoctail[1]}/preview`} alt={randomCoctail[0]}/></div>}
{searchResults || Array.isArray(searchResults) ?
  <div className="results">
     <SearchResults searchResults = {searchResults} />
     </div>
     
  :
  <div>
  <h2>There is not {lastSearch} </h2>
  </div>
}
    </div>

  );
}

export default App;

