'use client';
import React, { useState, useEffect } from 'react';
import { styles, WhatsAppButton, CookieBanner } from './shared';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import Education from './Education';
import About from './About';
import Partners from './Partners';
import Contact from './Contact';
import Privacy from './Privacy';

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = (p: string) => { setPage(p); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); window.history.pushState({}, '', p === 'home' ? '/' : '/' + p); };

  useEffect(() => { const path = window.location.pathname.replace('/', ''); if (path && ['services','education','a-propos','partners','contact','privacy'].includes(path)) setPage(path); }, []);

  useEffect(() => { const onPop = () => { const path = window.location.pathname.replace('/', ''); setPage(path || 'home'); }; window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop); }, []);

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

export default App;
