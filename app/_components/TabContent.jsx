"use client"
import React,{useState} from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Pulsa', 'Paket Data', 'Listrik PLN', 'Uang Elektronik', 'Air PDAM'];
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return(
            <div>
                <div className="grid md:grid-cols-12 sm:grid-cols-6 gap-4">
                    <div class="md:col-span-5">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaPhoneAlt/>
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 pl-10 border border-gray-300 rounded"
                                placeholder="Masukkan nomor telepon"
                            />
                        </div>
                    </div>
                    <div class="md:col-span-5">
                        
                            <select className="w-full p-2 border border-gray-300 rounded">
                            <option value="option1">10.000</option>
                            <option value="option2">20.000</option>
                            <option value="option3">50.00</option>
                            <option value="option4">100.000</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 flex justify-center place-items-end">
                        <button className="md:w-28 w-full border border-primary text-primary rounded-lg py-2 px-6 hover:bg-[#0A91AB33] -foreground">
                            Beli
                        </button>
                    </div>
                </div>
            </div>
        )
      case 1:
        return (
            <div>
                <div className="grid md:grid-cols-12 sm:grid-cols-6 gap-4">
                    <div class="md:col-span-5">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaPhoneAlt/>
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 pl-10 border border-gray-300 rounded"
                                placeholder="Masukkan nomor telepon"
                            />
                            </div>
                    </div>
                    <div class="md:col-span-5">
                        
                            <select className="w-full p-2 border border-gray-300 rounded">
                            <option value="option1">Paket Seminggu - 20.000</option>
                            <option value="option2">Paket Bulanan - 50.000</option>
                            <option value="option3">Paket Bulanan OMG - 78.000</option>
                            <option value="option4">Paket Berkah - 54.000</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 flex justify-center place-items-end">
                        <button className="md:w-28 w-full border border-primary text-primary rounded-lg py-2 px-6 hover:bg-primary-foreground">
                            Beli
                        </button>
                    </div>
                </div>
            </div>
        );
      case 2:
        return(
            <div>
                <div className="grid md:grid-cols-12 sm:grid-cols-6 gap-4">
                    <div class="md:col-span-5">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <AiFillThunderbolt/>
                            </span>
                            <input
                                type="text"
                                className="w-full p-2 pl-10 border border-gray-300 rounded"
                                placeholder="Masukkan nomor PLN"
                            />
                            </div>
                    </div>
                    <div class="md:col-span-5">
                        
                            <select className="w-full p-2 border border-gray-300 rounded">
                            <option value="option1"> 20.000</option>
                            <option value="option2">50.000</option>
                            <option value="option3">100.000</option>
                            <option value="option4">200.000</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 flex justify-center place-items-end">
                        <button className="md:w-28 w-full border border-primary text-primary rounded-lg py-2 px-6 hover:bg-primary-foreground">
                            Beli
                        </button>
                    </div>
                </div>
            </div>
        )
      case 3:
      case 4:
        return (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Pilih Opsi
            </label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div class="container mx-auto md:px-24 sm:px-2 py-8">
        <h1 className="mb-6 text-3xl font-semibold">Top Up dan Tagihan</h1>
        <div className="flex overflow-x-auto scrollbar-hide md:overflow-visible border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-shrink-0 px-16 py-2 text-sm font-medium transition duration-300 ${
              activeTab === index
                ? 'border-b-4  border-primary'
                : ''
            }  mx-1 whitespace-nowrap text-black`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTab === index ? 'block' : 'hidden'
            } p-4 `}
          >
            {renderContent()}
          </div>
        ))}
      </div>

    </div>
  )
}

export default TabContent