import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
    const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('idDarkMode')))
    return (
        <>
        <Header theme={[isDark, setDark]}/>
        <Outlet context={[isDark, setDark]}/> 
        </>
    )
}

export default App
