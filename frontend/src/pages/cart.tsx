import ProductShop from "@/components/Home/productShop";
import Button from "@/components/utils/atms/button";
import SmallButton from "@/components/utils/atms/smallButton";
import React from "react";

function Shop() {
  return (
    <div>
      <div className="container max-w-7xl m-auto px-2">
        {/* Banner */}
        <div className="w-full h-52 my-4">
          <img
            className="w-full h-full object-left md:object-cover "
            src="/assets/images/demos/demo-4/bg-1.jpg"
            alt=""
          />
        </div>
        <div className="flex space-x-4 text-siteTextColor my-2 py-2">
          <a href="">Home</a>
          <span>></span>
          <a href="">Shop</a>
          <span>></span>
          <a href="">Shopping Cart</a>
        </div>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* cart summary and products */}

        <div className="grid grid-cols-12 gap-4">
          {/* product grid */}
          <div className="col-span-12 lg:col-span-9 flex justify-between">
            <div className="flex flex-col w-full">
              {/* header */}
              <div className="hidden md:flex flex-col md:flex-row md:justify-between space-x-5">
                <div className="md:w-80 xl:w-96 text-center">Product</div>
                <div className="w-20 xl:w-32 text-center">Price</div>
                <div className="w-28 xl:w-32 text-center">Quantity</div>
                <div className="w-20 xl:w-32 text-center">Total</div>
                <div className="w-20 xl:w-32 text-center">Action</div>
              </div>

              {/* row 1 */}
              <hr className="hidden md:flex h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="flex flex-col md:flex-row justify-between md:space-x-5 ">
                <div className="flex w-80 xl:w-96 m-auto">
                  <img className="w-20 h-20" src="/assets/images/products/table/product-1.jpg" alt="product image" />
                  <span className="pl-2 pt-2">Beige knitted elastic runner shoes</span>
                </div>

                <div className="w-full md:w-20 xl:w-32 md:pl-2 pt-2 text-center ">$100</div>
                <div className="w-full md:w-28 xl:w-32 md:pl-2 pt-2 text-center">
                  <SmallButton btnText="+" btnWidth="100px" tClass="w-6"></SmallButton>
                  <span className="px-5">2</span>
                  <SmallButton btnText="-" btnWidth="100px" tClass="w-6"></SmallButton>
                </div>
                <div className="w-full md:w-20 xl:w-32 md:pl-2 pt-2 text-center text-siteColor">$200</div>
                <div className="w-full md:w-20 xl:w-32 md:pl-2 pt-2 text-center">*</div>
              </div>
              {/* row-2 */}
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

              <div className="flex flex-col md:flex-row justify-between md:space-x-5 ">
                <div className="flex w-80 xl:w-96 m-auto">
                  <img className="w-20 h-20" src="/assets/images/products/table/product-2.jpg" alt="product image" />
                  <span className="pl-2 pt-2">Beige knitted elastic runner shoes</span>
                </div>

                <div className="w-full md:w-20 xl:w-32 md:pl-2 pt-2 text-center ">$100</div>
                <div className="w-full md:w-28 xl:w-32 md:pl-2 pt-2 text-center">
                  <SmallButton btnText="+" btnWidth="100px" tClass="w-6"></SmallButton>
                  <span className="px-5">2</span>
                  <SmallButton btnText="-" btnWidth="100px" tClass="w-6"></SmallButton>
                </div>
                <div className="w-full md:w-20 xl:w-32 md:pl-2 pt-2 text-center text-siteColor">$200</div>
                <div className="w-full md:w-20 xl:w-32 md:pl-2 pt-2 text-center">*</div>
              </div>



            </div>



          </div>
          {/* Cart summary */}
          <div className="col-span-12 lg:col-span-3 bg-gray-100 p-4">
            <div className="f">
              <h1>Cart Total</h1>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$160.00</p>
              </div>
              <div className="flex justify-between">
                <p>ShippingCharge</p>
                <p>$16.00</p>
              </div>
              <div className="flex justify-between">
                <p>Discount</p>
                <p>$0.00</p>
              </div>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

              <div className="flex justify-between">
                <p>Total</p>
                <p>$200.00</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Shop;
