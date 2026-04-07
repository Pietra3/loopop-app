import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body text-on-surface min-h-screen">
      {/* TopAppBar - Agora com navegação para Desktop */}
      <nav className="fixed top-0 w-full z-50 bg-[#fff4f6] dark:bg-neutral-950 border-b border-[#b7004d]/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16 w-full">
          
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#b7004d] md:hidden cursor-pointer">menu</span>
            <h1 className="text-2xl font-bold tracking-tight text-[#b7004d] font-headline">Loopop</h1>
          </div>

          {/* MENU DESKTOP: Fica escondido no mobile e aparece no md (768px+) */}
          <div className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-2 text-[#b7004d] font-bold text-sm">
              <span className="material-symbols-outlined text-xl">home</span> Início
            </button>
            <button className="flex items-center gap-2 text-[#68575e] hover:text-[#b7004d] font-bold text-sm transition-colors">
              <span className="material-symbols-outlined text-xl">search</span> Busca
            </button>
            <button className="flex items-center gap-2 text-[#68575e] hover:text-[#b7004d] font-bold text-sm transition-colors">
              <span className="material-symbols-outlined text-xl">shopping_bag</span> Pedidos
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-[#b7004d] relative">
              shopping_cart
              <span className="absolute -top-1 -right-1 bg-[#ff7294] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            {/* Botão Sair visível apenas no Desktop no topo */}
            <button 
              onClick={() => navigate('/')}
              className="hidden md:flex items-center gap-2 text-[#68575e] hover:text-red-500 font-bold text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-xl">logout</span> Sair
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-28 px-4 md:px-8 max-w-7xl mx-auto space-y-10">
        {/* Mobile Search Bar - Sumirá no Desktop pois já teremos a busca no menu ou topo */}
        <div className="md:hidden">
          <div className="relative">
            <input className="w-full h-12 px-12 rounded-full bg-surface-container-lowest border-none shadow-sm text-sm" placeholder="Busque nas melhores lojas..." type="text"/>
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          </div>
        </div>

        {/* Promotional Banner Carousel - Ajustado para ocupar melhor o espaço no PC */}
        <section className="relative">
          <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
            <div className="min-w-[85%] md:min-w-[48%] snap-center aspect-[16/7] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" alt="Boutique" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#b7004d]/90 to-transparent flex flex-col justify-center p-8 text-white">
                <span className="font-label text-xs uppercase tracking-widest opacity-90 mb-1">Destaque</span>
                <h2 className="font-headline text-3xl font-bold max-w-[250px] leading-tight mb-4">Melhores lojas de Teresina</h2>
                <button className="w-fit bg-white text-[#b7004d] px-6 py-2 rounded-full text-sm font-bold shadow-md">Entrega R$ 10</button>
              </div>
            </div>

            <div className="min-w-[85%] md:min-w-[48%] snap-center aspect-[16/7] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" alt="Fashion" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#9720ab]/90 to-transparent flex flex-col justify-center p-8 text-white">
                <span className="font-label text-xs uppercase tracking-widest opacity-90 mb-1">Oferta</span>
                <h2 className="font-headline text-3xl font-bold max-w-[250px] leading-tight mb-4">Novidades da Estação</h2>
                <button className="w-fit bg-white text-[#9720ab] px-6 py-2 rounded-full text-sm font-bold shadow-md">Confira Agora</button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid - 4 colunas mobile / 8 colunas desktop */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h3 className="font-headline text-xl font-bold text-on-surface">Categorias</h3>
            <span className="text-[#b7004d] text-sm font-bold cursor-pointer hover:underline">Ver todas</span>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {[
              { icon: 'woman', label: 'Feminino' },
              { icon: 'child_care', label: 'Infantil' },
              { icon: 'man', label: 'Masculino' },
              { icon: 'diamond', label: 'Acessórios' },
              { icon: 'home_iot_device', label: 'Casa' },
              { icon: 'fitness_center', label: 'Esporte' },
              { icon: 'face_5', label: 'Beleza' },
              { icon: 'devices', label: 'Tech' }
            ].map((cat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm ring-1 ring-black/5 group-hover:ring-[#b7004d] transition-all flex items-center justify-center">
                   <span className="material-symbols-outlined text-[#b7004d] text-2xl">{cat.icon}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#68575e]">{cat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Highlights - 1 coluna mobile / 3 colunas desktop */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-br from-[#b7004d] to-[#ff7294] rounded-3xl p-8 flex flex-col justify-between min-h-[300px] text-white overflow-hidden relative shadow-xl">
            <div className="relative z-10">
              <h3 className="font-headline text-4xl font-black mb-4 leading-none">QUER GANHAR<br/>CASHBACK?</h3>
              <p className="max-w-[200px] opacity-90 text-sm font-medium">Use Loopop Pay em suas compras nas lojas parceiras.</p>
            </div>
            <div className="relative z-10 mt-8">
              <button className="bg-white text-[#b7004d] px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm shadow-xl hover:scale-105 transition-transform">Saiba Mais</button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-20 rotate-12">account_balance_wallet</span>
          </div>
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center space-y-4 shadow-sm border border-[#b7004d]/5">
            <div className="w-20 h-20 rounded-full bg-[#fff4f6] flex items-center justify-center text-[#b7004d] shadow-inner">
              <span className="material-symbols-outlined text-4xl">local_shipping</span>
            </div>
            <h4 className="font-headline text-xl font-bold">Entrega Grátis</h4>
            <p className="text-gray-500 text-sm">Em pedidos acima de R$150 em lojas selecionadas de Teresina.</p>
          </div>
        </section>
      </main>

      {/* BottomNavBar - ESCONDIDA NO DESKTOP (md:hidden) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-white/80 backdrop-blur-xl rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(183,0,77,0.1)] md:hidden">
        <div className="flex flex-col items-center justify-center bg-[#b7004d] text-white rounded-full w-14 h-14 shadow-lg scale-110 cursor-pointer">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#68575e] w-12 h-12 cursor-pointer">
          <span className="material-symbols-outlined">search</span>
          <span className="text-[8px] font-bold uppercase mt-1">Search</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#68575e] w-12 h-12 cursor-pointer">
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="text-[8px] font-bold uppercase mt-1">Orders</span>
        </div>
        <div 
          onClick={() => navigate('/')}
          className="flex flex-col items-center justify-center text-[#68575e] w-12 h-12 cursor-pointer"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="text-[8px] font-bold uppercase mt-1">Sair</span>
        </div>
      </nav>
    </div>
  );
}