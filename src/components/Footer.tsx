import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';



const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-blue-600 font-bold text-xl mb-4">SHARP EVENT</h2>
            <p className="text-gray-600">
              Sharp Event is a service provider site for finding the best places to host your events
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Help center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Host</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Activities</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Cities</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get in touch</h3>
            <p className="text-gray-600 mb-2">Emailadress@gmail.com</p>
            <p className="text-gray-600 mb-4">Address of the company</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>© 2024 SharpEvent. Event booking agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;