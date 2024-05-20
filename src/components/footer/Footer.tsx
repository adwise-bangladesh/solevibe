import Image from 'next/image'
import imgSrc from '@images/images/payment-method.svg'

const Footer = () =>{
    return(
        <div className="footer text-center bg-zinc-900 pt-10 pb-5">
            <h5 className="pb-4" >CORPORATE OFFICE</h5>
            <p className="pb-5 text-base">Road No 3, kamrangirchar, <br /> East Rasulpur, Dhaka, Bangladesh</p>
            <h5 className="pb-8">Call/ WhatsApp: 01926644575</h5>
            <h5>PAYMENT METHODS</h5>
            <div className="flex justify-center pt-3 pb-5">
                <Image
                    src={imgSrc}
                    alt="payment-method"
                    width={250}
                    height={400}
                    quality={100}
                />
            </div>
            <p className="text-xs" >copyright 2024 @Adwise</p>
        </div>
    )
}

export default Footer;