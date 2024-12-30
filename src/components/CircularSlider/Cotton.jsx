import React from 'react';

const Cotton = () => {
  return (
    <div>
      <div className="card bg-gradient-to-r from-cyan-200 to-blue-100 shadow-xl hover:scale-105 transform duration-300 dark:from-cyan-700 dark:to-blue-500">
        <figure className="relative">
          {/* <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pcHFigMqZxinQygrrVqScAHaFj%26pid%3DApi&f=1&ipt=5fffcc97bbb053367737d842c1f5e6e68d37d1ff78dcf1fa21f2432d38b5fa0c&ipo=images"
            alt="Cotton"
            className="w-full h-52 object-cover rounded-t-lg"
          /> */}
          {/* <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            Trending
          </div> */}
        </figure>
        <div className="card-body p-6 text-center">
          <h2 className="text-centrecard-title text-2xl font-bold mb-2">
            Cotton
            <div className="ml-3 badge bg-green-500 text-white p-2 rounded-lg">
              +42.22
            </div>
          </h2>
          <p className="border-t border-gray-300 dark:border-gray-700 font-bold text-2xl  text-xl  dark:text-gray-200">
            32,342.30 <span className="text-sm font-light">INR</span>
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
          The cotton market is highly dynamic, influenced by agricultural, industrial, and economic factors.
          <br /> Here's an in-depth look at the current state of the cotton market
          </p>
          <div className="text-centercard-actions mt-4">
            <button className="rounded-full border-2 px-6 py-2 text-sm font-medium text-blue-700 bg-yellow-300 hover:bg-yellow-400 dark:text-white dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotton;
