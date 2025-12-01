import React, { useState, useEffect } from 'react';
import { 
  Truck, Building2, ChevronRight, ShieldCheck, Zap, 
  BarChart3, Users, FileCheck, Globe, Lock, ArrowRight, Menu, X 
} from 'lucide-react';

const URLS = {
  DRIVER_APP: "https://trucker-app-final.vercel.app/",
  HR_PORTAL: "https://hr-portal-ebon.vercel.app/"
};

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Truck className="text-white" size={24} />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            SafeHaul
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className={`text-sm font-medium hover:text-blue-500 transition ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Features</a>
          <a href="#carriers" className={`text-sm font-medium hover:text-blue-500 transition ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>For Carriers</a>
          <a href="#drivers" className={`text-sm font-medium hover:text-blue-500 transition ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>For Drivers</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href={URLS.HR_PORTAL} 
            className={`text-sm font-bold px-5 py-2.5 rounded-full transition border ${scrolled ? 'border-slate-200 text-slate-700 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'}`}
          >
            Carrier Login
          </a>
          <a 
            href={URLS.DRIVER_APP} 
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden">
          <a href="#features" className="text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#carriers" className="text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>For Carriers</a>
          <a href="#drivers" className="text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>For Drivers</a>
          <hr className="border-gray-100" />
          <a href={URLS.HR_PORTAL} className="text-center w-full py-3 border border-gray-200 rounded-lg font-bold text-slate-700">Carrier Login</a>
          <a href={URLS.DRIVER_APP} className="text-center w-full py-3 bg-blue-600 text-white rounded-lg font-bold">Driver Application</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Zap size={14} fill="currentColor" /> The Next Gen Recruitment Platform
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Connecting Elite Drivers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            With Top-Tier Carriers
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          SafeHaul unifies the trucking industry. Drivers build one Master Profile to apply anywhere. Carriers get pre-vetted, compliant leads instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <a 
            href={URLS.DRIVER_APP}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-900/50"
          >
            <Truck size={20} /> I'm a Driver
          </a>
          <a 
            href={URLS.HR_PORTAL}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
          >
            <Building2 size={20} /> I'm a Carrier
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <span className="text-white font-bold text-lg flex items-center gap-2"><Globe size={18}/> National Coverage</span>
           <span className="text-white font-bold text-lg flex items-center gap-2"><ShieldCheck size={18}/> DOT Compliant</span>
           <span className="text-white font-bold text-lg flex items-center gap-2"><Lock size={18}/> Secure Data</span>
        </div>
      </div>
    </header>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, color }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${color}`}>
      <Icon size={28} className="text-white" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything needed to keep America moving</h2>
          <p className="text-slate-600 text-lg">Whether you are behind the wheel or behind the desk, our platform is purpose-built to streamline your workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={FileCheck}
            color="bg-blue-500"
            title="Master Profile"
            desc="Drivers fill out their DOT application once. Our intelligent system keeps it updated, allowing for 1-click applications to any carrier in the network."
          />
          <FeatureCard 
            icon={Zap}
            color="bg-purple-500"
            title="Instant Lead Routing"
            desc="Carriers receive qualified applications in real-time. Our round-robin distribution ensures fair access and rapid response times."
          />
          <FeatureCard 
            icon={ShieldCheck}
            color="bg-green-500"
            title="Digital Compliance"
            desc="Electronic signatures, automated DQ file generation, and secure document storage keep you audit-ready at all times."
          />
        </div>
      </div>
    </section>
  );
};

const CarrierSection = () => {
  return (
    <section id="carriers" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 font-bold text-sm rounded-full mb-6">
              FOR CARRIERS
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Recruit smarter, <br/> not harder.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Stop wasting time on data entry. Our HR Portal gives you a command center for your entire recruitment pipeline.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Access 50-200 fresh leads daily based on your plan.",
                "Automated email & SMS outreach templates.",
                "Visual pipeline tracking (New -> Hired).",
                "Team collaboration with role-based access."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full"><ArrowRight size={12} className="text-green-700"/></div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href={URLS.HR_PORTAL} className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
              Access HR Portal <ChevronRight size={18} />
            </a>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-3 opacity-50 blur-lg"></div>
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl p-2 border border-slate-700">
               {/* Mock UI Representation - HR Portal Dashboard */}
               <div className="bg-slate-800 rounded-xl overflow-hidden aspect-video relative flex flex-col">
                  {/* Browser Header */}
                  <div className="h-10 bg-slate-700 border-b border-slate-600 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    {/* Lead Pipeline Cards - Showing incoming applications */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {/* Card 1: New Applications */}
                      <div className="card-flow-1 bg-slate-700/50 p-4 rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-colors">
                        <div className="text-xs text-slate-400 mb-3 font-semibold">NEW</div>
                        <div className="text-sm font-bold text-blue-400">12</div>
                        <div className="text-xs text-slate-500 mt-2">Applications</div>
                      </div>
                      
                      {/* Card 2: In Review */}
                      <div className="card-flow-2 bg-slate-700/50 p-4 rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-colors">
                        <div className="text-xs text-slate-400 mb-3 font-semibold">IN REVIEW</div>
                        <div className="text-sm font-bold text-blue-400">8</div>
                        <div className="text-xs text-slate-500 mt-2">Candidates</div>
                      </div>
                      
                      {/* Card 3: Ready to Hire */}
                      <div className="card-flow-3 bg-slate-700/50 p-4 rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-colors">
                        <div className="text-xs text-slate-400 mb-3 font-semibold">READY</div>
                        <div className="text-sm font-bold text-green-400">3</div>
                        <div className="text-xs text-slate-500 mt-2">To Onboard</div>
                      </div>
                    </div>
                    
                    {/* Chart Area - Activity visualization */}
                    <div className="flex-1 bg-slate-700/20 p-4 rounded-lg border border-slate-600/30 flex items-end justify-center gap-3">
                      <div className="chart-bar-1 bg-gradient-to-t from-blue-500 to-blue-400 w-3 rounded-t opacity-70"></div>
                      <div className="chart-bar-2 bg-gradient-to-t from-blue-500 to-blue-400 w-3 rounded-t opacity-70"></div>
                      <div className="chart-bar-3 bg-gradient-to-t from-blue-500 to-blue-400 w-3 rounded-t opacity-70"></div>
                      <div className="text-xs text-slate-500 absolute bottom-2">Daily Activity</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DriverSection = () => {
  return (
    <section id="drivers" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 font-bold text-sm rounded-full mb-6 border border-blue-500/30">
              FOR DRIVERS
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              One Profile. <br/> Endless Opportunities.
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Forget filling out the same paper application 10 times. Build your Master Profile once, digitally sign it, and apply to top carriers in seconds.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg h-fit"><FileCheck className="text-blue-400" /></div>
                <div>
                  <h4 className="font-bold mb-1">Easy Application</h4>
                  <p className="text-sm text-slate-400">Mobile-friendly wizard guides you through every step.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-purple-600/20 p-3 rounded-lg h-fit"><Lock className="text-purple-400" /></div>
                <div>
                  <h4 className="font-bold mb-1">Secure Data</h4>
                  <p className="text-sm text-slate-400">Your SSN and license info are encrypted and protected.</p>
                </div>
              </div>
            </div>

            <a href={URLS.DRIVER_APP} className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-900/50">
              Start Your Application <ChevronRight size={18} />
            </a>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
             <div className="relative w-72 h-[550px] bg-slate-800 rounded-[2.5rem] border-8 border-slate-700 shadow-2xl overflow-hidden">
                {/* Mock Mobile UI - Driver Application Form */}
                <div className="absolute top-0 left-0 right-0 h-full w-full bg-white flex flex-col">
                   {/* Blue Header with Animated Avatar */}
                   <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-24 p-6 flex items-end relative overflow-hidden">
                      <div className="absolute inset-0 bg-blue-700/30 animate-pulse"></div>
                      <div className="avatar-pulse w-12 h-12 bg-white/30 rounded-full relative z-10 border-2 border-white/50"></div>
                   </div>
                   
                   {/* Form Content */}
                   <div className="flex-1 p-6 flex flex-col">
                      {/* Animated Form Title */}
                      <div className="space-y-3 mb-6">
                        <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded field-fill-1"></div>
                        <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded field-fill-2"></div>
                      </div>
                      
                      {/* Animated Form Area */}
                      <div className="form-area-glow flex-1 rounded-xl border border-slate-200 mt-4 p-4 space-y-3">
                        <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                        <div className="h-3 bg-slate-200 rounded w-4/5"></div>
                        <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      </div>
                      
                      {/* Animated Submit Button */}
                      <button className="button-submit-pulse h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg mt-auto w-full text-white font-semibold text-sm transition-all">
                        Continue
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Truck className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold text-slate-900">SafeHaul</span>
          </div>
          <p className="text-slate-500 max-w-sm">
            The industry standard for compliant, efficient, and secure driver recruitment and management.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href={URLS.HR_PORTAL} className="hover:text-blue-600">Carrier Login</a></li>
            <li><a href={URLS.DRIVER_APP} className="hover:text-blue-600">Driver Application</a></li>
            <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} SafeHaul Systems. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Features />
      <CarrierSection />
      <DriverSection />
      <Footer />
    </div>
  );
}
