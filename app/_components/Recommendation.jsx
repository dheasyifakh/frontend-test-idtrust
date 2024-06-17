import React from 'react'

const products = [
    { id: 1, name: 'Nama Produk', price: 'Rp10.900', discount: '', imgSrc: '/assets/img/product/Product7.png', sold: "15rb" },
    { id: 2, name: 'Nama Produk', price: 'Rp120.899', discount: '-20%', imgSrc: '/assets/img/product/Product6.png', sold: "15rb" },
    { id: 3, name: 'Nama Produk', price: 'Rp67.402', discount: '-50%', imgSrc: '/assets/img/product/Product8.png', sold: "15rb" },
    { id: 4, name: 'Nama Produk', price: 'Rp49.909', discount: '-20%', imgSrc: '/assets/img/product/Product9.png', sold: "15rb" },
    { id: 5, name: 'Nama Produk', price: 'Rp80.128', discount: '-10%', imgSrc: '/assets/img/product/Product10.png', sold: "15rb" },
    { id: 6, name: 'Nama Produk', price: 'Rp59.093', discount: '-50%', imgSrc: '/assets/img/product/Product11.png', sold: "15rb" },
    { id: 7, name: 'Nama Produk', price: 'Rp59.093', discount: '-25%', imgSrc: '/assets/img/product/Product12.png', sold: "15rb" },
    { id: 8, name: 'Nama Produk', price: 'Rp59.093', discount: '', imgSrc: '/assets/img/product/Product13.png', sold: "15rb" },
    { id: 9, name: 'Nama Produk', price: 'Rp59.093', discount: '-10%', imgSrc: '/assets/img/product/Product14.png', sold: "15rb" },
    { id: 10, name: 'Nama Produk', price: 'Rp59.093', discount: '-50%', imgSrc: '/assets/img/product/Product15.png', sold: "15rb" },
    { id: 11, name: 'Nama Produk', price: 'Rp59.093', discount: '-80%', imgSrc: '/assets/img/product/Product16.png', sold: "15rb" },
    { id: 12, name: 'Nama Produk', price: 'Rp59.093', discount: '-10%', imgSrc: '/assets/img/product/Product17.png', sold: "15rb" },
  ];
const Recommendation = () => {

  return (
    <div className="container mx-auto md:px-24 sm:px-1 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Rekomendasi untuk Kamu</h2>
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
                <div className="flex justify-end">
                    <p className="text-gray-400">{product.sold} Terjual</p>
                </div>
              </div>
            </div>
            <div className={`${product.discount}` ? 'absolute top-[-10px] right-[-14px] bg-primary text-white text-xs px-2 py-1' : "hidden"}>{product.discount}</div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendation