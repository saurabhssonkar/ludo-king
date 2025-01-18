import React from 'react'
import Wrapper from '../components/Wrapper'
import Dice from '../components/Dice'
import { Colors } from '../constants/Colors'
import { color } from 'framer-motion'
import Pocket from '../components/Pocket'
import { VerticalPath } from '../components/VerticalPath'

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
        <div className='w-full h-full  items-center p-3 bg-red-600 '>
          <div className='w-full h-2/5 justify-between  flex-row bg-[#ccc]'>
          <Pocket color={Colors.green} player={2}/>
          <VerticalPath color={Colors.yellow} />

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