import React from 'react'
import Marquee from "react-fast-marquee";

const Marque = () => {
    const ADS = 'YOUR ORDER, WE DELIVER'
  return (
 <div>
   <Marquee speed={100} style={{backgroundColor:'#EFB730', height:'4rem'}} className=' text-light'>
       <h1>{ADS} <span style={{backgroundColor:'#E07E1B', borderTopRightRadius:30, height:'4rem'}}>FOR FREE 🛒</span></h1>
   </Marquee>
    </div>
  )
}

export default Marque