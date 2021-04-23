import { DateTime } from 'luxon';
import { Link } from "react-router-dom";

function Results(props){
    return(
        <div className="results">
            {props.results.map((result, index) =>
          <div key={index} className="result">
              <Link to={`/flight`}>
                  <h3>Detail</h3>
                  
                </Link>
            
              <h2>{result.cityFrom}</h2>
              <p>{result.countryFrom.name}</p>

              <p> {DateTime.fromMillis(result.dTime * 1000).toFormat("hh:mm")}{" "}</p>
              <h2>{result.cityTo}</h2>
              <p>{result.countryTo.name}</p>
             <p>{DateTime.fromMillis(result.aTime * 1000).toFormat("hh:mm")}{" "}</p>
              <h3>price: {result.conversion.EUR}$</h3>
              </div>
            )}
        </div>
    )
}

export default Results;