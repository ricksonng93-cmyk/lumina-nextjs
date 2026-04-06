'use client';
import React, { useState, useEffect, useRef } from 'react';

export const styles = `
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

export function useScrollReveal() {
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const selectors = '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .reveal';
      const elements = document.querySelectorAll(selectors);
      if (!elements.length) return;

      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

export function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
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

export function WhatsAppButton() {
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

export function CookieBanner() {
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
