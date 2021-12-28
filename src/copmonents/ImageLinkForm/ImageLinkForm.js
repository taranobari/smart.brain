import React from 'react'

const ImageLinkForm=({onInputCange})=>{
    return(
     <div>
         <div className='p'>
            <div>this magic brain will detect faces in your picturs.</div>
            <div>this magic brain will detect faces in your picturs.</div>
            <div>this magic brain will detect faces in your picturs.</div>
            <div>this magic brain will detect faces in your picturs.</div>
            
         </div>
         <div className='box'>
         <div class="input-container">
             <input className='input' onChange={onInputCange} placeholder='url' type=''></input>
            </div> 
             </div> 

             <div>
             <button className='btn'>Detect</button>
             </div>
             
     </div>
    )
}
export default  ImageLinkForm