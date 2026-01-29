
import React from 'react';
import { MapPin, Phone, Mail, Navigation, Star, ShieldCheck, Coffee, Library } from 'lucide-react';

export const Branches = () => {
  const branchData = [
    {
      id: 1,
      name: "Knowledge City (Main Campus)",
      type: "Residential & Day School",
      address: "123 Academic Drive, Knowledge City, State 45678",
      phone: "+1 (555) 101-1234",
      email: "main@vidyasager.edu",
      img: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800&q=80",
      features: ["Hostel Facility", "Olympic Pool", "Advanced Robotics Lab"]
    },
    {
      id: 2,
      name: "Suburban Heights Branch",
      type: "Primary & Middle School",
      address: "45 Hilltop Avenue, Suburban Heights, State 45680",
      phone: "+1 (555) 202-5678",
      email: "suburban@vidyasager.edu",
      img: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80",
      features: ["Smart Classrooms", "Music Conservatory", "Indoor Sports Arena"]
    },
    {
      id: 3,
      name: "Emerald Bay International",
      type: "High School & IB Wing",
      address: "7 Coastal Boulevard, Emerald Bay, State 45690",
      phone: "+1 (555) 303-9012",
      email: "emerald@vidyasager.edu",
      img: "https://images.unsplash.com/photo-1523050853064-dbad35009f9f?auto=format&fit=crop&w=800&q=80",
      features: ["IB Curriculum", "Career Counseling Center", "Modern Cafeteria"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-indigo-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80" 
            alt="Library" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Our Global Network</h1>
          <p className="text-indigo-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Vidyasager Academy spans multiple campuses, each designed to provide an inspiring environment for academic and personal growth.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {branchData.map((branch) => (
              <div key={branch.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                <div className="h-64 relative overflow-hidden">
                  <img src={branch.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={branch.name} />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 shadow-lg">
                    {branch.type}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-indigo-600 transition-colors">{branch.name}</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3 text-sm text-gray-600">
                      <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                      <span>{branch.email}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-50 mb-8">
                    <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-4">Campus Facilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {branch.features.map((feat, idx) => (
                        <span key={idx} className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-3 py-1 rounded-full border border-indigo-100">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all flex items-center justify-center group/btn">
                    View on Map <Navigation className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Standards */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-indigo-950 mb-8">Consistent Excellence Across Every Campus</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Regardless of which branch you choose, we maintain rigorous academic standards and provide high-quality facilities. Every campus is a part of the unified Vidyasager ecosystem, sharing our philosophy of holistic development.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50 rounded-2xl">
                  <ShieldCheck className="h-8 w-8 text-indigo-600 mb-3" />
                  <h4 className="font-bold text-gray-900">High Security</h4>
                  <p className="text-xs text-gray-500">24/7 Monitoring & Access Control</p>
                </div>
                <div className="p-6 bg-emerald-50 rounded-2xl">
                  <Star className="h-8 w-8 text-emerald-600 mb-3" />
                  <h4 className="font-bold text-gray-900">Certified Staff</h4>
                  <p className="text-xs text-gray-500">Expertise in International Pedagogy</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" 
                className="rounded-[3rem] shadow-2xl" 
                alt="Uniform Standards" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <Library className="h-10 w-10 text-indigo-600" />
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs font-bold text-gray-400">Library Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
