import { useState } from 'react';
import StarRating from "react-rating-stars-component";

const Product = ({product, key}) => {
    const [rating, setRating] = useState(0);
    // const handleStarClick = (nextValue:any, prevValue:any, name:any) => {
    //     setRating(nextValue);
    // }
    console.log(product)
    return(
        <>
            <div className="relative max-w-sm m-3 bg-grey products rounded" id={key}>
                <a href="/web/product">
                    <img src={product?.images[0]?.src} className="w-screen" alt="Flowbite Logo" />
                    <div className="p-1">
                            <h5 className="text-center text-sm font-bold tracking-tight text-gray-900 text-black">
                                {/* Casual Nubuck Lace-Up Shoe For Men SB-S559 | Premium */}
                                {product?.name}
                            </h5>
                        <div className="flex justify-center">
                            <StarRating 
                                edit={false}
                                isHalf={true}
                                value={4.5} 
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
                                        <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">TK {product?.regular_price}</p>
                                        <p className="discount text-lg font-bold text-red">TK {product?.sale_price}</p>
                                    </>
                                ):(
                                    <p className="discount text-lg font-bold text-red">TK {product?.price}</p>
                                )
                            }
                        </div>
                    </div>
                    <button className="uppercase py-2 text-sm 
                        font-medium text-center text-white bg-red 
                        rounded hover:bg-red flex-auto w-full"
                    >
                        Order Now
                    </button>
                </a>
            </div>
        </>
    )
}

export default Product