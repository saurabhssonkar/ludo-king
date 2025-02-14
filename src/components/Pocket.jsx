import React from 'react'
import { Colors } from '../constants/Colors'
import { color } from 'framer-motion'
import { Pile } from './Pile'
import { useDispatch } from 'react-redux'
import { unfreezDice, updatePlayerPieceValue } from '../redux/reducers/gameSlice'
import { startingPoint } from '../helper/PlotData'

const Pocket = ({ color, player, data }) => {
    const dispatch = useDispatch();
    const handlePress = async (value) => {
        let playerNo = value?.id[0];
        switch (player) {
            case 'A':
                playerNo = 'player1'
                break;
            case 'B':
                playerNo = 'player2'
                break;
            case 'C':
                playerNo = 'player3'
                break;
            case 'D':
                playerNo = 'player4'
                break;
        }
        dispatch(updatePlayerPieceValue({
            playerNo:playerNo,
            pieceId:value.id,
            pos:startingPoint[parseInt(playerNo.match(/\d+/)[0],10)-1],
            travelCount:1,
        }))
        dispatch(unfreezDice());

    }

    return (
        <div className='border-2 h-full w-2/5  flex justify-center items-center' style={{ backgroundColor: `${color}` }}>
            <div className='bg-white  h-[70%] w-[70%] p-4  border-2' style={{ borderColor: `${color}` }}>
                <div className='w-full h-[40%] justify-between items-center flex flex-row'>
                    <Plot pieceNo={0}  data={data} onPress={handlePress} player={player}
                        color={color} />
                    <Plot pieceNo={1}  data={data} onPress={handlePress} player={player}
                        color={color} />

                </div>
                <div className='w-full h-[40%] justify-between mt-3 items-center flex flex-row'>
                    <Plot pieceNo={2}   data={data} onPress={handlePress} player={player}
                        color={color} />
                    <Plot pieceNo={3} data={data} onPress={handlePress} player={player}
                        color={color} />

                </div>
            </div>
        </div>
    )
}
const Plot = ({ pieceNo, data, onPress,player, color }) => {
    return (
        <div className='h-[100%] w-[18%] rounded-full' style={{ backgroundColor: color }}>
            {data && data[pieceNo]?.pos===0 &&(           
                 <Pile color={color} player={player} onPress={()=>onPress(data[pieceNo])} />
            )}

        </div>

    )
}

export default React.memo(Pocket)