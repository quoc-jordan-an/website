import React from 'react'
import Resume from '../assets/Jordan_An_Resume2023.jpg'
import { Transition } from '@headlessui/react'

function ResumeButton() {
    const [showResume, setShowResume] = React.useState(false)
    return (
        <>
            <button onClick={() => setShowResume(true)} type="button" class="text-white hover:ring-2 hover:outline-none focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
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
        </>
    )
}

export default ResumeButton