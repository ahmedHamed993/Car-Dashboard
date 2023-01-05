import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useStateContext } from '../context/ContextProvider';


const ColumnChart = () => {
  const {theme} = useStateContext();
  ChartJS.register( CategoryScale, LinearScale, BarElement, Tooltip);
  const options = {
    responsive: true,
    plugins: {},
    tooltip:{
      yAlign:"top",
      xAlign:"top"
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid:{
          drawBorder: false,
          display: false,
        }
      },
    },
  };
  const labels = ['1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: ['100','130','90','180','150','110','140'],
        backgroundColor:theme == "light"? "#F3F4F6":"#374151",
        hoverBackgroundColor:"#60A5FA",
        pointStyle:"circle"
      }
    ],
  };
  
  return (
    <div className='flex-1 flex flex-col justify-center items-center gap-3  min-w-[300px] w-[50%] max-w-[calc(1400px/2)]  bg-white dark:bg-gray-900 p-3 rounded-xl cursor-pointer transition-all'>
      <div className="w-full">
        <h5 className="text-2xl pl-4  mb-4 text-gray-900 dark:text-gray-50">
          <span className="font-semibold">Miles</span> Statistics
        </h5>
        <div className="flex justify-between items-center w-full mb-4 px-4">
          <div className="filter-menu flex gap-1 items-center">
            <p className="py-1 px-3 text-sm bg-blue-500 rounded-full text-white">Day</p>
            <p className="py-1 px-3 text-sm text-gray-900 dark:text-gray-50 ">Week</p>
            <p className="py-1 px-3 text-sm text-gray-900 dark:text-gray-50 ">Month</p>
          </div>
          <h5 className="text-gray-900 dark:text-gray-50">256 Miles</h5>
        </div>
        <div className="p-4 w-full">
          <Bar options={options} data={data}/>
        </div>
      </div>
    </div>
  )
}

export default ColumnChart