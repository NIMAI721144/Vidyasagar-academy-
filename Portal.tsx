
import React, { useState } from 'react';
import { ShieldCheck, User, Users, GraduationCap, Briefcase, Building, ChevronRight, LayoutDashboard, Calendar, FileText, PieChart } from 'lucide-react';
import { UserRole } from '../types';

const Portal: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const roles: { role: UserRole; icon: any; color: string; desc: string }[] = [
    { role: 'Student', icon: graduationCap, color: 'bg-blue-500', desc: 'Grades, assignments & attendance' },
    { role: 'Parent', icon: users, color: 'bg-rose-500', desc: 'Progress reports & fee payments' },
    { role: 'Teacher', icon: Briefcase, color: 'bg-emerald-500', desc: 'Resources & digital gradebooks' },
    { role: 'Admin', icon: User, color: 'bg-indigo-500', desc: 'Daily operations & staff management' },
    { role: 'Branch', icon: Building, color: 'bg-amber-500', desc: 'Campus-specific data management' },
    { role: 'Super Admin', icon: ShieldCheck, color: 'bg-slate-800', desc: 'Global settings & security' },
  ];

  function graduationCap() { return <GraduationCap /> }
  function users() { return <Users /> }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn && selectedRole) {
    return (
      <div className="min-h-[80vh] flex bg-slate-50">
        {/* Dashboard Sidebar */}
        <aside className="w-64 bg-academy-blue text-white hidden md:block">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold">Portal Dashboard</h2>
            <p className="text-xs text-blue-300 mt-1">{selectedRole} Account</p>
          </div>
          <nav className="p-4 space-y-2">
            {[
              { label: 'Overview', icon: LayoutDashboard },
              { label: 'Academic Calendar', icon: Calendar },
              { label: 'Reports', icon: FileText },
              { label: 'Analytics', icon: PieChart },
            ].map((item, i) => (
              <button key={i} className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white/10 transition-colors">
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Welcome Back, {selectedRole === 'Branch' ? 'Branch Manager' : 'User'}</h1>
            <button 
              onClick={() => setIsLoggedIn(false)} 
              className="text-sm font-bold text-rose-500 hover:text-rose-600"
            >
              Sign Out
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Attendance', value: '98%', trend: '+2% from last month' },
              { label: 'Pending Tasks', value: '12', trend: '3 due tomorrow' },
              { label: 'Notifications', value: '5', trend: 'New message from Principal' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="text-3xl font-bold text-academy-blue my-1">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.trend}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Recent Activity</h3>
              <button className="text-sm text-academy-blue font-semibold">View All</button>
            </div>
            <div className="divide-y divide-slate-100">
              {[1, 2, 3].map(i => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-academy-blue">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Term 2 Schedule Published</p>
                      <p className="text-xs text-slate-500">Yesterday at 2:30 PM</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-academy-blue mb-4">School Management Portal</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Welcome to the centralized dashboard for Vidyasagar Academy. Please select your role to access your personalized portal.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {roles.map((r) => (
              <button
                key={r.role}
                onClick={() => setSelectedRole(r.role)}
                className={`p-6 rounded-2xl border transition-all text-left flex flex-col items-start space-y-4 ${
                  selectedRole === r.role 
                    ? 'border-academy-blue bg-blue-50 ring-2 ring-blue-100 shadow-lg' 
                    : 'border-slate-200 bg-white hover:border-blue-200 hover:shadow-md'
                }`}
              >
                <div className={`p-3 rounded-xl text-white ${r.color}`}>
                  {React.createElement(r.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{r.role} Portal</h3>
                  <p className="text-xs text-slate-500 mt-1">{r.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
            {selectedRole ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-50 text-academy-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">{selectedRole} Login</h2>
                  <p className="text-sm text-slate-500 mt-1">Please enter your institutional credentials</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Username or Email</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                      placeholder="e.g. vidya.admin"
                      required
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-bold text-slate-700">Password</label>
                      <button type="button" className="text-xs font-semibold text-academy-blue hover:underline">Forgot password?</button>
                    </div>
                    <input 
                      type="password" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" 
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded text-academy-blue focus:ring-academy-blue" />
                  <label htmlFor="remember" className="text-sm text-slate-600">Remember me on this device</label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-academy-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg active:scale-[0.98]"
                >
                  Sign In
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                  <User size={40} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">Select a Role</h2>
                <p className="text-slate-500">Choose your login type from the left to access the management tools.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
