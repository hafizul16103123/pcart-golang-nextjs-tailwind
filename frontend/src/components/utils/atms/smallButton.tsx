import React from 'react'

function SmallButton({ btnText = "Shop More", btnWidth = "140px", tClass = "" }) {
  return (
    <button className={`bg-blue-500 text-white rounded-full p-2 text-sm w-[${btnWidth}] ${tClass}`}>
      {btnText}

    </button>
  )
}

export default SmallButton
