import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import Results from '../../Results';

function Main() {
    const [searchResults, setSearchResults] = useState([]);
    const [aiportFrom, setAiportFrom] = useState("");
    const [aiportTo, setAiportTo] = useState("");
    const [dateFrom, setDateFrom] = useState("08/06/2021");
    const [dateTo, setDateTo] = useState("20/07/2021");
    const [stopovers, setStopovers] = useState(0);
  
    
    async function fetchData() {
      const response = await fetch(`https://api.skypicker.com/flights?flyFrom=${aiportFrom}&to=${aiportTo}&dateFrom=${dateFrom}&dateTo=${dateTo}&partner=test&max_stopovers=${stopovers}`);
      const data = await response.json();
      setSearchResults(data.data.slice(0,5));
      console.log(data);
    }
  
      return ( 
        <div>
             <div className="pic"></div>
            
            <div className="heading">
            <h1>Banana flying</h1>
<p className="p">flying home</p>
            </div>
           
         <SearchBar setAiportFrom={setAiportFrom} setAiportTo={setAiportTo} fetchData={fetchData} 
         dateTo={dateTo}
         setDateTo={setDateTo}
         dateFrom={dateFrom}
         setDateFrom={setDateFrom}
         stopovers={stopovers}
         setStopovers={setStopovers}
         />
      <Results
      results ={searchResults} />
        </div>
        
      );
  }
  
  export default Main;
  
  