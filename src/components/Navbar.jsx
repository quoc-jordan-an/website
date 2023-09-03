import React from 'react'
import { NavLink } from "react-router-dom";
import { Transition } from '@headlessui/react'
import Resume from '../assets/Jordan_An_Resume2023.jpg'
import ResumeButton from './ResumeButton';

const Navbar = () => {
    const [showResume, setShowResume] = React.useState(false);
    const navigation = 
    [
        { name: "Home", href: "/", current: true },
        // { name: "Admin", href: "/admin", current: false },
        { name: "Projects", href: "/projects", current: false },
        // { name: "About", href: "/about", current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    

    return (
        // https://flowbite.com/docs/components/navbar/

        <nav class=" border-gray-200 bg-gray-900 ">
            <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 py-3">
                <a href="#" class="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jordan An</span>
                </a>

                <div className="sm:ml-6 sm:block items-center text-lg justify-between hidden w-full md:flex md:w-auto md:order-1">
                  <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row space-x-16 md:mt-0 md:border-0 bg-gray-900 md:bg-gray-900 border-gray-700">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        // to = "admin"
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? " text-white rounded bg-gray-800 ring-2 font-bold"
                              : " text-white hover:text-blue-50 hover:bg-gray-800 font-medium",
                            "block py-1 px-5 rounded-md  hover:ring-2 hover:outline-none focus:ring-2 focus:outline-none"
                          )
                        }
                        aria-current={({ isActive }) =>
                          isActive ? "page" : undefined
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div class="flex md:order-2">
                    <ResumeButton/>
                </div>
            </div>
        </nav>

    )
}

export default Navbar