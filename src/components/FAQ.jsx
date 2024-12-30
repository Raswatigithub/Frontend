import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const FAQ = () => {
  return (
    <>
    <Navbar/>
    <div>
        <div>
        <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default FAQ