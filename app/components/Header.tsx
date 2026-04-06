'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Header({ nav, menuOpen, setMenuOpen }: { nav: (p: string) => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
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
