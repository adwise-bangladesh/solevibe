
import Navbar from "@/components/navbar/Navbar";
import { useGetAllProductsQuery } from "@/service/features/products/ProductsApi";
import Product from "./product";
import { BulletList } from 'react-content-loader'
import Footer from "@/components/footer/Footer";
import { getProducts, setProducts } from "../../../service/features/data-service";


const ProductList = () => {
    // const {data, isLoading } = useGetAllProductsQuery({});
    const data = getProducts()
    return (
        <div className="min-h-svh">
            <Navbar />
            <div className="banner w-100">
                <div 
                    className="h-96 w-full bg-cover bg-center bg-no-repeat 
                    bg-[url('https://backend.solevibe.xyz/banner/mobile/banner1.jpg')] 
                    lg:bg-[url('https://backend.solevibe.xyz/banner/desktop/banner1.jpg')]"
                ></div>
            </div>
            <div className="container mx-auto ">
                {/* {isLoading ? <div className="overflow-hidden"><ProductListLoader /></div> : ''} */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 mt-6 mb-6">
                    {
                        data ? data?.map((product)=> {
                            if (product.status == "publish") return <Product product={product} key={product?.id} />
                        })
                        : <p>No data found</p>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductList
