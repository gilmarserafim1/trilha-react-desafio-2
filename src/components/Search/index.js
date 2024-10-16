import './styles.css'

function Search({userInput, onChange, onClick}) {
    return (
        <div className="search">
            <input 
              className="userInput" 
              value={userInput}
              onChange={onChange} />
            <button 
              className="searchButton"
              onClick={onClick} >
              Search
            </button>
          </div>
    );
}

export default Search;