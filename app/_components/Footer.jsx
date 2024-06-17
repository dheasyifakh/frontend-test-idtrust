import React from 'react'

const Footer = () => {
  const services=['Pusat Bantuan','Cara Pembelian','Pengiriman', 'Pengembalian Barang dan Dana', 'Metode Pembayaran', 'Hubungi Kamu'];
  const searching=['Tentang Kami','Kebijakan Privasi','Karir', 'Blog', 'idshop Security', 'id Mall'];
  const payment =[
    '/assets/img/payment/bca.png',
    '/assets/img/payment/mandiri.png',
    '/assets/img/payment/bri.png',
    '/assets/img/payment/bni.png',
    '/assets/img/payment/gopay.png',
    '/assets/img/payment/dana.png',
    '/assets/img/payment/alfamart.png',
    '/assets/img/payment/visa.png',
    '/assets/img/payment/mastercard.png',
  ]
  const shipping=[
    '/assets/img/shipping/Badges.png',
    '/assets/img/shipping/Badges-1.png',
    '/assets/img/shipping/Badges-2.png',
    '/assets/img/shipping/Badges-3.png',
    '/assets/img/shipping/Badges-4.png',
  ]
  return (
    <footer className="bg-gray-50 shadow-md">
      
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid  md:grid-cols-12 grid-cols-1 gap-4 mb-6">
          <div className="md:col-span-3 p-4">
            <h1 className="text-xl font-semibold">Layanan Pelanggan</h1>
            <ul>
              { services.map((service, index)=>(
                <li key={index} className="my-4 border-b-2 border-[#AFB1B6] hover:text-primary cursor-pointer">
                  {service}
                </li>
              ))

              }
            </ul>
          </div>
          <div className="md:col-span-3 p-4">
            <h1 className="text-xl font-semibold">Jelajahi idshop</h1>
            <ul>
              { searching.map((item, index)=>(
                <li key={index} className="my-4 border-b-2 border-[#AFB1B6] hover:text-primary cursor-pointer">
                  {item}
                </li>
              ))

              }
            </ul>
          </div>
          <div className="md:col-span-3  p-4">
            <h1 className="text-xl font-semibold mb-4">Unduh Aplikasi</h1>
            <img src="/assets/img/Google-Play.png" alt="" />
            <img src="/assets/img/App-Store.png" alt="" />
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-xl font-semibold mb-6">Metode Pembayaran</h1>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-12 lg:grid-cols-12 gap-1">
              {payment.map((item, index)=>(
                <div key={index}>
                  <img src={item} alt="" />

                </div>
              ))

              }
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-xl font-semibold mb-6">Jasa Pengiriman</h1>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-12 lg:grid-cols-12 gap-1">
              {shipping.map((item, index)=>(
                <div key={index}>
                  <img src={item} alt="" />
                </div>
              ))

              }
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-xl font-semibold mb-6">Keamanan dan Privasi</h1>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-12 lg:grid-cols-12 gap-1">
            <img src="/assets/img/iso.png" alt="" />
            <img src="/assets/img/visa.png" alt="" />
          </div>
        </div>
        <div className="sm:flex sm:items-start sm:justify-between border-t-2 border-[#AFB1B6] pt-4">
          <div className="flex place-items-center justify-start  sm:justify-start font-semibold">
             &copy; idshop 2024. Hak Cipta Dilindungi
          </div>
          <div className="mt-4 text-left text-md lg:mt-0 font-semibold">
            Ikuti Kami
            <div className="flex mt-2">
              <img src="/assets/img/SocialMedia.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer