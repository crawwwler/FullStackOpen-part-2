import { useState, useEffect } from "react";


const CountryInDetail = ({ country }) => {
    const c = country[0]
    const lang = Object.keys(c.languages)
    const flg = c.flags.png
    return (
        <div>
            <h2>{c.name.common}</h2>
            <div>capital {c.capital}</div>
            <div>area {c.area}</div>
            <br />
            <h4>languages:</h4>
            <ul>
                {lang.map(lg =>
                    <li key={lang.indexOf(lg)}>{c.languages[lg]}</li>)}
            </ul>
            <img src={flg} alt={`Flag of ${c.name.common}`} />
        </div>
    )
}


const Country = ({ countriesList }) => {
    const [selectedCountry, setSelectedCountry] = useState(countriesList)


    useEffect(() => {
        setSelectedCountry(countriesList)
    }, [countriesList])

    const handleTheCountry = country => {
        setSelectedCountry([country])
    }


    if (selectedCountry.length > 10) {
        return (
            <div>
                too many matches, specify another filter
            </div>
        )
    } else if (selectedCountry.length <= 10 && selectedCountry.length > 1) {
        return (
            <div>
                <ul>
                    {selectedCountry.map(country =>
                        <li key={country.name.common}>
                            {country.name.common}
                            <button onClick={() => handleTheCountry(country)}>show</button>
                        </li>
                    )}
                </ul>
            </div>
        )
    } else if (selectedCountry.length === 1) {
        return (
            <CountryInDetail country={selectedCountry} />
        )
    }
}

export default Country