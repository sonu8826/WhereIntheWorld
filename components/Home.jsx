import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesContainer from './CountriesContainer'
// import { useOutletContext } from 'react-router-dom'

import { useWindowSize } from '../hooks/useWindowSize'
import { useTheme } from '../hooks/useTheme'



const Home = () => {
    const [query, setQuery] = React.useState("");
    // const [isDark] = useOutletContext() // NEW FEATURE OF REACT_ROUTER_DOM
    const [isDark] = useTheme()
    // console.log(isDark)
    const windowSize = useWindowSize()
    console.log(windowSize.width)
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
    <div className='search-filter-container'>
        <SearchBar setQuery={setQuery}/>
        <SelectMenu setQuery={setQuery} /> 
    </div>
    <CountriesContainer query={query}/>
    {/* <NewComponent></NewComponent> */}
    </main>
  )
}

export default Home
