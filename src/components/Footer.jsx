import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary mb-6 block">
              Abduqodir<span className="text-gray-900">.</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              15-летний Python-разработчик и студент, увлеченный созданием 
              инновационных цифровых решений и постоянным обучением.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Навигация</h4>
            <ul className="space-y-4">
              <li><Link to="/skills" className="text-gray-500 hover:text-primary transition">Навыки</Link></li>
              <li><Link to="/portfolio" className="text-gray-500 hover:text-primary transition">Портфолио</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-primary transition">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="text-gray-500">Инстаграм: @abdkdrv_10</li>
              <li className="text-gray-500">+998 (88) 462 99 88</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 Портфолио Абдукодира. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://t.me/Abduqodirov_01" className="hover:text-primary">Telegram</a>
            <a href="https://instagram.com/abdkdrv_10" className="hover:text-primary">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
