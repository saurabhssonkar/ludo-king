import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import Wrapper from '../components/Wrapper'
import Dice from '../components/Dice'
import { Colors } from '../constants/Colors'
import { color } from 'framer-motion'
import Pocket from '../components/Pocket'
import VerticalPath from '../components/VerticalPath'
import { plot1Data, plot2Data, plot3Data, plot4Data } from '../helper/PlotData'
import HorizontalPath from '../components/HorizontalPath'
import FourTrangle from '../components/FourTrangle'
import { useSelector } from 'react-redux'
import { selectDiceTouch, selectPlayer1, selectPlayer2, selectPlayer3, selectPlayer4 } from '../redux/reducers/gameSelector'

const LudoBoardScreen = () => {
  const player1 = useSelector(selectPlayer1)
  const player2 = useSelector(selectPlayer2)
  const player3 = useSelector(selectPlayer3)
  const player4 = useSelector(selectPlayer4)
  const isDiceTouch = useSelector(selectDiceTouch)
  const winner = useSelector(state => state.game.winner);
  const foucs = useRef(null);

  const [showStartImage, setShowStartImage] = useState(false);

  const [menuVisible, setMenuVisible] = useState(false);
  const opacity = useRef(null);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowStartImage(true);
      

    },3000)

  },[])



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
          <Dice color={Colors.green} player={2} data={player2} />
          <Dice color={Colors.yellow} rotate={1} player={3} data={player3}  />


        </div>
        {/* ludoBoard  */}
        <div className='w-full h-full  items-center p-3  '>
          <div className='w-full h-2/5 justify-between flex flex-row bg-[#ccc]'>
            <Pocket color={Colors.green} player={2}  data={player2}/>
            <VerticalPath
              cells={plot2Data}
              color={Colors.yellow} />
            <Pocket color={Colors.yellow} player={3} data={player3} />
          </div>
          <div className='flex flex-row  w-full h-[20%] justify-between bg-[#1E5162]'>
            <HorizontalPath cells={plot1Data} color={Colors.green} />
            <FourTrangle />
            <HorizontalPath cells={plot3Data} color={Colors.blue} />


          </div>
          <div className='w-full h-2/5 justify-between flex flex-row bg-[#ccc]'>

            <Pocket color={Colors.red} player={1}  data={player1}/>
            <VerticalPath
              cells={plot4Data}
              color={Colors.red} />
            <Pocket color={Colors.blue} player={4} data={player4} />

          </div>


        </div>
        <div className='flex justify-between items-center px-10'>
          <Dice color={Colors.red} player={1} data={player1} />
          <Dice color={Colors.blue} rotate={1} player={4} data={player4} />


        </div>

      </div>


      {!showStartImage &&
        <motion.img
          src="/assets/images/start.png"
          className="w-1/2 h-1/2 absolute mt-20"
          ref={opacity}
          animate={{
            opacity: [1, 0, 1], // Fades out and back in
          }}
          transition={{
            duration: 1.5, // Duration of one blink cycle
            repeat: Infinity, // Repeat forever
          }}
        />
      }

    </Wrapper>
  )
}

export default LudoBoardScreen