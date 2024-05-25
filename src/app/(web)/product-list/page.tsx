'use client'

import Navbar from "@/components/navbar/Navbar";

import { useGetAllProductsQuery } from "@/service/features/products/ProductsApi";
import Product from "./product";
import { BulletList } from 'react-content-loader'
import Footer from "@/components/footer/Footer";
import ProductListLoader from "@/components/loader/ProductListLoader";

const ProductList = () => {
    const {data, isLoading } = useGetAllProductsQuery({});
    // console.log( window?.innerWidth);
    // console.log(isLoading);
    return (
        <div className="min-h-svh">
            <Navbar />
            <div className="banner w-100">
                <div 
                    className="h-96 w-full bg-cover bg-center bg-no-repeat 
                    bg-[url('https://shop.shajgoj.com/wp-content/uploads/2023/01/Web-banner-coupon-Free-delivery-Web.jpg')] 
                    lg:bg-[url('https://shop.shajgoj.com/wp-content/uploads/2023/01/Web-banner-coupon-Free-delivery-2.jpg')]"
                ></div>
            </div>
            <div className="container mx-auto ">
                {isLoading ? <div className="overflow-hidden"><ProductListLoader /></div> : ''}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 mt-6 mb-6">
                    {
                        data ? data?.map((product)=> <Product product={product} key={product?.id} />) 
                        : <p>No data found</p>
                    }
                    {/* <Product product={''} key={''} /> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductList