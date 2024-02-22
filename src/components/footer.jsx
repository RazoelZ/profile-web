import React from "react";
import linkedinn from "../assets/icons/linkedin.png";

const Footer = () => {
    return (
        <div className="flex flex-col border-t-2 border-[#4D4D4D] items-center h-10 text-[#EFF6FF] w-full pt-16 mt-44">
            <div className="flex gap-x-10 items-center m-auto text-sm pt-5">
                <a href="">Docs</a>
                <a href="">Notes</a>
                <a href="">Poliwork</a>
                <a href="">Starter</a>
                <a href="">Statistic</a>
            </div>
            <p className="text-sm mt-5 font-semibold">Reach Me Out</p>
            <div className="flex gap-x-5 items-center m-auto text-sm pt-5 pb-10">
                <a href="https://www.linkedin.com/in/abhishek-kumar-4b8a2b1a1/"><img src={linkedinn
                } alt="linkedin" className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-4b8a2b1a1/"><img src={linkedinn
                } alt="linkedin" className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-4b8a2b1a1/"><img src={linkedinn
                } alt="linkedin" className="w-6 h-6" /></a>
            </div>
        </div>

    );
}
export default Footer;