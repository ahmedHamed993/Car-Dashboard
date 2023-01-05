import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider";
// icons and images 
// import SettingIcon from "../assets/icons/setting.svg";
import SearchIcon from "../assets/icons/search.svg";
import UserImg from "../assets/icons/man-user.png";
import NotificationsIcon from "../assets/icons/notification.svg";
import {BiMenuAltLeft} from "react-icons/bi";
const Header = () => {
  const {setSideActive, newNotification, handleThemeToggle} = useStateContext();
  const [searchOn, setSearchOn] = useState(true);
  useEffect(()=>{
    const handleResizing = ()=>{
      if(window.innerWidth < 768)
      {
        setSearchOn(false);
      } 
      else 
      {
        setSearchOn(true);
      }
    }
    handleResizing();
    // window.addEventListener("resize", handleResizing);
    // return ()=> window.removeEventListener("resize", handleResizing);
  },[window.innerWidth])
  return (
    <div className="w-full dark:bg-gray-900 h-[72px]">
      <div className='container mx-auto px-4 py-3'>
        <div className='flex justify-between items-center w-full'>
          {/* search and menu icon  */}
          <div className='flex gap-4'>
            <button className='menu-icon flex md:hidden text-3xl justify-center items-center text-gray-700 dark:text-gray-50' onClick={()=> setSideActive((prev)=>!prev)}>
              {/* <img src={SettingIcon} alt="settings" /> */}
              <BiMenuAltLeft />
            </button>
            <div className="input-group flex relative bg-gray-50 p-2 rounded-xl dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <button  className=' p-1 rounded-full' onClick={()=>setSearchOn( prev=> !prev)}>
                <img src={SearchIcon} alt="search" />
              </button>
              <input 
                type="text" 
                name="search-value" 
                placeholder='Search' 
                className={`focus:outline-none bg-transparent  transition-width  ${searchOn ? "w-[100px] md:w-[250px] p-1":'w-0 p-0'}`} 
              />
            </div>
          </div>
          {/* user profile and notifaction icons  */}
          <div className='flex gap-4 cursor-pointer' onClick={()=>handleThemeToggle()}>
            <button className='text-sm relative'>
              <img src={NotificationsIcon} alt="notification" className='w-4' />
              {newNotification && <span className="absolute top-[16px] right-[2x] w-[7px] h-[7px] rounded-full bg-red-600 border border-white dark:border-gray-900"></span> }
            </button>
            <Link to="/">
              <img src={UserImg} alt="user profile" className='w-12 h-12 object-fit rounded-full ' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header