 import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { useTheme } from '../hooks/useTheme';
 
 export default function Header() {
  
  const [isDark, setDark] = useTheme();
  // if(isDark){
  //   document.body.classList.add('dark')
  // }
  // else {
  //   document.body.classList.remove('dark')
  // }
   return (
     <header className={`header-container ${isDark ? 'dark' : ''}`}>
        <div className={'header-content'}>
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={() => {
          document.body.classList.toggle('dark');
          setDark(!isDark)
          localStorage.setItem("idDarkMode", !isDark)
        }}>
          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`} />
          &nbsp;&nbsp;{`${isDark ? 'Light' : 'Dark'}`} Mode
        </p>
      </div>
     </header>
   )
 }
 