import React from 'react'
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className='flex flex-row justify-center p-4 '>
            <div className='w-14 h-14 '/>

            <div className='flex flex-col w-11/12 h-max container border-4 bg-white bg-fixed border-black rounded-lg shadow-2xl shadow-black px-10'>
                <div className=' h-20 border-b-4 border-blue-900'/>

                <div className='flex flex-row justify-around border-x-4 pt-5 border-blue-900'>
                    <img className="w-96 p-2 pl-4" alt="img" src='https://media.istockphoto.com/id/1326085372/vector/a-developer-programming-a-programmer-freelancer-workplace-the-coder-at-remote-work-from-home.jpg?s=612x612&w=0&k=20&c=5dgSU8vGPX-RsMPJ07dg8rWrmTtMnDGUWUReeQHPUko=' />

                    <div className='p-4 py-16 flex text-right flex-col font-bold text-4xl'>
                        <div className='text-sky-950'>Welcome to My Personal Website!</div>
                        <div className='text-blue-600'>- Jordan An</div>
                        <div className='text-lg pt-6 flex justify-end items-center px-3 font-medium'>
                            <NavLink to='/projects' className='border rounded-xl px-4 py-2 bg-rose-500 text-white hover:ring-2 hover:bg-rose-600 flex flex-row gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                                Projects
                            </NavLink>
                        </div>
                    </div>
                </div>

                
                <div className='flex flex-row justify-center border-x-4 pb-4 border-blue-900'>
                    <img className='w-96 h-96' alt="img" src='https://media.istockphoto.com/id/1178763127/vector/man-with-laptop-sitting-on-the-chair-freelance-or-studying-concept-cute-illustration-in-flat.jpg?s=612x612&w=0&k=20&c=gzk5c0q1DkndI2IFHIBCHIapEiFHm6JuG0-6C3xL-3I='></img>
                </div>

                <div className='h-20 border-t-4 border-blue-900'/>
            </div>

            <div className='w-14 h-14'/>
        </div>
    )
}

export default Home