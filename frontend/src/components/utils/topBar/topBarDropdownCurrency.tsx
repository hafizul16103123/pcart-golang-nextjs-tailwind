import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function TopBarDropdownCurrency({ tClass }) {
  const [btnText, setbtnText] = useState("USD");
  return (
    <div className="relative z-10">
      <button className="peer py-2 w-24 hover:text-siteColor">
        <span className=" text-sm">{btnText}</span>

        <FontAwesomeIcon
          className="pb-1 pl-1"
          icon={faChevronDown}
          style={{ fontSize: 10 }}
        />
      </button>

      <div
        className={`absolute hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg self-auto w-24 text-center ${tClass}`}
      >
        <a
          className="py-1 hover:text-siteColor"
          href="#"
          onClick={() => {
            setbtnText("EUR");
          }}
        >
          <span className="text-sm">EUR</span>
        </a>
        <a
          className="py-1 hover:text-siteColor"
          href="#"
          onClick={() => {
            setbtnText("BD");
          }}
        >
          <span className="text-sm" >BD</span>
        </a>
      </div>
    </div>
  );
}

export default TopBarDropdownCurrency;
