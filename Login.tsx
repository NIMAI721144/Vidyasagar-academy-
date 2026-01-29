
import React, { useState } from 'react';
import { UserRole } from '../types';
import { GraduationCap, BookOpen, Users, ShieldCheck, Heart, ArrowRight, AlertCircle, Loader2, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LoginCardProps {
  role: UserRole;
  description: string;
  icon: any;
  onClick: () => void;
}

const LoginCard: React.FC<LoginCardProps> = ({ role, description, icon: Icon, onClick }) => (
  <button 
    onClick={onClick}
    className={`bg-white p-8 rounded-3xl shadow-sm border transition-all text-left group flex flex-col h-full ${
      role === UserRole.SUPER_ADMIN ? 'border-amber-100 hover:border-amber-500' : 
      role === UserRole.BRANCH_ADMIN ? 'border-emerald-100 hover:border-emerald-500' :
      'border-gray-100 hover:border-indigo-600'
    } hover:shadow-2xl hover:-translate-y-1`}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
      role === UserRole.SUPER_ADMIN 
        ? 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white' 
        : role === UserRole.BRANCH_ADMIN
        ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
        : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
    }`}>
      <Icon className="h-7 w-7" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{role} Portal</h3>
    <p className="text-sm text-gray-500 mb-8 leading-relaxed flex-grow">{description}</p>
    <div className={`flex items-center font-bold text-sm ${
      role === UserRole.SUPER_ADMIN ? 'text-amber-600' : 
      role === UserRole.BRANCH_ADMIN ? 'text-emerald-600' :
      'text-indigo-600'
    }`}>
      Access Dashboard <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </div>
  </button>
);

export const Login = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const branches = [
    "Knowledge City (Main Campus)",
    "Suburban Heights Branch",
    "Emerald Bay International"
  ];

  const roles = [
    { role: UserRole.STUDENT, icon: BookOpen, desc: "Personal space for students to track grades, homework, and academic progress." },
    { role: UserRole.TEACHER, icon: GraduationCap, desc: "Educator portal for class management, grading, and curriculum planning." },
    { role: UserRole.PARENT, icon: Heart, desc: "Stay connected with your child's academic journey and school communications." },
    { role: UserRole.BRANCH_ADMIN, icon: Building2, desc: "Site-specific administrative controls for branch operations and logistics." },
    { role: UserRole.ADMIN, icon: Users, desc: "Administrative controls for campus operations and staff management." },
    { role: UserRole.SUPER_ADMIN, icon: ShieldCheck, desc: "System-wide configuration, security management, and global oversight." },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    if (selectedRole === UserRole.BRANCH_ADMIN && !selectedBranch) {
      setError('Please select a branch to proceed.');
      setIsSubmitting(false);
      return;
    }

    // Simulate network delay
    setTimeout(() => {
      if (selectedRole === UserRole.SUPER_ADMIN) {
        if (userId === 'nimaimana645@gmail.com' && password === 'Nimai721144') {
          navigate('/admin/super-dashboard');
        } else {
          setError('Invalid Super Admin credentials. Please check your Email and Password.');
          setIsSubmitting(false);
        }
      } else if (selectedRole === UserRole.BRANCH_ADMIN) {
        // Just mock success for now
        navigate('/admin/branch-dashboard');
      } else {
        setError('Integration for this portal role is coming soon. Only Super Admin and Branch Admin (mock) are active for testing.');
        setIsSubmitting(false);
      }
    }, 1500);
  };

  if (selectedRole) {
    const roleInfo = roles.find(r => r.role === selectedRole);
    const RoleIcon = roleInfo?.icon;

    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="bg-white w-full max-w-md p-10 rounded-[2.5rem] shadow-2xl border border-indigo-50 relative overflow-hidden">
          {/* Accent decoration */}
          <div className={`absolute top-0 inset-x-0 h-2 ${
            selectedRole === UserRole.SUPER_ADMIN ? 'bg-amber-500' : 
            selectedRole === UserRole.BRANCH_ADMIN ? 'bg-emerald-500' :
            'bg-indigo-600'
          }`}></div>
          
          <button 
            onClick={() => {
              setSelectedRole(null);
              setError(null);
              setUserId('');
              setPassword('');
              setSelectedBranch('');
            }}
            className="text-gray-400 hover:text-indigo-600 text-sm font-bold mb-10 flex items-center transition-colors"
          >
            <ArrowRight className="rotate-180 mr-2 h-4 w-4" /> Back to Portals
          </button>

          <div className="text-center mb-10">
            <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${
              selectedRole === UserRole.SUPER_ADMIN ? 'bg-amber-50 text-amber-600' : 
              selectedRole === UserRole.BRANCH_ADMIN ? 'bg-emerald-50 text-emerald-600' :
              'bg-indigo-50 text-indigo-600'
            }`}>
              {RoleIcon && <RoleIcon className="h-8 w-8" />}
            </div>
            <h2 className="text-3xl font-bold text-indigo-950 mb-3">{selectedRole} Login</h2>
            <p className="text-gray-500 font-medium">Authentication required to proceed</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-xl flex items-start space-x-3 text-red-700 animate-in shake duration-300">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <p className="text-sm font-semibold leading-relaxed">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            {(selectedRole === UserRole.BRANCH_ADMIN || selectedRole === UserRole.STUDENT || selectedRole === UserRole.TEACHER) && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select Branch</label>
                <select 
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-medium bg-white"
                >
                  <option value="">Choose a branch...</option>
                  {branches.map((b, i) => (
                    <option key={i} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">User ID / Email</label>
              <input 
                type="text" 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400 font-medium" 
                placeholder="Enter your registered ID" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400 font-medium" 
                placeholder="••••••••" 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-2xl font-bold shadow-xl transition-all flex items-center justify-center space-x-2 text-white disabled:opacity-70 ${
                selectedRole === UserRole.SUPER_ADMIN ? 'bg-amber-600 hover:bg-amber-700' : 
                selectedRole === UserRole.BRANCH_ADMIN ? 'bg-emerald-600 hover:bg-emerald-700' :
                'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <span>Login to Portal</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-50 text-center">
            <a href="#" className="text-sm font-bold text-gray-400 hover:text-indigo-600 transition-colors">Problem signing in? Contact IT Support</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700 max-w-7xl mx-auto px-4 py-20 min-h-[80vh]">
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">Secured Access</div>
        <h1 className="text-4xl md:text-5xl font-serif text-indigo-950 mb-6">Unified Academy Portals</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">Please select your designated role to access specialized features, data, and management tools.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((item) => (
          <LoginCard 
            key={item.role}
            role={item.role}
            description={item.desc}
            icon={item.icon}
            onClick={() => setSelectedRole(item.role)}
          />
        ))}
      </div>
    </div>
  );
};
