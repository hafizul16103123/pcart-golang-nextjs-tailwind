import {
  faAmbulance,
  faBars,
  faCar,
  faCartPlus,
  faChevronDown,
  faCode,
  faCodeCompare,
  faHeart,
  faListCheck,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import TopBarDropdownCurrency from "../utils/topBar/topBarDropdownCurrency";
import TopBarDropdownLanguage from "../utils/topBar/topBarDropdownLanguage";
import TopBarDropdownLinks from "../utils/topBar/topBarDropdownLinks";
import Sidebar from "../utils/atms/sidebar";
function Header() {
  // const topBarCurrencyHover

  return (
    <>
      <div className="bg-gray-100">
        {/* TopBar */}
        <div className="container max-w-7xl m-auto flex py-1 text-gray-500 text-sm font-normal  justify-between">
          {/* Mobile no */}
          <div className="py-2 hover:text-siteColor">
            <a href="">
              <FontAwesomeIcon
                className="text-gray-400 font-light px-2 "
                icon={faPhone}
                style={{ fontSize: 15 }}
              />{" "}
              call: +880 1744829193
            </a>
          </div>

          <div className="flex space-x-1 items-center">
            <div className="flex">
              <div className="hidden md:flex">
                {/* Currency */}
                <TopBarDropdownCurrency tClass="" />
                {/* Language */}
                <TopBarDropdownLanguage tClass="" />
                <div className="py-2 hover:text-siteColor">
                  <a href="">Sign In / Sign Up</a>
                </div>
              </div>

              <TopBarDropdownLinks />
            </div>
          </div>
        </div>
      </div>

      {/* search section */}
      <div className="container max-w-7xl m-auto my-4">
        <div className="grid  grid-cols-4 gap-2">
          {/* Search and Logo */}
          <div className="flex md:justify-between col-span-3">
            {/* hamber menu */}
            <div className="p-2 md:hidden">
              <FontAwesomeIcon
                className="text-gray-400 font-light px-1 left-[-35px] top-2 "
                icon={faBars}
                style={{ fontSize: 25 }}
                data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"
              />


            </div>
            {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
              Show navigation
            </button> */}
            <Sidebar></Sidebar>
            {/* Logo */}
            <div className="p-2">
              <img
                src="/assets/images/demos/demo-4/logo.png"
                alt="Picture of the author"
              />
            </div>
            {/* Search field */}
            <div className="hidden relative border rounded-full h-10 w-[550px] md:block">
              <FontAwesomeIcon
                className="absolute text-gray-400 font-light px-2 left-2 top-3"
                icon={faSearch}
                style={{ fontSize: 15 }}
              />
              <input
                className="absolute ml-10 focus:outline-none left-2 top-2"
                type="text"
                placeholder="Search product..."
              />
            </div>
          </div>

          {/* Compare Wishlist and cart */}
          <div className="flex col-end-5 justify-end gap-x-6 px-2">
            <div className="flex flex-col group">
              <FontAwesomeIcon
                className="text-gray-400 group-hover:text-siteColor cursor-pointer"
                icon={faCodeCompare}
                style={{ fontSize: 25 }}
              />
              <a className="text-sm" href="">
                Compare
              </a>
            </div>
            <div className="flex flex-col group">
              <FontAwesomeIcon
                className="text-gray-400 group-hover:text-siteColor"
                icon={faHeart}
                style={{ fontSize: 25, fontWeight: "regular" }}
              />

              <a className="text-sm" href="">
                Wishlist
              </a>
            </div>

            <div className="flex flex-col group">
              <FontAwesomeIcon
                className="text-gray-400 group-hover:text-siteColor"
                icon={faCartPlus}
                style={{ fontSize: 25 }}
              />
              <a className="text-sm" href="">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
