import React from 'react'
import SignUp from './components/SignUp'
import { Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import News from './components/News'
import Support from './components/Support'
import Plan from './components/Plan'
import Offer from './components/Offer'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'


const App = () => {
  return (<div className=' dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/plan' element={<Plan/>}/>
      <Route path='/offer' element={<Offer/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/faq' element={<FAQ/>}/>
    </Routes>
    
   </div>
  )
}

export default App