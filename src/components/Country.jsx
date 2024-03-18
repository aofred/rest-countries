const Country = ({ country }) => {

    if (!country) {
        return (
            null
        )
    }

    const currency = Object.values(country.currencies)[0] 
        || {name: "", symbol: "No currency"}

    return (
        <div className="country">
            <div className="country-information">
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{country.name.common}</td>
                        </tr>
                        <tr>
                            <td>Region:</td>
                            <td>{country.region}</td>
                        </tr>
                        <tr>
                            <td>Capital:</td>
                            <td>{country.capital[0] || "-"}</td>
                        </tr>
                        <tr>
                            <td>Population:</td>
                            <td>{country.population}</td>
                        </tr>
                        <tr>
                            <td>Currency:</td>
                            <td>{currency.name} ({currency.symbol})</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="country-flag">
                <img src={country.flags.svg} alt={country.flags.alt}/>
            </div>
        </div>
    )
}

export default Country