'use client'

import { addToCart, emptyCart, removeFromCart, savePaymentMethod } from '@/service/features/cartSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'
import Image from 'next/image'
import imgSrc from '@images/icons/empty_cart.jpeg'
import Link from 'next/link';

const Checkout = () => {
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
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
    // ____________________
    
    const dispatch = useDispatch()
    const { cartItems, itemsPrice, paymentMethod } = useSelector((state:any) => state.cart)
    const [qty, setQty] = useState(1)
    const removeFromCartHandler = (id, size) => {
        Swal.fire({
            title: "Do you want to remove item?",
            showCancelButton: true,
            confirmButtonText: "Remove",
            confirmButtonColor: "#EC1E24",
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
            }
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(removeFromCart({id, size}))
            } 
        });
    }
    
    const addToCartHandler = async (product, qty) => {
        dispatch(addToCart({ ...product, qty }))
    }

    return (
        <>
            {
                cartItems.length > 0 ? 
                <div className="min-h-svh">
                    <div className="container mx-auto">
                        <div className="border rounded-lg p-3 bg-[#EFEFEF] my-5 mx-2">
                            {
                                cartItems?.map((product, idx)=>
                                    <div className="grid grid-cols-7 gap-3 p-3 mb-3 bg-[#fff] border border-gray-200 rounded-lg" key={idx}>
                                        <div className="col-span-2">
                                            <img src={product?.image} className="w-screen" alt="Flowbite Logo" />
                                        </div>
                                        <div className="col-span-5">
                                            <h5 className="text-black font-small">{product?.name}</h5>
                                            <span className="text-black font-small size-box">Size: { product?.size ? product?.size.replace(/\D/g, "") : 0 }</span>
                                            <div className="grid grid-cols-9 gap-3">
                                                <div className="col-span-5">
                                                    <p className="text-sm mt-2 font-bold text-red-600">TK {product?.price}</p>
                                                </div>
                                                <div className="col-span-4">
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <div className="col-span-2">
                                                            <div className="quantity-btn btn-group text-[#2f2d2df2]">
                                                                <button className="decrement-btn" onClick={ () => addToCartHandler(product, product?.qty > 1 ? product?.qty-1 : 1)}>
                                                                    -
                                                                </button>
                                                                <p>{product?.qty}</p>
                                                                <button className="increment-btn" onClick={ () => addToCartHandler(product, product?.qty+1)}>
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button className='text-rose-900 float-right' onClick={ () => removeFromCartHandler(product?.id, product?.size)}>
                                                                <i className="fas fa-trash mt-2"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            

                            <div className="grid grid-cols-7 gap-3 py-5 px-8 bg-[#fff] border border-gray-200 rounded-lg">
                                <div className="col-span-4">
                                    <p className="text-sm text-black mb-2 font-bold">Subtotal: </p>
                                </div>
                                <div className="col-span-3"> 
                                    <p className="text-sm text-red-600 mb-2 font-bold"> TK {itemsPrice} </p>
                                </div>
                            </div>
                            <Link href={'/checkout'} className="block text-center w-full bg-red-700 hover:bg-red-600 text-white uppercase text-sm  py-2 px-4 my-3 rounded">
                                Checkout
                            </Link>

                            <div className="flex justify-center mt-6">
                                <p className="mx-auto text-sm text-center text-red-600">
                                    If You Don’t Receive The Product Then Please Pay the Delivery Charge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                : 
                <div className="pb-7 bg-[#f7f7f7]">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center pt-3 pb-5">
                            <Image
                                src={imgSrc}
                                alt="payment-method"
                                width={250}
                                height={400}
                                quality={100}
                            /> 
                            <br />
                            <h2 className='text-zinc-800' >No items found!</h2>

                            <Link href={'/'}
                            className="rounded-md bg-[#28a745] px-3 py-1.5 mt-3
                            text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-900
                            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                            focus-visible:outline-indigo-600"
                            >
                                Shopping Now
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Checkout;
