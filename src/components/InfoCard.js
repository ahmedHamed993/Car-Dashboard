import React, {useEffect, useState} from 'react';

import ArcProgress from 'react-arc-progress';

const InfoCard = ({item}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`flex-1 flex flex-col justify-center items-center gap-2  min-w-[200px] max-w-[calc(1400px/4)] bg-white p-3 rounded-xl cursor-pointer transition-all dark:bg-gray-900
                  ${hovered ? 'dark:bg-purple-700 bg-purple-700 text-white':''}`
                }
      onMouseEnter={()=> setHovered(true)}
      onMouseLeave={(()=>setHovered(false))}
    >
      <div 
          className={`icon-container p-2 text-xl rounded-full text-['${item.mainColor}'] bg-[${item.mainColor}50]`} 
          style={{ color:`${hovered?"white":item.mainColor}` , background:`${hovered?`rgba(255,255,255,.1)`:`${item.mainColor}20`}` }}
      >
          {item.icon}
      </div>
      <p className='font-semi-bold text-xl dark:text-gray-50'>{item.title}</p>
      <div className='relative'>
        <h6 className='text-gray-900 dark:text-gray-50 text-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{item.value}</h6>
        {
          hovered && 
          <ArcProgress
            style={{fontFamily:"DM Sans",fontWeight:'bold'}}
            progress={item.percentage / 100 }
            size='150'
            thickness={15}
            emptyColor= {`#dddddd30`}
            fillColor={`white`}
            textStyle={{font:'DM Sans',color:'white'}}
            animation={false}
          />
        }
        {
          !hovered && 
          <ArcProgress
            style={{fontFamily:"DM Sans"}}
            progress={item.percentage / 100 }
            // text={item.value}
            size='150'
            thickness={15}
            emptyColor= {`${item.mainColor}30`}
            fillColor={`${item.mainColor}`}
            textStyle={{font:'DM Sans'}}
            animation={false}

          />
          
        }
      </div>
    </div>
  )
}

export default InfoCard