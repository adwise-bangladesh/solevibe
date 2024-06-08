'use client'

import { useEffect, useState } from 'react';
import StarRating from "react-rating-stars-component";
import Link from 'next/link'
import { idEncryption } from '@/service/helpers/DataHelper';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Product = ({product, key}) => {
    const [rating, setRating] = useState(0);
    const router = useRouter();
    // const handleStarClick = (nextValue:any, prevValue:any, name:any) => {
    //     setRating(nextValue);
    // }
    console.log('product', product)
    const id = product?.id
    const productId = idEncryption(id)

    const temp = {
        id: product?.id,
        average_rating : product?.average_rating,
        attributes : product?.attributes,
        backorders : product?.backorders,
        backorders_allowed : product?.backorders_allowed,
        catalog_visibility : product?.catalog_visibility,
        categories : product?.categories,
        cross_sell_ids : product?.cross_sell_ids,
        // date_created : product?.date_created,
        // date_created_gmt : product?.date_created_gmt,
        // date_modified : product?.date_modified,
        // date_modified_gmt : product?.date_modified_gmt,
        // date_on_sale_from : product?.date_on_sale_from,
        // date_on_sale_to : product?.date_on_sale_to,
        // default_attributes : product?.default_attributes,
        description : product?.description,
        // dimensions : product?.dimensions,
        // download_expiry : product?.download_expiry,
        // download_limit : product?.download_limit,
        // downloadable : product?.downloadable,
        // downloads : product?.downloads,
        // external_url : product?.external_url,
        // featured : product?.featured,
        // grouped_products : product?.grouped_products,
        // has_options : product?.has_options,
        images : product?.images,
        // low_stock_amount : product?.low_stock_amount,
        // manage_stock : product?.manage_stock,
        // menu_order : product?.menu_order,
        // meta_data : product?.meta_data,
        name : product?.name,
        // on_sale : product?.on_sale,
        // parent_id : product?.parent_id,
        // permalink : product?.permalink,
        price : product?.price,
        // purchasable : product?.purchasable,
        // purchase_note : product?.purchase_note,
        rating_count : product?.rating_count,
        regular_price : product?.regular_price,
        // related_ids : product?.related_ids,
        // reviews_allowed : product?.reviews_allowed,
        // sale_price : product?.sale_price,
        // shipping_class : product?.shipping_class,
        // shipping_class_id : product?.shipping_class_id,
        // shipping_required : product?.shipping_required,
        // shipping_taxable : product?.shipping_taxable,
        // short_description : product?.short_description,
        sku: product?.sku,
        // slug : product?.slug,
        // sold_individually : product?.sold_individually,
        status : product?.status,
        // stock_quantity : product?.stock_quantity,
        // stock_status : product?.stock_status,
        // tags : product?.tags,
        // type : product?.type,
        // variations : product?.variations,
    }

    

    useEffect(() => {
        if (typeof window !== 'undefined') {
          // Set data in localStorage
          localStorage.setItem('myKey', JSON.stringify(product));
        }
      }, []);
    const orderNow = () => {
        // Cookies.remove('product_solo')
        Cookies.set('product_s', JSON.stringify(temp));
        console.log('product_solo:', Cookies.get('product_s'))
        setTimeout(
            ()=>router.push(`/product/${product?.slug ? product?.slug : product?.name?.replace(/\s+/g, '-')}?product=${productId}`), 500
        )
    }

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
                    {/* <Link href={} > */}
                        <button onClick={orderNow} className="uppercase py-2 text-sm 
                            font-medium text-center text-white bg-red 
                            rounded hover:bg-red flex-auto w-full"
                        >
                            Order Now
                        </button>
                    {/* </Link> */}
                </div>
            </div>
        </>
    )
}

export default Product