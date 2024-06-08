'use client'

import StarRating from "react-rating-stars-component";
import { useState, useEffect, Fragment } from 'react';
import Image from 'next/image'
import product from '@images/images/product.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import preImage from '@images/images/no-image.png';
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/service/features/cartSlice";
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { SnackbarContent } from "@mui/material";
import { ClassNames } from "@emotion/react";
import Cookies from 'js-cookie';

const ProductDetails = ({data, code}) => {
    // console.log('single product:', data)

    useEffect(()=>{
        const value = localStorage.getItem('myKey');
        console.log('product_solo:', JSON.parse(value!))
    })
    const [productImg, setProductImg] = useState(data?.images[0]?.src);
    const [size, setSize] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const dispatch = useDispatch()
    const { cartItems } = useSelector((state:any) => state.cart)
    const [qty, setQty] = useState(1)
    const addToCartHandler = () => {
      let newQty = qty
      console.log('qty', qty)
    //   if (increasePerClick) {
        const existItem = cartItems.find((x) => x.id === data.id && x.size == size)
        console.log('existItem', existItem)
        if (existItem) {
        //   if (existItem.qty + 1 <= product.countInStock) {
            newQty = existItem.qty + 1
        //   } else {
        //     return alert('No more product exist')
        //   }
        }
    //   }

        const product = {
            id: data?.id,
            name: data?.name,
            size: size,
            sku: data?.sku,
            price: data?.price,
            image: data?.images[0]?.src
        }
      dispatch(addToCart({ ...product, qty: newQty }))
    }

    const orderNow = () => {
        if(size){
            addToCartHandler();
            setTimeout(
                ()=>router.push(`/checkout`), 500
            )
        }
        else {
            handleClick()
            setError('Please Select your Shoe Size')
        }
    }

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

    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        // console.log('open', open)
        setOpen(true);
    };

    const handleClose = () => {
        // console.log('clicked')
        setOpen(false);
    };

    return (
        <>
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            // autoHideDuration={6000}
            onClose={handleClose}
            // message="Please Select your Shoe Size"
            // action={action}
            
        >
            <SnackbarContent style={{
                backgroundColor:'#da393de0',
                }}
                message={ 
                <div className="">
                    <i className="fas fa-exclamation-circle mr-2"></i> 
                    <span id="client-snackbar">Please Select your Shoe Size</span>
                    <span onClick={handleClose}>
                        <i className="fas fa-times float-right mt-0.5 cursor-pointer"></i>
                    </span>
                </div> 
                }
            />
        </Snackbar>

        <div className="block lg:hidden">
            <Image
                src={productImg ? productImg : preImage}
                alt="product"
                width={0}
                height={0}
                objectFit="contain"
                style={{ width: '100%', height: '100%',  borderRadius: '5px' }}
                quality={100}
            />
            <div className="px-7 mt-3">
                <Slider {...settings}>
                    {
                        // isLoading ? 
                        // <div className="rounded" >
                        //     <Image
                        //         src={preImage}
                        //         alt="product"
                        //         width={0}
                        //         height={0}
                        //         sizes="100vw"
                        //         style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                        //     /> 
                        // </div> :
                        data?.images?.map((image, idx)=>{
                            return(
                                <div className="rounded" key={idx}>
                                    <Image
                                        src={image?.src}
                                        onClick={ () => setProductImg(image?.src)}
                                        alt="img1"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} // optional
                                    />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <h3 className="text-xl font-bold leading-6 mt-6 text-gray-900">
                {/* Elegance Medicated Loafer Shoes For Men SB-S544 | Executive */}
                {data?.name}
            </h3>
            <div className="rating-data">
                <div className="grid grid-cols-8 py-2">
                    <div className="col-span-3 md:col-span-2">
                        <StarRating 
                            value={data?.average_rating} 
                            // onStarClick={(nextValue, prevValue, name) => 
                            //     handleStarClick(nextValue, prevValue, name)}
                            starCount={5}
                            starColor={'#ffb400'}
                            emptyStarColor={'#ccc'}
                            size={20}
                        />
                    </div>
                    <div className="col-span-8 md:col-span-5"> 
                        <p className="text-gray-900 mt-[6px]">{data?.average_rating}/5.00 ({data?.rating_count} customer Reviews)</p>
                    </div>
                </div>
            </div>
            <p className="font-bold text-lg text-red-600 pr-3">CODE: {data?.sku}</p>
            <div className="pricing flex justify-center mb-3">
                <p className="font-bold text-lg text-red-600 pr-3">PRICE:</p>
                {
                    data?.sale_price ? (
                        <>
                            <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">
                                TK {data?.regular_price}
                            </p>
                            <p className="discount text-lg font-bold text-red">TK {data?.sale_price}</p>
                        </>
                    ):(<p className="discount text-lg font-bold text-red">TK {data?.price}</p>)
                }
            </div>
            <div className="flex justify-center mt-3">
                <h3 className="leading-9 mx-auto text-lg text-[#EC1E24]">
                    Please Select your Shoe Size
                </h3>
            </div>
            <div className="flex flex-wrap justify-evenly bg-[#EC1E24] my-4 py-2 rounded">
                {
                    data?.attributes[0]?.options.map(
                        (option, idx) => <span key={idx}
                            className={`select-size ${option == size ? 'active' : ''} `} 
                            onClick={()=> {setSize(option == size ? '' : option); setError('')}}
                        >{option}</span>
                    )
                }
            </div>
            {

            }
            <a onClick={orderNow} className={`block text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 ${error ? '' : 'mb-3'}  rounded cursor-pointer`}>
                ORDER NOW
            </a>
            { error ? <p className="text-rose-900 mb-2">{error}</p> : ''}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mb-3 rounded">
                ADD TO CART
            </button>
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 mb-3 rounded">
                WhatsApp Order
            </button>
            <button className="w-full bg-white text-black border border-black font-bold py-2 px-4 mb-3 rounded">
                Call Now: 01926644575
            </button>
            {/* <button className="text-black" onClick={() => handleClick({ vertical: 'top', horizontal: 'right' })}>Open Snackbar</button> */}
        </div>
        {/* For large screen */}
        <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-1">
                            <div className="vartical-slider">
                                <Slider {...settingsNext}>
                                {
                                    // isLoading ? 
                                    // <Image
                                    //     src={preImage}
                                    //     alt="product"
                                    //     width={0}
                                    //     height={0}
                                    //     sizes="100vw"
                                    //     style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                    // /> :
                                    data?.images?.map((image, idx)=>{
                                        return(
                                            <div className="text-black bg-[green] rounded" key={1+idx}>
                                                <Image
                                                    src={image?.src}
                                                    onClick={ () => setProductImg(image?.src)}
                                                    alt="product"
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} // optional
                                                />
                                            </div>
                                        )
                                    })
                                }
                                </Slider>
                            </div>
                        </div>
                        <div className="col-span-3" style={{paddingTop: '4%'}}>
                            <Image
                                src={productImg ? productImg : preImage}
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
                        {data?.name}
                    </h3>
                    <div className="rating-data">
                        <div className="grid grid-cols-8 py-2">
                            <div className="col-span-3 md:col-span-2">
                                <StarRating 
                                    value={data?.average_rating} 
                                    // onStarClick={(nextValue, prevValue, name) => 
                                    //     handleStarClick(nextValue, prevValue, name)}
                                    starCount={5}
                                    starColor={'#ffb400'}
                                    emptyStarColor={'#ccc'}
                                    size={20}
                                />
                            </div>
                            <div className="col-span-8 md:col-span-5"> 
                            <p className="text-gray-900 mt-[6px]">{data?.average_rating}/5.00 ({data?.rating_count} customer Reviews)</p>
                            </div>
                        </div>
                    </div>
                    <p className="font-bold text-lg text-red-600 pr-3">CODE: SB-S544</p>
                    <p className="discount text-lg font-bold text-red-600">
                        PRICE: 
                        {
                            data?.sale_price ? (
                                <>
                                    <span className="text-black text-base line-through">TK {data?.regular_price}</span> {data?.sale_price}
                                </>
                            ):(<>TK {data?.price}</>)
                        }
                    </p>
                    <div className="flex justify-center mt-3">
                        <h3 className="leading-9 mx-auto text-lg text-[#EC1E24]">
                            Please Select your Shoe Size
                        </h3>
                    </div>
                    <div className="flex flex-wrap justify-evenly bg-[#EC1E24] px-3 my-3 rounded">
                    {
                        data?.attributes[0]?.options.map(
                            (option, idx) => <span key={11+idx}
                                className={`select-size ${option == size ? 'active' : ''} `} 
                                onClick={()=> {setSize(option == size ? '' : option); setError('')}}
                            >{option}</span>
                        )
                    }
                    </div>
                    <a onClick={orderNow} className={`block text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 ${error ? '' : 'mb-3'}  rounded cursor-pointer`}>
                        ORDER NOW
                    </a>
                    { error ? <p className="text-rose-900 mb-2">{error}</p> : ''}
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

        </>
    );
}

export default ProductDetails;