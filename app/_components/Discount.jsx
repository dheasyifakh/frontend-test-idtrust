"use client"
import React,{useState, useEffect} from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const products = [
  { id: 1, name: 'Nama Produk', price: 'Rp10.900', discount: '-50%', imgSrc: '/assets/img/product/Product.png' },
  { id: 2, name: 'Nama Produk', price: 'Rp120.899', discount: '-20%', imgSrc: '/assets/img/product/Product1.png' },
  { id: 3, name: 'Nama Produk', price: 'Rp67.402', discount: '-70%', imgSrc: '/assets/img/product/Product2.png' },
  { id: 4, name: 'Nama Produk', price: 'Rp49.909', discount: '-10%', imgSrc: '/assets/img/product/Product3.png' },
  { id: 5, name: 'Nama Produk', price: 'Rp80.128', discount: '-60%', imgSrc: '/assets/img/product/Product4.png' },
  { id: 6, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: '/assets/img/product/Product5.png' },
  { id: 7, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: '/assets/img/product/Product5.png' },
  { id: 8, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: '/assets/img/product/Product5.png' },
  { id: 9, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: '/assets/img/product/Product5.png' },
  { id: 10, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: '/assets/img/product/Product5.png' },
];
const Discount = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(6); // Default number of items to show per slide
  
    // Handle window resize to adjust the number of items to show
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setItemsToShow(2);
        } else {
          setItemsToShow(6);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Set the initial value
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const totalItems = products.length;
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex < totalItems - itemsToShow ? prevIndex + itemsToShow : 0
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - itemsToShow : totalItems - itemsToShow
      );
    };
  return (
    <div className="container mx-auto md:px-24 sm:px-1 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Diskon Hari Ini</h2>
        <a href="#!" className="text-primary">Lihat Semua</a>
      </div>
      <div className="relative group">
        <button
          className="absolute left-[-2px] text-white top-1/2 transform -translate-y-1/2 bg-primary px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-md"
          onClick={prevSlide}
        >
          <FiChevronLeft/>
        </button>
        <button
          className="absolute right-[-2px] text-white top-1/2 transform -translate-y-1/2 bg-primary px-4 py-2  opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-md"
          onClick={nextSlide}
        >
          <FiChevronRight/>
        </button>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className={`p-2 ${itemsToShow === 6 ? 'w-1/6' : 'w-1/2'}`} // w-1/6 for 6 items, w-1/2 for 2 items
                style={{ minWidth: `${100 / itemsToShow}%` }}
              >
                <div className="relative">
                  <div className="overflow-hidden hover:border-2 hover:border-primary hover:rounded-md">
                    <img src={product.imgSrc} alt={product.name} className="w-32 h-32 object-center mx-auto mt-4" />
                    <div className="p-4">
                      <h3 className="text-md">{product.name}</h3>
                      <p className="text-lg font-bold">{product.price}</p>
                    </div>
                  </div>
                  <div className="absolute top-[5px] right-0 bg-primary text-white text-xs px-2 py-1">
                    {product.discount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount