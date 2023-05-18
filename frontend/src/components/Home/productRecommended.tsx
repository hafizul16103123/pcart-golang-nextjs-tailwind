import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductCardRecommended from "../utils/product/productCardRecommended";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProductRecommended() {
  return (
    <div className="container max-w-7xl relative m-auto py-5 border-b-2">
      <div className="grid grid-cols-2  p-4">
        <div className="flex col-span-2 lg:col-span-1 justify-center lg:justify-start ">
          <h1 className=" text-2xl font-semibold ">Recommendation For You</h1>
        </div>

        <div className="flex col-span-2 lg:col-span-1 justify-center lg:justify-end">
          <a className="text-sm text-siteColor hover:opacity-50" href="">
            View All Recommendadion
            <FontAwesomeIcon
              className="ml-2 pt-3"
              icon={faArrowRight}
              style={{ fontSize: 10 }}
            />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
        <ProductCardRecommended />
      </div>
    </div>
  );
}

export default ProductRecommended;
