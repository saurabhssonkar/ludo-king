import React, { useCallback, useMemo, useState } from 'react'
import { BackzgroundImage } from '../helper/GetIcon'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectCellSelection, selectDiceNo, selectPocketPileSelection } from '../redux/reducers/gameSelector'

export const Pile = ({ color, cell, player, onPress, pieceId }) => {
  const pileImg = BackzgroundImage.GetImage(color)
  const currentPlayerPileSelection = useSelector(selectPocketPileSelection);
  const currentPlayerCellSelection = useSelector(selectCellSelection);

  const diceNo = useSelector(selectDiceNo);
  const playerPieces = useSelector(state => state.game[`player${player}`]);

  const isPileEnable = useMemo(() => player === currentPlayerPileSelection, [player, currentPlayerCellSelection]
  );
  const isCellEnabled = useMemo(()=> player === currentPlayerCellSelection,[player,currentPlayerCellSelection]);

  const isForwardable = useCallback(()=>{
    const piece = playerPieces?.find(item=>item.id === pieceId)
    return piece && piece.travelCount+diceNo <= 57;
  },[playerPieces,pieceId,diceNo])



  return (

    <div className=' continer flex items-center self-center justify-center flex-1'>
      <button onClick={onPress} 
      disabled={!(cell ? isCellEnabled && isForwardable(): isPileEnable)}
      >
      <div className='w-4 h-4 absolute -ml-1  rounded-2xl border-2 border-black justify-center items-center '>
        {cell ? (isCellEnabled && isForwardable()): isPileEnable ?(
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
  
        ):null}
      
         
      </div>

      <img src={pileImg} className='w-7 h-7 -mt-3 -ml-2.5 absolute' />
      </button>
    </div>
  )
}
