import React from "react";
import Navbar from '../navbar/navbar';
import '../index.css';
import cat from '../assets/cat.jpg'
import bangkit from '../assets/bangkit.png'
import haus from '../assets/Haus-Indonesia.jpg'
import desnet from '../assets/desnet-logo.png'

const Homepage = () => {
    return (
        <div className='px-44'>
            <Navbar />

            {/* Text paling atas */}
            <div className='w-5/6 flex flex-col m-auto'>
                <div className='text-6xl py-5 font-bold tracking-wide'>
                    <p className='gradient-text'>Hi! Im Dany Darmawan, a special human with some ability to love learning and working on teamwork.</p>
                </div>
                {/* biografi */}
                <div className='flex  justify-between gap-x-9 mt-10'>
                    <img className='rounded-xl bg-contain h-44 gradient-border' src={cat} alt="" width={150} height={150} />
                    <div className='h-full '>
                        <h1 className='text-3xl font-bold text-[#FBFBFB] mb-5'>Hello, I'm Dany Darmawan</h1>
                        <p className='text-2xl text-justify text-[#D6D6D6]'>I'm a software engineer based in Indonesia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, atque. lorem100</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-[#FBFBFB] mb-7'>See My CV!</h1>
                        <button className='w-40 h-16 text-[#C9C9C9] bg-[#323443] rounded-2xl transition duration-300 ease-in-out transform hover:bg-[#C9C9C9] hover:text-black'>
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
            {/* what do i do */}
            <div className='flex flex-col w-5/6 mx-auto mt-20 mb-96'>
                <div className='flex gap-x-5'>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl font-bold text-[#FBFBFB] mb-5'>What do I do?</h1>
                        <p className='text-xl text-justify text-[#D6D6D6]'>I'm a software engineer based in Indonesia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, atque. lorem100</p>
                    </div>
                    <div className='w-4/5 h-44 bg-[#323443]'>
                    </div>
                    <div className='w-4/5 h-44 bg-[#323443]'>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Homepage;