import Search from "./components/Search";
import Country from "./components/Country";
import { useState } from "react";
import axios from "axios";

function App() {

  const [countryName, setCountryName] = useState("");
  const [country, setCountry] = useState({officialName: "", commonName: "", flag: "", capital: ""});
  const [fetchSuccess, setFetchSuccess] = useState(false);

  const baseUrl = "https://restcountries.com/v3.1/name";
  
  const setCountrySpecs = (countryObject) => {
    setCountry(() => ({
      officialName: countryObject.name.official,
      commonName: countryObject.name.common,
      flag: countryObject.flag,
      capital: countryObject.capital?.[0]
    }))
  }

  const handleClick = () => {
    axios.get(`${baseUrl}/${countryName}`)
      .then(axiRes => { return axiRes.data})
      .then(([res]) => {
        setCountrySpecs(res); 
        setFetchSuccess(true);
        console.log(res);        
        console.log(res.name);        
      })
      .catch(err => { console.log(err, "hehe")})
  }


  return (
    <div className="container">
      <h1 className=" my-3 pt-3">Search a country.</h1>
      <Search country={countryName} setFunc={(e) => setCountryName(e.target.value)} 
              handleClick={handleClick}/>
      {fetchSuccess && (
        <Country
          officialName={country.officialName}
          commonName={country.commonName}
          flag={country.flag}
          capital={country.capital}
        />
      )}
    </div>
  );
}

export default App;
