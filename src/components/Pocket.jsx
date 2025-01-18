import React from 'react'
import { Colors } from '../constants/Colors'
import { color } from 'framer-motion'
import { Pile } from './Pile'

const Pocket = ({ color, player }) => {
    console.log(color)

    return (
        <div className='border-2 h-full w-2/5  flex justify-center items-center' style={{ backgroundColor: `${color}` }}>
            <div className='bg-white  h-[70%] w-[70%] p-4  border-2' style={{ borderColor: `${color}` }}>
                <div className='w-full h-[40%] justify-between items-center flex flex-row'>
                    <Plot pieceNo={0} player={player}
                    color = {color} />
                     <Plot pieceNo={1} player={player}
                    color = {color} />

                </div>
                <div className='w-full h-[40%] justify-between mt-3 items-center flex flex-row'>
                    <Plot pieceNo={0} player={player}
                    color = {color} />
                     <Plot pieceNo={1} player={player}
                    color = {color} />

                </div>
            </div>
        </div>
    )
}
const Plot = ({pieceNo,player,color})=>{
    return(
        <div className='h-[100%] w-[18%] rounded-full' style={{backgroundColor:color}}>
            <Pile color={color} player={player}/>

        </div>

    )
}

export default React.memo(Pocket)