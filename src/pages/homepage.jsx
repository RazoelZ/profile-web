import React from "react";
import Navbar from '../navbar/navbar';
import { BoxComponent, Footer } from '../components';
import cat from '../assets/images/cat.jpg'

import logo from '../assets/icons/css.png';

const Homepage = () => {
    return (
        <div className='px-44'>
            <Navbar />

            {/* Text paling atas */}
            <div className='flex flex-col m-auto'>
                <div className='text-6xl py-5 font-bold tracking-wide'>
                    <p className='gradient-text'>Hi! Im Dany Darmawan, a special human with some ability to love learning and working on teamwork.</p>
                </div>
                {/* biografi */}
                <div className='flex justify-between gap-x-9 mt-10'>
                    <img className='rounded-xl bg-contain h-44 gradient-border' src={cat} alt="" width={150} height={150} />
                    <div className='h-full '>
                        <h1 className='text-3xl font-bold text-[#FBFBFB] mb-5'>Hello, I'm Dany Darmawan</h1>
                        <p className='text-2xl text-justify text-[#D6D6D6]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a labore aut repellendus deleniti, corrupti voluptatem tempora iusto deserunt minus rerum nisi porro ipsam ullam sit similique aspernatur nesciunt delectus.</p>
                    </div>
                </div>
            </div>
            {/* what do i do */}
            <div className='flex flex-col mx-auto my-20'>
                <div className='flex gap-x-5'>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl font-bold text-[#FBFBFB] mb-5'>What do I do?</h1>
                        <p className='text-xl text-justify text-[#D6D6D6]'>I'm a software engineer based in Indonesia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, atque. lorem100</p>
                    </div>
                    <BoxComponent />
                    <BoxComponent />
                </div>
            </div>
            <h1 className="text-4xl font-bold text-[#FBFBFB] my-14">Featured Skills</h1>
            <div className="flex my-14 gap-x-4">
                <div className="bg-[#323443] text-[#EFF6FF] p-5 rounded-md w-1/2">
                    <ul className="flex flex-wrap gap-4 mt-10">
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                    </ul>
                </div>
                <div className="px-5 w-1/2">
                    <h1 className="text-lg mb-4 text-[#DEDEDE]">Development</h1>
                    <h1 className="text-4xl mb-4 text-white"> Framework</h1>
                    <p className="text-[#DEDEDE] text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus recusandae itaque illum officiis impedit, reprehenderit doloribus asperiores qui voluptas est ullam distinctio vel soluta! Impedit doloremque at praesentium veritatis! Velit architecto excepturi nihil, sed iste enim tempore delectus ex obcaecati amet asperiores, quia reprehenderit consequatur veritatis, dicta sit natus maiores.</p>
                </div>
            </div>
            <div className="flex my-14 gap-x-4">
                <div className="px-5 w-1/2">
                    <h1 className="text-lg mb-4 text-[#DEDEDE] text-end">Mastered Language</h1>
                    <h1 className="text-4xl mb-4 text-white text-end"> Programming Language</h1>
                    <p className="text-[#DEDEDE] text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus recusandae itaque illum officiis impedit, reprehenderit doloribus asperiores qui voluptas est ullam distinctio vel soluta! Impedit doloremque at praesentium veritatis! Velit architecto excepturi nihil, sed iste enim tempore delectus ex obcaecati amet asperiores, quia reprehenderit consequatur veritatis, dicta sit natus maiores.</p>
                </div>
                <div className="bg-[#323443] text-[#EFF6FF] p-5 rounded-md w-1/2">
                    <ul className="flex flex-wrap gap-4 mt-10">
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div >

    );
}
export default Homepage;