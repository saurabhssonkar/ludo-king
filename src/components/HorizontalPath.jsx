
import React,{useMemo} from 'react'
import Cell from './Cell';

const HorizontalPath = ({cells,color}) => {

    const groupCells = useMemo(()=>{
        console.log("cell",cells)
        const groups = [];
        for(let i=0;i<cells.length;i+=6){
            groups.push(cells.slice(i,i+6))

        }
        return groups;
    },[cells]);
    console.log("groupcel",groupCells)
   
    
    console.log("groupcel", groupCells);
    


  return (
    <div className=' flex flex-row items-center w-[40%] h-full '>
        <div className=' flex flex-col w-full h-full'>
         {groupCells.map((group,groupIndex)=>(
            <div className=' flex flex-row w-[100%] h-[33.3%]' key={groupIndex}>
                {group.map((id,index)=>(
                    <Cell key={index} cell={true}
                    id={id} color={color}/>
                ))}


            </div>
         ))}

        </div>

    </div>
  )
}

export default React.memo(HorizontalPath);