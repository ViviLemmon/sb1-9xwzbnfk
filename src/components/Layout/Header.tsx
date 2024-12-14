import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2 w-96">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="ml-2 bg-transparent outline-none w-full"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
              JS
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-700">João Silva</p>
              <p className="text-gray-500">Vereador</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;