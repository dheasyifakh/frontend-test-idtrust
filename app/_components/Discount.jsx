import React from 'react';

const products = [
  { id: 1, name: 'Nama Produk', price: 'Rp10.900', discount: '-50%', imgSrc: '/assets/img/product/Product.png' },
  { id: 2, name: 'Nama Produk', price: 'Rp120.899', discount: '-20%', imgSrc: '/assets/img/product/Product1.png' },
  { id: 3, name: 'Nama Produk', price: 'Rp67.402', discount: '-70%', imgSrc: '/assets/img/product/Product2.png' },
  { id: 4, name: 'Nama Produk', price: 'Rp49.909', discount: '-10%', imgSrc: '/assets/img/product/Product3.png' },
  { id: 5, name: 'Nama Produk', price: 'Rp80.128', discount: '-60%', imgSrc: '/assets/img/product/Product4.png' },
  { id: 6, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: '/assets/img/product/Product5.png' },
//   { id: 7, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: 'path/to/image6.jpg' },
//   { id: 8, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: 'path/to/image6.jpg' },
//   { id: 9, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: 'path/to/image6.jpg' },
//   { id: 10, name: 'Nama Produk', price: 'Rp59.093', discount: '-70%', imgSrc: 'path/to/image6.jpg' },
];
const Discount = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
  return (
    <div className="container mx-auto md:px-24 sm:px-1 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Diskon Hari Ini</h2>
        <a href="#!" className="text-primary">Lihat Semua</a>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="p-2">
          <div className="relative">
            <div className=" overflow-hidden shadow-lg hover:border-2 hover:border-primary">
              <img src={product.imgSrc} alt={product.name} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-md ">{product.name}</h3>
                <p className="text-lg font-bold">{product.price}</p>
              </div>
            </div>
            <div className="absolute top-[-10px] right-[-14px] bg-primary text-white text-xs px-2 py-1">{product.discount}</div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Discount