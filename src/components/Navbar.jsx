import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Навыки', path: '/skills' },

    { name: 'Блог', path: '/blog' },
    { name: 'Контакты', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Abduqodir<span className="text-gray-900">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'text-primary' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
            Связаться
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-8 flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg font-medium ${isActive(item.path) ? 'text-primary' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-center"
            onClick={() => setIsOpen(false)}
          >
            Связаться
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
