import React from "react";
import "./product.css";
import { PiShoppingCart } from "react-icons/pi";
import { FcOnlineSupport } from "react-icons/fc";
import { IoWalletOutline , IoReturnUpBack } from "react-icons/io5";

const Unique = () => {

  return (
    <div className="bg-white font-sans mb-7 border-t border-gray-200">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <div className=" overflow-hidden\ lg:aspect-none ">
              <IoReturnUpBack className=" text-gray-900 w-full lg:h-12 font-light" />
            </div>
            <div className="mt-4 font-sans flex justify-center">
              <div>
                <h3 className="text-md text-center text-gray-900">
                  <a>
                    <span aria-hidden="true" className="absolute inset-0" />
                    14 Day Returns
                  </a>
                </h3>
                {/* <p className="mt-1 text-center text-sm text-gray-500">{product.color}</p> */}
                <p className="text-sm  text-center text-gray-600">
                  Yoy will love at great low price
                </p>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className=" overflow-hidden\ lg:aspect-none ">
              <FcOnlineSupport className=" text-gray-900 w-full lg:h-12 font-light" />
            </div>
            <div className="mt-4 font-sans flex justify-center">
              <div>
                <h3 className="text-md text-center   text-gray-900">
                  <a>
                    <span
                      aria-hidden="true"
                      className="absolute text-center inset-0"
                    />
                    Online Support
                  </a>
                </h3>
                {/* <p className="mt-1 text-center text-sm text-gray-500">{product.color}</p> */}
                <p className="text-sm  text-center text-gray-600">
                  Yoy will love at great low price
                </p>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className=" overflow-hidden\ lg:aspect-none ">
              <PiShoppingCart className=" text-gray-900 w-full lg:h-12 font-light" />
            </div>
            <div className="mt-4 flex justify-center">
              <div>
                <h3 className="text-md text-center text-gray-900">
                  <a>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Free Shipping
                  </a>
                </h3>
                {/* <p className="mt-1 text-center text-sm text-gray-500">{product.color}</p> */}
                <p className="text-sm  text-center text-gray-600">
                  Yoy will love at great low price
                </p>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className=" overflow-hidden\ lg:aspect-none ">
              <IoWalletOutline className=" text-gray-900 w-full lg:h-12 font-light" />
            </div>
            <div className="mt-4 flex font-sans justify-center">
              <div>
                <h3 className="text-md text-center text-gray-900">
                  <a>
                    <span aria-hidden="true" className="absolute inset-0 " />
                    Online Payment
                  </a>
                </h3>
                {/* <p className="mt-1 text-center text-sm text-gray-500">{product.color}</p> */}
                <p className="text-sm  text-center text-gray-600">
                  Yoy will love at great low price
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
