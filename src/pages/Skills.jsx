import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Lightbulb, Users, Target } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="card-skill group"
  >
    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Skills = () => {
  const skills = [
    {
      icon: TrendingUp,
      title: "Python Разработка",
      description: "Написание чистого и эффективного кода на Python. От скриптов автоматизации до алгоритмических задач."
    },
    {
      icon: Lightbulb,
      title: "Логика и Решение задач",
      description: "Подхожу к каждой задаче с логическим мышлением для поиска наиболее эффективного решения."
    },
    {
      icon: Users,
      title: "Быстрое обучение",
      description: "Как студент, я посвящаю себя освоению новых концепций и их применению в реальных сценариях."
    },
    {
      icon: Target,
      title: "Завершение проектов",
      description: "Фокусируюсь на завершении начатого, гарантируя, что каждый проект документирован и функционален."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32"
    >
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Мои суперспособности</span>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Навыки, которые имеют <span className="text-primary italic">значение</span>.</h2>
        <p className="text-gray-500 text-lg">
          Я сочетаю технические знания с творческим подходом для решения реальных задач. 
          Вот основные ценности, которые я привношу в каждый проект.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.title} 
            icon={skill.icon} 
            title={skill.title} 
            description={skill.description} 
            delay={index * 0.1}
          />
        ))}
      </div>

      <div className="mt-32 pt-24 border-t border-gray-100">
        <h3 className="text-2xl font-bold text-center mb-16 text-gray-400">Инструменты, которые я использую</h3>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <span className="text-3xl font-black uppercase tracking-tighter">PYTHON</span>
          <span className="text-3xl font-black uppercase tracking-tighter">VS CODE</span>
          <span className="text-3xl font-black uppercase tracking-tighter">GITHUB</span>
          <span className="text-3xl font-black uppercase tracking-tighter">IDLE</span>
          <span className="text-3xl font-black uppercase tracking-tighter">CMD</span>
          <span className="text-3xl font-black uppercase tracking-tighter">REACT</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
