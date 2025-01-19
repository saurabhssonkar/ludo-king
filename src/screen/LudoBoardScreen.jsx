import React from 'react'
import Wrapper from '../components/Wrapper'
import Dice from '../components/Dice'
import { Colors } from '../constants/Colors'
import { color } from 'framer-motion'
import Pocket from '../components/Pocket'
import VerticalPath from '../components/VerticalPath'
import { plot1Data, plot2Data, plot3Data, plot4Data } from '../helper/PlotData'
import HorizontalPath from '../components/HorizontalPath'
import FourTrangle from '../components/FourTrangle'

const LudoBoardScreen = () => {
  return (
    <Wrapper>
      {/* Menu Icon Button */}
      <button
        className="absolute top-16 left-5"
        style={{ outline: "none" }}
        onClick={() => console.log("Menu button clicked!")}
      >
        <img
          src="/assets/images/menu.png" // Replace with your menu image path
          alt="Menu Icon"
          className="w-8 h-8"
        />
      </button>

      {/* Main Content */}
      <div className='items-center justify-center w-full' style={{ height: `${window.innerHeight * 0.5}px` }}>
        <div className='flex justify-between items-center px-10'>
          <Dice color={Colors.green} />
          <Dice color={Colors.yellow} rotate={1} />


        </div>
        {/* ludoBoard  */}
        <div className='w-full h-full  items-center p-3  '>
          <div className='w-full h-2/5 justify-between flex flex-row bg-[#ccc]'>
            <Pocket color={Colors.green} player={2} />
            <VerticalPath
              cells={plot2Data}
              color={Colors.yellow} />
            <Pocket color={Colors.yellow} player={3} />
          </div>
          <div className='flex flex-row  w-full h-[20%] justify-between bg-[#1E5162]'>
            <HorizontalPath cells={plot1Data} color={Colors.green}/>
            <FourTrangle/>
            <HorizontalPath cells={plot3Data} color={Colors.blue}/>


          </div>
          <div  className='w-full h-2/5 justify-between flex flex-row bg-[#ccc]'>

          <Pocket color={Colors.red} player={1} />
            <VerticalPath
              cells={plot4Data}
              color={Colors.red} />
            <Pocket color={Colors.blue} player={4} />

          </div>


        </div>
        <div className='flex justify-between items-center px-10'>
          <Dice color={Colors.red} />
          <Dice color={Colors.blue} rotate={1} />


        </div>

      </div>

    </Wrapper>
  )
}

export default LudoBoardScreen