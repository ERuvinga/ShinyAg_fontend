import React, { createContext, useState } from 'react'
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light'); //default theme
    const toogleTheme = () => {
        setTheme((theme === 'light') ? 'dark' : 'light');
    }
    return (
        <ThemeContext.Provider
            value={
                {
                    theme,
                    toogleTheme  //data available in my context Provider
                }
            }>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider;
