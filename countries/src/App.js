import { useState, useEffect } from 'react'
import server from './services/Server'
import Country from './components/Country'


const App = () => {
  const [countries, setCountries] = useState([])
  const [cName, setCName] = useState('')



  useEffect(() => {
    server
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const inputHandler = event => {
    console.log(event.target.value)
    setCName(event.target.value)
  }

  const listedCountries = () => {
    if (cName.length > 0) {
      return countries.filter(cn => cn.name.common.toLowerCase().includes(cName.toLowerCase()))
    } else {
      return []
    }
  }

  return (
    <div>
      <form>
        find countries <input
          value={cName}
          onChange={inputHandler}
        />
      </form>
      <Country countriesList={listedCountries()} />
    </div>
  )
}

export default App