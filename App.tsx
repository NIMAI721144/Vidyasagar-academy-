
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AICounselor from './components/AICounselor';
import Home from './pages/Home';
import Portal from './pages/Portal';
import Admissions from './pages/Admissions';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'portal': return <Portal />;
      case 'admissions': return <Admissions />;
      case 'about': return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-8 text-academy-blue">About Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">Building trust through 25 years of educational history and clear vision.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-academy-blue mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">To empower students with the knowledge, skills, and values required to succeed in an ever-changing global landscape.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-academy-blue mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">To be a center of excellence that fosters innovation, integrity, and lifelong learning for future global leaders.</p>
            </div>
          </div>
        </div>
      );
      case 'academics': return (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12 text-academy-blue">Academics</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4">STEM Excellence</h3>
              <p className="text-slate-600">Advanced Science, Tech, Engineering, and Math modules designed for the 21st century.</p>
            </div>
            <div className="bg-rose-50 p-8 rounded-2xl border-l-4 border-rose-500">
              <h3 className="text-xl font-bold mb-4">Arts & Humanities</h3>
              <p className="text-slate-600">Fostering creativity through literature, history, and fine arts programs.</p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-2xl border-l-4 border-emerald-500">
              <h3 className="text-xl font-bold mb-4">State Curriculum</h3>
              <p className="text-slate-600">Following national standards while adding our own global enrichment modules.</p>
            </div>
          </div>
        </div>
      );
      case 'student-life': return (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-4 text-academy-blue">Student Life</h1>
          <p className="text-center text-slate-500 mb-12">Broaden your horizons through our diverse range of clubs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Debate Club', 'Robotics Club', 'Sports Council', 'Arts Guild', 'Music Ensemble', 'Eco Warriors'].map(club => (
              <div key={club} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl mb-4 flex items-center justify-center text-academy-blue">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{club}</h3>
                <p className="text-sm text-slate-500">Discover your passions and build lifelong friendships through focused activity groups.</p>
              </div>
            ))}
          </div>
        </div>
      );
      case 'contact': return (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl font-bold text-academy-blue mb-8">Get in Touch</h1>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-academy-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Visit Us</h4>
                    <p className="text-slate-500">123 Vidya Enclave, Knowledge Park, City State 560001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-slate-500">+91 1234 567 890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-rose-100 rounded-lg text-rose-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-slate-500">admissions@vidyasagar.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
              <h3 className="text-xl font-bold mb-6">Drop us a message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none" />
                <textarea placeholder="How can we help?" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none"></textarea>
                <button className="w-full bg-academy-blue text-white py-4 rounded-xl font-bold">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      );
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar activePath={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <div>
                  <span className="text-xl font-bold block leading-none">VIDYASAGAR</span>
                  <span className="text-xs font-medium text-slate-400 tracking-wider uppercase">Academy</span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Striving for academic excellence and holistic development since 1999. Empowering the leaders of tomorrow.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                  <button key={idx} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                {['Home', 'About Us', 'Academics', 'Admissions', 'Student Life', 'Portal'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => setCurrentPage(link.toLowerCase().replace(' ', '-'))} 
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-slate-400">
                {['School Calendar', 'Library Services', 'IT Support', 'Careers', 'Health Services', 'Safety Policy'].map((link) => (
                  <li key={link}><a href="#" className="hover:text-blue-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-slate-400 mb-6">Stay updated with our latest activities and news.</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500" 
                />
                <button className="bg-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">Join</button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Vidyasagar Academy. All Rights Reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Term of Use</a></p>
          </div>
        </div>
      </footer>

      <AICounselor />
    </div>
  );
};

export default App;
