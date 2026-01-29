
import React from 'react';
import { CheckCircle2, FileText, Calendar, CreditCard, Clock, ClipboardList } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-academy-blue mb-4">Admissions at Vidyasagar</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We are delighted that you are considering Vidyasagar Academy for your child's education. 
          The admission process is designed to be as transparent and simple as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-12">
          {/* Steps */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center space-x-3">
              <ClipboardList className="text-academy-blue" />
              <span>The Admission Process</span>
            </h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Inquiry & Registration', desc: 'Fill out the online inquiry form or visit our campus for a prospectus.' },
                { step: '02', title: 'Counseling & Campus Tour', desc: 'Meet our academic counselors and take a tour of our facilities.' },
                { step: '03', title: 'Interaction/Entrance Test', desc: 'A basic assessment to understand the child\'s current academic level.' },
                { step: '04', title: 'Documentation & Fees', desc: 'Submit required documents and complete the fee payment to secure the seat.' },
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-6 relative">
                  {idx !== 3 && <div className="absolute left-[23px] top-12 bottom-[-32px] w-0.5 bg-slate-200"></div>}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 border-2 border-academy-blue flex items-center justify-center text-academy-blue font-bold z-10">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
              <FileText className="text-academy-blue" />
              <span>Required Documents</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Birth Certificate (Original + Copy)',
                'Previous Class Report Cards',
                'Transfer Certificate (if applicable)',
                'Aadhar Card of Student & Parents',
                '4 Recent Passport-size Photos',
                'Vaccination/Medical Certificate',
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <span className="text-sm font-medium text-slate-700">{doc}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Form Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 sticky top-24">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Online Application</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Student Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Applying for Class</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Select Class</option>
                  {[...Array(12)].map((_, i) => <option key={i}>Grade {i + 1}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Parent Mobile No.</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Parent Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="example@email.com" />
              </div>
              <button type="submit" className="w-full bg-academy-blue text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg mt-4">
                Submit Application
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-4">
                By submitting, you agree to our privacy policy and terms of enrollment.
              </p>
            </form>
          </div>
        </aside>
      </div>

      {/* Fees section */}
      <section className="py-12 border-t border-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-50 p-10 rounded-3xl">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-academy-blue mb-4">Transparent Fee Structure</h2>
            <p className="text-slate-600 mb-6">
              Our fee structure is competitive and includes tuition, library access, IT lab usage, and basic extracurricular activities. No hidden costs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm font-bold text-slate-700 bg-white px-4 py-2 rounded-lg border border-slate-200">
                <CreditCard size={18} className="text-academy-blue" />
                <span>Online Payment Portal</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-bold text-slate-700 bg-white px-4 py-2 rounded-lg border border-slate-200">
                <Clock size={18} className="text-academy-blue" />
                <span>Quarterly EMI Available</span>
              </div>
            </div>
          </div>
          <button className="bg-academy-blue text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition-all whitespace-nowrap">
            Download Fee Structure (PDF)
          </button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
