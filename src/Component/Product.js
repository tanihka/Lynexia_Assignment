import React, {useState} from 'react';
import './product.css';
import { BsArrowDown} from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShopping, AiOutlineShareAlt, AiOutlineSearch } from "react-icons/ai";

const Product = () => {
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
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$55',
          new: 'Hot',
          discountedPrice:'$42',
          color: 'Black',
        },
        {
          id: 2,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$45',
          new: 'Hot',
          color: 'Black',
        },
        {
          id: 3,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          new: 'Hot',
          discountedPrice:'$30',
          color: 'Black',
        },
        {
          id: 4,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          discountedPrice:'$30',
          color: 'Black',
        },
        {
          id: 5,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          new: 'Hot',
          discountedPrice:'$30',
          color: 'Black',
        },
        {
          id: 6,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          new: 'Hot',
          discountedPrice:'$30',
          color: 'Black',
        },
        {
          id: 7,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 8,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://plus.unsplash.com/premium_photo-1691642678915-3e526a98eb82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RhbmRhcmQlMjBsYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        // More products...
      ]
      

  return (
    <>
    <div className="bg-white font-sans font-extra-bold ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center tracking-tight text-gray-600">Latest Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}  onMouseEnter={() => handleProductHover(product.id)}
            onMouseLeave={handleProductLeave} className="group relative transform transition-transform hover:scale-105">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-100 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                
                {hoveredProductId === product.id && (
                  <div className="absolute divIcon inset-0 flex top-3/4 justify-center p-2">
                    <button className="border border-gray-900  w-8 h-7 px-1.5 mx-1 text-red-500">
                      <AiOutlineHeart />
                    </button>
                    <button className="border border-gray-900 w-8 h-7 px-2 mx-1 text-blue-500">
                      <AiOutlineShopping />
                    </button>
                    <button className="border border-gray-900 w-8 h-7 px-2 mx-1 text-green-500">
                      <AiOutlineShareAlt />
                    </button>
                    <button className="border border-gray-900 w-8 h-7 px-2 mx-1 text-gray-900">
                      <AiOutlineSearch />

                    </button>

                  
                  </div>
                  
                )}
                  <div className="">
                      {product.new ? ( <>
                      <span className=" mr-1 absolute top-0 right-0 bg-white text-red-600 px-2 py-1 m-2 rounded-tr-md rounded-bl-md">{product.new}</span>
                      {product.new}
                    </>): (
                      <></>
                    )}
                    </div>
                  {/* <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 m-2 rounded-tr-md rounded-bl-md">
                      {product.price}
                    </div> */}
                    

              </div>
              <div className="mt-4 flex justify-center">
                <div>
                  <h3 className="text-md text-gray-800">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-center text-sm text-gray-500">{product.color}</p> */}
                  <p className="text-sm  text-center text-gray-900">
                  {product.discountedPrice ? (
                    <>
                      <span className="text-red-500 line-through mr-1">{product.price}</span>
                      {product.discountedPrice}
                    </>
                  ) : (
                    product.price
                  )}
                </p>
                </div>
            
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="flex items-center  justify-center">
      <button class="bg-transparent hover:bg-gray-800 h-12 hover:gray-300 text-gray-800 font-semibold hover:text-white py-1 px-4 border border-gray-700 hover:border-black rounded sm:py-3 sm:px-6 md:py-4 md:px-8 flex items-center">
  Load More <BsArrowDown class="text-blue-700 ml-2 " />
</button>

  
</div>

    </div>
    
    </>
  )
}

export default Product