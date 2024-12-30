import React from 'react'


const Indices = () => {
 
  return (
    <div className='m-5 p-5 text-center  font-semibold text-black-700 mb-5 dark:bg-slate-900 dark:text-white font'>
     <h1 className='font-bold text-3xl'>
    Indices
    <p className='border-t border-gray-300 dark:border-gray-700'></p>
     </h1>
   
    <div className='m-10 dark:bg-slate-900 dark:text-black flex flex-row '>

   <div className="m-3 p-5 bg-gray-100 rounded-lg shadow-lg">
  
  <h2 className="text-center text-xl font-semibold text-gray-700 mb-5">Market</h2>

  <div className="overflow-x-auto">
    <table className="border-separate border-spacing-2 bg-slate-200 w-full rounded-lg">
    
      <thead className="bg-slate-300">
        <tr>
          <th className="px-4 py-2">Index</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Change</th>
        </tr>
      </thead>

      
      <tbody>
        <tr className="hover:bg-gray-100">
          
          <td className="px-4 py-2">Nifty Bank</td>
          <td className="px-4 py-2">51233.00</td>
          <td className="px-4 py-2 text-red-500 font-semibold">-84.60</td>
        </tr>
        <tr className="hover:bg-gray-100">
         
          <td className="px-4 py-2">BSE Sensex</td>
          <td className="px-4 py-2">78472.87</td>
          <td className="px-4 py-2 text-red-500 font-semibold">-67.30</td>
        </tr>
        <tr className="hover:bg-gray-100">
          
          <td className="px-4 py-2">Nifty 50</td>
          <td className="px-4 py-2">2372.65</td>
          <td className="px-4 py-2 text-red-500 font-semibold">-25.80</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="m-5 p-5 bg-gray-100 rounded-lg shadow-lg">
  
  <h2 className="text-center text-xl font-semibold text-gray-700 mb-5">Commodities</h2>

  <div className="overflow-x-auto">
    <table className="border-separate border-spacing-2 bg-slate-200 w-full rounded-lg">
    
      <thead className="bg-slate-300">
        <tr>
          <th className="px-4 py-2">Commodity</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Change</th>
        </tr>
      </thead>

      
      <tbody>
        <tr className="hover:bg-gray-100">
          
          <td className="px-4 py-2">Gold</td>
          <td className="px-4 py-2">76,243.00</td>
          <td className="px-4 py-2 text-red-500 font-semibold">-27.00</td>
        </tr>
        <tr className="hover:bg-gray-100">
         
          <td className="px-4 py-2">Sliver</td>
          <td className="px-4 py-2">89,360.00	</td>
          <td className="px-4 py-2 text-green-500 font-semibold">34.00	</td>
        </tr>
        <tr className="hover:bg-gray-100">
          
          <td className="px-4 py-2">Crudeoil</td>
          <td className="px-4 py-2">5,971.00	</td>
          <td className="px-4 py-2 text-red-500 font-semibold">-9.00	</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="m-5 p-5 bg-gray-100 rounded-lg shadow-lg">
  
  <h2 className="text-center text-xl font-semibold text-gray-700 mb-5">Currencies</h2>

  <div className="overflow-x-auto">
    <table className="border-separate border-spacing-2 bg-slate-200 w-full rounded-lg">
    
      <thead className="bg-slate-300">
        <tr>
          <th className="px-4 py-2">Currency</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Change</th>
        </tr>
      </thead>

      
      <tbody>
        <tr className="hover:bg-gray-100">
          
          <td className="px-4 py-2">EURINR </td>
          <td className="px-4 py-2">88.5900	</td>
          <td className="px-4 py-2 text-red-500 font-semibold">-0.00	</td>
        </tr>
        <tr className="hover:bg-gray-100">
         
          <td className="px-4 py-2">JPYINR </td>
          <td className="px-4 py-2">54.3875	</td>
          <td className="px-4 py-2 text-red-500 font-semibold">-0.04	</td>
        </tr>
        <tr className="hover:bg-gray-100">
          
          <td className="px-4 py-2">GBPINR</td>
          <td className="px-4 py-2">106.8100	</td>
          <td className="px-4 py-2 text-red-500 font-semibold">-0.12	</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
   
  </div>
  </div>
  )
}

export default Indices