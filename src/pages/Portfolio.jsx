import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, category, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-4xl bg-gray-100"
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
      <span className="text-primary font-semibold mb-2">{category}</span>
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="flex space-x-4">
        <button className="bg-white text-gray-900 p-3 rounded-xl hover:bg-primary hover:text-white transition-colors">
          <ExternalLink size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const projects = [
    {
      title: "Панель управления FinTech",
      category: "UI/UX Дизайн",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Приложение для здоровья",
      category: "Мобильное приложение",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "E-Commerce интерфейс",
      category: "Веб-дизайн",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Минималистичное портфолио",
      category: "Портфолио",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Органические продукты",
      category: "Брендинг",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "AI чат-интерфейс",
      category: "Дизайн продукта",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div className="max-w-xl">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Портфолио</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">Лучшие <br /> <span className="text-primary italic">Работы</span>.</h2>
        </div>
        <div className="mt-8 md:mt-0 flex space-x-6 text-sm font-medium">
          <button className="text-primary border-b-2 border-primary pb-1">Все</button>
          <button className="text-gray-400 hover:text-gray-600 transition pb-1">Веб-дизайн</button>
          <button className="text-gray-400 hover:text-gray-600 transition pb-1">Приложения</button>
          <button className="text-gray-400 hover:text-gray-600 transition pb-1">Брендинг</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            {...project} 
            delay={index * 0.1}
          />
        ))}
      </div>

      <div className="mt-24 text-center">
        <button className="px-12 py-5 border-2 border-gray-100 rounded-2xl font-bold text-gray-900 hover:border-primary hover:text-primary transition-all duration-300">
          Загрузить еще
        </button>
      </div>
    </motion.div>
  );
};

export default Portfolio;
