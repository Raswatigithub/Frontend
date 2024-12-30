import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <div>
      <footer className="footer footer-center bg-stone-200 text-black p-10 dark:bg-slate-800 dark:text-white flex flex-col lg:flex-row lg:justify-between gap-10">
       
        <div className="lg:w-1/4">
          <a className="text-3xl font-bold">
            #CMD<span className="text-yellow-500">A</span>
          </a>
          <p className="text-sm mt-2">
            Better Strategy With Quality Business
          </p>
          <p className="italic mt-2 text-gray-600 dark:text-gray-400">
            "Transforming ideas into impactful realities."
          </p>
        </div>

        
        <nav className="lg:w-1/4">
          <h2 className="text-2xl mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/portfolio" className="link link-hover">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/equityhub" className="link link-hover">
                Equity Hub
              </a>
            </li>
            <li>
              <a href="/marketData" className="link link-hover">Market Data</a>
            </li>
            <li>
              <a href="listify" className="link link-hover">WatchList</a>
            </li>
            <li>
              <a href="/news" className="link link-hover">News</a>
            </li>
            <li>
              <a href="/about" className="link link-hover">About Us</a>
            </li>
          </ul>
        </nav>

        
        <nav className="lg:w-1/4">
          <h2 className="text-2xl mb-4">Support</h2>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="link link-hover">FAQ</a>
            </li>
            <li>
              <a href="/support" className="link link-hover">Support</a>
            </li>
            <li>
              <a href="#" className="link link-hover">Terms & Conditions</a>
            </li>
          </ul>
        </nav>

        <aside className="lg:w-1/4">
          <h2 className="text-2xl mb-4">Contact Info</h2>
          <div>
            <p className="flex items-start">
              <FaLocationDot className="text-lg mr-2" />
              Ground, 2nd & 3rd floor, Plot no 41 & 42, <br />
              Tejaswini Housing Society, <br />
              Baner, Pune, Maharashtra 411045
            </p>
            <p className="flex items-center mt-2">
              <MdEmail className="text-lg mr-2" />
              Email:{" "}
              <a href="mailto:admin@aycanalytics.com" className="link link-hover">
                admin@aycanalytics.com
              </a>
            </p>
            <p className="flex items-center mt-2">
              <FaPhoneAlt className="text-lg mr-2" />
              Support: +91 9231448912
            </p>
          </div>
        </aside>

     
       <div className="lg:w-1/4 bg-gray-100 dark:bg-gray-700 p-5 rounded-lg">
          <h2 className="text-2xl mb-4">Subscribe to our Newsletter</h2>
          <p className="text-sm mb-4">
            Stay updated with the latest news, insights, and strategies.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered dark:bg-gray-800"
            />
            <button className="btn bg-yellow-500 text-white hover:bg-yellow-600">
              Subscribe 
            </button>
          </form>
        </div>

</footer>
        
     

     
      <div className="border-t border-gray-300 dark:border-gray-700 py-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by #CMDA</p>
      </div>
     
    </div>
    
    </div>
  );
};

export default Footer;
