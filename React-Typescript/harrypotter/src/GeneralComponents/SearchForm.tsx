import { useState} from 'react';
import FetchingComponent from './FetchingComponent';

const SearchForm = () => {
    
    const [searchValue, setSearchValue] = useState('');
    const [searchingUrl, setSearchingUrl] = useState('http://hp-api.herokuapp.com/api/characters/house/Gryffindor');
    const values = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];

        

  return (
    <div>
    <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchingUrl(`http://hp-api.herokuapp.com/api/characters/house/${searchValue}`)
        }}
      >
<div>
<select onChange={(e) => setSearchValue(e.target.value)}>
  {values.map((value, index) => (
    <option key={index} value={value}>
      {value}
    </option>
  ))}
</select>
</div>
<button type="submit">Search</button>
</form>


    <FetchingComponent url={searchingUrl}  pageNumber = {4}  />
    </div>
  );
};

export default SearchForm;

