import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Button({btnText="Shop More",btnWidth="140px",tClass=""}) {
  return (
    <button className={`bg-blue-500 text-white rounded-full p-2 text-sm w-[${btnWidth}] ${tClass}`}>
   {btnText}
    <FontAwesomeIcon
      className="ml-2"
      icon={faArrowRight}
      style={{ fontSize: 10 }}
    />
  </button>
  )
}

export default Button
