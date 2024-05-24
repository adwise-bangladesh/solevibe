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
                            <p className="regular text-sm text-grey font-bold line-through flex items-center pr-1">TK 2,000</p>
                            <p className="discount text-lg font-bold text-red">TK 1,798</p>
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