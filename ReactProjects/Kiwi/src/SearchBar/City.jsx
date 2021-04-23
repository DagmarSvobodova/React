import { useEffect, useState } from "react";

function City(props) {    
    
    const [location, setLocation] = useState("Type city");
        
        return (
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
             
              props.fetchLocation(location)
             
            }}>

              
              <input type="text" name="search" value={location} onChange={(e) => setLocation(e.target.value)} />
             
              <button type="submit">show</button>
            </form>
          </div>
        )
      }
      



export default City;