
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Branches } from './pages/Branches';
import { Academics } from './pages/Academics';
import { Login } from './pages/Login';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';
import { AIChatbox } from './components/AIChatbox';
import { Shield, Users, BookOpen, Settings, LogOut, BarChart3, Database, Bell, ArrowRight, Building2, LayoutDashboard, FileText } from 'lucide-react';

// Super Admin Dashboard Component
const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="bg-amber-600 p-2 rounded-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 leading-none">Super Admin</h1>
            <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">Global Dashboard</span>
          </div>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="flex items-center space-x-2 text-gray-500 hover:text-red-600 font-bold transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </button>
      </nav>

      <div className="max-w-7xl mx-auto p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">System Overview</h2>
            <p className="text-gray-500">Welcome back, Super Admin. Everything is running smoothly.</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center">
              <Settings className="h-4 w-4 mr-2" /> Global Settings
            </button>
            <button className="bg-white border border-gray-200 px-5 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center">
              <Bell className="h-4 w-4 mr-2" /> 4 Alerts
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Users', val: '1,452', trend: '+12%', icon: Users, color: 'indigo' },
            { label: 'Active Sessions', val: '84', trend: 'Live', icon: BarChart3, color: 'amber' },
            { label: 'Data Storage', val: '42.5 GB', trend: '68%', icon: Database, color: 'emerald' },
            { label: 'Support Tickets', val: '5', trend: '2 Urgent', icon: Bell, color: 'rose' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
              <div className={`w-12 h-12 bg-${stat.color}-50 text-${stat.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</p>
              <div className="flex items-end space-x-2">
                <span className="text-3xl font-bold text-gray-900">{stat.val}</span>
                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full mb-1 ${
                  stat.trend === 'Live' ? 'bg-emerald-100 text-emerald-700 animate-pulse' : 'bg-gray-100 text-gray-600'
                }`}>
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">Recent System Logs</h3>
                <button className="text-indigo-600 text-sm font-bold">View History</button>
              </div>
              <div className="p-0">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 font-bold">
                    <tr>
                      <th className="px-6 py-4">Event</th>
                      <th className="px-6 py-4">User</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { ev: 'Portal Config Update', user: 'Admin_Sarah', status: 'Success', time: '12m ago' },
                      { ev: 'New Teacher Onboarded', user: 'HR_Robert', status: 'Success', time: '1h ago' },
                      { ev: 'Security Patch V2.4', user: 'System', status: 'In Progress', time: '3h ago' },
                      { ev: 'Database Backup', user: 'System', status: 'Success', time: '5h ago' },
                      { ev: 'Failed Login Attempt', user: 'Unknown', status: 'Rejected', time: '8h ago' }
                    ].map((log, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-800">{log.ev}</td>
                        <td className="px-6 py-4 text-gray-500">{log.user}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-[10px] font-black ${
                            log.status === 'Success' ? 'bg-emerald-50 text-emerald-600' : 
                            log.status === 'Rejected' ? 'bg-rose-50 text-rose-600' : 'bg-indigo-50 text-indigo-600'
                          }`}>
                            {log.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-gray-400 font-medium">{log.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all font-bold text-gray-700">
                  <Users className="h-5 w-5 mr-4" /> Manage Faculty
                </button>
                <button className="w-full flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all font-bold text-gray-700">
                  <BookOpen className="h-5 w-5 mr-4" /> Curriculum Control
                </button>
                <button className="w-full flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all font-bold text-gray-700">
                  <Database className="h-5 w-5 mr-4" /> Export DB Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Branch Admin Dashboard Component
const BranchAdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 leading-none">Branch Admin</h1>
            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Local Branch Control</span>
          </div>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="flex items-center space-x-2 text-gray-500 hover:text-red-600 font-bold transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </button>
      </nav>

      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Branch Operations</h2>
          <p className="text-gray-500">Managing local student records, staff, and facilities.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Student Roster", icon: Users, color: "bg-indigo-50", text: "indigo" },
            { title: "Facility Bookings", icon: LayoutDashboard, color: "bg-emerald-50", text: "emerald" },
            { title: "Local Reports", icon: FileText, color: "bg-amber-50", text: "amber" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`h-7 w-7 text-${item.text}-600`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">Review and update {item.title.toLowerCase()} for this specific campus.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Additional stub components for missing pages
const StudentLife = () => (
  <Layout>
    <div className="py-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-serif text-indigo-950 mb-8">Student Life</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Clubs & Organizations</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="font-semibold text-indigo-900">Debate Club</span>
              <span className="text-sm text-gray-500">Meets Tuesdays</span>
            </li>
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="font-semibold text-indigo-900">Robotics Club</span>
              <span className="text-sm text-gray-500">Meets Wednesdays</span>
            </li>
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="font-semibold text-indigo-900">Arts Society</span>
              <span className="text-sm text-gray-500">Meets Fridays</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Student Council</h2>
          <p className="text-gray-600 mb-6">Our student-led government that organizes events and represents student voices to the administration.</p>
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=300" className="rounded-xl w-full object-cover h-48" alt="Council" />
        </div>
      </div>
    </div>
  </Layout>
);

const Resources = () => (
  <Layout>
    <div className="py-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-serif text-indigo-950 mb-12">Learning Resources</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Library & Research", desc: "Access 20,000+ books and digital journals.", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&h=300" },
          { title: "Technology & IT", desc: "Campus-wide high speed Wi-Fi and 4 modern computer labs.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=300" },
          { title: "Support Services", desc: "Counseling and academic advising available daily.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=300" }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
            <img src={item.img} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
              <button className="text-indigo-600 font-bold text-sm flex items-center hover:translate-x-1 transition-transform">
                Access Portal <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

const News = () => (
  <Layout>
    <div className="py-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-serif text-indigo-950 mb-12">Latest News & Events</h1>
      <div className="space-y-8">
        {[
          { date: "Oct 24, 2024", title: "New STEM Program Launch", content: "We are thrilled to announce a new partnership with local tech hubs for advanced robotics workshops." },
          { date: "Oct 18, 2024", title: "Sports Day Winners", content: "Congratulations to the Blue House for winning the overall championship this year with record scores." },
          { date: "Oct 12, 2024", title: "Parent-Teacher Meeting", content: "Quarterly meetings scheduled for next week. Please check your portal for time slot bookings." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border-l-8 border-indigo-600 flex flex-col md:flex-row md:items-center justify-between hover:shadow-xl transition-all duration-300">
            <div className="md:max-w-2xl">
              <p className="text-xs font-black text-indigo-500 uppercase mb-2 tracking-widest">{item.date}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
            <button className="mt-6 md:mt-0 px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all whitespace-nowrap">
              Read Story
            </button>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/branches" element={<Layout><Branches /></Layout>} />
        <Route path="/academics" element={<Layout><Academics /></Layout>} />
        <Route path="/admissions" element={<Layout><Admissions /></Layout>} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/admin/super-dashboard" element={<SuperAdminDashboard />} />
        <Route path="/admin/branch-dashboard" element={<BranchAdminDashboard />} />
      </Routes>
      <AIChatbox />
    </Router>
  );
};

export default App;
