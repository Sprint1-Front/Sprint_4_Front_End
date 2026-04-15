import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button"; 

const Solucao: React.FC = () => {
  return (
    <div className="min-h-screen bg-base text-text px-6 py-24 transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Cabeçalho de Impacto */}
        <header className="text-center space-y-6">
          <div className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 animate-fade-in">
            Impacto Real
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Nossa <span className="text-accent">Solução Digital</span>
          </h1>
          <p className="text-subtext text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Unimos tecnologia de ponta e uma rede global de especialistas para erradicar a exclusão odontológica entre jovens em vulnerabilidade social.
          </p>
        </header>

        {/* Grid de Metodologia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-mantle p-8 rounded-apple-lg border border-white/5 shadow-soft hover:border-accent/30 transition-all">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3">Rede de Apoio</h3>
            <p className="text-subtext text-sm leading-relaxed">
              Conectamos dentistas voluntários diretamente a crianças que nunca tiveram acesso a uma consulta.
            </p>
          </div>

          <div className="bg-mantle p-8 rounded-apple-lg border border-white/5 shadow-soft hover:border-accent/30 transition-all">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">Triagem Digital</h3>
            <p className="text-subtext text-sm leading-relaxed">
              Escolas e educadores podem cadastrar alunos em minutos através da nossa plataforma otimizada.
            </p>
          </div>

          <div className="bg-mantle p-8 rounded-apple-lg border border-white/5 shadow-soft hover:border-accent/30 transition-all">
            <div className="text-3xl mb-4">🦷</div>
            <h3 className="text-xl font-bold mb-3">Tratamento Integral</h3>
            <p className="text-subtext text-sm leading-relaxed">
              Não fazemos apenas limpezas; garantimos o tratamento completo até que o sorriso esteja 100% recuperado.
            </p>
          </div>
        </div>

        {/* Seção de Chamada para Ação */}
        <div className="bg-accent/5 rounded-apple-lg p-10 text-center border border-accent/10">
          <h2 className="text-2xl font-bold mb-4 text-text">Pronto para fazer parte da mudança?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/seja-voluntario">
              <Button variant="primary">Quero ser Voluntário</Button>
            </Link>
            <Link to="/doar">
              <Button variant="secondary">Apoiar Financeiramente</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solucao;