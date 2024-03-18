const Dropdown = ({ countries, selected, handleOptionChange }) => {

    return (
        <div className="dropdown">
            <select className="select" value={selected} onChange={handleOptionChange}>
                <option value=''>Select a country:</option>
                {countries.map(country => 
                    <option key={country.name.common}
                        value={country.name.common}>
                        {country.name.common}
                    </option>)}
            </select>
        </div>
    )
}

export default Dropdown