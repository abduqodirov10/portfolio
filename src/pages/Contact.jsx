import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle2, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials missing in .env");
      setStatus('error');
      return;
    }

    const text = `
🚀 New Contact Form Submission:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📌 Subject: ${formData.subject}
📝 Message: ${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Contact Info */}
        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Связаться со мной</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">Давайте создадим <br /> что-то <span className="text-primary italic">великое</span>.</h2>
          <p className="text-gray-500 text-lg mb-12 max-w-lg">
            Если у вас есть конкретный проект или вы просто хотите пообщаться о программировании, я всегда открыт для новых знакомств.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-soft">
                <Phone size={24} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 font-medium">Позвонить</span>
                <span className="text-gray-900 font-bold">+998 (88) 462 99 88</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-soft">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 font-medium">Написать</span>
                <span className="text-gray-900 font-bold">abdkdrv10@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-soft">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 font-medium">Адрес</span>
                <span className="text-gray-900 font-bold">Фергана, Узбекистан</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-soft">
                <Instagram size={24} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 font-medium">Инстаграм</span>
                <a href="https://instagram.com/abdkrdv_10" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-bold hover:text-primary transition-colors">@abdkrdv_10</a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-soft">
                <Send size={24} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 font-medium">Telegram</span>
                <a href="https://t.me/Abduqodirov_01" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-bold hover:text-primary transition-colors">@Abduqodirov_01</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 md:p-16 rounded-4xl shadow-soft border border-gray-50">
          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Сообщение отправлено!</h3>
              <p className="text-gray-500 mb-8">Спасибо, что связались. Я отвечу вам как можно скорее.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="btn-primary"
              >
                Отправить еще одно сообщение
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Ваше имя</label>
                  <input 
                    type="text" id="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email адрес</label>
                  <input 
                    type="email" id="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="ivan@example.com"
                    className="bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-gray-700 ml-1">Тема</label>
                <input 
                  type="text" id="subject" required
                  value={formData.subject} onChange={handleChange}
                  placeholder="Запрос по проекту"
                  className="bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Сообщение</label>
                <textarea 
                  id="message" rows="5" required
                  value={formData.message} onChange={handleChange}
                  placeholder="Расскажите о вашем проекте..."
                  className="bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium">Не удалось отправить сообщение. Пожалуйста, проверьте свои настройки.</p>
              )}

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="btn-primary w-full flex items-center justify-center space-x-3 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === 'sending' ? 'Отправка...' : 'Отправить сообщение'}</span>
                {status !== 'sending' && <Send size={18} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
