'use client'

import Navbar from "@/components/navbar/Navbar";
import StarRating from "react-rating-stars-component";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Footer from "@/components/footer/Footer";

export default function ProductList() {
    const [rating, setRating] = useState(0);
    const router = useRouter();

    const handleStarClick = (nextValue:any, prevValue:any, name:any) => {
        setRating(nextValue);
    }
    const linkTo = () => {
        router.push('/product');
      };
    return (
        <div className="min-h-svh">
            <Navbar />
            <div className="banner w-100">
                <img src="../../../../images/banner1.svg" className="w-screen" alt="Flowbite Logo" />
            </div>
            <div className="container mx-auto ">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 mt-6">
                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="/product">
                            <img src="../../../../images/belt.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="/product">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>
                    
                    <div className="max-w-sm m-3 bg-white relative border border-gray-200 rounded-lg shadow">
                        <a href="/product">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="/product">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>

                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="/product">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="/product">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                            
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>
                    
                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="/product">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="/product">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>
                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="#">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>
                    <div className="relative max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                        </a>
                        <div className="p-5 pb-[35%]">
                            <a href="#">
                                <h5 className="text-center mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 text-black">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h5>
                            </a>
                            <div className="flex justify-center my-3">
                                <StarRating 
                                    value={rating} 
                                    onStarClick={(nextValue, prevValue, name) => 
                                        handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="pricing flex justify-center mb-3">
                                <p className="regular text-lg text-black line-through pr-3">TK2000</p>
                                <p className="discount text-lg font-bold text-red-600">TK1,798</p>
                            </div>
                        </div>
                        <button className="inset-center uppercase w-9/12 py-2 text-sm 
                            font-medium text-center text-white bg-red-700 
                            rounded-lg hover:bg-red-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 
                            dark:bg-red-600 dark:hover:bg-red-700 
                            dark:focus:ring-red-800"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
