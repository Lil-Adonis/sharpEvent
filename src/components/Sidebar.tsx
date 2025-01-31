import React from 'react'
import { SideChart } from './SideChart'

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-[18rem] py- bg-white ">
      <div className="space-y-6  ">
        <div className="bg-gray-100 p-8 w-[22rem] rounded-xl">
          <h2 className="font-semibold mb-4">Your Search</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-gray-600 mb-2">Event Type</h3>
              <input
                type="text"
                value="Wedding"
                className="w-full pl-8 p-2  border rounded-full"
                readOnly
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-600 mb-2">Location</h3>
              <input
                type="text"
                value="Lagos"
                className="w-full pl-8 p-2  border rounded-full"
                readOnly
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-600 mb-2">Price Range</h3>
              <input
                type="text"
                value="₦20k - ₦40k"
                className="w-full pl-8 p-2  border rounded-full"
                readOnly
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-600 mb-2">Rating</h3>
              <input
                type="text"
                value="Excellent"
                className="w-full pl-8 p-2  border rounded-full"
                readOnly
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-2 hover:bg-blue-700 rounded-full">
              Search
            </button>
          </div>
        </div>

        <div className="p-8">
          <h2 className="font-semibold mb-4">Popular filters</h2>
          <div className="space-y-2">
            {['Wedding', 'Dinner Parties', 'Meeting', 'Networking'].map(
              (filter) => (
                <label key={filter} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="font-light">{filter}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div className="p-8 w-[23rem]">
          <h2 className="font-semibold mb-4">Price Range</h2>
          <div className="space-y-4">
            <SideChart />

            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min Price"
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Max Price"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="font-semibold mb-4">Guest Rating</h2>
          <div className="space-y-2">
            {['Any', 'Excellent', 'Very good', 'Good'].map((rating) => (
              <label key={rating} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="font-light">{rating}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
