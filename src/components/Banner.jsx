import React from 'react'
import Login from './Login'



const Banner = () => {
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10' >
        <div className='order-2 w-full md:w-1/2  mt-12 md:mt-32'> 
          <div className='space-y-12'>
          <h1 className='text-4xl font-bold'>
          Hello, welcome to {""} 
          <span className='text-yellow-500'>
          Capital Market Data Analytics!!!</span>
          </h1> 
          <p>
          Franklin Templeton - "Bulls are born out of pessimism, grow on skepticism, mature on optimism and die in euphoria"
           </p>
          
          </div>
          <br />
          <div >
<br />

<button className="btn btn-wide btn-warning" onClick={()=>document.getElementById("my_modal_3").showModal()} >Let's Invest....</button>
<Login/>

          </div>
        </div>
        <div className='order-1 w-full md:w-1/2'> 
        <img src="/image1.png" alt='image'></img>
         </div>
        

    </div>
   </>
  )
}

export default Banner