import React from "react";

const Navbar = () => {
    return (
        <div className="">
            <nav>
                <div className="flex justify-between py-8 border-b-2 border-[#4D4D4D]">
                    <div>
                        <p className="text-white font-bold hover:scale-110 duration-300">Razoel</p>
                    </div>
                    <div className="flex space-x-5">
                        <a href="#home" className="text-white">Home</a>
                        <a href="#about" className="text-white">About</a>
                        <a href="#projects" className="text-white">Projects</a>
                        <a href="#contact" className="text-white">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;