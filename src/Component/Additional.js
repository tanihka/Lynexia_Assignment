import React from 'react'

const Additional = () => {
  return (
    <section
        className="relative mx-8 my-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0  bg-white/5 sm:bg-transparent "></div>
    
        <div className="relative  mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:ml-80">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <p className="mt-4 max-w-lg sm:text-md/relaxed">
              Lorem ipsum dolor sit amet 
              </p>
            <h3 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
 
            </h3>
    
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
    
            <div className="mt-8 flex flex-wrap gap-4 justify-center text-center">
              <a
                href="#"
                className="block w-full border-gray-900 rounded border-2 px-12 py-3 text-sm font-medium text-gray-600 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default Additional