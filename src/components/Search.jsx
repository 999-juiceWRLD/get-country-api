import PropTypes from "prop-types";

function Search({ country, setFunc, handleClick }) {

    return (
        <div>
            <input className="mx-2" type="text" placeholder="enter a country name" 
                value={country} onChange={setFunc}/>
            <button type="button" className="btn btn-light" onClick={handleClick}>
                Search
            </button>
        </div>
    );
}

Search.propTypes = {
    country: PropTypes.string.isRequired,
    setFunc: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Search;
