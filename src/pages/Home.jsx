import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-4 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
          >
            Python-разработчик и Студент
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8"
          >
            Привет, я <span className="text-primary italic">Абдукодир</span> <br />
            Кодом прокладываю <br />
            путь в будущее.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-500 max-w-lg mb-12 leading-relaxed"
          >
            Мне 15 лет, я Python-разработчик и в данный момент учусь в школе.
            Люблю создавать интеллектуальные решения и изучать новые технологии.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-4"
          >

            <Link to="/contact" className="px-6 py-3 rounded-2xl border border-gray-200 hover:border-primary hover:text-primary transition-all font-medium">
              Связаться
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl"
          >
            <img
              src="sandbox:/mnt/data/logo_converted.png"
              alt="Designer Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Decorative Background Shape */}
          <div className="absolute -top-10 -right-10 w-full h-full bg-primary/10 rounded-[4rem] -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-50 rounded-full -z-10"></div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="h-48 rounded-3xl bg-white shadow-soft p-8 flex items-end">
                <span className="text-4xl font-bold text-primary">02+</span>
              </div>
              <div className="h-64 rounded-3xl bg-primary shadow-soft p-8 text-white flex flex-col justify-between">
                <span className="text-lg font-medium">Лет обучения</span>
                <span className="text-3xl font-bold italic">Всегда учусь.</span>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="h-64 rounded-3xl bg-gray-900 shadow-soft p-8 text-white flex flex-col justify-between">
                <span className="text-lg font-medium">Проектов создано</span>
                <span className="text-4xl font-bold">15+</span>
              </div>
              <div className="h-48 rounded-3xl bg-white shadow-soft p-8 flex items-end">
                <span className="text-4xl font-bold text-gray-400">PYTHON</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Обо мне и <br /> моем пути</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Сейчас мне 15 лет. Мой путь в программировании начался с Python, и с тех пор я очарован тем, как с помощью кода можно решать задачи. Сейчас я учусь в школе, совмещая учебу со своим увлечением программированием.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Я верю, что возраст — это всего лишь цифра, когда речь идет об обучении. Я стремлюсь стать профессиональным разработчиком и внести свой вклад в мир технологий своими инновационными идеями.
            </p>
            <div className="flex items-center space-x-12">
              <div>
                <span className="block text-2xl font-bold text-gray-900">100%</span>
                <span className="text-gray-400 text-sm">Довольных пользователей</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900">15+</span>
                <span className="text-gray-400 text-sm">Готовых проектов</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
