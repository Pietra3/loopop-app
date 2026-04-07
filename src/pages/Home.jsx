import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body text-on-surface min-h-screen">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#fff4f6] dark:bg-neutral-950 shadow-none">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#b7004d] dark:text-[#ff7294] hover:opacity-80 transition-opacity cursor-pointer">menu</span>
          <h1 className="text-2xl font-bold tracking-tight text-[#b7004d] dark:text-[#ff7294] font-headline">Loopop</h1>
        </div>
        <div className="flex-1 mx-4 max-w-md hidden md:block">
          <div className="relative group">
            <input 
              className="w-full h-10 px-10 rounded-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-primary text-sm transition-all duration-300" 
              placeholder="Search..." 
              type="text"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-[#b7004d] dark:text-[#ff7294] hover:opacity-80 transition-opacity scale-95 duration-200">shopping_cart</button>
        </div>
      </nav>

      <main className="pt-20 pb-28 px-4 md:px-8 max-w-7xl mx-auto space-y-10">
        {/* Mobile Search Bar */}
        <div className="md:hidden">
          <div className="relative">
            <input className="w-full h-12 px-12 rounded-full bg-surface-container-lowest border-none shadow-sm text-sm" placeholder="Busque nas melhores lojas..." type="text"/>
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          </div>
        </div>

        {/* Promotional Banner Carousel */}
        <section className="relative">
          <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
            <div className="min-w-[85%] md:min-w-[45%] snap-center aspect-[16/7] rounded-lg overflow-hidden relative group cursor-pointer transition-transform duration-300">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" alt="Boutique" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center p-6 text-white">
                <span className="font-label text-xs uppercase tracking-widest opacity-90 mb-1">Destaque</span>
                <h2 className="font-headline text-2xl font-bold max-w-[200px] leading-tight mb-2">Melhores lojas de Teresina</h2>
                <div className="flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold">Entrega R$ 10</span>
                </div>
              </div>
            </div>

            <div className="min-w-[85%] md:min-w-[45%] snap-center aspect-[16/7] rounded-lg overflow-hidden relative group cursor-pointer transition-transform duration-300">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" alt="Fashion" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent flex flex-col justify-center p-6 text-white">
                <span className="font-label text-xs uppercase tracking-widest opacity-90 mb-1">Oferta</span>
                <h2 className="font-headline text-2xl font-bold max-w-[200px] leading-tight mb-2">Novidades da Estação</h2>
                <div className="flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold">Confira Agora</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h3 className="font-headline text-xl font-bold text-on-surface">Categorias</h3>
            <span className="text-primary text-sm font-bold cursor-pointer hover:underline">Ver todas</span>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
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
                <div className="w-16 h-16 rounded-full bg-surface-container-high p-1 ring-2 ring-transparent group-hover:ring-primary transition-all">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">{cat.icon}</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold font-label uppercase tracking-wider text-on-surface-variant">{cat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-br from-[#b7004d] to-[#ff7294] rounded-lg p-8 flex flex-col justify-between min-h-[300px] text-white overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="font-headline text-4xl font-extrabold mb-4 leading-none">QUER GANHAR<br/>CASHBACK?</h3>
              <p className="max-w-[200px] opacity-90 text-sm font-medium">Use Loopop Pay em suas compras nas lojas parceiras.</p>
            </div>
            <div className="relative z-10 mt-8">
              <button className="bg-white text-primary px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm shadow-xl hover:scale-105 transition-transform">Saiba Mais</button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-20 rotate-12">account_balance_wallet</span>
          </div>
          <div className="bg-surface-container-high rounded-lg p-6 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined text-4xl">local_shipping</span>
            </div>
            <h4 className="font-headline text-xl font-bold">Entrega Grátis</h4>
            <p className="text-on-surface-variant text-sm">Em pedidos acima de R$150 em lojas selecionadas de Teresina.</p>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#fce1eb]/80 backdrop-blur-xl rounded-t-[2rem] shadow-[0_-10px_40px_rgba(183,0,77,0.05)]">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#b7004d] to-[#ff7294] text-white rounded-full w-12 h-12 shadow-lg scale-110 cursor-pointer">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#68575e] w-12 h-12 cursor-pointer hover:text-[#9720ab] transition-colors">
          <span className="material-symbols-outlined">search</span>
          <span className="text-[8px] font-bold font-label uppercase tracking-wider mt-1">Search</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#68575e] w-12 h-12 cursor-pointer hover:text-[#9720ab] transition-colors">
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="text-[8px] font-bold font-label uppercase tracking-wider mt-1">Orders</span>
        </div>
        <div 
          onClick={() => navigate('/')}
          className="flex flex-col items-center justify-center text-[#68575e] w-12 h-12 cursor-pointer hover:text-[#b7004d] transition-colors"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="text-[8px] font-bold font-label uppercase tracking-wider mt-1">Sair</span>
        </div>
      </nav>
    </div>
  );
}