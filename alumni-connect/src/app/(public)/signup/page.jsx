'use client'
import Link from 'next/link'
import { useState } from 'react'

const page = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [type,setType] = useState('password');
    const handleCheckboxToggle = () =>{
        setShowPassword(!showPassword);
        if(!showPassword) {
            setType('text');
        } else {
            setType('password');
        }
    }

    return (
        <>

            <div className="bg-gray-100 flex justify-center items-center h-screen">
                {/* Left: Image */}
                <div className="w-1/2 h-screen hidden lg:block">
                    <img
                        src="https://wallpaperswide.com/download/laptop-wallpaper-1440x900.jpg"
                        alt="Placeholder Image"
                        className="object-cover w-full h-full"
                        
                    />
                </div>
                {/* Right: Login Form */}
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4">Signup</h1>
                    <form action="#" method="POST">
                        {/* Username Input */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>
                        {/* Roll Number Input  */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600">
                                Roll no
                            </label>
                            <input
                                type="text"
                                id="roll"
                                name="roll"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>

                        {/* Email Input  */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">
                                Password
                            </label>
                            <input
                                type={type}
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>
                        {/* Remember Me Checkbox */}
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                className="text-blue-500"
                                checked={showPassword}
                                onChange={handleCheckboxToggle}
                            />
                            <label htmlFor="remember" className="text-gray-600 ml-2">
                                Show Password
                            </label>
                        </div>

                        {/* submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Register
                        </button>
                    </form>
                    {/* Sign up  Link */}
                    <div className="mt-6 text-blue-500 text-center">
                        <Link href="/login" className="hover:underline">
                            Login Here
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
