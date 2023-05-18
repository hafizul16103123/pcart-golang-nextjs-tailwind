import React from 'react'
import ProductCard from './productCard'

function TrendingProductsSlider() {
  return (
    <div className="flex items-center justify-center w-full h-full py-10 sm:py-8 px-4">
    <div className="w-full relative flex items-center justify-center">
      <button
        aria-label="slide backward"
        className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
        id="prevTranding"
      >
        <svg
          className="dark:text-gray-900"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
        <div
          id="trendingProductsSlider"
          className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
        >
          {/* Product card */}
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
       
        </div>
      </div>
      <button
        aria-label="slide forward"
        className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        id="nextTranding"
      >
        <svg
          className="dark:text-gray-900"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
  )
}

export default TrendingProductsSlider
