import React from 'react';
import { Link } from 'react-router-dom';
import criancaTristeImg from '../assets/img/turma-do-bem-hero.jpg';
import '../index.css';
import Sobre from './Sobre';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-base">
      {/* --- HERO SECTION --- */}
      <section 
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 text-center flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(48, 52, 70, 0.8), rgba(48, 52, 70, 0.9)), url(${criancaTristeImg})` 
        }}
      >        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-text font-semibold tracking-widest uppercase text-xs mb-4 animate-fade-in">
            Turma do Bem Digital
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text max-w-4xl leading-[1.1]">
            O maior projeto de odontologia social do Brasil, agora digital.
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-peach">
              Transformando sorrisos, conectando corações.
            </div>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-subtext max-w-2xl leading-relaxed">
            Conectamos profissionais da odontologia, escolas e doadores para transformar 
            a saúde bucal de milhares de crianças em vulnerabilidade.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/doar" className="px-8 py-4 bg-accent text-base font-bold rounded-apple hover:brightness-110 transition-all hover:scale-105 shadow-lg shadow-accent/20">
              Começar uma Mudança
            </Link>
            <Link to="./Sobre" className="px-8 py-4 bg-mantle text-text border border-white/10 rounded-apple hover:bg-white/5 transition-all">
              Saiba como funciona
            </Link>
          </div>
        </div>
      </section>

      {/* --- GRID DE ACESSO RÁPIDO (Minimalista) --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card Professora / Escola */}
          <div className="group bg-mantle p-8 rounded-apple-lg border border-white/5 hover:border-accent/30 transition-all">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Sou Educadora</h3>
            <p className="text-subtext text-sm mb-6 leading-relaxed">
              Cadastre seus alunos que precisam de atendimento odontológico gratuito.
            </p>
            <Link to="/cadastrar-aluno" className="text-accent font-medium hover:underline inline-flex items-center gap-2">
              Cadastrar aluno →
            </Link>
          </div>

          {/* Card Dentista / Estagiário */}
          <div className="group bg-mantle p-8 rounded-apple-lg border border-white/5 hover:border-peach/30 transition-all">
            <div className="w-12 h-12 bg-peach/10 rounded-lg flex items-center justify-center mb-6 text-peach">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Sou Dentista</h3>
            <p className="text-subtext text-sm mb-6 leading-relaxed">
              Doe seu tempo e talento para atender crianças na sua própria clínica.
            </p>
            <Link to="/seja-voluntario" className="text-peach font-medium hover:underline inline-flex items-center gap-2">
              Seja voluntário →
            </Link>
          </div>

          {/* Card Doador */}
          <div className="group bg-mantle p-8 rounded-apple-lg border border-white/5 hover:border-success/30 transition-all">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-6 text-success">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Quero Apoiar</h3>
            <p className="text-subtext text-sm mb-6 leading-relaxed">
              Mantenha essa rede viva através de doações financeiras recorrentes ou únicas.
            </p>
            <Link to="/doar" className="text-success font-medium hover:underline inline-flex items-center gap-2">
              Fazer doação →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;