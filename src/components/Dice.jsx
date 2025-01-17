import React, { useEffect, useRef, useState } from 'react'
import { BackzgroundImage } from '../helper/GetIcon'
import Lottie from "lottie-react";
import diceRoll from '../../public/assets/animation/diceroll.json'
import { motion } from "framer-motion";

const Dice = ({ color, rotate, player, data }) => {
    console.log(rotate)

    const pileIcon = BackzgroundImage.GetImage(color)
    const diceIcon = BackzgroundImage.GetImage(6);
    const arrowAnim = useRef(null);
    const [diceRolling, setDiceRolling] = useState(false);

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

                    <button className='w-9 h-9'>
                        <img src={diceIcon} />
                    </button>

                </div>
            </div>

            {diceRolling &&

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

            {diceRolling &&
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