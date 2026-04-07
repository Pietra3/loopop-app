import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoLoopop from '../assets/logo.svg';
import googlelogo from '../assets/googlelogo.png';
import { useState } from 'react';
export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex items-center justify-center p-6 selection:bg-secondary-container selection:text-on-secondary-container relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="fixed top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <main className="w-full max-w-md space-y-12 z-10">
        {/* Brand Identity Section */}
       <div className="text-center space-y-4">
          <div className="flex flex-col items-center text-center z-10 w-full max-w-md">
            <img
                          alt="Loopop Brand Logo"
                          className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
                          src={logoLoopop}
                        />
          </div>
          </div>

        {/* Login Form Container */}
        <div className="w-full max-w-sm space-y-8">
          <div className="grid grid-cols-1 gap-5">
            
            {/* Email Input */}
            <div className="space-y-1">
              <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="email"> Email </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">mail</span>
                <input 
                  className="w-full pl-12 pr-12 py-4 bg-white rounded-lg shadow-sm border-primary-400 focus:ring-2 focus:ring-primary/20 text-on-surface font-medium placeholder:text-outline-variant transition-all duration-300 outline-none" 
                  id="email" 
                  placeholder="nome@exemplo.com" 
                  type="email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="password">Senha</label>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">lock</span>
                <input 
                  className="w-full pl-12 pr-12 py-4 bg-white rounded-lg shadow-sm border-primary-400 focus:ring-2 focus:ring-primary/20 text-on-surface font-medium placeholder:text-outline-variant transition-all duration-300 outline-none" 
                  id="password" 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"}
                />
                <button type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
      {showPassword ? 'visibility_off' : 'visibility'}</button>
              </div>
              <button className="text-sm font-bold text-secondary hover:opacity-50 transition-opacity">Esqueci minha senha</button>
            </div>

            {/* Primary Action */}
          <button 
          onClick={() => navigate('/Home')}
          className="gradient-primary text-white text-lg font-bold h-16 rounded-full shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02] active:scale-95">
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
            <button className="w-full flex items-center justify-center gap-5 py-1 bg-surface-container-lowest border border-outline-variant/10 rounded-full text-on-surface font-bold hover:bg-white transition-colors">
              <img src={googlelogo}  alt="Google" className="w-15 h-15"/>
              Continue com o Google
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center font-medium text-on-surface-variant">
            Não tem uma conta? 
            <button className="text-primary font-bold ml-1 hover:underline underline-offset-4">Cadastrar</button>
          </p>
        </div>
      </main>

      {/* Support Message (Floating Support) 
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm glass-panel p-4 rounded-lg flex items-center gap-4 shadow-xl border border-white/20">
       <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">help_center</span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-tight text-on-surface-variant">Precisa de ajuda?</p>
          <p className="text-sm font-bold text-on-surface">Fale com nosso suporte 24/7</p>
        </div>
        <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
      </div>*/}
    </div>
  );
}