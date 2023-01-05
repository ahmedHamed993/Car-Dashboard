import React, { useState } from 'react'
import {IoHeartOutline ,IoHeartSharp} from "react-icons/io5";
import User2Icon from "../assets/icons/user2.svg";
import Recycle2Icon from "../assets/icons/recycle2.svg";

const BookingCarCard = ({item}) => {
    const { name, category, img, noUsers, manual, price} = item ;
    const [fav, setFav] = useState(false);
  return (
    <div className=" bg-white dark:bg-gray-900 px-6 py-4 flex-1 rounded-xl cursor-pointer min-w-[300px] max-w-[calc(1400px/3)] transition-all flex flex-col items-start justify-center">
      {/* car name and fav icon  */}
      <div className='flex justify-between items-center w-full font-semibold'>
        <h2 className="text-gray-900 dark:text-gray-50">{name}</h2>
        <button onClick={()=>setFav(prev => !prev)}>
            <p className='text-gray-900 dark:text-gray-50'>{!fav && <IoHeartOutline /> }</p>
            <p className='text-red-600'>{fav && <IoHeartSharp /> }</p>
        </button>
      </div>
      {/* category  */}
      <p className='text-gray-600 '>{category}</p>
      {/* car img  */}
      <div className='flex justify-center items-center w-full'>
        <img src={img} alt={name} lazy className="h-[126px] object-contain"  />
      </div>
      {/* card bottom  */}
      <div className="flex justify-between items-center w-full mt-4">
        {/* left infomation  */}
        <div className='flex justify-start items-center gap-4'>
          <div className='flex gap-2 justify-start items-center'>
            <img src={User2Icon} alt="users" width='15px'/>
            <p className="text-gray-500 text-sm">{noUsers}</p>
          </div>
          <div className='flex gap-2 justify-start items-center'>
            <img src={Recycle2Icon} alt="users" width='15px' />
            <p className="text-gray-500 text-sm">{manual ? "Manual":"Autmatic"}</p>
          </div>
        </div>
        {/* price  */}
        <p className="text-gray-500 text-sm font-semibold">{`$${price}/d`}</p>
      </div>

    </div>
  )
}

export default BookingCarCard