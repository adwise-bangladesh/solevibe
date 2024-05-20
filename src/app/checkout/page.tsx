'use client'

import { useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const Checkout = () => {
    const [rating, setRating] = useState(0);
    const handleStarClick = (nextValue:any, prevValue:any, name:any) => {
        setRating(nextValue);
    }
    let minValue = 0, maxValue = 100
    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        if (count < maxValue) {
        setCount((prevState) => prevState + 1);
        }
    };

    const handleDecrementCounter = () => {
        if (count > minValue) {
        setCount((prevState) => prevState - 1);
        }
    };
    return (
        <div className="min-h-svh">
            <Navbar />
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <h3 className="font-bold leading-9 mx-auto text-gray-900">
                        Please fill Up The Form To Complete The Order
                    </h3>
                </div>

                <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Your Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    placeholder="Name"
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone_num" className="block text-sm font-medium leading-6 text-gray-900">
                                Mobile Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone_num"
                                    name="phone_num"
                                    type="phone_num"
                                    autoComplete="phone_num"
                                    required
                                    placeholder="Mobile"
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                Address
                            </label>
                            <div className="mt-2">
                                <textarea 
                                name="address" id="address"
                                placeholder="Address"
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                Shipping Address
                            </label>
                            <div className="mt-2">
                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio" checked/>
                                    <label htmlFor="hs-default-radio" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Inside Dhaka City  (70 Tk)</label>
                                </div>

                                <div className="flex">
                                    <input type="radio" name="hs-default-radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-radio" />
                                    <label htmlFor="hs-checked-radio" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Outside Dhaka City  (130 Tk)</label>
                                </div>
                            </div>
                        </div>

                        

                        <div>
                            <a href="/order-success"
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#EC1E24] px-3 py-1.5 
                                text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700
                                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                focus-visible:outline-indigo-600"
                            >
                                Confirm Order
                            </a>
                        </div>
                    </form>
                </div>
                <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">
                    <div className="grid grid-cols-7 gap-3 p-3 bg-[#fff] border border-gray-200 rounded-lg">
                        <div className="bg-blue-100 col-span-2">
                            <img src="../../../../images/belt.png" className="w-screen" alt="Flowbite Logo" />
                        </div>
                        <div className="col-span-5">
                            <h5 className="text-black">Elegance Medicated Loafer Shoes For Men SB-S544 | Executive</h5>
                            <span className="text-black">Size: 42</span>
                            <div className="grid grid-cols-7 gap-3">
                                <div className="col-span-5">
                                    <p className="text-lg font-bold text-red-600">TK&nbsp;1,798</p>
                                </div>
                                <div className="col-span-2">
                                    <div className="quantity-btn btn-group text-[#2f2d2df2]">
                                        <button className="increment-btn" onClick={handleIncrementCounter}>
                                            +
                                        </button>
                                        <p>{count}</p>
                                        <button className="decrement-btn" onClick={handleDecrementCounter}>
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-3 p-3 bg-[#fff] border border-gray-200 rounded-lg">
                        <div className="col-span-2">
                            <img src="../../../../images/belt.png" className="w-screen" alt="Flowbite Logo" />
                        </div>
                        <div className="col-span-5">
                            <h5 className="text-black">Elegance Medicated Loafer Shoes For Men SB-S544 | Executive</h5>
                            <span className="text-black">Size: 42</span>
                            <div className="grid grid-cols-7 gap-3">
                                <div className="col-span-5">
                                    <p className="text-lg font-bold text-red-600">TK&nbsp;1,798</p>
                                </div>
                                <div className="col-span-2">
                                    <div className="quantity-btn btn-group text-[#2f2d2df2]">
                                        <button className="increment-btn" onClick={handleIncrementCounter}>
                                            +
                                        </button>
                                        <p>{count}</p>
                                        <button className="decrement-btn" onClick={handleDecrementCounter}>
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <h3 className="font-bold leading-9 mx-auto text-gray-900">
                            Total Bill
                        </h3>
                    </div>

                    <div className="grid grid-cols-7 gap-3 py-5 px-8 bg-[#fff] border border-gray-200 rounded-lg">
                        <div className="col-span-5">
                            <p className="text-lg text-black mb-2">Subtotal: </p>
                            <p className="text-lg text-black mb-2">Delivery Charge: </p>
                            <p className="text-lg text-black mb-2">Total: </p>
                        </div>
                        <div className="col-span-2"> 
                            <p className="text-lg text-red-600 mb-2"> TK 1,798 </p>
                            <p className="text-lg text-red-600 mb-2"> TK 80 </p>
                            <p className="text-lg text-red-600 mb-2"> TK 1,998 </p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <p className="mx-auto text-center text-red-600">
                            If you Don’t Receive The Product Then Please Pay <br /> the Delivery Charge.
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Checkout;