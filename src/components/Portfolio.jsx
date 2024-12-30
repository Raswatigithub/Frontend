import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div>
        <div className=" pt-12 relative">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
             
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden mt-16">
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"></label>
              <ul className="text-xl menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-16">
              
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
