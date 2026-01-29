
import React from 'react';
import { BookOpen, Binary, FlaskConical, Palette, GraduationCap, Microscope, Calculator } from 'lucide-react';

export const Academics = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Academic Excellence</h1>
          <p className="text-xl opacity-90">A balanced curriculum designed for global success.</p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-serif text-indigo-900 mb-6">Our Curriculum</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our curriculum is designed to provide a balanced education that fosters intellectual, physical, and emotional growth. We follow a hybrid model that integrates international standards with traditional values, ensuring our students are prepared for both higher education and real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-8 bg-indigo-50 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <Binary className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">STEM Programs</h3>
                <p className="text-gray-600">Advanced programs in Science, Technology, Engineering, and Math. Includes specialized labs for Robotics, AI, and Coding.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-indigo-50 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <Palette className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Arts and Humanities</h3>
                <p className="text-gray-600">Nurturing creativity and critical perspective through literature, philosophy, visual arts, and performance studies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16">Departments & Faculty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <Calculator className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Department of Mathematics</h4>
              <p className="text-sm text-gray-500 mb-4">Focusing on logical reasoning and quantitative analysis from Grade 1 to 12.</p>
              <button className="text-indigo-600 font-bold text-sm">Meet Faculty &rarr;</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <Microscope className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Department of Science</h4>
              <p className="text-sm text-gray-500 mb-4">Inquiry-based learning across Biology, Chemistry, and Physics with high-tech lab facilities.</p>
              <button className="text-indigo-600 font-bold text-sm">Meet Faculty &rarr;</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <GraduationCap className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Academic Advising</h4>
              <p className="text-sm text-gray-500 mb-4">Providing guidance for career paths, college applications, and personal development.</p>
              <button className="text-indigo-600 font-bold text-sm">Connect &rarr;</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
