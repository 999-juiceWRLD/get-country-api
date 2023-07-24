import PropTypes from "prop-types";

function Country({officialName, commonName, flag, capital }) {
    return (
        <div className="my-3">
            <h3>{commonName} — {flag} </h3>
            <p>The capital of {officialName} is {capital}.</p>
        </div>
    );
}

Country.propTypes = {
    officialName: PropTypes.string.isRequired,
    commonName: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired
}

export default Country;
