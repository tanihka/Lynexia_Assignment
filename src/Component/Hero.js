import React, { useState } from 'react';
import './product.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  // Define an array of slides with images and content
  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Sofa Who Fits',
      description: 'Your Desire Our Desire ',
    },
    {
      image:
        'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8OTkzNTA4MHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
      title: 'Look at Chairs',
      description: 'cheers to chairs',
    },
    {
      image:
        'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Slide 2 Title',
      description: 'Slide 2 Description',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="slider-container">
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`, // Use current slide's image
        }}
      >
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center bg-no-repeat"
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <div className="absolute inset-0 bg-red/75 sm:bg-transparent "></div>
              <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-center ml-14 ltr:sm:text-left rtl:sm:text-right">
                  <h1 className="text-3xl font-extrabold sm:text-5xl"    style={{
                      transform: currentSlide === index ? 'translateY(0)' : 'translateY(-100%)',
                    }}>
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-lg text-center sm:text-xl/relaxed "    style={{
                      transform: currentSlide === index ? 'translateY(0)' : 'translateY(-100%)',
                    }}>
                    {slide.description}
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
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Hero;

