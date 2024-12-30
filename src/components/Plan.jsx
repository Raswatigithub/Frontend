import React from 'react'
import Navbar from './Navbar'

const Plan = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1 >
        <p className='m-20 text-3xl text-center font-bold'>Plans for every level of ambition
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
         With insight comes opportunity,We'll help you trade and invest better from the get-go
          </p>
        </p>
        
      </h1>
    <div className='m-20 flex flex-row'>
    
      <div>
      {/* <h1 className='m-10 '>Plans for every level of ambition</h1> */}
      <div className=" card glass w-96">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/flat-design-india-food-market-illustration_52683-94753.jpg?t=st=1735214671~exp=1735218271~hmac=df941bb91a1783c1d7c65dab74fbc7daedd37ee8976b210cd14e55e1f816161f&w=740"
      alt="offer" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Basic Plan <p className='text-3xl'>₹1000 
    </p> </h2>
    <h3 className='badge badge-primary'> Features</h3>
    <p>
    <ul className="list-disc">
  <li><a>The charts that it all</a></li>
  <li><a>World wide market data coverage</a></li>
  <li><a>Highly versatile screeners </a></li>
</ul>
    </p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn btn-block">Start now!</button>
    </div>
  </div>
</div>
        </div>



        <div>
        <div className="m-10 card glass w-96">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/supermarket-cashier-cartoon-illustration_1284-17315.jpg?t=st=1735214758~exp=1735218358~hmac=052ce6dd94e7e7d5f2bedea24b484d5a157cf115014457c5fa66216b30da445b&w=740"
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Pro Plan <p className='text-3xl'>₹2500 
    </p> </h2>
    <h3 className='badge badge-primary'> Everything in basic,plus</h3>
    <p>
    <ul className="list-disc">
  <li><a>5 indicators per charts</a></li>
  <li><a>2 charts in one window</a></li>
  <li><a>10 server-sode alerts </a></li>
  <li><a>Ad-free </a></li>
  <li><a>Volume profile indicatores </a></li>
  <li><a>custome time intervals </a></li>
  <li><a>Multiple enhance watchlist </a></li>

</ul>
    </p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn btn-block">Start now!</button>
    </div>
  </div>
</div>


        </div>

        <div>
        <div className="card glass w-96">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/gradient-cost-living-infographic_52683-142564.jpg?t=st=1735214943~exp=1735218543~hmac=4ec50c4ea1427dec2a0f4d0ca5b3ccb5ef23bf65270ce714dec05120acfa9de0&w=740"
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Pro Plan <p className='text-3xl'>₹5000 
    </p> </h2>
    <h3 className='badge badge-primary'> The complete package,with:</h3>
    <p>
    <ul className="list-disc">
    <li><a>Ad-free </a></li>
  <li><a>55 indicators per charts</a></li>
  <li><a>8 charts in one window</a></li>
  <li><a>400 server-sode alerts </a></li>
  <li><a>Second-based intervals</a></li>
  <li><a>Alerts that don't expire </a></li>
  <li><a>2x more data on charts(10k bars) </a></li>
  <li><a>Publishing invite-only indicators</a></li>

</ul>
    </p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn btn-block">Start now!</button>
    </div>
  </div>
</div>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Plan