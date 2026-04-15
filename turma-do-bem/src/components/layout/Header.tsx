import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para mudar a aparência ao rolar a página (Estilo Apple)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b 
      ${isScrolled 
        ? 'bg-mantle/80 backdrop-blur-md py-3 border-white/5' 
        : 'bg-transparent py-5 border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Minimalista */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <div className="text-base font-bold text-white">T</div>
          </div>
          <div className="text-text font-semibold tracking-tight text-lg">
            Turma do Bem
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/cadastrar-aluno" className="text-subtext hover:text-accent transition-colors">
            Escolas
          </Link>
          <Link to="/seja-voluntario" className="text-subtext hover:text-accent transition-colors">
            Dentistas
          </Link>
          <Link 
            to="/doar" 
            className="bg-accent/10 text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-base transition-all border border-accent/20"
          >
            Quero Doar
          </Link>
        </nav>

        {/* Menu Mobile (Simplificado para o exemplo) */}
        <button className="md:hidden text-text p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;