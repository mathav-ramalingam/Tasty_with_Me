import React from 'react'
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";
import banner6 from "../images/banner6.jpg";

const images = [banner1 , banner2, banner3, banner4, banner5, banner6]

export const Header = () => {
  return (
    <>
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
        <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>Taste the World</h1>
        <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full'> Welcome to Flavourverse, your passport to culinary adventure! 
            <br className='hidden md:block'/> Discover a treasure trove of delectable recieps from around the globe.
        </p>
    </div>
    </>
  );
};
