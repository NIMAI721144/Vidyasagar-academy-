
import React from 'react';
import { NEWS_TICKER } from '../constants';
import { ArrowRight, Star, Award, Users, BookOpen } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <img 
            src="https://picsum.photos/id/20/1920/1080" 
            className="w-full h-full object-cover opacity-60" 
            alt="School Campus" 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">
            Empowering Minds, <br />
            <span className="text-blue-400">Shaping Futures.</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-xl leading-relaxed">
            Welcome to Vidyasagar Academy, where we strive for academic excellence and holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button 
              onClick={() => onNavigate('admissions')}
              className="bg-academy-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center space-x-2"
            >
              <span>Apply for 2024-25</span>
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
            >
              Take a Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <div className="bg-academy-blue py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee hover:pause flex items-center space-x-12">
          {NEWS_TICKER.map(news => (
            <div key={news.id} className="flex items-center space-x-3 text-white">
              <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-widest">{news.category}</span>
              <span className="text-sm font-medium">{news.title}</span>
            </div>
          ))}
          {/* Duplicating for infinite loop effect */}
          {NEWS_TICKER.map(news => (
            <div key={`dup-${news.id}`} className="flex items-center space-x-3 text-white">
              <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-widest">{news.category}</span>
              <span className="text-sm font-medium">{news.title}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-academy-blue mb-6">School Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Vidyasagar Academy is a premier co-educational institution dedicated to providing a nurturing environment where students are encouraged to grow, thrive, and lead. 
              Our campus combines traditional academic rigor with modern technological advancements to ensure every child reaches their full potential.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="p-3 bg-blue-50 rounded-lg text-academy-blue">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Ranked #1</h4>
                  <p className="text-sm text-slate-500">In City STEM Education</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-3 bg-blue-50 rounded-lg text-academy-blue">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">100% Pass Rate</h4>
                  <p className="text-sm text-slate-500">Last 10 Academic Years</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/1/800/600" alt="Students Learning" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-black text-academy-blue">25+</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years of <br />Academic Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-academy-blue">Our Educational Pillars</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4">We focus on three main areas to develop well-rounded global citizens.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-academy-blue mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Intellectual Rigor</h3>
              <p className="text-slate-600">A curriculum that challenges and engages, fostering critical thinking and deep subject mastery.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Community & Values</h3>
              <p className="text-slate-600">Instilling integrity, empathy, and social responsibility in every student from Day 1.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Holistic Growth</h3>
              <p className="text-slate-600">Balanced focus on sports, arts, and technology to discover hidden talents and passions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
