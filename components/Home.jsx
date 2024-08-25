import React from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesContainer from './CountriesContainer'


const Home = () => {
    const [query, setQuery] = React.useState("");
  return (
    <main>
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
