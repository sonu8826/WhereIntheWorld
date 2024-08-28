import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'

const App = () => {
    // const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('idDarkMode'))) Isko yaha se hatane ki liye humne thoda tipical concept use kia
    return (
            <ThemeProvider>
                <Header />
                <Outlet />
            </ThemeProvider>
    )
}

export default App
