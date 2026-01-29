
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Branches', path: '/branches' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Resources', path: '/resources' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-indigo-700 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-indigo-900 block leading-tight">Vidyasager</span>
                <span className="text-xs tracking-widest text-indigo-600 uppercase font-semibold">Academy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === link.path ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium mt-4"
            >
              Portal Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold text-white">Vidyasager Academy</span>
            </div>
            <p className="text-sm text-indigo-300 leading-relaxed">
              Empowering students with knowledge, skills, and values to succeed in an ever-changing world. Committed to excellence since 1995.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/branches" className="hover:text-white">Our Branches</Link></li>
              <li><Link to="/admissions" className="hover:text-white">Admission Process</Link></li>
              <li><Link to="/academics" className="hover:text-white">Our Curriculum</Link></li>
              <li><Link to="/student-life" className="hover:text-white">Student Clubs</Link></li>
              <li><Link to="/news" className="hover:text-white">Latest Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Academic Portals</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/login" className="hover:text-white">Student Portal</Link></li>
              <li><Link to="/login" className="hover:text-white">Teacher Portal</Link></li>
              <li><Link to="/login" className="hover:text-white">Parent Dashboard</Link></li>
              <li><Link to="/login" className="hover:text-white">Admin Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400 shrink-0" />
                <span>123 Academic Drive, Knowledge City, State 45678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400 shrink-0" />
                <span>info@vidyasager.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-indigo-900 text-center text-xs text-indigo-400">
          <p>&copy; {new Date().getFullYear()} Vidyasager Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
