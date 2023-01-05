import React from 'react';
import {Link} from "react-router-dom";

const SidebarLink = ({title, icon, goto}) => {
  return (
    <div className="hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 rounded-xl p-3 ">
        <Link to={`${goto}`} className="flex justify-start items-center w-full">
            <img src={icon} alt="link-icon" lazy className="w-[20px] h-[20px] mr-2"/>
            <span>{title}</span>
        </Link>
    </div>
  )
}

export default SidebarLink