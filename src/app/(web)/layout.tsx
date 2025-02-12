import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const WebLayout = ({ children }: any) => {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}

export default WebLayout;