'use client'

import { idDecryption } from "@/service/helpers/DataHelper";
import ProductDetails from "./product-details";
import { getSingleProduct } from "@/service/features/data-service";
import Image from 'next/image'
import footwareSize from '@images/images/footware-size.svg';
import Cookies from 'js-cookie';
import { useGetSingleProductQuery } from "@/service/features/products/ProductsApi";
import environment from "@/environments/environment";

const SingleProduct = ({searchParams}) => {
    const tmpCode = Number(searchParams.product);
    const id = idDecryption(tmpCode);
    let product:any
    const value = localStorage.getItem('solo_product');
    
    if(value){
        console.log('value exist')
        product = JSON.parse(value!)
    }else{ 
        const {data, isLoading } = useGetSingleProductQuery(id)
        product = data
    }
    
    // const product = getSingleProduct(id);

    return (
        <>
            <div className="min-h-svh">
                <div className="container lg:container xl:container 2xl:container mx-auto">
                    <div className="my-10 mx-3">
                        <ProductDetails data={product}/>
                    </div>

                    <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">
                        <h3 className="font-bold leading-9 mx-auto text-gray-900">
                            DESCRIPTION
                        </h3>
                        {/* <div 
                            className="text-black" 
                            dangerouslySetInnerHTML={{ __html:product?.description}}
                        ></div> */}
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
            </div>
            
        </>
    )
}


export default SingleProduct;
