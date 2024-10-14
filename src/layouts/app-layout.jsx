
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <div className="grid-background ">

            </div>
            <main className="min-h-screen p-12">
                <Header />
                <Outlet />
            </main>
            <div className="p-10 text-center bg-gray-800 mt-10">Made by Tanjir Ahamed</div>
        </div>
    )
}

export default AppLayout