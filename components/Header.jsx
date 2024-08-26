 import React, { useState } from 'react'
 
 export default function Header({theme}) {
  
  const [isDark, setDark] = theme
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
 