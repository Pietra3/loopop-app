import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex items-center justify-center p-6 selection:bg-secondary-container selection:text-on-secondary-container relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="fixed top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <main className="w-full max-w-md space-y-12 z-10">
        {/* Brand Identity Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl signature-gradient text-white shadow-2xl mb-4 transform -rotate-6">
            <span className="material-symbols-outlined text-4xl">shopping_bag</span>
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-primary">Loopop</h1>
          <p className="text-on-surface-variant font-medium text-lg">Seu marketplace local favorito</p>
        </div>

        {/* Login Form Container */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            
            {/* Email Input */}
            <div className="space-y-2">
              <label class="text-sm font-bold uppercase tracking-wider text-on-surface-variant ml-2" for="email">E-mail</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">mail</span>
                <input 
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-lg border-none focus:ring-2 focus:ring-primary text-on-surface font-medium placeholder:text-outline-variant transition-all duration-300 outline-none" 
                  id="email" 
                  placeholder="nome@exemplo.com" 
                  type="email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-2">
                <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="password">Senha</label>
                <button className="text-sm font-bold text-secondary hover:opacity-80 transition-opacity">Esqueci minha senha</button>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">lock</span>
                <input 
                  className="w-full pl-12 pr-12 py-4 bg-surface-container-lowest rounded-lg border-none focus:ring-2 focus:ring-primary text-on-surface font-medium placeholder:text-outline-variant transition-all duration-300 outline-none" 
                  id="password" 
                  placeholder="••••••••" 
                  type="password"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">visibility</button>
              </div>
            </div>

            {/* Primary Action */}
          <button className="gradient-primary text-white text-lg font-bold h-16 rounded-full shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02] active:scale-95">
            <span>Entrar</span>
            <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
              <span className="text-sm font-bold text-outline-variant uppercase tracking-widest">ou continue com</span>
              <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
            </div>

            {/* Social Login */}
            <button className="w-full flex items-center justify-center gap-3 py-4 bg-surface-container-lowest border border-outline-variant/10 rounded-full text-on-surface font-bold hover:bg-white transition-colors">
              <img alt="Google" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1Ne8h94Us-sf9WuC3GNKy4apBLcxWgeo2FKAz7dZupwqW34XB32cRc75uZkibAUWOydR6iZOrmPlFBwVKGygQoOT7koHw3vEEiQiBujSJwtLdBo1uaC7eYMkLuUEProoXfcRqNPAGurhdpB6He9qNkpQ7XYNLlcwlIskPMMIUQIEvrjCdVIO8WV7o2Z1hmwg8UL25zBkb7Hdii3MbWIWP5Uatu9D_d9Hr2e4w-r5O_WGbESjs5fAgrfE65aMjsCpdU0fV8viYLfKH"/>
              Google
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center font-medium text-on-surface-variant">
            Não tem uma conta? 
            <button className="text-primary font-bold ml-1 hover:underline underline-offset-4">Cadastrar</button>
          </p>
        </div>
      </main>

      {/* Support Message (Floating Support) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm glass-panel p-4 rounded-lg flex items-center gap-4 shadow-xl border border-white/20">
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">help_center</span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-tight text-on-surface-variant">Precisa de ajuda?</p>
          <p className="text-sm font-bold text-on-surface">Fale com nosso suporte 24/7</p>
        </div>
        <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
      </div>
    </div>
  );
}