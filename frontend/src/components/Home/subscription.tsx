import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../utils/atms/button'

function Subscription() {
  return (
    <div className="container max-w-7xl relative m-auto py-5">
    <img
      className="object-cover h-60"
      src="/assets/images/demos/demo-4/bg-5.jpg"
      alt=""
    />
    <div className="absolute top-10 m-auto w-full flex flex-col gap-4 p-5">
      <h1 className="text-2xl text-white text-center font-bold">
        Get The Latest Deals
      </h1>
      <p className=" text-sm text-center text-white opacity-75">
        and receive <span className="font-bold">$20 coupon</span> for first
        shopping
      </p>
      {/* Search field  for mobile*/}
      <div className="relative grid grid-cols-2 justify-items-center gap-4 md:hidden">
        <div className="relative col-span-2 md:col-span-1 border rounded-full bg-white h-10 w-full m-auto">
          <input
            className="absolute ml-10 focus:outline-none left-2 top-2 text-sm"
            type="text"
            placeholder="Enter your Email Address"
          />
        </div>
        <Button
          tClass="col-span-2 md:col-span-1 mb-5"
          btnText="Subscribe"
        />
      </div>
      {/* Search field  for web*/}

      <div className="hidden md:flex relative justify-center">
        <div className="relative rounded-l-full bg-white h-10 w-[400px] ">
          <input
            className="absolute ml-10 focus:outline-none left-2 top-2 text-sm"
            type="text"
            placeholder="Enter your Email Address"
          />
        </div>
        <div className="flex justify-start">
          <button className="bg-blue-500 text-white rounded-r-full p-2 text-sm h-10 w-[140px]">
            Subscribe
            <FontAwesomeIcon
              className="ml-2"
              icon={faArrowRight}
              style={{ fontSize: 10 }}
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Subscription
