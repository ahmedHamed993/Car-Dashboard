import React from 'react'
import RecommendIcon from "../assets/icons/recommend.svg";
import RecycleIcon from "../assets/icons/recycle.svg";
import CarLightIcon from "../assets/icons/car_light.svg";
import CarSettingsIcon from "../assets/icons/car_setting.svg";

const CarCard = ({item}) => {
  const {percentage, name, usesNo, img, price, bgColor} = item;
  return (
    <div className='px-6 py-4 flex-1 rounded-xl cursor-pointer min-w-[300px] max-w-[calc(1400px/3)] transition-all flex flex-col items-start justify-center gap-3' style={{background:bgColor}}>
      {/* card head  */}
      <div className="text-md flex justify-start items-center gap-2 text-gray-700">
        <img src={RecommendIcon} alt="recommended" lazy className="w-[20px]" />
        <h6>{percentage} Recommend</h6>
      </div>
      {/* card image  */}
      <div className='flex justify-center items-center w-full'>
        <img src={img} className="h-[126px] object-contain" />
      </div>
      {/* name  */}
      <h3 className='text-lg font-semibold'>{name}</h3>
      {/* card bottom  */}
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 justify-start items-center">
          <img src={RecycleIcon} alt="icon1" lazy />
          <p className="text-gray-500">{usesNo}</p>
          <img src={CarLightIcon} alt="icon2" lazy />
          <img src={CarSettingsIcon} alt="icon3" lazy />
        </div>
        <h6 className="text-gray-500">${price}/h</h6>
      </div>
    </div>
  )
}

export default CarCard