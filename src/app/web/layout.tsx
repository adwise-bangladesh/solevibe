import Navbar from "@/components/web/Navbar";

const WebLayout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default WebLayout;