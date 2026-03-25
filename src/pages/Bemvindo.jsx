import React from 'react';
import logoLoopop from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
export default function Bemvindo() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fff4f6] font-sans text-[#392b31] min-h-screen selection:bg-[#ff7294] selection:text-[#4d001c] overflow-hidden">
      <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-20 pt-20 pb-10 overflow-hidden gap-10">

        {/* Background Accents */}
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#9720ab]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-96 h-96 bg-[#b7004d]/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Identity Section */}
        <div className="flex flex-col items-center text-center z-10 w-full max-w-md">
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-[#b7004d]/20 rounded-full blur-2xl scale-125 opacity-40"></div>
            <img
              alt="Loopop Brand Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
              src={logoLoopop}
            />
          </div>
          <p className="text-[#68575e] text-lg leading-relaxed max-w-xs" style={{ fontFamily: 'Manrope' }}>
            Seu ponto de encontro com a moda de Teresina
          </p>
        </div>

        {/* Action Section */}
        <div className="w-full max-w-sm flex flex-col gap-4 z-10">
          <button className="gradient-primary text-white text-lg font-bold h-16 rounded-full shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02] active:scale-95">
            <span>Cadastre-se</span>
            <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>

          <button
           onClick={() => navigate('/login')} 
          className="bg-surface-container-lowest text-primary font-headline text-lg font-bold h-16 rounded-full flex items-center justify-center transition-all duration-300 
          hover:bg-surface-container-low active:scale-95 border-[1.5px] border-outline-variant/20"
          >
          Log In
          </button>

          <div className="mt-8 flex items-center justify-center gap-2 text-[#68575e]">
            <span className="w-8 h-[1px] bg-[#bda8af]/30"></span>
            <span className="text-xs uppercase tracking-[0.2em]">Explore as Guest</span>
            <span className="w-8 h-[1px] bg-[#bda8af]/30"></span>
          </div>
        </div>

        {/* Footer */}
        <footer className="z-10 text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#857279]">
            Step into the Ethereal Marketplace
          </p>
        </footer>

        {/* Bottom Polish */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#fce1eb]/50 to-transparent pointer-events-none"></div>
      </main>
    </div>
  );
}