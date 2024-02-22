import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between py-6 border-b-2 border-[#4D4D4D] text-xl">
                <div>
                    <p className="text-white font-bold hover:scale-110 duration-300">Razoel</p>
                </div>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/" className="text-white hover:text-[#4D4D4D] duration-300">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="text-white hover:text-[#4D4D4D] duration-300">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="text-white hover:text-[#4D4D4D] duration-300">Experience</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;