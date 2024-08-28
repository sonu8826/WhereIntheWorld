import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesContainer from './CountriesContainer'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'


const Home = () => {
    const [query, setQuery] = React.useState("");
    // const [isDark] = useOutletContext() // NEW FEATURE OF REACT_ROUTER_DOM
    const [isDark] = useContext(ThemeContext)
    console.log(isDark)
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
    <div className='search-filter-container'>
        <SearchBar setQuery={setQuery}/>
        <SelectMenu />
        
    </div>
    <CountriesContainer query={query}/>
    {/* <NewComponent></NewComponent> */}
    </main>
  )
}

export default Home
