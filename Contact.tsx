
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-indigo-900 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-indigo-200">Have a question? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-indigo-950">Get In Touch</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-600">123 Academic Drive, Knowledge City, State 45678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">info@vidyasager.edu</p>
                  <p className="text-gray-600">admissions@vidyasager.edu</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-gray-200">
              <img 
                src="https://picsum.photos/id/111/800/600" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-indigo-50">
            <h3 className="text-2xl font-bold text-indigo-950 mb-6 flex items-center">
              <MessageSquare className="mr-2 h-6 w-6 text-indigo-600" /> Online Inquiry
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                  <option>Admissions Inquiry</option>
                  <option>General Feedback</option>
                  <option>Academic Questions</option>
                  <option>Staff Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center">
                Send Message <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
