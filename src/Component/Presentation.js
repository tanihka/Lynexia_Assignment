import React, { useState } from "react";
import "./product.css";
import { BsArrowDown } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineShareAlt,
  AiOutlineSearch,
} from "react-icons/ai";

const Presentation = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleProductHover = (productId) => {
    setHoveredProductId(productId);
  };

  const handleProductLeave = () => {
    setHoveredProductId(null);
  };

  const products = [
    {
      id: 1,
      name: "new arivals.",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      imageAlt: "Front of men's Basic Tee in black.",
     
      color: "Shop Now",
    },
    {
      id: 2,
      name: "tranding.",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      imageAlt: "Front of men's Basic Tee in black.",
     
      color: "Shop Now",
    },
    {
      id: 3,
      name: "staffpick",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      imageAlt: "Front of men's Basic Tee in black.",
    
      color: "Shop Now",
    },
    // More products...
  ];

  return (
    <>
      <div className=" font-custom font-extra-bold ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-6">
        
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-3">
            {products.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => handleProductHover(product.id)}
                onMouseLeave={handleProductLeave}
                className="group relative "
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-100 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full   transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-8 left-0 p-4 text-gray-800 opacity-100 ">
                  <p className=" text-3xl font-bold">{product.name}</p>
                  <p className="text-md">{product.color}</p>
                  <div className="border-b w-12 border-gray-800 border-1 transform transition-transform group-hover:scale-x-125 flex-grow" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Presentation;
