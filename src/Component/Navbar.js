import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  Menu,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const optionChoose = [
  {
    name: "nhibtana",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const callsOption = [{ name: "saling", href: "#", icon: PhoneIcon }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const wishlistItems = [
  { id: 1, title: 'Product 1',  imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60', description: 'Description for Product 1', price: 50 },
  { id: 2, title: 'Product 2',  imageSrc: 'https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', description: 'Description for Product 2', price: 30 },
  { id: 3, title: 'Product 3',  imageSrc: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60' , description: 'Description for Product 3', price: 40 },
];


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  const openWish = () => {
    setIsWishlistOpen(true);
  };

  const closeWish = () => {
    setIsWishlistOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleLanguages = () => {
    setIsLanguagesOpen(!isLanguagesOpen);
  };

  return (
    <>
      <div className="bg-white font-sans text-gray-700 border-b border-gray-100 py-2 text-center">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <span className="text-sm mb-2 sm:mb-0">
              <CiLocationOn className="inline-block align-text-bottom" /> Find
              Store |{" "}
              <AiOutlineMail className="inline-block align-text-bottom" />{" "}
              support@ruper.com
            </span>
            <span className="text-sm text-gray-700 sm:text-base mt-2 sm:mt-0">
              Gift Cards | FAQs | Contact
            </span>
          </div>
        </div>
      </div>

      <header className="bg-white font-custom">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-12"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-5">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-600">
                HOME
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-600">
                SHOPE
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            {/* <a href="#"   onClick={toggleDropdown} className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-600">
            BLOG
            <ChevronDownIcon className="h-5 w-5  text-gray-400" aria-hidden="true" />
          </a> */}
            <div className="inline-block group relative">
              <a
                className="flex items-center min-w-32"
                onClick={toggleDropdown}
              >
                <span
                  className="pr-1 font-semibold text-gray-500 flex-1"
                  style={{ cursor: "pointer" }}
                >
                  BLOG
                </span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform text-gray-400 transition duration-150 ease-in-out ${
                      isDropdownOpen ? "" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </a>
              <ul
                className={`bg-white  rounded-sm transition duration-150 ease-in-out origin-top min-w-32 absolute ${
                  isDropdownOpen ? "scale-100" : "scale-0"
                }`}
                style={{ zIndex: 10 }}
              >
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  Programming
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  DevOps
                </li>
                <li className="relative px-3 py-1 hover:bg-gray-100">
                  <button
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                    onClick={toggleLanguages}
                  >
                    <span className="pr-1 flex-1">Languages</span>
                    <span className="mr-auto">
                      <svg
                        className={`fill-current h-4 w-4 transition duration-150 ease-in-out ${
                          isLanguagesOpen ? "-rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className={`bg-white border rounded-sm absolute -top-4 left-full  transition duration-150 ease-in-out  min-w-32 ${
                      isLanguagesOpen ? "scale-100" : "scale-0"
                    }`}
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">Python</span>
                      </button>
                    </li>
                    <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                  </ul>
                </li>
              </ul>
            </div>

            <Menu as="div" className="relative  inline-block text-left">
              <div>
                <Menu.Button className="inline-flex border-none  w-full  gap-x-1.5   text-sm font-semibold text-gray-600 ">
                  PAGES
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Duplicate
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Archive
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Move
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Share
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Add to favorites
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Delete
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-600"
            >
              CONTACT
            </a>
          </Popover.Group>

          <div className="flex lg:flex-1  ml-60">
            <a href="#" className="-m-1.5 text-2xl font-semibold   p-1.5">
              RUPER
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <a
              href="#"
              onClick={openForm}
              className="text-sm font-semibold leading-6  text-gray-900 mr-12"
            >
              Log in
            </a>
            {isFormOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-10">
                <div
                  className="absolute inset-0 bg-gray-900 opacity-50"
                  onClick={closeForm}
                ></div>
                <div className="relative bg-white rounded-lg p-8 shadow-lg">
                  <span
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={closeForm}
                  >
                    {/* Replace this with your close icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500 hover:text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <form>
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>

                    <label htmlFor="email" className="block mb-2">
                      <b>Email</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      name="email"
                      className="w-full p-2 mb-4 border bg-gray-200"
                      required
                    />

                    <label htmlFor="psw" className="block mb-2">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="psw"
                      className="w-full p-2 mb-4 border bg-gray-200"
                      required
                    />

                    <div className="flex justify-between items-center mb-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Remember me
                      </label>
                      <a href="#" className="text-gray-800 hover:underline">
                        Lost account?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full mb-2 bg-gray-800 text-white py-2 px-4  hover:bg-gray-700"
                    >
                      LOGIN
                    </button>
                    <button
                      type="submit"
                      className="w-full bg-gray-400 text-white py-2 px-4  hover:bg-gray-700"
                    >
                      CREATE AN ACCOUNT
                    </button>
                  </form>
                </div>
              </div>
            )}

            <a
              href="#"
              className="text-sm mr-2 ml-3 font-semibold leading-6 text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 -5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6M9 15a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
            </a>
            <a
              href="#"
              onClick={openWish}
              className="text-sm ml-3 mr-2 font-semibold leading-6 text-gray-900"
            >
              <AiOutlineHeart className="w-5 h-5" />
              <span class="absolute top-12 right-20 bg-red-500 text-white text-center rounded-full text-xs w-4 h-4">
                {wishlistItems.length}
              </span>
            </a>
            {isWishlistOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={closeWish}></div>
          <div className="fixed top-16 right-4 w-72 bg-white rounded-lg p-4 shadow-lg">
          {/* <div className="relative bg-white rounded-lg p-8 shadow-lg"> */}
            <span className="absolute  top-2 right-2 cursor-pointer" onClick={closeWish}>
              {/* Replace this with your close icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
           
            {wishlistItems.map((item) => (
              <div key={item.id} className="flex mt-5 font-sans  justify-between mb-2">
                 <div className="flex w-20 h-12">
                 <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-20 w-20 object-cover object-center lg:h-full lg:w-full"
                />
                  
                </div>
                <div className=" -ml-9">
                  <h3 className=" text-sm font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-xs">${item.price}</p>
                </div>
                <div className="flex ">
                  
                  <button
                    onClick={() => {
                      // Implement the logic to remove the item from the wishlist
                      // You can use the item.id to identify and remove the item from your wishlistItems array
                    }}
                    className="text-gray-500  hover:text-gray-700"
                  >
                    {/* Replace with your remove icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            
            <div className="flex border-b border-t border-gray-900 justify-between mt-4">
              <p className=" text-black font-sans py-2 px-4 ">Total</p>
              <p className=" text-black py-2 px-4">$100</p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-gray-800 text-white py-2 px-4 w-328 hover:bg-gray-700">View Cart</button>
              <button className="bg-gray-800 text-white py-2 px-4 w-28 hover:bg-gray-700">Checkout</button>
            </div>
            <div className="flex justify-between mt-2 ">
              <p className=" text-black py-2 px-4">Buy <strong>$400 </strong>more to enjoy <strong>FREE Shipping</strong></p>
             
            </div>
            {/* </div> */}
          </div>
        </div>
      )}
            <a
              href="#"
              className="text-sm  ml-3 font-semibold leading-6 text-gray-900"
            >
              <BsBag className="w-5 h-5" />
              <span class="absolute top-12 right-9 bg-gray-800 text-white rounded-full text-center   text-xs w-4 h-4">
                5
              </span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 text-lg p-1.5">
                RUPER
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Options
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...optionChoose, ...callsOption].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
