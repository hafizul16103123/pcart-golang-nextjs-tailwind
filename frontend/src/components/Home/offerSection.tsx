import { faJetFighterUp, faRotateRight, faInfoCircle, faLifeRing } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function OfferSection() {
  return (
    <div className="container max-w-7xl relative m-auto py-5">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-8">
      <div className="flex ">
        <FontAwesomeIcon
          className="ml-2 pt-3"
          icon={faJetFighterUp}
          style={{ fontSize: 30 }}
        />
        <div className="grid grid-rows-2 pl-5">
          <h1 className="text-lg font-semibold">Free Shipping</h1>
          <h1 className="text-lg opacity-50">Orders $50 or more</h1>
        </div>
      </div>
      <div className="flex ">
        <FontAwesomeIcon
          className="ml-2 pt-3"
          icon={faRotateRight}
          style={{ fontSize: 30 }}
        />
        <div className="grid grid-rows-2 pl-5">
          <h1 className="text-lg font-semibold">Free Returns</h1>
          <h1 className="text-lg opacity-50">Within 30 days</h1>
        </div>
      </div>
      <div className="flex ">
        <FontAwesomeIcon
          className="ml-2 pt-3"
          icon={faInfoCircle}
          style={{ fontSize: 30 }}
        />
        <div className="grid grid-rows-2 pl-5">
          <h1 className="text-lg font-semibold">Get 20% Off 1</h1>
          <h1 className="text-lg opacity-50">Orders $50 or more</h1>
        </div>
      </div>
      <div className="flex ">
        <FontAwesomeIcon
          className="ml-2 pt-3"
          icon={faLifeRing}
          style={{ fontSize: 30 }}
        />

        <div className="grid grid-rows-2 pl-5">
          <h1 className="text-lg font-semibold">We Support</h1>
          <h1 className="text-lg opacity-50">24/7 services</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OfferSection
