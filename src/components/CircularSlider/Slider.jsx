import React, { useState } from 'react';
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';

import image1 from '../../assets/gold.jpg';
import image2 from '../../assets/aluminium.jpg';
import image3 from '../../assets/cotton.jpg';
import image4 from '../../assets/crudeoil.jpg';
import image5 from '../../assets/wheat.jpg';
import image6 from '../../assets/oil.jpg';

import CrudOil from './CrudOil';
import Alumininum from './Aluminium';
import Cotton from './Cotton';
import Oil from './Oil';
import Gold from './Gold';
import Wheat from './Wheat';

const Sliders = () => {
  const [focusElement, setFocusElement] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6];
  const info = [<Gold />, <Alumininum />, <Cotton />, <CrudOil />, <Wheat />, <Oil />];

  return (
    <div className="m-10 max-w-screen-2xl container mx-auto md:px-20 px-4 py-5">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-6">
        {/* Slider Section */}
        <div className="  w-full md:w-2/3 flex justify-center items-center">
          <FancyCarousel 
            images={images} 
            setFocusElement={setFocusElement} 
            carouselRadius={window.innerWidth < 768 ? 140 : 200}
            peripheralImageRadius={window.innerWidth < 768 ? 70 : 100}
            centralImageRadius={window.innerWidth < 768 ? 110 : 150}
            focusElementStyling={{ border: '2px solid #ba4949' }}
            // autoRotateTime={5}
          />
        </div>

     
        <div>
          {info[focusElement] || (
            <p className="text-gray-500">
              Select an item to view details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sliders;
