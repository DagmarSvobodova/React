import { useState } from "react";
import Aiport from "./Aiport";


function SearchBar(props) {
  return (
    <div className="searchBar">
        
            <div>
    <p>From</p>
      <Aiport setAiport={props.setAiportFrom} />
      </div>
      <div>
      <p>To</p>
      <Aiport setAiport={props.setAiportTo} />
      </div>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.fetchData();
        }}
      >
          <p>From day:</p>
        <input
        name="dateFrom"
          type="text"
          value={props.dateFrom}
          onChange={(e) => props.setDateFrom(e.target.value)}
        />
        <p>To day:</p>
        
        <input
        name="dateTo"
          type="text"
          value={props.dateTo}
          onChange={(e) => props.setDateTo(e.target.value)}
        />

<p>Stopovers:</p>
        <input
        name="stopovers"
          type="number"
          value={props.stopovers}
          onChange={(e) => props.setStopovers(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
     
    </div>
  );
}

export default SearchBar;
