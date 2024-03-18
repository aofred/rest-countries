import { useEffect, useState } from 'react'
import axios from 'axios'
import Dropdown from './components/Dropdown'
import Country from './components/Country'
import './app.css'

const baseUrl = "https://restcountries.com/v3.1/all"
const params = "?fields=name,capital,population,flags,region,currencies"

const App = () => {
  
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    axios.get(`${baseUrl}${params}`)
      .then(response => {
        let sorted = response.data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common))
        setCountries(sorted)
      })
      .catch(error => console.error('Error', error))
  }, [])

  const handleOptionChange = (e) => {
    setSelected(e.target.value)
  }

  const selectedObject = countries.find(({ name }) => name.common == selected)

  return (
    <>
      <div>
        <h1>Rest Countries</h1>
        <Dropdown 
          countries={countries} 
          selected={selected}
          handleOptionChange={handleOptionChange}
        />
        <div className="country-container">
          <Country country={selectedObject}/>
        </div>
        
      </div>
    </>
  )
}

export default App
