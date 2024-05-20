'use client'

import Navbar from "@/components/navbar/Navbar";
import StarRating from "react-rating-stars-component";
import { useState } from 'react';
import Image from 'next/image'
import product from '@images/images/product.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import beltImg from '@images/images/belt.png';
import banner1 from '@images/images/banner1.svg';
import footwareSize from '@images/images/footware-size.svg';
import Footer from "@/components/footer/Footer";

const Checkout = () => {
    const [rating, setRating] = useState(0);
    const [productImg, setProductImg] = useState(product);
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

    console.log(productImg)

    function SampleNextArrow(props:any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
            />
        );
    }
    
    function SamplePrevArrow(props:any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settingsNext = {
        dots: false,
        infinite: true,
        speed: 500,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    
    return (
        <div className="min-h-svh">
            <Navbar />
            <div className="container lg:container xl:container 2xl:container mx-auto">
                <div className="flex justify-center">
                    <h3 className="font-bold leading-9 mx-auto text-gray-900">
                        Please fill Up The Form To Complete The Order
                    </h3>
                </div>

                <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">

                    <div className="block lg:hidden">

                        <Image
                            src={productImg}
                            alt="product"
                            width={0}
                            height={0}
                            // layout="fill"
                            objectFit="contain"
                            style={{ width: '100%', height: '450px',  borderRadius: '5px' }}
                            quality={100}
                        />
                        <div className="px-7 mt-3">
                            <Slider {...settings}>
                                <div className="text-black bg-[#f2f2f2] rounded-lg" >
                                    <Image
                                        src={product}
                                        onClick={ () => setProductImg(product)}
                                        alt="img1"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                    />
                                </div>
                                <div className="text-black bg-[green] rounded">
                                    <Image
                                        src={banner1}
                                        onClick={ () => setProductImg(banner1)}
                                        alt="product"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                    />
                                </div>
                                <div className="text-black bg-[red] rounded">
                                    <Image
                                        src={beltImg}
                                        onClick={ () => setProductImg(beltImg)}
                                        alt="product"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                    />
                                </div>
                                <div className="text-black bg-[blue] rounded-lg">
                                    <Image
                                        src={banner1}
                                        alt="product"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                    />
                                </div>
                            </Slider>
                        </div>
                        <h3 className="font-bold leading-9 mt-6 text-gray-900">
                            Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                        </h3>
                        <div className="rating-data">
                            <div className="grid grid-cols-8 py-2">
                                <div className="col-span-3 md:col-span-2">
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
                                <div className="col-span-8 md:col-span-5"> 
                                    <p className="text-gray-900 mt-[6px]">4.98/5.00 (175 customer Reviews)</p>
                                </div>
                            </div>
                        </div>
                        <p className="font-bold text-lg text-red-600 pr-3">CODE: SB-S544</p>
                        <p className="discount text-lg font-bold text-red-600">
                            PRICE: <span className="text-black text-base line-through">TK 2,500</span> TK 1,798
                        </p>
                        <div className="flex justify-center mt-3">
                            <h3 className="leading-9 mx-auto text-lg text-[#EC1E24]">
                                Please Select your Shoe Size
                            </h3>
                        </div>
                        <div className="flex flex-wrap justify-evenly bg-[#EC1E24] px-3 my-3 rounded">
                            <span className="select-size">Size 39</span>
                            <span className="select-size">Size 40</span>
                            <span className="select-size">Size 41</span>
                            <span className="select-size">Size 42</span>
                            <span className="select-size">Size 43</span>
                            <span className="select-size">Size 44</span>
                        </div>
                        <a href="/checkout" className="block text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 mb-3 rounded">
                            ORDER NOW
                        </a>
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mb-3 rounded">
                            ADD TO CART
                        </button>
                        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 mb-3 rounded">
                            WhatsApp Order
                        </button>
                        <button className="w-full bg-white text-black border border-black font-bold py-2 px-4 mb-3 rounded">
                            Call Now: 01926644575
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-2">
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-1">
                                        <div className="vartical-slider">
                                            <Slider {...settingsNext}>
                                                <div className="text-black bg-[#f2f2f2] rounded-lg" >
                                                    <Image
                                                        src={product}
                                                        onClick={ () => setProductImg(product)}
                                                        alt="img1"
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                                    />
                                                </div>
                                                <div className="text-black bg-[green] rounded">
                                                    <Image
                                                        src={banner1}
                                                        onClick={ () => setProductImg(banner1)}
                                                        alt="product"
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                                    />
                                                </div>
                                                <div className="text-black bg-[red] rounded">
                                                    <Image
                                                        src={beltImg}
                                                        onClick={ () => setProductImg(beltImg)}
                                                        alt="product"
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                                    />
                                                </div>
                                                <div className="text-black bg-[blue] rounded-lg">
                                                    <Image
                                                        src={banner1}
                                                        alt="product"
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                                    />
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="col-span-3" style={{paddingTop: '4%'}}>
                                        <Image
                                            src={productImg}
                                            alt="product"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '460px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h3 className="font-bold leading-9 mt-6 text-gray-900">
                                    Elegance Medicated Loafer Shoes For Men SB-S544 | Executive
                                </h3>
                                <div className="rating-data">
                                    <div className="grid grid-cols-8 py-2">
                                        <div className="col-span-3 md:col-span-2">
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
                                        <div className="col-span-8 md:col-span-5"> 
                                            <p className="text-gray-900 mt-[6px]">4.98/5.00 (175 customer Reviews)</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-bold text-lg text-red-600 pr-3">CODE: SB-S544</p>
                                <p className="discount text-lg font-bold text-red-600">
                                    PRICE: <span className="text-black text-base line-through">TK 2,500</span> TK 1,798
                                </p>
                                <div className="flex justify-center mt-3">
                                    <h3 className="leading-9 mx-auto text-lg text-[#EC1E24]">
                                        Please Select your Shoe Size
                                    </h3>
                                </div>
                                <div className="flex flex-wrap justify-evenly bg-[#EC1E24] px-3 my-3 rounded">
                                    <span className="select-size">Size 39</span>
                                    <span className="select-size">Size 40</span>
                                    <span className="select-size">Size 41</span>
                                    <span className="select-size">Size 42</span>
                                    <span className="select-size">Size 43</span>
                                    <span className="select-size">Size 44</span>
                                </div>
                                <a href="/checkout" className="block text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 mb-3 rounded">
                                    ORDER NOW
                                </a>
                                <button className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 mb-3 rounded">
                                    ADD TO CART
                                </button>
                                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 mb-3 rounded">
                                    WhatsApp Order
                                </button>
                                <button className="w-full bg-white text-black border border-black font-bold py-2 px-4 mb-3 rounded">
                                    Call Now: 01926644575
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">
                    <h3 className="font-bold leading-9 mx-auto text-gray-900">
                        DESCRIPTION
                    </h3>
                    <p className="text-black">Loafers for men. SSB Leather has a wide trendy collection of unique designs and great quality for men’s loafers of all ages 
                        at affordable prices. Best Price of SSB Leather in Bangladesh.
                    </p>
                    <Image
                        src={footwareSize}
                        alt="payment-method"
                        className="mt-4"
                        width={0}
                        height={0}
                        quality={100}
                        style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px' }} // optional
                    />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Checkout;