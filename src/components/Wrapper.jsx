// import React from 'react'
// import bg from '../../public/assets/images/bg.jpg'

// const Wrapper = ({childern , style}) => {
//   return (
//     <img className='object-cover flex-1 justify-center items-center' src={bg}/>
   
//   )
// }

// export default Wrapper
import React from "react";

const Wrapper = ({ children, style }) => {
  return (
    <div
      className="flex justify-center items-center h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/bg.jpg')", // Replace with the correct path
        ...style,
      }}
    >
      <div className="flex flex-row justify-center items-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
