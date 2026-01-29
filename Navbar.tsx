
import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activePath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-academy-blue p-2 rounded-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-academy-blue block leading-none">VIDYASAGAR</span>
              <span className="text-sm font-medium text-slate-500 tracking-wider">ACADEMY</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`text-sm font-semibold transition-colors hover:text-academy-blue ${
                  activePath === item.path ? 'text-academy-blue' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('admissions')}
              className="bg-academy-blue text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-md"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-academy-blue p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 shadow-xl">
          <div className="px-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium ${
                  activePath === item.path 
                    ? 'bg-blue-50 text-academy-blue' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavigate('admissions');
                setIsOpen(false);
              }}
              className="w-full mt-4 bg-academy-blue text-white px-4 py-3 rounded-md text-base font-bold text-center"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
