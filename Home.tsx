
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Trophy, Star, Calendar, ChevronRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050853064-dbad35009f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="School Campus" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Welcome to <span className="text-indigo-400">Vidyasager Academy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
              Where we strive for academic excellence and holistic development.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/admissions" className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all flex items-center shadow-2xl hover:scale-105 active:scale-95">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-lg text-white border border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all hover:scale-105 active:scale-95">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Students', val: '1200+', icon: Users },
            { label: 'Success Rate', val: '99%', icon: Trophy },
            { label: 'Qualified Staff', val: '80+', icon: Star },
            { label: 'Years of Legacy', val: '28', icon: BookOpen },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="mx-auto w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-all duration-300 group-hover:rotate-6">
                <stat.icon className="h-7 w-7 text-indigo-600 group-hover:text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.val}</p>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-6">ESTABLISHED 1995</div>
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-950 mb-8 leading-tight">Empowering Minds, Shaping Futures</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Vidyasager Academy is a co-educational institution that provides a nurturing environment for students to grow and thrive. Our holistic approach ensures that academic achievement goes hand-in-hand with emotional and physical well-being.
              </p>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                We believe in empowering students with the tools they need to navigate an ever-changing world with confidence, integrity, and knowledge.
              </p>
              <Link to="/about" className="group flex items-center space-x-3 text-indigo-600 font-bold text-lg">
                <span>Discover our full history</span>
                <div className="p-2 bg-indigo-50 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </Link>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-emerald-50 rounded-full -z-10 animate-pulse delay-700"></div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1544717297-fa154daaf762?auto=format&fit=crop&w=400&h=500" alt="Students" className="rounded-3xl shadow-2xl mt-12 transform hover:-translate-y-2 transition-transform duration-500" />
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&h=500" alt="Classroom" className="rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 delay-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News & Events */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-4xl font-serif text-indigo-950">Featured News & Events</h2>
              <p className="text-gray-500 text-lg">Stay updated with the latest happenings at our campus</p>
            </div>
            <Link to="/news" className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all">
              View All News
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300">
              <div className="h-56 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1564910443496-5fd2d06847ad?auto=format&fit=crop&w=600&h=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Science Fair" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600">UPCOMING EVENT</div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">
                  <Calendar className="h-4 w-4 mr-2 text-indigo-600" /> Mar 15, 2024
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Annual Science & Tech Fair</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Showcase your innovation and research at our annual science fair. Open to all students.</p>
                <button className="flex items-center text-indigo-600 font-bold hover:translate-x-1 transition-transform">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300">
              <div className="h-56 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&h=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="STEM Program" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-emerald-600">NEW PROGRAM</div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">
                  <BookOpen className="h-4 w-4 mr-2 text-indigo-600" /> Academic
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Elite STEM Program Launch</h3>
                <p className="text-gray-600 leading-relaxed mb-6">A cutting-edge curriculum focusing on Robotics, Coding, and Bio-tech for Senior High.</p>
                <button className="flex items-center text-indigo-600 font-bold hover:translate-x-1 transition-transform">
                  Curriculum Guide <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-indigo-900 rounded-3xl p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Admission Queries?</h3>
                <p className="mb-10 text-indigo-100 text-lg leading-relaxed opacity-90">Our dedicated counseling team is ready to help you navigate your academic journey.</p>
              </div>
              <div className="space-y-4 relative z-10">
                <Link to="/contact" className="block w-full text-center bg-white text-indigo-900 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                  Contact Counselor
                </Link>
                <Link to="/admissions" className="block w-full text-center border border-white/30 py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                  Check Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
