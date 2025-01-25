import Navbar from "../components//Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto px-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="flex-1 overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
