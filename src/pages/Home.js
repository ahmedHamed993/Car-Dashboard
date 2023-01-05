import React from 'react';
import InfoCard from '../components/InfoCard';
import ColumnChart from '../components/ColumnChart';
import LineChart from '../components/LineChart';
import CarCard from '../components/CarCard';
// data 
import { mainCardInfo } from '../data/statistics';
import {recommendedCars} from "../data/carsData";
console.log(recommendedCars);
const Home = () => {
  return (
    <div className='w-full h-[calc(100%-72px)] overflow-auto py-4 px-8  bg-gray-50 dark:bg-gray-800 scrollbar-hide'>
      <div className="container mx-auto max-w-[1400px]">
      <div className="flex flex-col gap-4">
        {/* dashboard cards  */}
        <div className="main-cards flex flex-wrap gap-8 justify-center">
          {
            mainCardInfo.map(item => <InfoCard item={item} key={item.title}/>)
          }
        </div>
        {/* 2 charts  */}
        <div className="main-charts w-full flex flex-wrap gap-8 justify-center ">
          <ColumnChart />
          <LineChart />
        </div>
        {/* recomended cars  */}
        <div className='flex justify-center items-center gap-8 flex-wrap'>
          {
            recommendedCars.map(item => <CarCard item={item} key={item.id} />)
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home