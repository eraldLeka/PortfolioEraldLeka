import { use } from "react";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }){
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () =>{
        setTheme(prev =>(prev === "light" ? "dark" : "light"));
    };

    useEffect(()=>{
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}