'use client'

import { useState } from 'react';
import StarRating from "react-rating-stars-component";
import Link from 'next/link'
import { idEncryption } from '@/service/helpers/DataHelper';
import Image from 'next/image'

const Product = ({product, key}) => {
    const [rating, setRating] = useState(0);
    // const handleStarClick = (nextValue:any, prevValue:any, name:any) => {
    //     setRating(nextValue);
    // }
    console.log('product', product)
    const id = product?.id
    const productId = idEncryption(id)

    return(
        <>
            <div className="relative max-w-sm m-3 bg-grey products rounded" id={productId}>
                <div>
                    {/* <img src={product?.images[0]?.src} className="w-screen" alt="Flowbite Logo" /> */}
                    <Image 
                        src={product?.images[0]?.src} 
                        alt='product-image' 
                        width={0}
                        height={0}
                        objectFit="contain"
                        style={{ width: '100%', height: '100%',  borderRadius: '5px' }}
                        quality={100}
                    ></Image>
                    <div className="p-1">
                            <Link href={`/product/${product?.slug ? product?.slug : product?.name?.replace(/\s+/g, '-')}?product=${productId}`} >
                                <h5 className="text-center text-sm font-bold tracking-tight text-gray-900 text-black">
                                    {/* Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium */}
                                    {product?.name}
                                </h5>
                            </Link>
                        <div className="flex justify-center">
                            <StarRating 
                                edit={false}
                                isHalf={true}
                                value={product?.average_rating} 
                                starCount={5}
                                starColor={'#ffb400'}
                                emptyStarColor={'#ccc'}
                                size={18}
                            />
                        </div>
                        <div className="pricing flex justify-center mb-3">
                            {
                                product?.sale_price ? (
                                    <>
                                        <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">
                                            TK {product?.regular_price}
                                        </p>
                                        <p className="discount text-lg font-bold text-red">TK {product?.sale_price}</p>
                                    </>
                                ):(<p className="discount text-lg font-bold text-red">TK {product?.price}</p>)
                            }
                        </div>
                    </div>
                    <Link href={`/product/${product?.slug ? product?.slug : product?.name?.replace(/\s+/g, '-')}?product=${productId}`} >
                        <button className="uppercase py-2 text-sm 
                            font-medium text-center text-white bg-red 
                            rounded hover:bg-red flex-auto w-full"
                        >
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Product