"use client"
import React,{useState} from 'react'

const TabContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Pulsa', 'Paket Data', 'Listrik PLN', 'Uang Elektronik', 'Air PDAM'];
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
            Content for {tab}
          </div>
        ))}
      </div>

    </div>
  )
}

export default TabContent