import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Filler, Tooltip} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useStateContext } from '../context/ContextProvider';
const LineChart = () => {
  // const {theme} = useStateContext();
  ChartJS.register( CategoryScale, LinearScale, LineElement, PointElement, Filler, Tooltip);
  const options = {
    responsive: true,
    plugins: {},
    tooltip:{
      yAlign:"top",
      xAlign:"top"
    },
    scales: {
      y: {
        min:0,
        max:300,
        ticks: {
          beginAtZero:true,
          display: false,
        },
        grid:{
          drawBorder: false,
          display: false,
        }
      },
    },
  };
  const labels = ['7am','9am','11am', '1pm','3pm','5pm','7pm'];
  const data = {
    labels,
    datasets: [
      {
        fill:true,
        label: '',
        data: ['100','130','90','180','150','110','140'],
        backgroundColor:" #FBBF2430",
        borderColor: '#FBBF24',
        pointBackgroundColor:"#F59E0B",
        pointHoverBorderColor:"#D97706",
        tension:.5,
      }
    ],
  };
  return (
    <div className='flex-1 flex flex-col justify-center items-center gap-3  min-w-[300px] w-[50%] max-w-[calc(1400px/2)] bg-white dark:bg-gray-900 p-3 rounded-xl cursor-pointer transition-all'>
      <div className="w-full">
        <h5 className="text-2xl pl-4 font-semi-bold mb-4 text-gray-900 dark:text-gray-50">
          <span className="font-semibold">Car</span> Statistics
        </h5>
        <div className="flex justify-between items-center w-full mb-4 px-4">
          <h5 className="text-gray-900 dark:text-gray-50 font-semibold">20 February 2022</h5>
          <div className="filter-menu flex gap-1 items-center bg-yellow-500 bg-opacity-30 rounded-full">
            <p className="py-1 px-3 text-sm bg-yellow-500 rounded-full text-white">Day</p>
            <p className="py-1 px-3 text-sm text-gray-900 dark:text-gray-50 ">Week</p>
            <p className="py-1 px-3 text-sm text-gray-900 dark:text-gray-50 ">Month</p>
          </div>
        </div>
        <div className="p-4 w-full">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default LineChart