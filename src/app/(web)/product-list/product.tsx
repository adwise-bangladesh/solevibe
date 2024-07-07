'use client'

import { useEffect, useState } from 'react';
import StarRating from "react-rating-stars-component";
import Link from 'next/link'
import { idEncryption } from '@/service/helpers/DataHelper';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import language from '../../../service/data/language.json'

const Product = ({product, key}) => {
    const [rating, setRating] = useState(0);
    const router = useRouter();
    const id = product?.id
    const productId = idEncryption(id)
    const orderNow = () => {
        if (typeof window !== 'undefined') {
            // Set data in localStorage
            localStorage.removeItem('solo_product');
            localStorage.setItem('solo_product', JSON.stringify(product));
        }
        setTimeout(
            ()=>router.push(`/product/${product?.slug ? product?.slug : product?.name?.replace(/\s+/g, '-')}?product=${productId}`), 200
        )
    }

    return(
        <>
            <Link href={`/product/${product?.slug ? product?.slug : product?.name?.replace(/\s+/g, '-')}?product=${productId}`} >
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
                    <button onClick={orderNow} className="uppercase py-2 text-sm 
                        font-medium text-center text-white bg-red 
                        rounded hover:bg-red flex-auto w-full"
                    >
                        {language.orderNow}
                    </button>
                </div>
            </div>
            </Link>
        </>
    )
}

export default Product
