import Button from "@/components/utils/atms/button";
import ProductCard from "@/components/utils/product/productCard";
import TrendingProductsSlider from "@/components/utils/product/trendingProductsSlider";
import { faGuilded } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCartPlus,
  faCodeCompare,
  faHeart,
  faList,
  faNotEqual,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Select from "react-select/dist/declarations/src/Select";

function Products() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <script defer src="/assets/js/youMayLikeSlider.js"></script>
      <div className="container max-w-7xl m-auto">
        <div className="grid grid-cols-1  md:grid-cols-2">
          {/* Product image galary */}
          <div className="flex flex-col lg:flex-row-reverse mb-10">
            {/* learge image */}
            <div className=" p-2 h-full">
              <img
                className=""
                src="/assets/images/products/single/1-big.jpg"
                alt=""
              />
            </div>
            {/* small image */}
            <div className=" flex lg:flex-col lg:w-72 gap-2 p-2">
              <div>
                <img
                  className=""
                  src="/assets/images/products/single/1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=""
                  src="/assets/images/products/single/1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=""
                  src="/assets/images/products/single/1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=""
                  src="/assets/images/products/single/1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col p-2 gap-2">
            <h1 className="text-2xl">Dark yellow lace cut out swing dress</h1>
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
            <p className="text-2xl text-siteColor">$84.00</p>
            <p className="text-lg opacity-75 mb-2">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing. Sed lectus.
            </p>
            {/* attribites */}
            <div className="flex gap-4">
              <span className="pt-3">Color:</span>
              <img
                className="border-2 p-1"
                src="/assets/images/products/single/1-thumb.jpg"
                alt=""
              />
              <img  src="/assets/images/products/single/2-thumb.jpg" alt="" />
            </div>
            <div className="flex my-2">
              <span className="pt-2 mr-4">Size:</span>
              <div>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select a size</option>
                  <option value="US">Small</option>
                  <option value="CA">Medium</option>
                  <option value="FR">Large</option>
                  <option value="DE">Extra Learge</option>
                </select>
              </div>
              <a
                className="pt-2 ml-12 hover:underline underline-offset-4 hover:text-siteColor"
                href=""
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faList}
                  style={{ fontSize: 15 }}
                />
                Size Guide
              </a>
            </div>
            {/* Qty button */}
            <div className="flex h-10 mb-4">
              <span className="pt-2">Qty:</span>
              <div className="border-2 mx-4 pt-2">
                <a className=" px-5 hover:text-siteColor" href="">
                  -
                </a>
                <span>10</span>
                <a className="px-5  hover:text-siteColor" href="">
                  +
                </a>
              </div>
            </div>
            {/* Add to cart button */}
            <button
              className={` text-siteColor border-2 border-siteColor hover:bg-siteColor hover:text-white duration-500 p-2 text-sm w-[140px]`}
            >
              <FontAwesomeIcon
                className="mr-2"
                icon={faCartPlus}
                style={{ fontSize: 15 }}
              />
              ADD TO CART
            </button>
            {/* wishlist and compare button */}
            <div className="flex mt-2">
              <a
                className=" hover:underline underline-offset-4 hover:text-siteColor"
                href=""
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faHeart}
                  style={{ fontSize: 15 }}
                />
                Add To WishList
              </a>

              <a
                className=" hover:underline underline-offset-4 hover:text-siteColor"
                href=""
              >
                <FontAwesomeIcon
                  className="mr-2 ml-2"
                  icon={faNotEqual}
                  style={{ fontSize: 15 }}
                />
                Add To Compare
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Description section */}
      <div className="continer mb-10 inline-block w-full">
        <div className="container max-w-7xl m-auto py-5 ">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {/* tab button */}
            <div className="col-span-2 lg:col-span-3 mb-4 ">
              <ul
                className="flex flex-wrap justify-center lg:justify-end -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li className="productTab mr-2" role="presentation">
                  <button
                    className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4 rounded-t-lg "
                    id="profile-tab"
                    data-tabs-target="#description"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Description
                  </button>
                </li>
                <li className=" productTab mr-2 " role="presentation">
                  <button
                    className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="dashboard-tab"
                    data-tabs-target="#additional_info"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Additional Information
                  </button>
                </li>
                <li className="productTab mr-2" role="presentation">
                  <button
                    className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="settings-tab"
                    data-tabs-target="#shipping_returns"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                  >
                    Shipping & Returns
                  </button>
                </li>
                <li role="presentation" className="productTab">
                  <button
                    className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="contacts-tab"
                    data-tabs-target="#reviews"
                    type="button"
                    role="tab"
                    aria-controls="contacts"
                    aria-selected="false"
                  >
                    Reviews (5)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* tab contents */}
          <div id="myTabContent" className="h-24 p-4">
            <div
              className="hidden p-4 rounded-sm bg-gray-50 dark:bg-gray-800 border-2"
              id="description"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <h1>Description</h1>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border-2"
              id="additional_info"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <h1>Additional Information</h1>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border-2"
              id="shipping_returns"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                eaque necessitatibus laudantium nihil fugit suscipit eveniet
                optio adipisci expedita tempore sunt iure, laborum quas error
                ullam consectetur, delectus consequuntur impedit? Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Excepturi beatae
                tenetur cupiditate quas provident voluptas, animi consequuntur,
                fugiat ratione voluptatibus blanditiis commodi ut at similique
                soluta quaerat ex nostrum molestiae! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Aspernatur assumenda eaque
                necessitatibus ipsum dolorem doloremque voluptates id quos,
                cupiditate sapiente cum asperiores voluptatibus mollitia ipsa
                natus consequatur vel magni reprehenderit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ab blanditiis vitae modi
                velit nemo quos beatae, provident fugit veniam tenetur rem
                cumque atque, nesciunt corporis illum, architecto assumenda
                exercitationem. Quidem?
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border-2"
              id="reviews"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <h1>Reviews</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl m-auto">
        <div className="flex items-center justify-center w-full h-full py-10 sm:py-8 px-4">
          {/* <div>
            <h1 className="h-10  text-2xl font-bold m-4 p-2">
              You May Also Like
            </h1>
          </div> */}
          <div className="w-full relative flex items-center justify-center">
            <button
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prevYouMayLike"
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
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
            <button
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="nextYouMayLike"
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
      </div>
    </div>
  );
}

export default Products;
