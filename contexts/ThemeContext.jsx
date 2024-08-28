import { createContext, useState } from "react";

export const ThemeContext = createContext() // Here we created a context and hold its value in ThemeContext variable and export it.

export function ThemeProvider({children}) {
    console.log({children})
    const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('idDarkMode')))

    return <ThemeContext.Provider value={[isDark, setDark]}>{children}</ThemeContext.Provider>
}