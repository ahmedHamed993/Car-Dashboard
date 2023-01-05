import React from 'react'
import SidebarLink from "./SidebarLink";
import {sidebarTopLinks, sidebarBottomLinks} from "../data/sidebarLinks.js";
import LogoLight from "../assets/icons/logo_light.png";
import LogoDark from "../assets/icons/logo_dark.png";
import { useStateContext } from '../context/ContextProvider';
const SideNav = () => {
  const {theme, setTheme, setSideActive} = useStateContext();
  // console.log(theme);
  const handleNavClose = ()=>{
    if(window.innerWidth < 768){
      setSideActive(false);
    }
  }
  return (
    <div className="dark:bg-gray-900 dark:text-white h-screen overflow-auto w-[250px] min-w-[250px] p-4 fixed bg-white z-50   md:sticky">
      {/* logo container  */}
      <div className='w-[109px] h-[31px] object-contain mb-4' onClick={handleNavClose}>
        {
          theme==="light"?
          <img src={LogoLight} alt="logo" lazy /> : 
          <img src={LogoDark}  alt="logo" lazy />
        }
      </div>
      {/* links container  */}
      <div className='flex flex-col w-[200px]  h-[calc(100%-50px)] justify-between items-start'>
        <div className='w-full'>
          {
            sidebarTopLinks.map(item => <SidebarLink key={item.title} title={item.title} icon={item.icon} goto={item.goto} /> )
          }
        </div>
        <div className='w-full'>
          {
            sidebarBottomLinks.map(item => <SidebarLink key={item.title} title={item.title} icon={item.icon} goto={item.goto} /> )
          }
        </div>
      </div>
    </div>
  )
}

export default SideNav