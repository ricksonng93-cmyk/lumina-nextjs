import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Palette, GraduationCap, Mail, Phone, MapPin, 
  ArrowRight, CheckCircle2, Menu, X, Send, Target,
  Code, Smartphone, ShoppingCart, Brush, FileText, Megaphone,
  BookOpen, Users, Wrench, Shield, Clock, Lightbulb, Heart, Trophy,
  Award, Headphones, CreditCard, Settings, MessageCircle,
  TrendingUp, Building2, Star, Lock, Layers, Handshake, UserPlus, Wallet, Linkedin
} from 'lucide-react';

const styles = `
  /* Custom Orange Colors */
  .bg-orange-50 { background-color: #fff7ed !important; }
  .bg-orange-100 { background-color: #ffedd5 !important; }
  .bg-orange-200 { background-color: #fed7aa !important; }
  .bg-orange-500 { background-color: #f97316 !important; }
  .bg-orange-600 { background-color: #ea580c !important; }
  .text-orange-100 { color: #ffedd5 !important; }
  .text-orange-200 { color: #fed7aa !important; }
  .text-orange-500 { color: #f97316 !important; }
  .text-orange-600 { color: #ea580c !important; }
  .text-orange-700 { color: #c2410c !important; }
  .text-orange-800 { color: #9a3412 !important; }
  .border-orange-100 { border-color: #ffedd5 !important; }
  .border-orange-200 { border-color: #fed7aa !important; }
  .from-orange-500 { --tw-gradient-from: #f97316; }
  .to-orange-600 { --tw-gradient-to: #d97706; }
  .hover\\:bg-orange-50:hover { background-color: #fff7ed !important; }
  .hover\\:bg-orange-600:hover { background-color: #ea580c !important; }
  .hover\\:border-orange-200:hover { border-color: #fed7aa !important; }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulse-ring {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(1.3); opacity: 0; }
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  /* Scroll reveal: elements start hidden, animate when .revealed is added */
  .reveal {
    opacity: 0;
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.reveal-up { transform: translateY(40px); }
  .reveal.reveal-left { transform: translateX(-40px); }
  .reveal.reveal-right { transform: translateX(40px); }
  .reveal.reveal-scale { transform: scale(0.92); }
  .reveal.revealed {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
  }

  /* Stagger delays for children */
  .reveal.stagger-1 { transition-delay: 0.1s; }
  .reveal.stagger-2 { transition-delay: 0.2s; }
  .reveal.stagger-3 { transition-delay: 0.3s; }
  .reveal.stagger-4 { transition-delay: 0.4s; }
  .reveal.stagger-5 { transition-delay: 0.5s; }
  .reveal.stagger-6 { transition-delay: 0.6s; }

  /* Legacy classes mapped to new system */
  .fade-in-up { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
  .fade-in-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
  .fade-in-right { opacity: 0; transform: translateX(40px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
  .scale-in { opacity: 0; transform: scale(0.92); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
  .fade-in-up.revealed, .fade-in-left.revealed, .fade-in-right.revealed, .scale-in.revealed {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
  }
  .float { animation: float 3s ease-in-out infinite; }

  .delay-1 { transition-delay: 0.1s; }
  .delay-2 { transition-delay: 0.2s; }
  .delay-3 { transition-delay: 0.3s; }
  .delay-4 { transition-delay: 0.4s; }
  .delay-5 { transition-delay: 0.5s; }
  
  .card-hover { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
  .card-hover:hover { transform: translateY(-8px); box-shadow: 0 25px 50px rgba(0,0,0,0.1); }
  
  .btn-primary { transition: all 0.3s ease; }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(37,99,235,0.25); }
  
  .btn-dark { transition: all 0.3s ease; }
  .btn-dark:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(15,23,42,0.25); }
  
  .btn-secondary { transition: all 0.3s ease; }
  .btn-secondary:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.08); }
  
  .input-focus { transition: all 0.3s ease; }
  .input-focus:focus { border-color: #2563eb; box-shadow: 0 0 0 4px rgba(37,99,235,0.1); }
  
  .img-hover { transition: all 0.5s ease; }
  .img-hover:hover { transform: scale(1.02); }

  .whatsapp-btn {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 100;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
    transition: all 0.3s ease;
  }
  .whatsapp-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(37, 211, 102, 0.5);
  }
  .whatsapp-btn::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #25D366;
    animation: pulse-ring 1.5s ease-out infinite;
  }

  .scroll-container {
    overflow: hidden;
    white-space: nowrap;
  }
  
  .scroll-content {
    display: inline-flex;
    animation: scroll 20s linear infinite;
  }
  
  .scroll-content:hover {
    animation-play-state: paused;
  }
`;

function useScrollReveal() {
  useEffect(() => {
    // Delay to ensure browser paints the initial hidden state before observing
    const raf = requestAnimationFrame(() => {
      const selectors = '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .reveal';
      const elements = document.querySelectorAll(selectors);
      if (!elements.length) return;

      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Double rAF ensures the hidden state is painted before transitioning
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                entry.target.classList.add('revealed');
              });
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

      elements.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    });
    return () => cancelAnimationFrame(raf);
  }, []);
}

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done) {
        setDone(true);
        let start = 0;
        const end = parseInt(value);
        const inc = end / 60;
        const timer = setInterval(() => {
          start += inc;
          if (start >= end) { setDisplay(end); clearInterval(timer); }
          else setDisplay(Math.floor(start));
        }, 20);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, done]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// Composant WhatsApp flottant - Numéro FR
function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/33758172693" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="32" height="32" fill="white" className="relative z-10">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = (p: string) => { setPage(p); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); window.history.pushState({}, '', p === 'home' ? '/' : '/' + p); };

  useEffect(() => { const path = window.location.pathname.replace('/', ''); if (path && ['services','education','a-propos','partners','contact','privacy'].includes(path)) setPage(path); }, []);

  useEffect(() => { const onPop = () => { const path = window.location.pathname.replace('/', ''); setPage(path || 'home'); }; window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop); }, []);

  // Navigation vers section service spécifique
  const navToService = (serviceId: string) => {
    setPage('services');
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen flex flex-col bg-white">
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="flex-1">
          {page === 'home' && <Home nav={nav} />}
          {page === 'services' && <Services nav={nav} />}
          {page === 'education' && <Education nav={nav} />}
          {page === 'a-propos' && <About nav={nav} />}
          {page === 'partners' && <Partners nav={nav} />}
          {page === 'contact' && <Contact />}
          {page === 'privacy' && <Privacy nav={nav} />}
        </main>
        <Footer nav={nav} navToService={navToService} />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    </>
  );
}

function Header({ nav, menuOpen, setMenuOpen }: { nav: (p: string) => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'bg-white/98 backdrop-blur-lg shadow-sm border-b border-slate-100' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between relative">
          <button onClick={() => nav('home')} className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Lumina" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
            <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">LUMINA</span>
          </button>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {[['services','Services'],['education','LUMINA Education'],['a-propos','À propos'],['partners','Partners']].map(([p,l]) => (
              <button key={p} onClick={() => nav(p)} className="px-4 py-2.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium">{l}</button>
            ))}
          </nav>

          <button onClick={() => nav('contact')} className="hidden md:flex ml-3 px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all font-medium btn-dark items-center gap-2">
            Contact <ArrowRight size={16} />
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-1 pt-2 border-t border-slate-100">
            {[['services','Services'],['education','LUMINA Education'],['a-propos','À propos'],['partners','Partners'],['contact','Contact']].map(([p,l]) => (
              <button key={p} onClick={() => nav(p)} className="text-left text-slate-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition-all font-medium">{l}</button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer({ nav, navToService }: { nav: (p: string) => void; navToService: (s: string) => void }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mgoljvnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Newsletter',
          email: email,
        }),
      });
      
      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      }
    } catch (error) {
      console.error('Erreur newsletter');
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Lumina" className="w-10 h-10 object-contain brightness-0 invert" />
              <span className="text-xl font-bold tracking-tight">LUMINA</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm mb-4">
              Créateur d'expériences numériques sur mesure. Du concept au déploiement, nous transformons vos ambitions en solutions concrètes.
            </p>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-emerald-400" />
              <span className="text-xs text-slate-400">Données protégées</span>
            </div>
          </div>

          {/* Services - Cliquables vers sections */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <div className="space-y-2 text-sm">
              <button onClick={() => navToService('sites-web')} className="block text-slate-400 hover:text-white transition-colors text-left">Sites Web & Applications</button>
              <button onClick={() => navToService('branding')} className="block text-slate-400 hover:text-white transition-colors text-left">Branding</button>
              <button onClick={() => navToService('lumina-education')} className="block text-slate-400 hover:text-white transition-colors text-left">LUMINA Education</button>
              <button onClick={() => navToService('maintenance')} className="block text-slate-400 hover:text-white transition-colors text-left">Maintenance</button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Entreprise</h4>
            <div className="space-y-2 text-sm">
              {[['a-propos','À propos'],['partners','LUMINA Partners'],['contact','Contact']].map(([p,l]) => (
                <button key={p} onClick={() => nav(p)} className="block text-slate-400 hover:text-white transition-colors text-left">{l}</button>
              ))}
              <button onClick={() => nav('privacy')} className="block text-slate-400 hover:text-white transition-colors text-left">Politique de confidentialité</button>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-3">Restez informé de nos actualités</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle2 size={16} /> Inscrit !
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email" 
                  required
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                  S'inscrire
                </button>
              </form>
            )}
            <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
              <Lock size={10} /> Pas de spam. Données protégées.
            </p>
          </div>
        </div>

        {/* Contact + Bottom */}
        <div className="pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a href="tel:+242044054004" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Phone size={14} /> +242 06 404 54 04
            </a>
            <a href="tel:+330758172693" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Phone size={14} /> +33 07 58 17 26 93
            </a>
            <a href="mailto:contact@lumina-cg.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Mail size={14} /> contact@lumina-cg.com
            </a>
            <span className="flex items-center gap-2 text-slate-400">
              <MapPin size={14} /> Paris, France & Brazzaville, Congo
            </span>
          </div>
          <div className="text-center text-slate-500 text-sm">
            <p>© 2025 LUMINA Creative Group. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  // Technologies - Cases stylées sans icônes
  const technologies = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'WordPress', 
    'Figma', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS',
    'Vercel', 'Git', 'REST API', 'GraphQL', 'Firebase'
  ];

  const services = [
    { icon: Globe, title: 'Sites Web & Applications', desc: 'Création de sites vitrine, e-commerce et applications web sur mesure pour booster votre présence digitale.', color: 'blue' },
    { icon: Palette, title: 'Branding Digital', desc: 'Identité visuelle, logo, charte graphique et design pour une image de marque forte et mémorable.', color: 'violet' },
    { icon: GraduationCap, title: 'LUMINA Education', desc: 'Plateformes de gestion scolaire, sites web éducatifs et outils numériques pour établissements.', color: 'orange' },
  ];
  
  const colors: Record<string, { bg: string; text: string; hover: string; border: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:border-blue-200', border: 'border-blue-100' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-600', hover: 'hover:border-violet-200', border: 'border-violet-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'hover:border-orange-200', border: 'border-orange-100' },
  };

  // Process
  const process = [
    { num: '01', title: 'Découverte', desc: 'Analyse de vos besoins et objectifs' },
    { num: '02', title: 'Conception', desc: 'Maquettes et validation du design' },
    { num: '03', title: 'Développement', desc: 'Création de votre solution' },
    { num: '04', title: 'Livraison', desc: 'Mise en ligne et formation' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] -z-10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 fade-in-up">
                <Globe size={16} /> Votre partenaire en création numérique
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight fade-in-up delay-1">
                Votre vision mérite une <span className="text-blue-600">expertise d'exception</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed fade-in-up delay-2">
                Nous accompagnons les institutions et entreprises dans leur transformation numérique grâce à des solutions fiables, sécurisées et adaptées.
              </p>
              <div className="flex flex-wrap gap-4 fade-in-up delay-3">
                <button onClick={() => nav('contact')} className="px-7 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 font-semibold btn-dark">
                  Démarrer un projet <ArrowRight size={18} />
                </button>
                <button onClick={() => nav('services')} className="px-7 py-3.5 border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all font-semibold btn-secondary">
                  Découvrir nos services
                </button>
              </div>
            </div>
            <div className="relative fade-in-right delay-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 img-hover">
                <img src="/hero.png" alt="Digital Solutions" className="w-full h-[400px] lg:h-[480px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Projet livré</p>
                    <p className="text-xs text-slate-500">Il y a 2h</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">+50</p>
                    <p className="text-xs text-slate-500">Clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets défilants avec logos */}
      <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
          <p className="text-center text-sm text-slate-500 font-medium uppercase tracking-wider">Nos derniers projets</p>
        </div>
        <div className="scroll-container">
          <div className="scroll-content">
            {/* Ajoute tes logos dans public/projects/ */}
            {[
              { name: 'Master Finance', logo: '/projects/master-finance.png' },
              { name: 'Moonlie', logo: '/projects/moonlie.png' },
              { name: 'France-Afrique Média', logo: '/projects/france-afrique.png' },
              { name: 'École Saint-Joseph', logo: '/projects/ecole-st-joseph.png' },
              { name: 'TechCongo', logo: '/projects/techcongo.png' },
              { name: 'Master Finance', logo: '/projects/master-finance.png' },
              { name: 'Moonlie', logo: '/projects/moonlie.png' },
              { name: 'France-Afrique Média', logo: '/projects/france-afrique.png' },
              { name: 'École Saint-Joseph', logo: '/projects/ecole-st-joseph.png' },
              { name: 'TechCongo', logo: '/projects/techcongo.png' },
            ].map((project, i) => (
              <div key={i} className="inline-flex flex-col items-center mx-12 lg:mx-16">
                <div className="w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center mb-4">
                  <img src={project.logo} alt={project.name} className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm font-medium text-slate-400">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[['50','+','Projets réalisés'],['5','/5','Satisfaction'],['24','h','Délai de réponse'],['6','/7','Disponibilité']].map(([v,s,l]) => (
              <div key={l} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2"><AnimatedNumber value={v} suffix={s} /></div>
                <div className="text-slate-400 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <Target size={16} /> Nos expertises
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Services sur mesure</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Des solutions digitales complètes pour votre succès</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const c = colors[s.color];
              return (
                <div key={s.title} className={`border-2 ${c.border} rounded-2xl p-8 ${c.hover} card-hover bg-white`} style={{animationDelay: `${i * 0.1}s`}}>
                  <div className={`w-14 h-14 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-6`}>
                    <s.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
                  <button onClick={() => nav('services')} className={`${c.text} hover:underline font-medium flex items-center gap-2 group`}>
                    En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
              <Layers size={16} /> Notre méthode
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Du concept à la réalité</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Un processus clair et transparent pour votre projet</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.num} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="text-4xl font-bold text-blue-600/20 mb-4">{p.num}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm">{p.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight size={20} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies - Cases stylées sans icônes */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Notre stack technique</h3>
            <p className="text-slate-500 text-sm">Les technologies modernes pour des solutions performantes</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map(t => (
              <div key={t} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-default">
                <span className="font-medium text-slate-700 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 lg:py-24 bg-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <Heart size={16} /> Pourquoi nous choisir
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Votre partenaire digital de confiance</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nous combinons expertise technique, créativité et compréhension du marché local.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/about.png" alt="Notre équipe" className="w-full h-[400px] lg:h-[480px] object-cover" />
                </div>
              </div>
              <div className="absolute -z-10 top-6 left-6 w-full h-full bg-blue-200/60 rounded-3xl" />
              <div className="absolute -z-20 top-12 left-12 w-full h-full bg-blue-100/40 rounded-3xl" />
            </div>
            
            <div>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Users, text: "Équipe d'experts passionnés", color: 'bg-blue-50 text-blue-600' },
                  { icon: Target, text: 'Solutions sur mesure adaptées', color: 'bg-orange-50 text-orange-600' },
                  { icon: Code, text: 'Technologies modernes', color: 'bg-slate-100 text-slate-700' },
                  { icon: Headphones, text: 'Accompagnement personnalisé', color: 'bg-violet-50 text-violet-600' },
                  { icon: Wallet, text: 'Tarifs transparents et compétitifs', color: 'bg-emerald-50 text-emerald-600' },
                  { icon: Wrench, text: 'Maintenance et support continu', color: 'bg-rose-50 text-rose-600' },
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                    <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <f.icon size={20} />
                    </div>
                    <span className="text-slate-700 font-medium">{f.text}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => nav('a-propos')} className="px-7 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 font-semibold btn-dark">
                En savoir plus sur nous <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
              <Star size={16} /> Ils nous font confiance
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Ce que disent nos clients</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 fade-in-up">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-orange-400 text-orange-400" />)}</div>
              <p className="text-slate-600 mb-6 leading-relaxed">&ldquo;LUMINA a conçu notre charte graphique, notre logo et toute notre identité visuelle. Un travail soigné et professionnel. La collaboration continue sur d&apos;autres projets.&rdquo;</p>
              <div className="flex items-center gap-4">
                <img src="/projects/france-afrique.png" alt="France-Afrique Média" className="w-12 h-12 rounded-lg object-contain bg-white border border-slate-200 p-1" />
                <div>
                  <p className="font-semibold text-slate-900">France-Afrique Média</p>
                  <p className="text-sm text-slate-500">Charte graphique, logo & identité visuelle</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 fade-in-up delay-2">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-orange-400 text-orange-400" />)}</div>
              <p className="text-slate-600 mb-6 leading-relaxed">&ldquo;Nous avions besoin d&apos;une plateforme SaaS de gestion solide et fiable. LUMINA a parfaitement compris nos besoins et livré un produit qui dépasse nos attentes.&rdquo;</p>
              <div className="flex items-center gap-4">
                <img src="/projects/techcongo.png" alt="Tech Congo" className="w-12 h-12 rounded-lg object-contain bg-white border border-slate-200 p-1" />
                <div>
                  <p className="font-semibold text-slate-900">Tech Congo</p>
                  <p className="text-sm text-slate-500">Plateforme SaaS de gestion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Séparé du footer */}
      <section className="py-20 bg-slate-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Prêt à donner vie à votre projet ?</h2>
          <p className="text-lg text-slate-600 mb-8">Chaque grande réalisation commence par une conversation. Parlons de vos ambitions.</p>
          <button onClick={() => nav('contact')} className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 font-semibold text-lg mx-auto btn-dark">
            Discutons de votre projet <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

function Services({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  const data = [
    { id: 'sites-web', cat: 'Sites Web & Applications', icon: Globe, color: 'blue', items: [
      { name: 'Pack Starter', price: '150 000 FCFA', icon: Code, feat: ['Site vitrine 1-5 pages','Design responsive','Formulaire contact','SEO basique','Hébergement 1 an'] },
      { name: 'Pack Pro', price: '520 000 FCFA', icon: Smartphone, pop: true, feat: ['Pages illimitées','Design premium','Chatbot IA intégré (option)','SEO optimisé','Blog intégré','Support 6 mois'] },
      { name: 'E-commerce', price: 'Sur devis', icon: ShoppingCart, feat: ['Boutique complète','Paiement sécurisé','Gestion stock','Formation','Support continu'] },
    ]},
    { id: 'branding', cat: 'Branding', icon: Palette, color: 'violet', items: [
      { name: 'Identité Visuelle', price: '75 000 FCFA', icon: Brush, feat: ['Logo professionnel','Charte graphique','Palette couleurs','3 propositions','Révisions illimitées'] },
      { name: 'Design Complet', price: '200 000 FCFA', icon: FileText, pop: true, feat: ['Tout du pack Identité','Cartes visite','Templates réseaux sociaux','Guide de marque'] },
      { name: 'Marketing Digital', price: 'Sur devis', icon: Megaphone, feat: ['Stratégie contenu','Gestion réseaux sociaux','Campagnes pub','Email marketing','Analytics'] },
    ]},
  ];
  
  const colors: Record<string, { bg: string; text: string; border: string; light: string; accent: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', light: 'bg-blue-50', accent: 'bg-blue-600' },
    violet: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200', light: 'bg-violet-50', accent: 'bg-violet-600' },
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6 fade-in-up">
            <Layers size={16} /> Expertise & Solutions
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 fade-in-up delay-1">Nos Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto fade-in-up delay-2">Solutions digitales complètes et sur mesure pour propulser votre activité</p>
        </div>
      </section>

      {data.map((pkg, idx) => {
        const c = colors[pkg.color];
        return (
          <section key={pkg.cat} id={pkg.id} className={idx % 2 === 0 ? 'bg-white py-20' : 'bg-slate-50 py-20'}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                  <pkg.icon size={22} />
                  <span className="font-semibold">{pkg.cat}</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {pkg.items.map((item, i) => (
                  <div key={item.name} className={`relative rounded-2xl p-6 lg:p-8 card-hover bg-white ${item.pop ? `border-2 ${c.border} shadow-xl` : 'border-2 border-slate-100 hover:border-slate-200'}`} style={{animationDelay: `${i * 0.1}s`}}>
                    {item.pop && <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 ${c.accent} text-white text-sm rounded-full font-semibold`}>Populaire</span>}
                    <div className={`w-12 h-12 rounded-xl ${c.light} ${c.text} flex items-center justify-center mb-5`}><item.icon size={24} /></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                    <div className={`text-2xl lg:text-3xl font-bold ${c.text} mb-5`}>{item.price}</div>
                    <ul className="space-y-3 mb-8">
                      {item.feat.map(f => <li key={f} className="flex items-start gap-2"><CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">{f}</span></li>)}
                    </ul>
                    <button onClick={() => nav('contact')} className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${item.pop ? `${c.accent} text-white hover:opacity-90` : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                      Demander un devis <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* LUMINA Education Teaser */}
      <section id="lumina-education" className="py-20 bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <GraduationCap size={18} /> Nouveau : Plateforme SaaS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">LUMINA Education</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                La plateforme tout-en-un pour gérer votre établissement scolaire. Notes, bulletins, SMS aux parents, paiements... Tout au même endroit.
              </p>
              <ul className="space-y-3 mb-8">
                {['Gestion des élèves et classes','Notes et bulletins automatiques','Envoi SMS/Email aux parents','Suivi des paiements scolarité','Espace parents sécurisé'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-orange-500" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => nav('education')} className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all font-semibold flex items-center gap-2">
                  Découvrir LUMINA Education <ArrowRight size={18} />
                </button>
                <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-orange-200">
                  <span className="text-slate-500 text-sm">À partir de</span>
                  <span className="text-xl font-bold text-orange-600">60 000 FCFA</span>
                  <span className="text-slate-500 text-sm">/mois</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">École Saint-Joseph</p>
                    <p className="text-xs text-slate-500">Dashboard administrateur</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">342</p>
                    <p className="text-xs font-medium text-slate-600">Élèves</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">12</p>
                    <p className="text-xs font-medium text-slate-600">Classes</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">89%</p>
                    <p className="text-xs font-medium text-slate-600">Paiements</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">24</p>
                    <p className="text-xs font-medium text-slate-600">Profs</p>
                  </div>
                </div>
                <div className="bg-green-100 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-green-700">Bulletins ce mois</span>
                  <span className="text-lg font-bold text-green-700">156</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-xl px-4 py-2 text-sm font-semibold shadow-lg">
                Essai gratuit 30 jours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section id="maintenance" className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
              <Shield size={22} /><span className="font-semibold">Maintenance & Support</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-6">Restez serein</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Maintenance Basique', price: '25 000 FCFA/mois', icon: Wrench, feat: ['Mises à jour sécurité','Sauvegardes hebdo','Support email','Corrections bugs'], pop: false },
              { name: 'Maintenance Premium', price: '50 000 FCFA/mois', icon: Shield, pop: true, feat: ['Tout basique','MAJ contenu 2h/mois','Support prioritaire','Sauvegardes quotidiennes','Monitoring','Rapports mensuels'] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 lg:p-8 card-hover bg-white ${plan.pop ? 'border-2 border-blue-300 shadow-xl' : 'border-2 border-slate-100'}`}>
                {plan.pop && <span className="inline-block mb-4 px-4 py-1 bg-blue-600 text-white text-sm rounded-full font-semibold">Recommandé</span>}
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5"><plan.icon size={24} /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-5">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.feat.map(f => <li key={f} className="flex items-start gap-2"><CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">{f}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Besoin d'un service sur mesure ?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Chaque projet est unique. Contactez-nous pour un devis personnalisé gratuit.
          </p>
          <button onClick={() => nav('contact')} className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto font-semibold text-lg btn-dark">
            Demander un devis gratuit <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

function Partners({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  const [formType, setFormType] = useState<'apporteur' | 'rejoindre'>('apporteur');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', experience: '' });
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mgoljvnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: formType === 'apporteur' ? 'Apporteur d\'affaires' : 'Candidature équipe',
          name: form.name,
          email: form.email,
          phone: form.phone,
          experience: form.experience,
          message: form.message,
        }),
      });
      
      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', message: '', experience: '' });
        setTimeout(() => setSent(false), 5000);
      }
    } catch (error) {
      console.error('Erreur envoi formulaire');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6 fade-in-up">
            <Handshake size={16} /> Programme Partenaires
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 fade-in-up delay-1">LUMINA Partners</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto fade-in-up delay-2">Valorisez votre réseau avec un partenaire technologique fiable</p>
        </div>
      </section>

      {/* Pourquoi nous rejoindre */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Pourquoi nous rejoindre ?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Recommander LUMINA, c'est offrir l'excellence à votre réseau tout en bénéficiant d'avantages exclusifs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Fiabilité Technique', desc: 'Ne craignez plus les projets inachevés. Avec notre rigueur d\'ingénieur et nos standards internationaux, vos contacts sont entre de bonnes mains.', color: 'bg-blue-50 text-blue-600' },
              { icon: TrendingUp, title: 'Commissions Attractives', desc: 'Bénéficiez d\'un pourcentage transparent sur chaque contrat généré. Un modèle gagnant-gagnant clair dès le premier jour.', color: 'bg-emerald-50 text-emerald-600' },
              { icon: Layers, title: 'Offre Complète', desc: 'Du site vitrine à l\'IA complexe, nous couvrons tous les besoins digitaux. Vous ne manquerez aucune opportunité de recommandation.', color: 'bg-violet-50 text-violet-600' },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all bg-white">
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Prêt à collaborer ?</h2>
            <p className="text-slate-600">Remplissez ce formulaire pour rejoindre notre réseau de partenaires.</p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setFormType('apporteur')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${formType === 'apporteur' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}
            >
              <Handshake size={18} /> Apporteur d'affaires
            </button>
            <button 
              onClick={() => setFormType('rejoindre')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${formType === 'rejoindre' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}
            >
              <UserPlus size={18} /> Nous rejoindre
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-10 shadow-sm">
            {sent ? (
              <div className="text-center py-12 scale-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Candidature envoyée !</h3>
                <p className="text-slate-600">Nous vous contacterons sous 48h</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nom complet *</label>
                    <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email professionnel *</label>
                    <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="votre@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="+242 XX XXX XXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {formType === 'apporteur' ? 'Expérience en apport d\'affaires' : 'Votre domaine d\'expertise'}
                    </label>
                    <select value={form.experience} onChange={e => setForm({...form, experience: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white h-[50px]">
                      <option value="">Sélectionnez</option>
                      {formType === 'apporteur' ? (
                        <>
                          <option value="debutant">Je débute</option>
                          <option value="quelques">Quelques expériences</option>
                          <option value="confirme">Confirmé</option>
                        </>
                      ) : (
                        <>
                          <option value="dev">Développement Web/Mobile</option>
                          <option value="design">Design / UX</option>
                          <option value="marketing">Marketing Digital</option>
                          <option value="commercial">Commercial</option>
                          <option value="autre">Autre</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {formType === 'apporteur' ? 'Décrivez votre réseau' : 'Pourquoi souhaitez-vous nous rejoindre ?'}
                  </label>
                  <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white resize-none" placeholder={formType === 'apporteur' ? 'Parlez-nous de votre réseau professionnel...' : 'Parlez-nous de vous et de vos motivations...'} />
                </div>
                <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 font-semibold text-lg btn-dark">
                  <Send size={20} /> Envoyer ma candidature
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function About({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  const values = [
    { icon: Lightbulb, title: 'Innovation', desc: 'Toujours à l\'affût des nouvelles technologies', color: 'bg-orange-50 text-orange-600' },
    { icon: Heart, title: 'Exigence', desc: 'Le détail fait la différence', color: 'bg-rose-50 text-rose-600' },
    { icon: Users, title: 'Proximité', desc: 'Un interlocuteur dédié, toujours', color: 'bg-blue-50 text-blue-600' },
    { icon: Trophy, title: 'Engagement', desc: 'Votre réussite est notre fierté', color: 'bg-emerald-50 text-emerald-600' },
  ];

  const team = [
    { role: 'Direction & Stratégie', desc: 'Vision produit, relation client, pilotage des projets' },
    { role: 'Développement', desc: 'Experts React, Next.js, Node.js et WordPress' },
    { role: 'Design & UX', desc: 'Interfaces modernes et expériences utilisateur fluides' },
    { role: 'Support & Maintenance', desc: 'Disponibilité et réactivité garanties' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6 fade-in-up">
            <Building2 size={16} /> Qui sommes-nous
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 fade-in-up delay-1">Une équipe, une vision</h1>
          <p className="text-xl text-slate-300 fade-in-up delay-2">Des experts passionnés au service de vos ambitions numériques</p>
        </div>
      </section>

      {/* Fondateur */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-in-left">
              {/* Photo fondateur */}
              <div className="relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/fondateur.png" alt="Faity Rickson NGAKOUA-BOUYA" className="w-full h-[500px] object-cover object-top" />
                </div>
                <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-blue-200/60 rounded-3xl" />
              </div>
              {/* Nom sous la photo - Style card moderne */}
              <div className="relative -mt-8 mx-6">
                <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 relative z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Faity Rickson NGAKOUA-BOUYA</h3>
                      <p className="text-slate-500 text-sm font-medium">Fondateur & Directeur Créatif</p>
                    </div>
                    <a href="https://www.linkedin.com/in/faity-rickson-n-8094051bb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:bg-[#004182] transition-colors">
                      <Linkedin size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                <Target size={16} /> Le pilote
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Un parcours, une mission</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>Originaire du Congo et diplômé d'un <strong>Master en Création Numérique</strong> de l'<strong>Université Sorbonne Paris Nord</strong>, j'ai choisi de mettre mon parcours au service d'une cause : démocratiser l'accès à des solutions numériques de qualité en Afrique.</p>
                <p className="bg-slate-50 p-5 rounded-xl border-l-4 border-blue-600">
                  Mon expérience au sein d'une grande entreprise française spécialisée dans les <strong>transactions financières et hypothécaires</strong> m'a appris une chose : la rigueur n'est pas négociable. Cette exigence, je l'ai insufflée à toute l'équipe LUMINA.
                </p>
                <p>Aujourd'hui, je coordonne une équipe de talents complémentaires, unis par la même vision : créer des outils numériques qui font vraiment la différence pour nos clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <Users size={16} /> Notre force
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Une équipe pluridisciplinaire</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Chaque projet mobilise les compétences adaptées. Développeurs, designers, stratèges : ensemble, nous couvrons tous vos besoins.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{member.role}</h3>
                <p className="text-slate-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation / Vision */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="text-6xl text-blue-400 mb-6">"</div>
          <h2 className="text-2xl lg:text-3xl font-medium mb-8 leading-relaxed">Chaque pixel compte. Chaque ligne de code a un but. Nous ne livrons pas des projets, nous créons des outils qui travaillent pour vous.</h2>
          <p className="text-slate-400 font-medium">— L'équipe LUMINA</p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4">
              <Star size={16} /> Notre ADN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Ce qui nous rassemble</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="border-2 border-slate-100 rounded-2xl p-6 card-hover bg-white text-center">
                <div className={`w-16 h-16 rounded-xl ${v.color} flex items-center justify-center mx-auto mb-4`}><v.icon size={28} /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[['50','+','Projets livrés'],['5','/5','Satisfaction client'],['24','h','Temps de réponse']].map(([v,s,l]) => (
              <div key={l} className="p-6 rounded-2xl bg-white border border-slate-200">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2"><AnimatedNumber value={v} suffix={s} /></div>
                <div className="text-slate-600 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Séparé du footer */}
      <section className="py-20 bg-slate-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Rejoignez nos clients satisfaits</h2>
          <p className="text-lg text-slate-600 mb-8">Découvrez comment notre équipe peut transformer vos idées en réalité.</p>
          <button onClick={() => nav('contact')} className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto font-semibold text-lg btn-dark">
            Parlons de votre projet <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mgoljvnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
      
      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      }
    } catch (error) {
      console.error('Erreur envoi formulaire:', error);
    }
    setSending(false);
  };

  const info = [
    { icon: Phone, title: 'Téléphone CG', value: '+242 06 404 54 04', link: 'tel:+242044054004' },
    { icon: Phone, title: 'Téléphone FR', value: '+33 07 58 17 26 93', link: 'tel:+330758172693' },
    { icon: Mail, title: 'Email', value: 'contact@lumina-cg.com', link: 'mailto:contact@lumina-cg.com' },
    { icon: Clock, title: 'Horaires', value: 'Lun - Ven: 8h - 18h' },
  ];
  const services = ['Site Vitrine','Site E-commerce','Application Web','Branding','Marketing Digital','Solution École','Maintenance','Autre'];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6 fade-in-up">
            <MessageCircle size={16} /> Contact & Échanges
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 fade-in-up delay-1">Parlons de votre projet</h1>
          <p className="text-xl text-slate-300 fade-in-up delay-2">Une idée ? Un besoin technique ? Discutons de la manière dont nous pouvons collaborer.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {info.map((i, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-5 card-hover bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <i.icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500 font-medium mb-0.5">{i.title}</p>
                    {i.link ? (
                      <a href={i.link} className="text-slate-900 font-semibold text-sm hover:text-blue-600 transition-colors block truncate">{i.value}</a>
                    ) : (
                      <p className="text-slate-900 font-semibold text-sm truncate">{i.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Envoyez-nous un message</h2>
                <p className="text-slate-600">Nous répondons généralement sous 24h ouvrées.</p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 lg:p-8 bg-white shadow-sm">
                {sent ? (
                  <div className="text-center py-12 scale-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} /></div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                    <p className="text-slate-600">Nous vous répondrons sous 24h</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nom complet *</label>
                        <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                        <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="votre@email.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone</label>
                        <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="+242 XX XXX XXXX" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Sujet de la demande *</label>
                        <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white h-[50px]">
                          <option value="">Sélectionnez un sujet</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Détails du projet *</label>
                      <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} required rows={5} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white resize-none" placeholder="Parlez-nous de vos objectifs, de votre budget estimé et de vos délais..." />
                    </div>
                    <button type="submit" disabled={sending} className="w-full py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 font-semibold text-lg btn-dark disabled:opacity-50">
                      <Send size={20} /> {sending ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp Direct - Numéro FR */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp Direct</h3>
                <p className="text-slate-600 text-sm mb-4">Pour une réponse plus rapide, contactez-nous directement sur WhatsApp.</p>
                <a href="https://wa.me/33758172693" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Direct
                </a>
              </div>

              {/* Coordonnées */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-slate-400 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Siège</p>
                      <p className="text-slate-600 text-sm">Paris, France & Brazzaville, Congo</p>
                      
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-slate-400 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Horaires</p>
                      <p className="text-slate-600 text-sm">Lun - Ven : 8h00 - 18h00</p>
                      <p className="text-slate-600 text-sm">Sam : 9h00 - 13h00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagements */}
              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Nos engagements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    Réponse garantie sous 24h
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    Devis gratuit et sans engagement
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    Accompagnement personnalisé
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-medium mb-4">
              <MapPin size={16} /> Notre localisation
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Situés à Paris & Brazzaville</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Entre Paris et Brazzaville, nous accompagnons les entreprises dans leur transformation digitale
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl lg:text-4xl font-bold text-violet-600 mb-2">&lt; 24h</div>
              <div className="text-slate-600 text-sm font-medium">Temps de réponse</div>
            </div>
            <div className="text-center p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-slate-600 text-sm font-medium">Devis gratuits</div>
            </div>
            <div className="text-center p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">6j/7</div>
              <div className="text-slate-600 text-sm font-medium">Disponibilité</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Education({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  const features = [
    { icon: Users, title: 'Gestion des élèves', desc: 'Inscriptions, fiches élèves, affectation aux classes, historique complet' },
    { icon: FileText, title: 'Notes & Bulletins', desc: 'Saisie des notes, calcul automatique des moyennes, génération PDF des bulletins' },
    { icon: MessageCircle, title: 'Communication Parents', desc: 'Envoi SMS et emails groupés : résultats, absences, informations importantes' },
    { icon: Wallet, title: 'Suivi Paiements', desc: 'Gestion des frais de scolarité, relances automatiques, rapports financiers' },
    { icon: Shield, title: 'Espace Parents', desc: 'Portail sécurisé pour consulter notes, bulletins et informations de l\'enfant' },
    { icon: TrendingUp, title: 'Statistiques', desc: 'Tableaux de bord, analyses des performances, rapports personnalisés' },
  ];

  const plans = [
    { 
      name: 'Starter', 
      price: '60 000', 
      period: '/mois',
      students: 'Jusqu\'à 200 élèves',
      features: ['Gestion élèves & classes', 'Notes et bulletins PDF', 'Espace parents', 'Support email'],
      cta: 'Commencer l\'essai gratuit',
      popular: false
    },
    { 
      name: 'Pro', 
      price: '110 000', 
      period: '/mois',
      students: 'Jusqu\'à 500 élèves',
      features: ['Tout de Starter', 'Envoi SMS aux parents', 'Suivi des paiements', 'Rapports avancés', 'Support prioritaire'],
      cta: 'Commencer l\'essai gratuit',
      popular: true
    },
    { 
      name: 'Premium', 
      price: '180 000', 
      period: '/mois',
      students: 'Élèves illimités',
      features: ['Tout de Pro', 'Multi-établissements', 'API personnalisée', 'Formation sur site', 'Support dédié 24/7'],
      cta: 'Nous contacter',
      popular: false
    },
  ];

  const faqs = [
    { q: 'Comment fonctionne l\'essai gratuit ?', a: 'Vous avez 30 jours pour tester toutes les fonctionnalités sans engagement. Aucune carte bancaire requise.' },
    { q: 'Puis-je migrer mes données existantes ?', a: 'Oui, notre équipe vous accompagne gratuitement dans la migration de vos données depuis Excel ou tout autre système.' },
    { q: 'Le système fonctionne-t-il hors connexion ?', a: 'L\'application nécessite une connexion internet, mais les bulletins PDF peuvent être téléchargés et consultés hors ligne.' },
    { q: 'Comment sont envoyés les SMS aux parents ?', a: 'Vous rédigez votre message, sélectionnez les destinataires (classe, niveau, ou individuel) et envoyez. Les SMS sont facturés en supplément selon votre consommation.' },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-orange-500 text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 fade-in-up">
                <GraduationCap size={18} /> Plateforme de gestion scolaire
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight fade-in-up delay-1">
                Gérez votre école <br/>en toute simplicité
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed fade-in-up delay-2">
                Notes, bulletins, communication parents, paiements... Tout ce dont votre établissement a besoin, dans une seule plateforme.
              </p>
              <div className="flex flex-wrap gap-4 fade-in-up delay-3">
                <button onClick={() => nav('contact')} className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-all font-semibold flex items-center gap-2">
                  Essai gratuit 30 jours <ArrowRight size={20} />
                </button>
                <button onClick={() => nav('contact')} className="px-8 py-4 border-2 border-white/50 text-white rounded-xl hover:bg-white/10 transition-all font-semibold">
                  Demander une démo
                </button>
              </div>
              <p className="text-orange-200 text-sm mt-4 flex items-center gap-2">
                <CheckCircle2 size={16} /> Aucune carte bancaire requise
              </p>
            </div>
            <div className="relative fade-in-right delay-2">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">LUMINA Education</p>
                    <p className="text-xs text-slate-500">Tableau de bord</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">487</p>
                    <p className="text-xs font-medium text-slate-600">Élèves</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">18</p>
                    <p className="text-xs font-medium text-slate-600">Classes</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">94%</p>
                    <p className="text-xs font-medium text-slate-600">Paiements</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">156</p>
                    <p className="text-xs font-medium text-slate-600">SMS</p>
                  </div>
                </div>
                <div className="bg-green-100 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-slate-900" />
                  <span className="text-sm font-semibold text-slate-900">Bulletins CM1 générés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-medium mb-4">
              <Layers size={16} /> Fonctionnalités
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Tout ce dont votre école a besoin</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Une solution complète pour simplifier la gestion de votre établissement</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <f.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Mise en place */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
              <Settings size={16} /> Étape 1
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Mise en place</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Nous construisons votre plateforme sur mesure selon vos besoins</p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Ce qui est inclus :</h3>
                  <ul className="space-y-3">
                    {['Analyse de vos besoins spécifiques', 'Développement personnalisé', 'Import de vos données existantes', 'Personnalisation (logo, couleurs)', 'Formation de votre équipe', '1 mois de support inclus'].map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center items-center text-center bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-500 mb-2">Prix</p>
                  <p className="text-3xl font-bold text-slate-900 mb-4">Sur devis</p>
                  <p className="text-sm text-slate-500 mb-6">Adapté à la taille et aux besoins de votre établissement</p>
                  <button onClick={() => nav('contact')} className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    Demander un devis gratuit <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Espace entre étapes */}
          <div className="h-16"></div>

          {/* Abonnements */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
              <CreditCard size={16} /> Étape 2
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Abonnement mensuel</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Choisissez la formule adaptée à votre établissement</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-orange-500 text-white scale-105 shadow-2xl' : 'bg-white border-2 border-slate-200'}`}>
                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-900 text-white text-sm rounded-full font-semibold">Populaire</span>}
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-orange-100' : 'text-slate-500'}`}>{plan.students}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-orange-500'}`}>{plan.price}</span>
                  <span className={plan.popular ? 'text-orange-100' : 'text-slate-500'}>FCFA{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className={plan.popular ? 'text-orange-200' : 'text-emerald-500'} />
                      <span className={`text-sm ${plan.popular ? 'text-white' : 'text-slate-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => nav('contact')} className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-white text-orange-500 hover:bg-orange-50' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <ArrowRight size={20} className={`text-slate-400 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Prêt à moderniser votre école ?</h2>
          <p className="text-xl text-orange-100 mb-8">Rejoignez les établissements qui ont déjà simplifié leur gestion avec LUMINA Education.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => nav('contact')} className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-all font-semibold flex items-center gap-2">
              Démarrer l'essai gratuit <ArrowRight size={20} />
            </button>
          </div>
          <p className="text-orange-200 text-sm mt-6">30 jours gratuits • Aucune carte bancaire • Annulation à tout moment</p>
        </div>
      </section>
    </div>
  );
}

function Privacy({ nav }: { nav: (p: string) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6">
            <Shield size={16} /> Données & Transparence
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-slate-300">Dernière mise à jour : Février 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Chez <strong>LUMINA</strong>, la confidentialité n'est pas une option, c'est le fondement de la confiance que vous nous accordez. En tant qu'entreprise de services numériques opérant selon des standards d'ingénierie internationaux, nous nous engageons à protéger vos données personnelles avec la plus grande rigueur.
            </p>

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">1</div>
                  <h2 className="text-xl font-bold text-slate-900">Collecte des données</h2>
                </div>
                <p className="text-slate-600 mb-4">Nous collectons uniquement les données strictement nécessaires au bon fonctionnement de nos services et à notre relation commerciale. Cela inclut :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-600"><strong>Données d'identification :</strong> Nom, prénom, adresse email, numéro de téléphone (via le formulaire de contact)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-600"><strong>Données professionnelles :</strong> Nom de l'entreprise, poste occupé, projet envisagé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-600"><strong>Données techniques :</strong> Adresse IP, type de navigateur (à des fins de sécurité et de statistiques anonymes)</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">2</div>
                  <h2 className="text-xl font-bold text-slate-900">Utilisation des données</h2>
                </div>
                <p className="text-slate-600 mb-4">Vos données sont traitées pour des finalités déterminées, explicites et légitimes :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <Mail size={20} className="text-blue-500 mb-2" />
                    <h3 className="font-semibold text-slate-900 mb-1">Communication</h3>
                    <p className="text-sm text-slate-600">Répondre à vos demandes de devis et questions techniques</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <FileText size={20} className="text-blue-500 mb-2" />
                    <h3 className="font-semibold text-slate-900 mb-1">Contractuel</h3>
                    <p className="text-sm text-slate-600">Exécution des contrats de prestation de services et facturation</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">3</div>
                  <h2 className="text-xl font-bold text-slate-900">Protection & Sécurité</h2>
                </div>
                <p className="text-slate-600 mb-4">Nous appliquons une politique de <strong>"Security by Design"</strong>. Vos données sont stockées sur des serveurs sécurisés et protégées par des protocoles de chiffrement avancés.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-blue-800 text-sm flex items-start gap-2">
                    <Lock size={16} className="flex-shrink-0 mt-0.5" />
                    L'accès à vos données personnelles est strictement limité aux employés de LUMINA habilités en raison de leurs fonctions et tenus à une obligation de confidentialité.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">4</div>
                  <h2 className="text-xl font-bold text-slate-900">Partage & Tiers</h2>
                </div>
                <p className="text-slate-600">
                  <strong>Nous ne vendons jamais vos données.</strong> Elles peuvent être partagées uniquement avec nos sous-traitants techniques (hébergement, outils emailing) qui respectent les mêmes normes de confidentialité strictes. Aucune donnée n'est transférée hors de nos infrastructures sécurisées sans votre consentement.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">5</div>
                  <h2 className="text-xl font-bold text-slate-900">Vos Droits</h2>
                </div>
                <p className="text-slate-600 mb-4">Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.</p>
                <div className="bg-slate-900 text-white rounded-xl p-5">
                  <h3 className="font-semibold mb-2">Exercer vos droits</h3>
                  <p className="text-slate-300 text-sm mb-3">Pour toute demande concernant vos données personnelles :</p>
                  <a href="mailto:contact@lumina-cg.com" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-100 transition-colors">
                    <Mail size={16} /> contact@lumina-cg.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Des questions ?</h2>
          <p className="text-slate-600 mb-6">Notre équipe est disponible pour répondre à toutes vos interrogations concernant la protection de vos données.</p>
          <button onClick={() => nav('contact')} className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-semibold btn-dark">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookies-accepted')) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem('cookies-accepted', 'true'); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-4xl bg-slate-900 text-white rounded-2xl p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm leading-relaxed">Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre <button onClick={() => { accept(); window.history.pushState({}, '', '/privacy'); window.location.reload(); }} className="underline hover:text-blue-400 transition-colors">politique de confidentialité</button>.</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={accept} className="px-5 py-2.5 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-all">
            Accepter
          </button>
          <button onClick={() => setVisible(false)} className="px-5 py-2.5 border border-slate-600 text-slate-300 rounded-lg text-sm font-medium hover:border-slate-400 hover:text-white transition-all">
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
