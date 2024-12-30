import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import StockCard from '../components/StockCard'
import Indices from '../components/Indices'
import Sliders from '../components/CircularSlider/Slider'
import Plan from '../components/Plan'
// import News from '../components/News'
// import Support from '../components/Support'
// import CompleteData from '../components/CompleteData'
// import Card from '../components/card'

const Home = () => {
  return (
    <>
     
  <Navbar/>
   <Banner/>  
    <Indices/>
   {/*<StockCard/> */}
   <br></br>
   <Sliders/>
   
  {/* <Card/> */}
   <Footer/>
    </>
  )
}

export default Home