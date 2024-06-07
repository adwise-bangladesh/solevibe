'use client'

import { addToCart, removeFromCart } from '@/service/features/cartSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    useFormik, Form, Field,
    FormikProvider, ErrorMessage,
} from "formik";
import * as Yup from "yup";

const Checkout = () => {
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

    const { cartItems, itemsPrice } = useSelector((state:any) => state.cart)
    const [qty, setQty] = useState(1)

    console.log('cartItems', cartItems)
    console.log('itemsPrice', itemsPrice)


    const removeFromCartHandler = (id, size) => {
        dispatch(removeFromCart({id, size}))
      }
    
      const addToCartHandler = async (product, qty) => {
        dispatch(addToCart({ ...product, qty }))
      }

      const initialValues: any = {
        name: "",
        phone_num: "",
        address: "",
        shipping_area: '70',
      };
      const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        phone_num: Yup.string().required("Phone Number is required"),
        address: Yup.string().required("Address is required"),

      })
      const onSubmit = async (values: any) => {
        console.log("Form Submit", values);
        const fd = new FormData();
        fd.append("training_name", values.training_name);
        fd.append("scheduling_unit", values.scheduling_unit);
        fd.append("capacity", values.capacity);
        fd.append("category_id", values.category_id);
      };
      const formik = useFormik({ initialValues, onSubmit, validationSchema });

    return (
        <div className="min-h-svh">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <h3 className="font-bold leading-9 mx-auto text-gray-900">
                        Please fill Up The Form To Complete The Order
                    </h3>
                </div>
                <FormikProvider value={formik} >
                    <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">
                        <Form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Your Name
                                </label>
                                <div className="mt-2">
                                    {/* <input
                                        id="name"
                                        name="name"
                                        type="name"
                                        autoComplete="name"
                                        required
                                        placeholder="Name"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    /> */}

                                    <Field
                                        onChange={formik.handleChange}
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Your Name"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <ErrorMessage name="name">
                                        {(msg) => (
                                            <div style={{ color: "red" }}>{msg}</div>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone_num" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mobile Number
                                </label>
                                <div className="mt-2">
                                    {/* <input
                                        id="phone_num"
                                        name="phone_num"
                                        type="phone_num"
                                        autoComplete="phone_num"
                                        required
                                        placeholder="Mobile"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    /> */}

                                    <Field
                                        onChange={formik.handleChange}
                                        type="text"
                                        name="phone_num"
                                        id="phone_num"
                                        placeholder="Enter Phone Number"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <ErrorMessage name="phone_num">
                                        {(msg) => (
                                            <div style={{ color: "red" }}>{msg}</div>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Address
                                </label>
                                <div className="mt-2">
                                    {/* <textarea 
                                    name="address" id="address"
                                    placeholder="Address"
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ></textarea> */}

                                    <Field
                                        as="textarea"
                                        onChange={formik.handleChange}
                                        name="address"
                                        id="address"
                                        placeholder="Enter Address"
                                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ></Field>
                                    <ErrorMessage name="address">
                                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Shipping Address
                                </label>
                                <div className="mt-2">
                                    <div className="">
                                        {/* <input type="radio" name="shipping_area" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="shipping_area" checked/>
                                        <label htmlFor="shipping_area" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Inside Dhaka City  (70 Tk)</label> */}
                                    
                                        {/* <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400 relative flex items-center p-3 rounded-full cursor-pointer">
                                            <Field type="radio" name="shipping_area" id='inside' value={'70'} className="mr-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-amber-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:before:bg-amber-500 hover:before:opacity-10"/>
                                            <span
                                                className="absolute transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-amber-500 peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </span>
                                            Inside Dhaka City  (70 Tk)
                                        </label> */}
                                        <div className="inline-flex items-center">
                                            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="on" data-ripple-dark="true">
                                            <Field type="radio" name="shipping_area" value={'70'}
                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border 
                                                border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 
                                                before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full 
                                                before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-600 
                                                checked:before:bg-gray-900 hover:before:opacity-10"
                                                id="on" />
                                            <span
                                                className="absolute text-red-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </span>
                                            </label>
                                            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="on">
                                            Inside Dhaka City  (70 Tk)
                                            </label>
                                        </div>
                                        <br />
                                        <div className="inline-flex items-center">
                                            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="on" data-ripple-dark="true">
                                            <Field type="radio" name="shipping_area" value={'130'}
                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border 
                                                border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 
                                                before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full 
                                                before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-600 
                                                checked:before:bg-gray-900 hover:before:opacity-10"
                                                id="on" />
                                            <span
                                                className="absolute text-red-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </span>
                                            </label>
                                            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="on">
                                            Outside Dhaka City  (130 Tk)
                                            </label>
                                        </div>
                                        {/* <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">
                                            <Field type="radio" name="shipping_area" id='outside' value={'130'} className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"/>
                                            Outside Dhaka City  (130 Tk)
                                        </label> */}
                                    </div>

                                    {/* <div className="flex">
                                        <input type="radio" name="shipping_area" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-radio" />
                                        <label htmlFor="shipping_area" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Outside Dhaka City  (130 Tk)</label>
                                    </div> */}
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#EC1E24] px-3 py-1.5 
                                    text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700
                                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                    focus-visible:outline-indigo-600"
                                >
                                    Confirm Order
                                </button>
                            </div>
                        </Form>
                    </div>
                    <div className="border border-gray-200 rounded-lg shadow p-5 bg-[#EFEFEF] my-10 mx-6">
                        {
                            cartItems?.map((product, idx)=>
                                <div className="grid grid-cols-7 gap-3 p-3 mb-3 bg-[#fff] border border-gray-200 rounded-lg" key={idx}>
                                    <div className="bg-blue-100 col-span-2">
                                        <img src={product?.image} className="w-screen" alt="Flowbite Logo" />
                                    </div>
                                    <div className="col-span-5">
                                        <h5 className="text-black">{product?.name}</h5>
                                        <span className="text-black">Size: { product?.size ? product?.size.replace(/\D/g, "") : 0 }</span>
                                        <div className="grid grid-cols-9 gap-3">
                                            <div className="col-span-5">
                                                <p className="text-lg font-bold text-red-600">TK {product?.price}</p>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="quantity-btn btn-group text-[#2f2d2df2]">
                                                    <button className="decrement-btn" onClick={ () => addToCartHandler(product, product?.qty > 1 ? product?.qty-1 : 1)}>
                                                        -
                                                    </button>
                                                    <p>{product?.qty}</p>
                                                    <button className="increment-btn" onClick={ () => addToCartHandler(product, product?.qty+1)}>
                                                        +
                                                    </button>
                                                </div>
                                                <button className='text-rose-900 float-right' onClick={ () => removeFromCartHandler(product?.id, product?.size)}>
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* <div className="grid grid-cols-7 gap-3 p-3 bg-[#fff] border border-gray-200 rounded-lg">
                            <div className="col-span-2">
                                <img src="../../../../images/belt.png" className="w-screen" alt="Flowbite Logo" />
                            </div>
                            <div className="col-span-5">
                                <h5 className="text-black">Elegance Medicated Loafer Shoes For Men SB-S544 | Executive</h5>
                                <span className="text-black">Size: 42</span>
                                <div className="grid grid-cols-7 gap-3">
                                    <div className="col-span-5">
                                        <p className="text-lg font-bold text-red-600">TK&nbsp;1,798</p>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="quantity-btn btn-group text-[#2f2d2df2]">
                                            <button className="increment-btn" onClick={handleIncrementCounter}>
                                                +
                                            </button>
                                            <p>{count}</p>
                                            <button className="decrement-btn" onClick={handleDecrementCounter}>
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="flex justify-center">
                            <h3 className="font-bold leading-9 mx-auto text-gray-900">
                                Total Bill
                            </h3>
                        </div>

                        <div className="grid grid-cols-7 gap-3 py-5 px-8 bg-[#fff] border border-gray-200 rounded-lg">
                            <div className="col-span-5">
                                <p className="text-lg text-black mb-2">Subtotal: </p>
                                <p className="text-lg text-black mb-2">Delivery Charge: </p>
                                <p className="text-lg text-black mb-2">Total: </p>
                            </div>
                            <div className="col-span-2"> 
                                <p className="text-lg text-red-600 mb-2"> TK {itemsPrice} </p>
                                <p className="text-lg text-red-600 mb-2"> TK {Number(formik?.values?.shipping_area)} </p>
                                <p className="text-lg text-red-600 mb-2"> TK {Number(formik?.values?.shipping_area) + Number(itemsPrice) } </p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            <p className="mx-auto text-center text-red-600">
                                If you Don’t Receive The Product Then Please Pay <br /> the Delivery Charge.
                            </p>
                        </div>
                    </div>
                </FormikProvider>

            </div>
        </div>
    )
}

export default Checkout;