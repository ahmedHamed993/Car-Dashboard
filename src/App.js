import React,{useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import {useLocation} from "react-router";
//  pages 
import Home from "./pages/Home";
import Booking from "./pages/Booking";
// components 
import Header from "./components/Header";
import SideNav from "./components/SideNav";
// get context states 
import { useStateContext } from "./context/ContextProvider";
function App() {
  const {theme, sideActive, setSideActive} = useStateContext();
  const [windowWidth , setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  useEffect(()=>{
    if(window.innerWidth < 768 && sideActive )
    {
      setSideActive(false);
    }
  },[location])
  useEffect(()=>{

    const handleWidth = ()=>{
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize",handleWidth);
    windowWidth < 768 ? setSideActive(false) : setSideActive(true);
  
    return ()=> window.removeEventListener("resize",handleWidth);
  },[window.innerWidth])
  return (
    <div className={`h-screen flex ${theme =='light'?'':'dark'} relative`}>

      { sideActive && <SideNav /> }
      {/* main header container  */}
      <div className='h-screen w-full'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
