import React from 'react';
import {AiOutlineMail } from "react-icons/ai";
import { FaCcPaypal, FaAmazonPay, FaCcVisa  } from "react-icons/fa";
import { LiaCcVisa } from 'react-icons/lia';

const Footer = () => {
  return (
    <>
    {/* <!-- Footer container --> */}
<footer
  className="bg-neutral-100 text-center  font-custom text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
 

  {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    
     
      {/* <!-- Products section --> */}
      <div className="">
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
         ABOUT
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Our Story</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Visit Melbourne Studio</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Visit Melbourne Studio</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Visit Brisbane Studio</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Design</a
          >
        </p>
        <p>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >How Ruper Works</a
          >
        </p>
      </div>
      {/* <!-- Useful links section --> */}
      <div className="">
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
      HELP
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Contact & FAQ
            </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Track YOur Order</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Returns & Refunds</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Shipping & DElivery</a
          >
        </p>
        <p>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Lead Times</a
          >
        </p>
      </div>
      {/* <!-- Contact section --> */}
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
         SERVICES
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
      
          New York, NY 10012, US
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
         
          Sale
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
        
        Quick Ship
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
       
          New Designers
        </p>
        
        <p className="mb-4 flex items-center justify-center md:justify-start">
        Accidental Fabric Protection
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
       Furniture Care
        </p>
        <p className="flex items-center justify-center md:justify-start">
        Gifts Cards
        </p>
      </div>
        {/* <!-- Tailwind Elements section --> */}
      <div className="">
        <h6
          className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
         NEWSLETTER
        </h6>
        <p className='mb-4 text-sm'>
         Enter Your email below to be the first to know about new collections and product launches.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
  <div className="relative flex w-full  md:w-5/4 md:mr-4 mb-6" data-te-input-wrapper-init>
    <input
      type="text"
      className="peer block w-full min-h-[auto]   border-0 placeholder:text-black placeholder:text-sm bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:text-black placeholder-black focus:placeholder-opacity-100 data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:placeholder:text-secondary-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
      id="exampleFormControlInput1"
      placeholder="Email address"
    />
    {/* <label
      htmlFor="exampleFormControlInput1"
      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-secondary-200 dark:peer-focus:text-secondary-200"
    >
      Email address
    </label> */}
   < button
    type="button"
    className="inline-block w-full md:w-20 bg-gray-800   p-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-black-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)] focus:bg-black-600 focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:bg-black-700 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
    data-te-ripple-init
    data-te-ripple-color="light"
  >
    <AiOutlineMail className="inline-block text-lg"/>
  </button>
  </div>
  

</div>
<div className="flex justify-start">
     
      <a href="#!" className="mr-9 text-neutral-600 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-1"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
            fill-rule="evenodd"
            clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#!" className="mr-9 text-neutral-600 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
      <a href="#!" className="mr-9  text-neutral-600 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>
      <a href="#!" className=" mr-9 text-neutral-600 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
      </div>
      </div>
    </div>
  

  {/* <!--Copyright section--> */}
  <div className="bg-neutral-100 p-6 flex  dark:bg-neutral-700">
    <span>© 2023 Copyright:</span>
    <a
      className="font-semibold text-neutral-600 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >Tailwind Elements</a
    >
    <div className="flex mt-4 md:mt-0 ml-auto">
            <a href="#!" className="mr-9 text-neutral-600 dark:text-neutral-200">
              <LiaCcVisa className="text-blue-600  w-8 h-8" />
            </a>
            <a href="#!" className="mr-9 text-neutral-600 dark:text-neutral-200">
              <FaAmazonPay className="text-yellow-500 w-8 h-8" />
            </a>
            <a href="#!" className="mr-9 text-neutral-600 dark:text-neutral-200">
              <FaCcPaypal className="text-skyblue w-8 h-8" />
            </a>
            <a href="#!" className="text-neutral-600 dark:text-neutral-200">
              <FaCcVisa className="text-skyblue w-8 h-8 " />
            </a>
          </div>
  </div>
  
</footer>
    </>
  )
}

export default Footer;