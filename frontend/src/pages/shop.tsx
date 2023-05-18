import ProductShop from "@/components/Home/productShop";
import Image from "next/image";
import React from "react";

function Shop() {
  return (
    <div>
      <div className="container max-w-7xl m-auto px-2">
        {/* Banner */}
        <div className="w-full h-52 my-4">
          <img
            className="w-full h-full object-left md:object-cover "
            src="/assets/images/demos/demo-4/bg-1.jpg"
            alt=""
          />
        </div>

        {/* filter and products */}
        <div className="flex flex-col lg:flex-row-reverse">
          {/* product ggrid */}
          <div className=" ">
            <ProductShop />
          </div>

          {/* filter */}
          <div className="grow w-full lg:w-3/12 ">
            <div className="flex justify-between items-center h-20 border-b-2 ">
              <h1>Filters</h1>
              <h1 className="pr-2 text-siteSecondaryColor text-sm">clear all</h1>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
