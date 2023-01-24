import { useState, useEffect } from "react";
import Country from "../Components/Country";

const CountryContainers = () => {

    // States
    const[countries, setCountries] = useState([]);


    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe")
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])

    const countryComponents = countries.map((country) => {
        
        return <Country country={country} />
    })
    return(
        <div>
      {countryComponents}
      </div>
      
    )
};
export default CountryContainers;