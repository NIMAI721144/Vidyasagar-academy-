
import React from 'react';
import { History, Target, Eye, Users, ShieldCheck } from 'lucide-react';

export const About = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Banner */}
      <section className="bg-indigo-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">About Our Academy</h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Discover the legacy, values, and the dedicated people behind Vidyasager Academy.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://picsum.photos/id/20/600/400" alt="Old building" className="rounded-2xl shadow-2xl z-10 relative" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full -z-0"></div>
          </div>
          <div>
            <div className="inline-flex items-center space-x-2 text-indigo-600 font-bold mb-4 uppercase tracking-tighter">
              <History className="h-5 w-5" />
              <span>Our Heritage</span>
            </div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">School History</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 1995, our school has a rich history of providing quality education to students from diverse backgrounds. What started as a small community initiative with just 50 students has grown into a premier institution known for academic rigor and character building.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Over the decades, we have continuously evolved our teaching methodologies while staying true to our core principles of integrity and inclusive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-indigo-100">
            <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower students with knowledge, skills, and values to succeed in an ever-changing world. We strive to create an environment that encourages curiosity, critical thinking, and social responsibility.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-indigo-100">
            <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a global leader in education, fostering innovators and compassionate citizens who lead by example. We envision a community where every student realizes their potential through holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Administration & Staff</h2>
            <p className="text-gray-500">The leadership driving our academic excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/id/64/400/400" className="w-48 h-48 rounded-full mx-auto object-cover mb-6 ring-4 ring-indigo-50" alt="Principal" />
              <h4 className="text-xl font-bold text-gray-900">Dr. Sarah Jenkins</h4>
              <p className="text-indigo-600 font-medium">Principal</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/id/65/400/400" className="w-48 h-48 rounded-full mx-auto object-cover mb-6 ring-4 ring-indigo-50" alt="VP" />
              <h4 className="text-xl font-bold text-gray-900">Mr. Robert Chen</h4>
              <p className="text-indigo-600 font-medium">Vice Principal</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/id/91/400/400" className="w-48 h-48 rounded-full mx-auto object-cover mb-6 ring-4 ring-indigo-50" alt="Staff" />
              <h4 className="text-xl font-bold text-gray-900">Ms. Elena Rodriguez</h4>
              <p className="text-indigo-600 font-medium">Academic Dean</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-gray-100 mx-auto flex flex-col items-center justify-center mb-6 group cursor-pointer hover:bg-indigo-600 transition-colors">
                <Users className="h-10 w-10 text-gray-400 group-hover:text-white mb-2" />
                <span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest">Full Faculty</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900">Dedicated Staff</h4>
              <p className="text-indigo-600 font-medium">100+ Members</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
