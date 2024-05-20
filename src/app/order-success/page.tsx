'use client'

import { useState } from 'react';
import Image from 'next/image'
import thankyou from '@images/icons/thankyou.svg'
import imgSrc from '@images/images/payment-method.svg'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const OrderSuccess = () => {
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
                <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">  
                    <div className="flex flex-col items-center">
                        <Image
                            src={thankyou}
                            alt="payment-method"
                            className="mt-5"
                            width={96}
                            height={80}
                            quality={100}
                        />
                        <h2 className="text-xl font-bold mt-5 leading-9 text-gray-900">
                            Thank You.
                        </h2>
                        <h3 className="font-bold leading-9 text-gray-900">
                            Your Order Has Been Placed Successfully.
                        </h3>
                        <p className="text-gray-900">We will Call You Shortly. Please Keep the Phone With You</p>
                        <h4 className="font-bold leading-9 mt-6 mb-3 text-gray-900">
                            Total Bill
                        </h4>
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

                    <div className="mt-6">
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

export default OrderSuccess;