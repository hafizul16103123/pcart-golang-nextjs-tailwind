import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TopBarDropdownCurrency from "./topBarDropdownCurrency";
import TopBarDropdownLanguage from "./topBarDropdownLanguage";

function TopBarDropdownLinks() {
  const [lanBtn, setLanBtn] = useState("English");
  return (
    <div className=" flex md:hidden">
      <button className="peer py-2 w-28 text-right">
        <span className="">Links</span>

        <FontAwesomeIcon
          className="pb-1 pl-1"
          icon={faChevronDown}
          style={{ fontSize: 10 }}
        />
      </button>

      <div className="absolute hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg self-auto w-28 text-center">
        <TopBarDropdownCurrency tClass="top-0 right-24" />
        <TopBarDropdownLanguage tClass="top-0 right-24" />
      </div>
    </div>
  );
}

export default TopBarDropdownLinks;
