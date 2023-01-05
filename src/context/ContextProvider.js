import{useState, createContext, useContext, useEffect} from "react";

const StateContext = createContext();

export const ContextProvider = ({children})=>{
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));
  const [sideActive, setSideActive] = useState(true);
  const [newNotification, setNewNotification] = useState(true);

  useEffect(()=>{
    window.localStorage.setItem("theme",theme || "light");
  },[theme]);


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