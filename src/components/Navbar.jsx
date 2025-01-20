import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
    const [open, setOpen] = useState(false);
    const user = true;
    const toggleMenu = () => {
        setOpen((prev) => !prev); // Toggle the menu
    };

    return (
        <nav className={`flex justify-between items-center p-6 bg-white shadow-md relative z-10 sm:block ${open ? 'block' : 'hidden sm:block'}`}>
            <div className="flex items-center space-x-8">
                <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
                    <img src="/logo.png" alt="Logo" className="w-7" />
                    <span className="hidden sm:block">LamaEstate</span>
                </Link>
                <div className="hidden sm:flex space-x-6 text-gray-700">
                    <Link to="/" className="hover:text-gray-900">Home</Link>
                    <Link to="/about" className="hover:text-gray-900">About</Link>
                    <Link to="/contact" className="hover:text-gray-900">Contact</Link>
                    <Link to="/" className="hover:text-gray-900">Agents</Link>
                </div>
            </div>

            <div className="flex items-center space-x-6">
                {user ? (
                    <div className="flex items-center space-x-4">
                        <Avatar
                            alt="User Avatar"
                            src="https://images.pexels.com/photos/30356380/pexels-photo-30356380/free-photo-of-historic-tower-in-krakow-poland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            sx={{ width: 40, height: 40 }}
                        />
                        <span className="hidden sm:block text-gray-700">John Doe</span>
                        <Link to="/profile" className="relative">
                            <span className="text-gray-700">Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="text-gray-700 hover:text-gray-900">Sign in</Link>
                        <Link to="/register" className="bg-yellow-400 py-2 px-4 rounded-lg hover:bg-yellow-500">
                            Sign up
                        </Link>
                    </>
                )}

                {/* Mobile Menu Icon */}
                <div className="sm:hidden">
                    <IconButton onClick={toggleMenu}>
                        {open ? <CloseIcon sx={{ color: "white" }} /> : <MenuIcon sx={{ color: "black" }} />}
                    </IconButton>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`sm:hidden absolute top-0 right-0 bg-black text-white h-screen w-3/4 transform transition-all duration-300 ease-in-out ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="absolute top-4 right-4 z-10">
                    <IconButton onClick={toggleMenu}>
                        <CloseIcon sx={{ color: "white" }} />
                    </IconButton>
                </div>

                <div className="flex flex-col items-center justify-start h-full space-y-6 text-xl overflow-y-auto">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/" onClick={toggleMenu}>Contact</Link>
                    <Link to="/agents" onClick={toggleMenu}>Agents</Link>
                    <Link to="/login" onClick={toggleMenu}>Sign in</Link>
                    <Link to="/register" onClick={toggleMenu}>Sign up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
