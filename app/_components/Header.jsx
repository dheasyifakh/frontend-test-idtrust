"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import { BiGlobe } from "react-icons/bi";
import { FaBeer, FaCoffee, FaApple, FaArrowLeft } from 'react-icons/fa';
const Header = () => {
    const [nav, setNav] = useState(false);
    const [selected, setSelected] = useState(null);

    const options = [
      { value: 'beer', label: 'Beer', icon: <FaBeer /> },
      { value: 'coffee', label: 'Coffee', icon: <FaCoffee /> },
      { value: 'apple', label: 'Apple', icon: <FaApple /> },
    ];
        // Toggle function to handle the navbar's display
    const handleNav = () => {
          setNav(!nav);
    };
      
  const Menu=[
    {
        id:1,
        name:'Home',
        path:'/'
    },
    {
        id:2,
        name:'Blog',
        path:'/blog'
    },
    {
        id:3,
        name:'Forum',
        path:'/'
    },
    {
        id:4,
        name:'Contact Us',
        path:'/'
    },
  ]
  return (
    <div className=''>
        <div className="md:flex justify-end mt-4 hidden">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <BiGlobe/>
                </span>
                <select
                    name="selectLanguage"
                    id="selectLanguage"
                    className="mt-1.5 w-full rounded-lg border border-neutral-400 text-gray-700 sm:text-sm p-2 px-6"
                >
                    <option value="Indonesia"> Bahasa Indonesia</option>
                    <option value="Inggris"> English</option>
                </select>
            </div>
            
            <Link href="#" className="inline-block text-primary px-5 py-3 text-sm font-medium">Masuk</Link>
            <Link href='/login' className='inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white'>Daftar</Link>
        </div>
        <div className="md:flex items-center gap-4 hidden pr-44">
            <Image src="/Logo.png" alt="logo"
                width={180} height={80}
            />

            <div className="relative w-full">
                <label for="Search" className="sr-only"> Search </label>
                <input
                    type="text"
                    id="Search"
                    placeholder="Cari di idshop"
                    className="w-full rounded-md border border-neutral-400 py-2.5 pe-10 shadow-sm sm:text-sm px-2"
                />
                <span className="absolute inset-y-0 end-0 grid w-52 place-content-center" style={{right: '-4rem'}}>
                    <button type="button" className=" bg-primary text-white px-3 py-1 rounded-md border">
                        Cari
                    </button>
                </span>
            </div>
            <div className="flex">
                <button>
                    <img src="/assets/img/cart.png" alt="" />
                </button>
            </div>
        </div>
        
        
        <div className="flex justify-between  p-2 md:hidden">
            <div className="relative w-2/3">
                <label for="Search" className="sr-only">Cari di idshop</label>
                <input
                    type="text"
                    id="Search"
                    placeholder="Cari di idshop"
                    className="w-full rounded-md border border-neutral-400 py-2.5 pe-10 shadow-sm sm:text-sm px-2"
                />
                
            </div>
            <div className="flex">
                <button>
                    <img src="/assets/img/cart.png" alt="" />
                </button>
            </div>
            <button className="rounded p-2 text-primary transition hover:bg-[#0A91AB33] px-4" onClick={handleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
        </div>
        {/* Mobile Navigation Menu */}
           <ul
            className={
              nav
                ? 'fixed md:hidden right-0 top-0 w-[90%] h-full bg-[#ffffff] ease-in-out duration-500 z-50 p-4 overflow-y-auto'
                : 'ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 right-[-100%]'
            }
          >
            <div className="flex justify-between">
                {/* Mobile Logo */}
                <img src="/Logo.png" className="w-1/2" alt="" />
                <button className="rounded p-2 text-primary transition hover:bg-[#0A91AB33] px-4" onClick={handleNav}>
                    <FaArrowLeft/>
                </button>
            </div>
            
            <div className="flex my-6">
                <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center px-3">
                        <BiGlobe/>
                    </span>
                    <select
                        name="selectLanguage"
                        id="selectLanguage"
                        className="mt-1.5 w-full rounded-lg border border-neutral-400 text-gray-700 sm:text-sm p-2 px-6"
                    >
                        <option value="Indonesia"> Bahasa Indonesia</option>
                        <option value="Inggris"> English</option>
                    </select>
                </div>
            </div>
      
            <div className="h-[40rem] grid grid-cols-1 gap-4 content-end">
                <Link href="#" className="inline-block text-primary px-5 py-3 w-full text-sm font-medium text-center">Masuk</Link>
                <Link href='/login' className='inline-block rounded-lg bg-primary px-5 py-3 w-full text-sm font-medium text-white text-center'>Daftar</Link>
            </div> 
            
          </ul>
    </div>
  )
}

export default Header