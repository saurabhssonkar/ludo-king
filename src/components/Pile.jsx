import React from 'react'
import { BackzgroundImage } from '../helper/GetIcon'
import { motion } from 'framer-motion'

export const Pile = ({ color, player }) => {
  const pileImg = BackzgroundImage.GetImage(color)
  return (

    <div className=' continer flex items-center self-center justify-center flex-1'>
      {/* <button > */}
      <div className='w-4 h-4 absolute mt-3 rounded-2xl border-2 border-black justify-center items-center '>
        <div>
          <motion.div
            animate={{
              rotate: [0, 360], // Rotates from 0 to 360 degrees
            }}
            transition={{
              duration: 1, // Duration of 2 seconds
              repeat: Infinity, // Repeats indefinitely
              ease: 'linear', // Smooth linear animation
            }}
          >
            <svg height={18} width={18}>
              <circle
                cx={9}
                cy={9}
                r={8}
                stroke="white"
                strokeDasharray="4,4"
                strokeDashoffset="0"
                fill="transparent"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      <img src={pileImg} className='w-7 h-7 absolute' />
      {/* </button> */}
    </div>
  )
}
