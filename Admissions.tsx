
import React from 'react';
import { ClipboardCheck, Calendar, Wallet, CheckCircle2 } from 'lucide-react';

export const Admissions = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-emerald-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Admissions 2024-25</h1>
          <p className="text-emerald-200 text-lg">Join our community of scholars and leaders.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          {/* Process */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif text-gray-900 mb-8 flex items-center">
              <ClipboardCheck className="mr-3 text-emerald-600" /> Admission Process
            </h2>
            <div className="space-y-8">
              {[
                { step: 1, title: 'Inquiry & Tour', desc: 'Visit our campus or attend a virtual information session to learn more about our culture.' },
                { step: 2, title: 'Online Application', desc: 'Submit the application form along with necessary documents and registration fee.' },
                { step: 3, title: 'Assessment', desc: 'Prospective students undergo an age-appropriate entrance assessment.' },
                { step: 4, title: 'Interview', desc: 'A personal meeting between the applicant, parents, and the school leadership.' },
                { step: 5, title: 'Enrolment', desc: 'Upon selection, complete the fee formalities and official enrolment.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-emerald-600" /> Key Deadlines
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Phase 1 Deadline</span>
                  <span className="font-bold">April 15</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Entrance Test</span>
                  <span className="font-bold">May 10</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Result Release</span>
                  <span className="font-bold">May 25</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
              <h3 className="text-xl font-bold mb-4 flex items-center text-emerald-900">
                <Wallet className="mr-2 h-5 w-5 text-emerald-600" /> Tuition & Fees
              </h3>
              <p className="text-emerald-800 text-sm mb-4">We offer flexible payment options and merit-based scholarships.</p>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors">
                View Fee Structure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
