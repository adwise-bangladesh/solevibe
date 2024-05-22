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
            <div className="h-96 w-full bg-cover bg-center bg-no-repeat	 bg-[url('https://shop.shajgoj.com/wp-content/uploads/2023/01/Web-banner-coupon-Free-delivery-Web.jpg')] lg:bg-[url('https://shop.shajgoj.com/wp-content/uploads/2023/01/Web-banner-coupon-Free-delivery-2.jpg')]"></div>

            </div>
            <div className="container mx-auto ">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 mt-6 mb-6">
                    <div className="relative max-w-sm m-3 bg-grey products">
                        <a href="/product">
                            <img src="../../../../images/belt.png" className="w-screen" alt="Flowbite Logo" />
                            <div className="p-1">
                                    <h5 className="text-center text-sm font-bold tracking-tight text-gray-900 text-black">
                                        Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium
                                    </h5>
                                <div className="flex justify-center">
                                    <StarRating 
                                        edit={false}
                                        isHalf={true}
                                        value={4.5} 
                                        starCount={5}
                                        starColor={'#ffb400'}
                                        emptyStarColor={'#ccc'}
                                        size={20}
                                    />
                                </div>
                                <div className="pricing flex justify-center mb-3">
                                    <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">TK 2,000</p>
                                    <p className="discount text-lg font-bold text-red">TK 1,798</p>
                                </div>
                            </div>
                            <button className="uppercase py-2 text-sm 
                                font-medium text-center text-white bg-red 
                                rounded hover:bg-red flex-auto w-full"
                            >
                                Order Now
                            </button>
                        </a>
                    </div>
                    <div className="relative max-w-sm m-3 bg-grey products">
                        <a href="/product">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                            <div className="p-1">
                                    <h5 className="text-center text-sm font-bold tracking-tight text-gray-900 text-black">
                                        Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium
                                    </h5>
                                <div className="flex justify-center">
                                    <StarRating 
                                        edit={false}
                                        isHalf={true}
                                        value={4.5} 
                                        starCount={5}
                                        starColor={'#ffb400'}
                                        emptyStarColor={'#ccc'}
                                        size={20}
                                    />
                                </div>
                                <div className="pricing flex justify-center mb-3">
                                    <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">TK 2,000</p>
                                    <p className="discount text-lg font-bold text-red">TK 1,798</p>
                                </div>
                            </div>
                            <button className="uppercase py-2 text-sm 
                                font-medium text-center text-white bg-red 
                                rounded hover:bg-red flex-auto w-full"
                            >
                                Order Now
                            </button>
                        </a>
                    </div>

                    <div className="relative max-w-sm m-3 bg-grey products">
                        <a href="/product">
                            <img src="../../../../images/shoes.png" className="w-screen" alt="Flowbite Logo" />
                            <div className="p-1">
                                    <h5 className="text-center text-sm font-bold tracking-tight text-gray-900 text-black">
                                        Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium
                                    </h5>
                                <div className="flex justify-center">
                                    <StarRating 
                                        edit={false}
                                        isHalf={true}
                                        value={4.5} 
                                        starCount={5}
                                        starColor={'#ffb400'}
                                        emptyStarColor={'#ccc'}
                                        size={20}
                                    />
                                </div>
                                <div className="pricing flex justify-center mb-3">
                                    <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">TK 2,000</p>
                                    <p className="discount text-lg font-bold text-red">TK 1,798</p>
                                </div>
                            </div>
                            <button className="uppercase py-2 text-sm 
                                font-medium text-center text-white bg-red 
                                rounded hover:bg-red flex-auto w-full"
                            >
                                Order Now
                            </button>
                        </a>
                    </div>
                    <div className="relative max-w-sm m-3 bg-grey products">
                        <a href="/product">
                            <img src="../../../../images/belt.png" className="w-screen" alt="Flowbite Logo" />
                            <div className="p-1">
                                    <h5 className="text-center text-sm font-bold tracking-tight text-gray-900 text-black">
                                        Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium
                                    </h5>
                                <div className="flex justify-center">
                                    <StarRating 
                                        edit={false}
                                        isHalf={true}
                                        value={4.5} 
                                        starCount={5}
                                        starColor={'#ffb400'}
                                        emptyStarColor={'#ccc'}
                                        size={20}
                                    />
                                </div>
                                <div className="pricing flex justify-center mb-3">
                                    <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">TK 2,000</p>
                                    <p className="discount text-lg font-bold text-red">TK 1,798</p>
                                </div>
                            </div>
                            <button className="uppercase py-2 text-sm 
                                font-medium text-center text-white bg-red 
                                rounded hover:bg-red flex-auto w-full"
                            >
                                Order Now
                            </button>
                        </a>
                    </div>
                    <div className="relative max-w-sm m-3 bg-grey products">
                        <a href="/product">
                            <img src="../../../../images/belt.png" className="w-screen" alt="Flowbite Logo" />
                            <div className="p-1">
                                    <h5 className="text-center text-sm font-bold tracking-tight text-gray-900 text-black">
                                        Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium
                                    </h5>
                                <div className="flex justify-center">
                                    <StarRating 
                                        edit={false}
                                        isHalf={true}
                                        value={4.5} 
                                        starCount={5}
                                        starColor={'#ffb400'}
                                        emptyStarColor={'#ccc'}
                                        size={20}
                                    />
                                </div>
                                <div className="pricing flex justify-center mb-3">
                                    <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">TK 2,000</p>
                                    <p className="discount text-lg font-bold text-red">TK 1,798</p>
                                </div>
                            </div>
                            <button className="uppercase py-2 text-sm 
                                font-medium text-center text-white bg-red 
                                rounded hover:bg-red flex-auto w-full"
                            >
                                Order Now
                            </button>
                        </a>
                    </div>
                    <div className="relative max-w-sm m-3 bg-grey products">
                        <a href="/product">
                            <img src="../../../../images/belt.png" className="w-screen" alt="Flowbite Logo" />
                            <div className="p-1">
                                    <h5 className="text-center text-sm font-bold tracking-tight text-gray-900 text-black">
                                        Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium
                                    </h5>
                                <div className="flex justify-center">
                                    <StarRating 
                                        edit={false}
                                        isHalf={true}
                                        value={4.5} 
                                        starCount={5}
                                        starColor={'#ffb400'}
                                        emptyStarColor={'#ccc'}
                                        size={20}
                                    />
                                </div>
                                <div className="pricing flex justify-center mb-3">
                                    <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">TK 2,000</p>
                                    <p className="discount text-lg font-bold text-red">TK 1,798</p>
                                </div>
                            </div>
                            <button className="uppercase py-2 text-sm 
                                font-medium text-center text-white bg-red 
                                rounded hover:bg-red flex-auto w-full"
                            >
                                Order Now
                            </button>
                        </a>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
