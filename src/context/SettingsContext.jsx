import {createContext, useState} from "react";


export const SettingsContext = createContext(null)


export function SettingsProvider({children}) {
    const [count, setCount] = useState(0);
    const [language, setLanguage] = useState('cz');
    const [theme, setTheme] = useState('light');
    return (
        <SettingsContext.Provider value={{
            language: language,
            setLanguage: setLanguage,
            theme: theme,
            setTheme: setTheme,
            count: count,
            setCount: setCount,
        }}>
            {children}

        </SettingsContext.Provider>

    )
}