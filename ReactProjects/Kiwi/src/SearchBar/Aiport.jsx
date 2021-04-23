import { useState, useEffect } from "react";
import City from "./City";

function Aiport(props) {
  const [aiports, setAiports] = useState([]);

  async function fetchLocation(location) {
    const response = await fetch(
      `https://api.skypicker.com/locations?term=${location}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`
    );
    const data = await response.json();
    console.log(data);
    setAiports(data.locations);
  }

  return (
    <div>
      <City fetchLocation={fetchLocation} />
      <div>
        <select onChange={(e) => props.setAiport(e.target.value)}>
          {aiports.map((aiport, index) => (
            <option key={index} value={aiport.code}>
              {aiport.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Aiport;
