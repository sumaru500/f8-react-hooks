import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState()
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return ( 
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
     );
}

export default ThemeProvider;