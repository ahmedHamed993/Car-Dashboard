import React,{useState} from 'react'
import DashboardIcon from "../assets/icons/dashboard_icon.svg";
import FilterIcon from "../assets/icons/filter.svg";

const BookingFilter = () => {

  const [categoryValue, setCategoryValue] = useState("All");
  const [brandValue, setBrandValue] = useState("All");

  const handleCategoryChange =(e)=>{
    setCategoryValue(e.target.value);
  }
  const handleBrandChange =(e)=>{
    setBrandValue(e.target.value);
  }
  return (
    <div className='w-full'>
      <div className="flex gap-4 justify-between  items-center flex-wrap">
        {/* select boxes  */}
        <div className="flex gap-4">
          <select 
            value={categoryValue} 
            onChange={handleCategoryChange} 
            className="py-2 px-6 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-50 transition-background"
          >
            <option value="All">All</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
          <select 
            value={brandValue} 
            onChange={handleBrandChange} 
            className="py-2 px-6 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-50 transition-background"
          >
            <option value="Toyota">Toyota</option>
            <option value="Porshe">Porshe</option>
            <option value="Hyundais">Hyundais</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Bently">Bently</option>
          </select>
        </div>
        {/* buttons  */}
        <div className="flex gap-2">
          <button className='bg-white dark:bg-gray-900 transition-background p-3 rounded-full hover:bg-purple-700 bg-opacity-70 '>
            <img src={DashboardIcon} alt="icon" lazy width="20px"/>
          </button>
          <button className='bg-white dark:bg-gray-900 transition-background p-3 rounded-full hover:bg-purple-700 bg-opacity-70 '>
            <img src={FilterIcon} alt="icon" lazy width="20px" fill="white"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingFilter