import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Carousel from './CarouselImage';

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl py-16 sm:px-6 lg:px-8">
        <Carousel/>
      </div>
    </section>
    
  )
}

export default Hero