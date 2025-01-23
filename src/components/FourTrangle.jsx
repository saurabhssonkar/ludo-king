import React, { useState } from 'react'
import { Colors } from '../constants/Colors'
import Lottie from 'lottie-react'
import firework from '../../public/assets/animation/firework.json'


const FourTrangle = () => {
    const size = 100

    const [blast, setBlast] = useState(false);
    return (
        <div className='flex justify-center items-center  w-[20%] h-full border overflow-hidden bg-white' style={{ borderColor: Colors.borderColor }}>
            {blast &&
                <Lottie
                    className=' h-[15%] z-[99] absolute'
                    animationData={firework}
                    loop={true}
                    autoplay />
                }

            <svg height={size} width={size - 5}>
                <polygon
                    points={`0,0 ${size / 2},${size / 2} ${size },0`}
                    fill={Colors.yellow}
                />
                 <polygon
                    points={`${size},0 ${size}, ${size} ${size / 2} ${size / 2}`}
                    fill={Colors.blue}
                />
                <polygon
                    points={` 0 ${size} ${size/2}, ${size/2} ${size}, ${size}`}
                    fill={Colors.red}
                />
                 <polygon
                    points={`0,0 ${size/2}, ${size/2} 0, ${size}`}
                    fill={Colors.green}
                />
            </svg>


        </div>
    )
}

export default FourTrangle