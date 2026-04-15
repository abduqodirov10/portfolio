import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();

  // Mock data for the post (In a real app, you'd fetch this by ID)
  const post = {
    title: "Будущее минималистичного цифрового дизайна",
    category: "Дизайн",
    date: "24 окт, 2024",
    author: "Админ",
    readTime: "8 мин чтения",
    image: "https://images.unsplash.com/photo-1545235617-946b9f120e3d?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p class="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
        В эпоху информационной перегрузки простота — это высшая степень изысканности. 
        Минимализм в цифровом дизайне — это уже не просто тренд, а необходимость для концентрации пользователя и конверсии.
      </p>
      <h3 class="text-3xl font-bold text-gray-900 mb-6">1. Почему меньше — это больше</h3>
      <p class="text-gray-500 text-lg leading-relaxed mb-8">
        Основной принцип минимализма — удаление ненужных элементов. 
        Убирая отвлекающие факторы, мы позволяем контенту дышать, а пользователю — находить именно то, что ему нужно, без когнитивного трения.
      </p>
      <div class="bg-gray-50 p-12 rounded-4xl border-l-8 border-primary mb-10 italic text-2xl text-gray-700">
        "Дизайн — это не только то, как он выглядит и ощущается. Дизайн — это то, как он работает." 
        <span class="block text-sm font-bold text-primary mt-4 not-italic uppercase tracking-widest">— Стив Джобс</span>
      </div>
      <h3 class="text-3xl font-bold text-gray-900 mb-6">2. Роль негативного пространства</h3>
      <p class="text-gray-500 text-lg leading-relaxed mb-8">
        Негативное пространство, часто называемое белым пространством, — это холст вашего дизайна. 
        Оно определяет отношения между элементами и диктует иерархию. Без него ваш дизайн — это просто шум.
      </p>
      <p class="text-gray-500 text-lg leading-relaxed">
        Взглянув в будущее, ожидайте еще большего внимания к макетам, ориентированным на типографику, где сам текст служит основным визуальным элементом, 
        дополненным тонкими микро-анимациями.
      </p>
    `
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/40"></div>
        <div className="absolute inset-0 flex items-center justify-center pt-24">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <Link to="/blog" className="inline-flex items-center text-sm font-bold mb-8 hover:text-primary transition-colors">
              <ChevronLeft size={16} className="mr-2" /> Назад в блог
            </Link>
            <span className="block text-primary uppercase font-bold tracking-widest text-sm mb-6 bg-white py-1 px-4 rounded-full inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center space-x-8 text-sm font-medium">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-primary" /> {post.date}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2 text-primary" /> {post.author}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-primary" /> {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pt-24">
        <div 
          className="prose-container"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-20 pt-12 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-primary transition font-bold">
              <Share2 size={20} />
              <span>Поделиться постом</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer">In</div>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer">Tw</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
