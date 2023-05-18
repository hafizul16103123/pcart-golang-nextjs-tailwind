import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function TopBarDropdownLanguage({ tClass }) {
  const [lanBtn, setLanBtn] = useState("English");
  return (
    <div className="relative">
      <button className="peer py-2 w-28 hover:text-siteColor">
        <span className="">{lanBtn}</span>

        <FontAwesomeIcon
          className="pb-1 pl-1"
          icon={faChevronDown}
          style={{ fontSize: 10 }}
        />
      </button>

      <div
        className={`absolute hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg self-auto w-28 text-center  ${tClass}`}
      >
        <a
          className="py-1 hover:text-siteColor"
          href="#"
          onClick={() => {
            setLanBtn("Bangla");
          }}
        >
          <span>Bangla</span>
        </a>
        <a
          className="py-1 hover:text-siteColor"
          href="#"
          onClick={() => {
            setLanBtn("Hindi");
          }}
        >
          <span>Hindi</span>
        </a>
      </div>
    </div>
  );
}

export default TopBarDropdownLanguage;
