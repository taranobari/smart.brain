import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
const Logo=()=>{
    return(
       <div className='logo'>
           <Tilt className='tilt'  >
            <div className='tilt-inner'>
            <img className='img' alt='logo' src={brain}></img>
    
            </div>
           </Tilt>

       </div>
    )
}
export default  Logo