import React from 'react'
import { Transition } from '@headlessui/react'
import Resume from '../assets/Jordan_An_Resume2023.jpg'

const Navbar = () => {
    const [showResume, setShowResume] = React.useState(false);
    return (
        // https://flowbite.com/docs/components/navbar/

        <nav class="bg-white dark border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 py-3">
                <a href="#" class="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jordan An</span>
                </a>

                <div class="items-center text-lg justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row space-x-16 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-lg block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="flex md:order-2">
                    <button onClick={() => setShowResume(true)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Resume
                    </button>
                    <Transition
                        show={showResume}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="pt-96 justify-center items-center flex h-full w-full overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-700 outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between px-4 py-1 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-bold text-white">
                                            Resume 2023
                                        </h3>
                                        <button
                                            className=" ml-auto bg-transparent border-0 text-red-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowResume(false)}
                                        >
                                            <span className="bg-transparent text-red-500 h-3 w-3 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative overflow-y-auto p-3 flex-auto flex ">

                                        <img src={Resume} className=" rounded-lg" alt="/" />


                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center px-4 py-1 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className=" text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowResume(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </Transition>
                </div>
            </div>
        </nav>

    )
}

export default Navbar