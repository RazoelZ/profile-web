import React from "react";

const BoxComponent = (props) => {
    return (
        <div className='p-3 flex flex-col justify-center items-center relative w-4/5 h-44 bg-[#323443] rounded-lg'>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#323443] w-11 h-11 rounded-full z-10 gradient-border-circle overflow-auto">
                {/* Circle element */}
            </div>
            <h2 className="bg-[#323443] font-semibold text-[#FAFAF9]"> WEB DEVELOPTMENT</h2>
            <p className="bg-[#323443] text-center text-[#EFEDE8] mt-2">You will receive a customized plan for your fitness journey, and lots of support.</p>
        </div>
    );
}

export default BoxComponent;
