import React from 'react'

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <a href="/" className="text-blue-600 font-bold text-xl tracking-tight">
          SHARP EVENT
        </a>

        <div className="flex items-center gap-[8rem]">
          <a
            href="/list-space"
            className="text-gray-700 hover:text-gray-900 text-md font-semibold"
          >
            List Your Space
          </a>

          <div className="hidden md:block space-x-5  items-center gap-3 ">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium px-8 border-blue-500 border  py-2 rounded-xl transition-colors">
              Log in
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-2 rounded-xl transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
