import { useState, useEffect } from "react";

const CountryContainers = () => {

    // States
    const[country, setCountry] = useState(null);


    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountry(data))
    })

    return(
        <Country country={country} />
    )
};
export default CountryContainers;