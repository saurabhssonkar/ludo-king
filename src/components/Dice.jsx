import React, { useEffect, useRef, useState } from 'react'
import { BackzgroundImage } from '../helper/GetIcon'
import Lottie from "lottie-react";
import diceRoll from '../../public/assets/animation/diceroll.json'
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPlayerChance, selectDiceNo, selectDiceRolled } from '../redux/reducers/gameSelector';
import { enableCellSelection, enablePileSelection, updateDiceNo, updatePlayerChance } from '../redux/reducers/gameSlice';
import { playSound } from '../helper/SoundUtility';

const Dice = ({ color, rotate, player,data}) => {
    const dispatch = useDispatch();
    const currentPlayerChance = useSelector(selectCurrentPlayerChance);
    const isDiceNo = useSelector(selectDiceNo);
    const isDiceRolled = useSelector(selectDiceRolled)
    const playerPieces = useSelector(state => state.game[`player${currentPlayerChance}`]);
    console.log("palyer", player, currentPlayerChance,data)

    const pileIcon = BackzgroundImage.GetImage(color)
    const diceIcon = BackzgroundImage.GetImage(isDiceNo);
    const arrowAnim = useRef(null);
    const [diceRolling, setDiceRolling] = useState(false);

  const delay = ms=>new Promise(resolve=> setTimeout(resolve,ms))
    const handleDicePress =async()=>{
        // const newDiceNo = Math.floor(Math.random()*6)+1;
        const newDiceNo = 6;

        playSound("dice_roll");
        setDiceRolling(true);
        await(delay(800));
        dispatch(updateDiceNo({diceNo:newDiceNo}));
        setDiceRolling(false);

        const isAnyPieceAlive = data?.findIndex(i=> i.pos !=0 && i.pos != 57);
        const isAnyPieceLocked = data?.findIndex(i=>i.pos ==0);

        if(isAnyPieceAlive ==-1){
            if(newDiceNo==6){
                dispatch(enablePileSelection({playerNo:player}))
            }else{
                let chancePlayer = player+1;
                if(chancePlayer>4){
                    chancePlayer =1;
                }
                await delay(600);
                dispatch(updatePlayerChance({chancePlayer:chancePlayer}))
            }
        }else{
            const canMove = playerPieces.some(pile => pile.travelCount + newDiceNo <=57 && pile.pos !=0);
            if((!canMove && newDiceNo==6 && isAnyPieceLocked ==-1) || (!canMove && newDiceNo != 6 && isAnyPieceLocked !=-1) || (!canMove && newDiceNo !=6 && isAnyPieceLocked ==-1) ){
                let chancePlayer = player+1;
                if(chancePlayer>4){
                    chancePlayer =1;
                }
                await delay(600);
                dispatch(updatePlayerChance({chancePlayer:chancePlayer}));
                return;

            }
            if(newDiceNo==6){
                enablePileSelection({playerNo:player})
            }
            dispatch(enableCellSelection({playerNo:player}))
        }

    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            transform: `scaleX(${rotate === 1 ? -1 : 1})`,

        }}>

            <div className='bg-gradient-to-r from-[#0052be] via-[#5f9fcb] to-[#97c6c9] 
                  h-10 w-10   justify-center items-center'>
                <div className='border-2 border-r-0 border-[#f0ce2c]  justify-center items-center '>
                    <img src={pileIcon} />

                </div>
                <div>

                </div>
            </div>


            <div className='bg-gradient-to-r from-[#aac8ab] via-[#aac8ab] to-[#aac8ab] 
                  h-14 w-14  border-l-2 border-[#f0ce2c] justify-center items-center  rounded-md'>
                <div className='bg-[#e8c0c1] border-2 rounded-md w-14 h-14  p-2
                 items-center justify-center '>
                    {currentPlayerChance === player && !diceRolling && (
                        <button className='w-9 h-9' >
                            <img src={diceIcon} 
                           
                            onClick={handleDicePress}
                            />
                        </button>

                    )}



                </div>
            </div>

            {currentPlayerChance === player && !isDiceRolled &&

                <motion.img
                    className="w-[50px] h-[30px]"
                    src="assets/images/arrow.png"
                    alt="Arrow"
                    animate={{
                        x: [0, 10, -10], // Moves the arrow left and right
                    }}
                    transition={{
                        duration: 1.2, // Animation duration
                        repeat: Infinity, // Loop the animation
                        ease: "easeInOut", // Easing function
                    }}
                />
            }

            {currentPlayerChance === player && diceRolling &&
                <Lottie
                    className='w-[88px] h-[88px] z-[99] -mt-[40px] absolute ml-[27px]'
                    animationData={diceRoll}
                    loop={true}
                    autoplay />

            }



        </div>
    )
}

export default React.memo(Dice)