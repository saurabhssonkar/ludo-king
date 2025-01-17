import React from 'react'
import Wrapper from '../components/Wrapper'
import Dice from '../components/Dice'
import { Colors } from '../constants/Colors'

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
    <div className='items-center justify-center w-full'>
    <div className='flex justify-center items-center py-6'>
        <Dice color={Colors.green}/>
        <Dice color={Colors.yellow} rotate={1}/>


    </div>

    </div>

  </Wrapper>
  )
}

export default LudoBoardScreen