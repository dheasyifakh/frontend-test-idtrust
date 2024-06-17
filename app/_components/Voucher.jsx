import React from 'react'

const Voucher = () => {
  return (
    <div className="container mx-auto md:px-24 sm:px-1 py-8">
        <div className="bg-secondary rounded-md p-5">
            <div className="grid md:grid-cols-12 sm:grid-cols-6 gap-4">
                <div class="md:col-span-5 ">
                    <img src="/assets/img/voucher-1.png" alt="" />
                </div>
                <div class="md:col-span-7 p-2">
                    <h1 className="text-5xl">PAY DAY SALE!!</h1>
                    <h2 className="my-6 text-2xl text-gray-500">Nikmati promo spektakuler <span className="text-primary">idshop</span> setiap tanggal 25!</h2>
                    <button className="w-full bg-primary hover:bg-[#3BA7BC] text-white text-center py-3 rounded-md">
                        Ikuti Event
                    </button>
                </div>
            </div>
        </div>
        <div className="bg-primary rounded p-5 mt-5">
            <div className="grid md:grid-cols-12 sm:grid-cols-6 gap-4">
                <div class="md:col-span-5 ">
                    <img src="/assets/img/voucher-2.png" alt="" />
                </div>
                <div class="md:col-span-7 p-2">
                    <h1 className="text-5xl">GRATIS ONGKIR 50%</h1>
                    <h2 className="my-6 text-2xl text-white">Klaim voucher gratis ongkir kirim Kamu.</h2>
                    <button className="w-full bg-secondary hover:bg-[#FFCD6A] text-white text-center py-3 rounded-md">
                        Klaim Voucher
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Voucher