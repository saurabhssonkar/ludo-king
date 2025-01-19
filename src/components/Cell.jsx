import React, { useMemo } from 'react'
import { Pile } from './Pile'
import { Colors } from '../constants/Colors'
import { ArrowSpot, SafeSpots, StarSport } from '../helper/PlotData'


const Cell = ({index,cell,id,color}) => {
    const isSafeSpot = useMemo(()=>
        SafeSpots.includes(id),[id]);
    console.log("id",isSafeSpot)

    const isStarSpot = useMemo(()=> StarSport.includes(id),[id]);
    const isArrowSpot = useMemo(()=>ArrowSpot.includes(id),[id]);
  return (
    <div className=' flex w-full h-full justify-center items-center' style={{backgroundColor:isSafeSpot ? color:'white', borderWidth:0.1, borderColor:Colors.borderColor}} > 
    {isStarSpot && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
}
{isArrowSpot && 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" 

  style={{
    transform: `rotate(${
      id === 38 ? '90deg' : id === 25 ? '0deg' : id === 51 ? '180deg' : '-90deg'
    })`,
  }}
  
  >
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" className='text-blue-600' />
</svg>
}
<p className='absolute  z-[99]'>{id}</p>


    {/* <Pile cell={true} player={2} onPress={()=>{}} color={Colors.green}/> */}
    </div>
  )
}

export default React.memo(Cell)