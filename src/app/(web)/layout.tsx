'use client'

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { hideLoading } from "@/service/features/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const WebLayout = ({ children }: any) => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(hideLoading())
    }, [dispatch])
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}

export default WebLayout;