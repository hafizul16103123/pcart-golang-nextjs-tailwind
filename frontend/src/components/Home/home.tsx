import siteMetadata from "@/data/siteMetadata";
import {
  faArrowLeft,
  faArrowRight,
  faCartPlus,
  faCheck,
  faCheckToSlot,
  faCircleCheck,
  faHeart,
  faInfoCircle,
  faJetFighter,
  faJetFighterUp,
  faLifeRing,
  faRotateLeft,
  faRotateRight,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadSeo from "../seo/HeadSeo";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import ProductCard from "../utils/product/productCard";
import MultipleItemSlider from "../utils/product/multipleItemSlider";
import Button from "../utils/atms/button";
import ProductCardRecommended from "../utils/product/productCardRecommended";
import ProductRecommended from "./productRecommended";
import OfferSection from "./offerSection";
import Subscription from "./subscription";
import TrendingProductsSlider from "../utils/product/trendingProductsSlider";
<script defer src="/assets/js/slide.js"></script>;
function HomePage() {
  return (
    <>
      <script defer src="/assets/js/slider.js"></script>
      <div className=" bg-[#F6F7F9]">
        {/* SEOHEAD */}
        <HeadSeo
          title={`Your Awesome Title Here`}
          description={`Your description goes here on every page. 
                  Keep character count between 140 to 160 characters`}
          canonicalUrl={siteMetadata.siteUrl}
          ogTwitterImage={siteMetadata.siteLogoSquare}
          ogType={"website"}
        />
        {/* //top carousal */}
        <div className="container max-w-7xl m-auto pt-4">
          {/* carousel */}
          <div
            id="indicators-carousel"
            className="relative w-full"
            data-carousel="static"
          >
            <div className="relative h-[17.5rem] overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <div className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                  <Image
                    className="relative object-cover"
                    alt=""
                    src="/assets/images/demos/demo-4/slider/slide-1.png"
                    fill
                  />
                </div>
                <div className="relative flex flex-col top-[4%] left-[41%] md:top-[20%] md:left-[60%] space-y-2">
                  <p className="text-xl text-red-300">Deals and Promotions</p>
                  <h1 className="font-bold text-4xl md:text-5xl">
                    Beats by <br /> Dre Studio 3
                  </h1>
                  <h1>
                    <span className="">$349,95</span>
                    <span className="text-red-400 text-5xl font-bold ml-2">
                      $249,95
                    </span>
                  </h1>
                  <Button btnText="Shop More" />
                </div>
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <div className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                  <Image
                    className="relative object-cover"
                    alt=""
                    src="/assets/images/demos/demo-4/slider/slide-2.png"
                    fill
                  />
                </div>
                <div className="relative flex flex-col top-[4%] left-[41%] md:top-[20%] md:left-[60%] space-y-2">
                  <p className="text-xl text-red-300">Deals and Promotions</p>
                  <h1 className="font-bold text-4xl md:text-5xl">
                    Beats by <br /> Dre Studio 3
                  </h1>
                  <h1>
                    <span className="">$349,95</span>
                    <span className="text-red-400 text-5xl font-bold ml-2">
                      $249,95
                    </span>
                  </h1>
                  <button className="bg-blue-500 text-white rounded-full p-2 text-sm w-[140px]">
                    Shop More
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faArrowRight}
                      style={{ fontSize: 10 }}
                    />
                  </button>
                </div>
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <div className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                  <Image
                    className="relative object-cover"
                    alt=""
                    src="/assets/images/demos/demo-4/slider/slide-1.png"
                    fill
                  />
                </div>
                <div className="relative flex flex-col top-[4%] left-[41%] md:top-[20%] md:left-[60%] space-y-2">
                  <p className="text-xl text-red-300">Deals and Promotions</p>
                  <h1 className="font-bold text-4xl md:text-5xl">
                    Beats by <br /> Dre Studio 3
                  </h1>
                  <h1>
                    <span className="">$349,95</span>
                    <span className="text-red-400 text-5xl font-bold ml-2">
                      $249,95
                    </span>
                  </h1>
                  <button className="bg-blue-500 text-white rounded-full p-2 text-sm w-[140px]">
                    Shop More
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faArrowRight}
                      style={{ fontSize: 10 }}
                    />
                  </button>
                </div>
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <div className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                  <Image
                    className="relative object-cover"
                    alt=""
                    src="/assets/images/demos/demo-4/slider/slide-2.png"
                    fill
                  />
                </div>
                <div className="relative flex flex-col top-[4%] left-[41%] md:top-[20%] md:left-[60%] space-y-2">
                  <p className="text-xl text-red-300">Deals and Promotions</p>
                  <h1 className="font-bold text-4xl md:text-5xl">
                    Beats by <br /> Dre Studio 3
                  </h1>
                  <h1>
                    <span className="">$349,95</span>
                    <span className="text-red-400 text-5xl font-bold ml-2">
                      $249,95
                    </span>
                  </h1>
                  <button className="bg-blue-500 text-white rounded-full p-2 text-sm w-[140px]">
                    Shop More
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faArrowRight}
                      style={{ fontSize: 10 }}
                    />
                  </button>
                </div>
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <div className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                  <Image
                    className="relative object-cover"
                    alt=""
                    src="/assets/images/demos/demo-4/slider/slide-1.png"
                    fill
                  />
                </div>
                <div className="relative flex flex-col top-[4%] left-[41%] md:top-[20%] md:left-[60%] space-y-2">
                  <p className="text-xl text-red-300">Deals and Promotions</p>
                  <h1 className="font-bold text-4xl md:text-5xl">
                    Beats by <br /> Dre Studio 3
                  </h1>
                  <h1>
                    <span className="">$349,95</span>
                    <span className="text-red-400 text-5xl font-bold ml-2">
                      $249,95
                    </span>
                  </h1>
                  <button className="bg-blue-500 text-white rounded-full p-2 text-sm w-[140px]">
                    Shop More
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faArrowRight}
                      style={{ fontSize: 10 }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-blue-100"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full "
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full "
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full "
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full "
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-300 dark:bg-blue-500 group-hover:bg-blue-500 dark:group-hover:bg-blue-800/60 group-focus:ring-4 group-focus:ring-blue dark:group-focus:ring-blue-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-300 dark:bg-blue- group-hover:bg-blue-500 dark:group-hover:bg-blue-500 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-blue-500 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* section-1 category* */}
      <div className="container max-w-7xl m-auto">
        <h1 className="text-center p-10 text-2xl font-semibold">
          Explore Popular Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-4">
          <div className="relative group h-40 m-auto">
            <div className=" flex justify-center h-[6rem] group-hover:-translate-y-3  duration-500">
              <img
                className=" p-2"
                src="/assets/images/demos/demo-4/cats/1.png"
                alt=""
              />
            </div>
            <div className="absolute top-[5.5rem] left-2 h-1 w-[90%] bg-gray-400  opacity-0  group-hover:opacity-75 duration-700 rounded-full blur-sm"></div>
            <p className="p-2 text-center text-sm">Computer & Laptop</p>
          </div>
          <div className="relative group h-40 m-auto">
            <div className="flex justify-center h-[6rem] group-hover:-translate-y-3 duration-500">
              <img
                className=" p-2"
                src="/assets/images/demos/demo-4/cats/2.png"
                alt=""
              />
            </div>
            <div className="absolute top-[5.5rem] left-2 h-1 w-[90%] bg-gray-400 opacity-0 group-hover:opacity-75 duration-700 rounded-full blur-sm"></div>

            <p className="p-2 text-center text-sm">Digital Cameras</p>
          </div>
          <div className="relative group h-40  m-auto">
            <div className="flex justify-center h-[6rem] group-hover:-translate-y-3 duration-500">
              <img
                className="p-2"
                src="/assets/images/demos/demo-4/cats/3.png"
                alt=""
              />
            </div>
            <div className="absolute top-[5.5rem] left-2 h-1 w-[90%] bg-gray-400 opacity-0 group-hover:opacity-75 duration-700 rounded-full blur-sm"></div>

            <p className="p-2 text-center text-sm">Smart Phones</p>
          </div>
          <div className="relative group h-40 m-auto">
            <div className="flex justify-center h-[6rem] group-hover:-translate-y-3 duration-500">
              <img
                className="p-2"
                src="/assets/images/demos/demo-4/cats/4.png"
                alt=""
              />
            </div>
            <div className="absolute top-[5.5rem] left-2 h-1 w-[90%] bg-gray-400 opacity-0 group-hover:opacity-75 duration-700 rounded-full blur-sm"></div>

            <p className="p-2 text-center text-sm">Televisions</p>
          </div>
          <div className="relative group h-40 m-auto">
            <div className="flex justify-center h-[6rem] group-hover:-translate-y-3 duration-500">
              <img
                className=" p-2"
                src="/assets/images/demos/demo-4/cats/5.png"
                alt=""
              />
            </div>
            <div className="absolute top-[5.5rem] left-2 h-1 w-[90%] bg-gray-400 opacity-0 group-hover:opacity-75 duration-700 rounded-full blur-sm"></div>

            <p className="p-2 text-center text-sm">Audio</p>
          </div>
          <div className="relative group h-40 m-auto">
            <div className=" flex justify-center h-[6rem] group-hover:-translate-y-3 duration-500 ">
              <img
                className="p-2 text-center"
                src="/assets/images/demos/demo-4/cats/6.png"
                alt=""
              />
            </div>
            <div className="absolute top-[5.5rem] left-2 h-1 w-[90%] bg-gray-400 opacity-0 group-hover:opacity-75 duration-700 rounded-full blur-sm"></div>

            <p className="p-2 text-center text-sm">Smart Watches</p>
          </div>
        </div>
      </div>

      {/* section-2 banner images */}
      <div className="container  max-w-7xl grid grid-cols-8 lg:grid-cols-9 gap-4 m-auto px-2 py-4 ">
        <div className=" relative col-span-8 md:col-span-4 lg:col-span-3 w-full hover:opacity-75 duration-500">
          <img
            className="h-52 p-2"
            src="/assets/images/demos/demo-4/banners/banner-1.png"
            alt=""
          />
          <div className="absolute left-0 top-0 p-10 flex flex-col space-y-3 justify-start">
            <p className="text-sm text-siteTextColor font-extralight">
              Smart Offer
            </p>
            <h1>
              <span className="text-siteTextColor">Save $150</span> on Samsung{" "}
              <br /> Galaxy Note9
            </h1>
            <button className="text-siteColor p-1 text-sm w-[120px] rounded-full hover:bg-siteColor hover:text-white">
              Shop More
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowRight}
                style={{ fontSize: 10 }}
              />
            </button>
          </div>
        </div>
        <div className="relative col-span-8 md:col-span-4 lg:col-span-3 h-15 w-full hover:opacity-75 duration-500">
          <img
            className="h-52 p-2"
            src="/assets/images/demos/demo-4/banners/banner-2.jpg"
            alt=""
          />
          <div className="absolute left-0 top-0 p-10 flex flex-col space-y-3 justify-start">
            <p className="text-sm text-siteTextColor font-extralight">
              Smart Offer
            </p>
            <h1>
              <span className="text-siteTextColor">Save $150</span> on Samsung{" "}
              <br /> Galaxy Note9
            </h1>
            <button className="text-siteColor p-1 text-sm w-[120px] rounded-full hover:bg-siteColor hover:text-white">
              Shop More
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowRight}
                style={{ fontSize: 10 }}
              />
            </button>
          </div>
        </div>
        <div className="relative col-span-8 md:col-span-4 md:col-start-3 lg:col-span-3 h-15 w-full hover:opacity-75 duration-500">
          <img
            className="h-52 p-2"
            src="/assets/images/demos/demo-4/banners/banner-3.png"
            alt=""
          />
          <div className="absolute left-0 top-0 p-10 flex flex-col space-y-3 justify-start">
            <p className="text-sm text-siteTextColor font-extralight">
              Smart Offer
            </p>
            <h1>
              <span className="text-siteTextColor">Save $150</span> on Samsung{" "}
              <br /> Galaxy Note9
            </h1>
            <button className="text-siteColor p-1 text-sm w-[120px] rounded-full hover:bg-siteColor hover:text-white">
              Shop More
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowRight}
                style={{ fontSize: 10 }}
              />
            </button>
          </div>
        </div>
      </div>
      {/* section-3 product grid section */}
      <div className="container max-w-7xl mb-[120px] md:mb-[50px] m-auto py-5  h-[700px]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {/* Title */}
          <h1 className=" col-span-2 lg:col-span-1 text-center font-bold p-4 text-2xl lg:text-left">
            New Arrivals
          </h1>
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
                  data-tabs-target="#profile1"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  All
                </button>
              </li>
              <li className=" productTab mr-2 " role="presentation">
                <button
                  className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  TV
                </button>
              </li>
              <li className="productTab mr-2" role="presentation">
                <button
                  className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  COMPUTERS
                </button>
              </li>
              <li role="presentation" className="productTab">
                <button
                  className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  TABLETS & PHONES
                </button>
              </li>
              <li role="presentation" className="productTab">
                <button
                  className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="smartWatch-tab"
                  data-tabs-target="#smartWatch"
                  type="button"
                  role="tab"
                  aria-controls="smartWatch"
                  aria-selected="false"
                >
                  SMART WATCHES
                </button>
              </li>
              <li role="presentation" className="productTab">
                <button
                  className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="accerries-tab"
                  data-tabs-target="#accerries"
                  type="button"
                  role="tab"
                  aria-controls="accerries"
                  aria-selected="false"
                >
                  ACCERRIES
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* tab contents */}
        <div id="myTabContent" className="h-24">
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="profile1"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <MultipleItemSlider />
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <MultipleItemSlider />
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <MultipleItemSlider />
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <MultipleItemSlider />
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="smartWatch"
            role="tabpanel"
            aria-labelledby="smartWatch-tab"
          >
            <MultipleItemSlider />
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="accerries"
            role="tabpanel"
            aria-labelledby="accerries-tab"
          >
            <MultipleItemSlider />
          </div>
        </div>
      </div>
      {/* section-4 banner section */}
      <div className="relative container max-w-7xl m-auto py-5 ">
        <img
          className="w-full pl-10 pr-5 h-[165px]"
          src="/assets/images/demos/demo-4/bg-1.jpg"
          alt=""
        />
        <img
          className="absolute pl-4 -mt-5 ml-[154px] h-[177px] -left-40 top-9"
          src="/assets/images/demos/demo-4/camera.png"
          alt=""
        />
        {/* banner text */}
        <div className="absolute top-10 right-14 grid grid-cols-2 items-end">
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-end ">
            <p className="text-right text-gray-200 ">Shop Today’s Deals </p>
            <h1 className="text-white text-xl">
              Awesome Made Easy. HERO7 Black
            </h1>
          </div>
          <div className="col-span-2 lg:col-span-1  flex justify-center">
            <Button
              tClass="h-[45px] text-lg"
              btnWidth="180px"
              btnText="Shop Now - $429.99"
            />
          </div>
        </div>
      </div>
      {/* section-3deal and outles section */}
      <div className="container max-w-7xl m-auto py-5 grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* left side */}
        <div className="relative">
          <img
            className="md:h-[380px] w-full"
            src="/assets/images/demos/demo-4/deal/bg-1.jpg"
            alt=""
          />
          {/* contecnts */}
          <div className="absolute top-10 left-10 flex flex-col gap-8">
            <div>
              <h1 className="text-2xl text-siteSecondaryColor">
                Deal of the Day.
              </h1>
              <p className="text-sm opacity-50">Limited quantities. </p>
            </div>
            <div>
              <h1 className="text-lg">
                Home Smart Speaker with Google Assistant
              </h1>
              <p>
                <span className="text-2xl text-siteSecondaryColor">
                  $129.00
                </span>{" "}
                <span className="text-lg opacity-50">Was $150.99</span>
              </p>
              <a className="text-siteColor" href="">
                {" "}
                Shop More
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faArrowRight}
                  style={{ fontSize: 10 }}
                />
              </a>
            </div>
            <div className="flex">
              <div className="h-12 w-15 bg-siteColor text-center py-2 text-2xl text-white font-bold">
                10{" "}
                <p className="text-xs p-2 text-siteTextColor font-thin">Days</p>
              </div>
              <span className="font-bold mx-2 pt-3">:</span>
              <div className="h-12 w-15 bg-siteColor text-center py-2 text-2xl text-white font-bold">
                10{" "}
                <p className="text-xs p-2 text-siteTextColor font-thin">Days</p>
              </div>
              <span className="font-bold mx-2 pt-3">:</span>
              <div className="h-12 w-15 bg-siteColor text-center py-2 text-2xl text-white font-bold">
                10{" "}
                <p className="text-xs p-2 text-siteTextColor font-thin">Days</p>
              </div>
              <span className="font-bold mx-2 pt-3">:</span>
              <div className="h-12 w-15 bg-siteColor text-center py-2 text-2xl text-white font-bold">
                10{" "}
                <p className="text-xs p-2 text-siteTextColor font-thin">Days</p>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="relative">
          <img
            className="md:h-[380px] w-full"
            src="/assets/images/demos/demo-4/deal/bg-2.jpg"
            alt=""
          />
          {/* contecnts */}
          <div className="absolute top-10 left-10 flex flex-col gap-8">
            <div>
              <h1 className="text-2xl text-siteSecondaryColor">
                Deal of the Day.
              </h1>
              <p className="text-sm opacity-50">Limited quantities. </p>
            </div>
            <div>
              <h1 className="text-lg">
                Home Smart Speaker with Google Assistant
              </h1>
              <p>
                <span className="text-2xl text-siteSecondaryColor">
                  $129.00
                </span>{" "}
                <span className="text-lg opacity-50">Was $150.99</span>
              </p>
              <a className="text-siteColor" href="">
                {" "}
                Shop More
                <FontAwesomeIcon
                  className="ml-2"
                  icon={faArrowRight}
                  style={{ fontSize: 10 }}
                />
              </a>
            </div>
            <div className="flex">
              <div className="h-12 w-15 bg-siteColor text-center py-2 text-2xl text-white font-bold">
                10{" "}
                <p className="text-xs p-2 text-siteTextColor font-thin">Days</p>
              </div>
              <span className="font-bold mx-2 pt-3">:</span>
              <div className="h-12 w-15 bg-siteColor text-center py-2 text-2xl text-white font-bold">
                10{" "}
                <p className="text-xs p-2 text-siteTextColor font-thin">Days</p>
              </div>
              <span className="font-bold mx-2 pt-3">:</span>
              <div className="h-12 w-15 bg-siteColor text-center py-2 text-2xl text-white font-bold">
                10{" "}
                <p className="text-xs p-2 text-siteTextColor font-thin">Days</p>
              </div>
              <span className="font-bold mx-2 pt-3">:</span>
              <div className="h-12 w-15 bg-siteColor text-center py-2 text-2xl text-white font-bold">
                10{" "}
                <p className="text-xs p-2 text-siteTextColor font-thin">Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-3 trending product grid section */}
      <div className="continer bg-blue-50 h-[850px] md:h-[800px] lg:h-[700px] mb-10">
        <div className="container max-w-7xl m-auto py-5 h-[700px]  ">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {/* Title */}
            <h1 className=" col-span-2 lg:col-span-1 text-center font-bold p-4 text-2xl lg:text-left">
              Trending Products
            </h1>
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
                    data-tabs-target="#profile2"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    All
                  </button>
                </li>
                <li className=" productTab mr-2 " role="presentation">
                  <button
                    className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="dashboard-tab"
                    data-tabs-target="#dashboard1"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    TV
                  </button>
                </li>
                <li className="productTab mr-2" role="presentation">
                  <button
                    className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="settings-tab"
                    data-tabs-target="#settings1"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                  >
                    COMPUTERS
                  </button>
                </li>
                <li role="presentation" className="productTab">
                  <button
                    className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="contacts-tab"
                    data-tabs-target="#contacts1"
                    type="button"
                    role="tab"
                    aria-controls="contacts"
                    aria-selected="false"
                  >
                    TABLETS & PHONES
                  </button>
                </li>
                <li role="presentation" className="productTab">
                  <button
                    className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="smartWatch-tab"
                    data-tabs-target="#smartWatch1"
                    type="button"
                    role="tab"
                    aria-controls="smartWatch"
                    aria-selected="false"
                  >
                    SMART WATCHES
                  </button>
                </li>
                <li role="presentation" className="productTab">
                  <button
                    className="aria-selected:text-siteColor aria-selected:border-b-2 inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="accerries-tab"
                    data-tabs-target="#accerries1"
                    type="button"
                    role="tab"
                    aria-controls="accerries"
                    aria-selected="false"
                  >
                    ACCERRIES
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* tab contents */}
          <div id="myTabContent" className="h-24 bg-slate-400">
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="profile2"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <TrendingProductsSlider />
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="dashboard1"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <TrendingProductsSlider />
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="settings1"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <TrendingProductsSlider />
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="contacts1"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <TrendingProductsSlider />
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="smartWatch1"
              role="tabpanel"
              aria-labelledby="smartWatch-tab"
            >
              <TrendingProductsSlider />
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="accerries1"
              role="tabpanel"
              aria-labelledby="accerries-tab"
            >
              <TrendingProductsSlider />
            </div>
          </div>
        </div>
      </div>

      {/* section-** Recommended section  */}
      <ProductRecommended />

      {/* section-** offer section  */}
      <OfferSection />
      {/* section-** subscription  */}
      <Subscription />
    </>
  );
}

export default HomePage;
