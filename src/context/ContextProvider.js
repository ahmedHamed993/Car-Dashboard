import{useState, createContext, useContext} from "react";

const StateContext = createContext();

export const ContextProvider = ({children})=>{
  const [theme, setTheme] = useState("light");
  const [sideActive, setSideActive] = useState(true);
  const [newNotification, setNewNotification] = useState(true);

  const handleThemeToggle = ()=>{
    if(theme === "light")
    {
      setTheme("dark")
    }
    else
    {
      setTheme("light")
    }
  }
  return (
    <StateContext.Provider
      value={{
        theme,
        setTheme,
        sideActive,
        setSideActive,
        newNotification,
        handleThemeToggle,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);