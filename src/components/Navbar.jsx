import React from 'react'
import { GrLanguage } from 'react-icons/gr'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex sticky top-0 z-10 items-center justify-between w-screen p-3 h-fit space-x-5 drop-shadow bg-white'>
            <div className="h-fit px-3 w-fit flex items-center cursor-pointer">
                <p className="text-3xl font-bold">News<span className="text-blue-500">Stand</span></p>
            </div>
            <div className="flex space-x-6 rounded-md focus:border-2 focus:border-blue-500 bg-gray-100 p-2 lg:p-4 w-[50%] items-center">

                <input type="text" className="w-full h-full  px-3 focus:outline-none bg-transparent" placeholder="Search for news" />
            </div>
            <div className="flex space-x-4 items-center">
                <Link to="/login" className="text-sm lg:text-lg font-semibold bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 duration-200 active:scale-95">Login</Link>
                <Link to="/register" className="text-sm lg:text-lg font-semibold bg-blue-500 text-white px-2 py-2 rounded-md shadow-md hover:bg-blue-600 duration-200 active:scale-95">Register</Link>
                <GrLanguage className="text-blue-500 text-2xl" />
            </div>
        </div>
    )
}

export default Navbar