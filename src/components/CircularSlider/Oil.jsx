import React from 'react';

const Oil = () => {
  return (
    <div>
      <div className="card bg-gradient-to-r from-cyan-200 to-blue-100 shadow-xl hover:scale-105 transform duration-300 dark:from-cyan-700 dark:to-blue-500">
        <figure className="relative">
          {/* <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DCUzaxC9eIKeZ_2_n3P6VAHaE7%26pid%3DApi&f=1&ipt=2e457e6b19cf0843190e83d56900bd588746fe9b865b48ae1e2bf1fabb4c0bb3&ipo=images"
            alt="Oil"
            className="w-full h-52 object-cover rounded-t-lg"
          /> */}
          {/* <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            Trending
          </div> */}
        </figure>
        <div className="card-body p-6 text-center">
          <h2 className="text-centercard-title text-2xl font-bold mb-2">
            Oil
            <div className="ml-3 badge bg-green-500 text-white p-2 rounded-lg">
              +23.22
            </div>
          </h2>
          <p className="border-t border-gray-300 dark:border-gray-700 font-bold text-2xl  text-xl  dark:text-gray-200 ">
            23,732.30 <span className="text-sm font-light">INR</span>
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
          Crude oil is the backbone of the global energy market, serving as a critical input for transportation fuels, industrial processes, and petrochemical products. <br /> Its price have far-reaching economic and geopolitical implications.
          </p>
          <div className="text-centercard-actions mt-4">
           <center> <button className=" flex justify-center rounded-full border-2 px-6 py-2 text-sm font-medium text-blue-700 bg-yellow-300 hover:bg-yellow-400 dark:text-white dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-all duration-300">
              Read More
            </button></center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oil;
