import React, { useCallback, useMemo } from 'react'
import { Pile } from './Pile'
import { Colors } from '../constants/Colors'
import { ArrowSpot, SafeSpots, StarSport } from '../helper/PlotData'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentPosition } from '../redux/reducers/gameSelector'


const Cell = ({ index, cell, id, color }) => {
  const dispatch = useDispatch();

  const plottedPieces = useSelector(selectCurrentPosition);

  const isSafeSpot = useMemo(() =>
    SafeSpots.includes(id), [id]);
  console.log("id", isSafeSpot)

  const isStarSpot = useMemo(() => StarSport.includes(id), [id]);
  const isArrowSpot = useMemo(() => ArrowSpot.includes(id), [id]);

  const picesAtPosition = useMemo(() => {
    plottedPieces.filter(item => item.pos == id);

  }, [plottedPieces, id]);

  const handlePress = useCallback((playerNo, pieceId) => {
    // forwaord march token

  }, [dispatch, id])
  return (
    <div className=' flex w-full h-full justify-center items-center' style={{ backgroundColor: isSafeSpot ? color : 'white', borderWidth: 0.1, borderColor: Colors.borderColor }} >
      {isStarSpot && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
      }
      {isArrowSpot &&
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"

          style={{
            transform: `rotate(${id === 38 ? '90deg' : id === 25 ? '0deg' : id === 51 ? '180deg' : '-90deg'
              })`,
          }}

        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" className='text-blue-600' />
        </svg>
      }
      <p className='absolute  z-[99]'>{id}</p>


      {/* <Pile cell={true} player={2} onPress={()=>{}} color={Colors.green}/> */}
      {picesAtPosition?.map((piece, index) => {
        const playerNo = piece.id[0] === 'A' ? 1 :
          piece.id[0] === 'B' ? 2 :
            piece.id[0] === "C" ? 3 : 4
        const pieceColor = piece.id[0] === 'A' ? Colors.red : playerNo == 2 ? Colors.green : playerNo === 3 ? Colors.yellow : Colors.blue;

        return (
          <div key={piece.id}  style={{
            transform: `
              scale(${picesAtPosition.length === 1 ? 1 : 0.7}) 
              translateX(${picesAtPosition.length === 1 ? 0 : index % 2 === 0 ? -6 : 6}px) 
              translateY(${picesAtPosition.length === 1 ? 0 : index < 2 ? -6 : 6}px)
            `,
          }}>

            <Pile cell={true} player={playerNo} onPress={() => handlePress(playerNo, piece.id)}
              pieceId={piece.id}
              color={pieceColor} />

          </div>


        )
      })}
    </div>
  )
}

export default React.memo(Cell)