import {
  faHeart,
  faCartPlus,
  faJetFighterUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ProductCardRecommended() {
  return (
    <div className=" group w-full flex flex-col ">
      {/* Product */}
      <div className="relative bg-white  hover:drop-shadow-lg m-2">
        {/* rounf circle */}
        <div className="absolute mt-4 ml-4 h-12 w-12 top-0 left-0 bg-blue-200 rounded-full">
          <p className="p-3">Top</p>
        </div>
        {/* cart quick view and wishlist */}
        <div className="absolute opacity-0  group-hover:opacity-100 group-hover:-translate-y-1 duration-500 mt-4 h-12 w-10 right-10 top-0  rounded-full">
          <a className="text-blue-300 bg-transparent" href="">
            <FontAwesomeIcon
              className="ml-1"
              icon={faHeart}
              style={{ fontSize: 40 }}
            />
          </a>
        </div>
        {/* cart and quick view */}
        <div className="flex absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 duration-500  top-72  w-full bg-gray-200 justify-between ">
          <a
            className="text-gray-700 bg-transparen py-2 pl-14 hover:text-siteColor"
            href=""
          >
            <FontAwesomeIcon
              className="ml-1"
              icon={faCartPlus}
              style={{ fontSize: 20 }}
            />
          </a>
          <span className="text-2xl opacity-50">|</span>

          <a
            className="text-gray-700 bg-transparent py-2 pr-14  hover:text-siteColor"
            href=""
          >
            <FontAwesomeIcon
              className="ml-1"
              icon={faJetFighterUp}
              style={{ fontSize: 20 }}
            />
          </a>
        </div>
        <div className="pb-5 w-full flex justify-center">
          <img
            src="assets/images/demos/demo-4/products/product-1.jpg"
            alt="black chair and white table"
            className="object-fill w-full"
          />
        </div>
        {/* product image and title */}
        <div className="flex flex-col px-5 pt-10 h-52">
          <p className="opacity-25 hover:opacity-50 text-sm duration-500">
            Laptops
          </p>
          <h1 className="text-lg hover:text-siteColor duration-500">
            MacBook Pro 13" Display, i5
          </h1>
          <p className="text-siteSecondaryColor ">$1,199.99</p>
          <div className="flex">
            {/* 5 stars */}
            <div className="flex">
              <p className=" text-3xl text-siteSecondaryColor">
                <FontAwesomeIcon
                  className="ml-0 pb-3"
                  icon={faStar}
                  style={{ fontSize: 10 }}
                />
              </p>
              <p className=" text-3xl text-siteSecondaryColor">
                <FontAwesomeIcon
                  className="ml-1 pb-3"
                  icon={faStar}
                  style={{ fontSize: 10 }}
                />
              </p>
              <p className=" text-3xl text-siteSecondaryColor">
                <FontAwesomeIcon
                  className="ml-1 pb-3"
                  icon={faStar}
                  style={{ fontSize: 10 }}
                />
              </p>
              <p className=" text-3xl text-siteSecondaryColor">
                <FontAwesomeIcon
                  className="ml-1 pb-3"
                  icon={faStar}
                  style={{ fontSize: 10 }}
                />
              </p>
              <p className=" text-3xl text-siteSecondaryColor">
                <FontAwesomeIcon
                  className="ml-1 pb-3"
                  icon={faStar}
                  style={{ fontSize: 10 }}
                />
              </p>
            </div>
            {/* review */}
            <p className="opacity-50 px-4"> ( 4 Reviews) </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardRecommended;
