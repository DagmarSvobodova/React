function SearchBar(props){
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            props.fetchData(props.searchQuerry, props.arg)}}>

            <input 
            type="text" 
            name="searchBar" 
            value={props.searchQuerry}
            onChange={(e) => props.setSearchQuerry(e.target.value)}
            />
                   <button type="submit">Search</button>
            </form>
           

        </div>
    )
}

export default SearchBar;