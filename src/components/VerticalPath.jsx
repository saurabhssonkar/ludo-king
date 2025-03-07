import React,{useMemo} from 'react'
import Cell from './Cell';

const VerticalPath = ({cells,color}) => {

    const groupCells = useMemo(()=>{
        console.log("cell",cells)
        const groups = [];
        for(let i=0;i<cells.length;i+=3){
            groups.push(cells.slice(i,i+3))

        }
        return groups;
    },[cells]);
    console.log("groupcel",groupCells)
   
    
    console.log("groupcel", groupCells);
    


  return (
    <div className=' flex flex-row items-center w-[20%] h-full '>
        <div className=' flex flex-col w-full h-full'>
         {groupCells.map((group,groupIndex)=>(
            <div className=' flex flex-row w-full h-[16.7%]' key={groupIndex}>
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

export default React.memo(VerticalPath);