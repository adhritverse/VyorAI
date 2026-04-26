import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, MessageSquare, Briefcase, LogOut, ChevronRight, History } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router';
import AnimatedSection from '@/components/AnimatedSection';

interface Submission {
  id: string;
  created_at: string;
  type: 'contact' | 'career';
  title: string;
  status: string;
}

export default function AccountCenter() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [contactHistory, setContactHistory] = useState<any[]>([]);
  const [careerHistory, setCareerHistory] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAndHistory = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/auth');
        return;
      }
      setUser(user);

      // Fetch contact submissions
      const { data: contacts } = await supabase
        .from('contact_submissions')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false });

      // Fetch career applications
      const { data: careers } = await supabase
        .from('job_applications')
        .select('*')
        .eq('email', user.email)
        .order('applied_at', { ascending: false });

      setContactHistory(contacts || []);
      setCareerHistory(careers || []);
      setLoading(false);
    };

    fetchUserAndHistory();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-black">{user?.user_metadata?.full_name || 'User'}</h2>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>

              <nav className="space-y-2">
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 text-black font-medium transition-colors">
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5" />
                    <span>Activity History</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 p-4 rounded-xl text-red-600 hover:bg-red-50 font-medium transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Log Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <div className="space-y-8">
                {/* Contact History */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold">Contact Requests</h3>
                    </div>
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {contactHistory.length} Total
                    </span>
                  </div>

                  {contactHistory.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                      <p>No contact requests found.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {contactHistory.map((item: any) => (
                        <div key={item.id} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-black">{item.company || 'Direct Inquiry'}</h4>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(item.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mb-4">{item.message}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 py-0.5 bg-gray-50 rounded">
                              {item.designation || 'Inquiry'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Career History */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold">Job Applications</h3>
                    </div>
                    <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {careerHistory.length} Total
                    </span>
                  </div>

                  {careerHistory.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                      <p>No job applications found.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {careerHistory.map((item: any) => (
                        <div key={item.id} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-black">{item.role}</h4>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(item.applied_at).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mb-4">Application for {item.role} role at Vyor AI.</p>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 px-2 py-0.5 bg-green-50 rounded">
                              Submitted
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
