import React, { createContext, useState } from 'react'



type DarkMode = {
  darkMode: boolean;
  toggleDarkMode: Function;
}

// const DarkModeContext = createContext <DarkMode | null>({darkMode: false, toggleDarkMode: Function})
const DarkModeContext = React.createContext <DarkMode>({} as DarkMode)
// const DarkModeContext = createContext()

// const TodoContext = React.createContext<TodoContext>({} as TodoContext)


const DarkModeProvider = (props: any) => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () =>{
        setDarkMode(!darkMode);
    }

    
    return (
        <div>
         <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>   
     </div>
     
    )
}

export {DarkModeContext, DarkModeProvider}