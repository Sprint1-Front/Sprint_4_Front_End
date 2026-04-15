import { useState } from 'react';
import felizImg from '../assets/img/crianca-feliz.png';
import tristeImg from '../assets/img/crianca-triste.png';

export default function DoacaoPage() {
  const [doou, setDoou] = useState(false);

  return (
    <div className="min-h-screen bg-base text-text selection:bg-accent/30 selection:text-accent font-sans antialiased">
      <main className="max-w-4xl mx-auto pt-20 px-6">
        <div className="bg-mantle rounded-apple-lg p-12 shadow-2xl flex flex-col md:flex-row items-center gap-16 border border-white/5">
          
          {/* Lado do Menino (Visual) */}
          <div className="relative w-64 h-64 flex-shrink-0">
            {/* Estado 1: Triste / Escondendo a boca */}
            <div className={`absolute inset-0 transition-all duration-700 ease-apple-in-out
              ${doou ? 'opacity-0 scale-75 -rotate-12 translate-y-10' : 'opacity-100 scale-100'}`}>
              <img src={tristeImg} alt="Menino triste" className="w-full h-full object-contain" />
            </div>

            {/* Estado 2: Feliz / Sorriso Branco */}
            <div className={`absolute inset-0 transition-all duration-1000 delay-200 ease-apple-out
              ${doou ? 'opacity-100 scale-110 rotate-0' : 'opacity-0 scale-125'}`}>
              <img src={felizImg} alt="Menino sorrindo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(166,218,149,0.3)]" />
            </div>
          </div>

          {/* Lado do Conteúdo (Apple Style) */}
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl font-semibold tracking-tight leading-tight">
              Um pequeno gesto, 
              <div className="text-accent">um novo sorriso.</div>
            </h1>
            
            <p className="text-subtext text-lg leading-relaxed">
              Sua contribuição permite que crianças voltem a sorrir com confiança. 
              Minimalista no processo, gigante no impacto.
            </p>

            {!doou ? (
              <button 
                onClick={() => setDoou(true)}
                className="group relative px-8 py-4 bg-accent text-base font-bold rounded-apple overflow-hidden transition-all hover:hover:brightness-110 active:scale-95"
              >
                <div className="relative z-10">Doar agora e ver o sorriso</div>
              </button>
            ) : (
              <div className="animate-fade-in text-success flex items-center gap-2 font-medium">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Obrigado! Você mudou uma vida hoje.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}