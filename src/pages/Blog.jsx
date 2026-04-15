import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ id, title, category, date, author, image, excerpt, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group bg-white rounded-4xl overflow-hidden border border-gray-100 hover:shadow-soft transition-all duration-500"
  >
    <div className="relative overflow-hidden h-64">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute top-6 left-6 bg-white py-1 px-4 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
        {category}
      </span>
    </div>
    <div className="p-10">
      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
        <div className="flex items-center">
          <Calendar size={14} className="mr-2" />
          {date}
        </div>
        <div className="flex items-center">
          <User size={14} className="mr-2" />
          {author}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
        <Link to={`/blog/${id}`}>{title}</Link>
      </h3>
      <p className="text-gray-500 mb-8 leading-relaxed line-clamp-2">
        {excerpt}
      </p>
      <Link 
        to={`/blog/${id}`} 
        className="inline-flex items-center font-bold text-gray-900 group-hover:text-primary transition-colors"
      >
        Читать далее <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Будущее минималистичного цифрового дизайна",
      category: "Дизайн",
      date: "24 окт, 2024",
      author: "Админ",
      image: "https://images.unsplash.com/photo-1545235617-946b9f120e3d?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Минимализм — это не отсутствие чего-то. Это идеальное количество чего-то. Исследуем, как меньшее становится большим."
    },
    {
      id: 2,
      title: "Топ-10 хуков React для повышения производительности",
      category: "Разработка",
      date: "12 окт, 2024",
      author: "Команда разработчиков",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Оптимизация вашего приложения на React может быть сложной. Вот основные хуки, которые стоит использовать."
    },
    {
      id: 3,
      title: "Почему типографика важнее, чем вы думаете",
      category: "Креатив",
      date: "28 сен, 2024",
      author: "Л. Смит",
      image: "https://images.unsplash.com/photo-1517841317236-39d77a37ad44?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Эмоциональное влияние шрифтов на пользовательский опыт часто недооценивают. Давайте разберемся."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32"
    >
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">База знаний</span>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Последние <span className="text-primary italic">Статьи</span>.</h2>
        <p className="text-gray-500 text-lg">
          Делюсь своими мыслями, опытом и глубокими исследованиями в области дизайна и разработки.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard 
            key={post.id} 
            {...post} 
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
