import React from 'react'
import video from "../Assets/video.mp4"
import {Link} from "react-router-dom"
const Login = () => {
    return (
        <div className="bg-gray-100 w-full flex items-center justify-center h-screen">
            {/* home floating button at top left */}
            <div className="absolute z-10 left-10 top-24 flex items-center justify-center h-fit p-4 w-fit active:scale-95 rounded-lg shadow-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600 duration-200 active:shadow-sm">
                <Link to="/" className="font-bold text-lg">Home</Link>
            </div>
            <video autoPlay loop muted className="absolute brightness-50 blur-sm object-cover w-full h-full">
                <source src={video} type="video/mp4" />
            </video>
            <div className="flex bg-white w-fit p-5 rounded-lg drop-shadow-md h-fit flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center space-y-5">
                    <div className="h-fit px-3 w-fit flex items-center cursor-pointer">
                        <p className="text-3xl font-bold">News<span className="text-blue-500">Stand</span></p>
                    </div>
                    <p className="text-3xl font-bold">Login</p>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <input type="text" placeholder="Username" className="w-96 h-10 rounded-lg border-2 border-gray-300 p-2 outline-none focus:border-blue-500 duration-200 ease-linear" />
                        <input type="password" placeholder="Password" className="w-96 h-10 rounded-lg border-2 border-gray-300 p-2 outline-none focus:border-blue-500 duration-200" />
                    </div>
                    <button className="text-lg font-semibold bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 duration-200 active:scale-95">Login</button>
                </div>
                <p className="text-lg text-gray-400 font-semibold mt-5">Don't have an account? <Link to="/register" className="text-blue-500 cursor-pointer">Register</Link></p>
            </div>
        </div>
    )
}

export default Login