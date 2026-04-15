import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const linksParticipar = [
    { name: 'Cadastrar Aluno', path: '/cadastrar-aluno' },
    { name: 'Seja um Dentista', path: '/seja-voluntario' },
    { name: 'Saiba como funciona', path: '/sobre' },
    { name: 'Solução', path: '/solucao' },
    { name: 'Contato', path: '/contato' },
    
  ];

  const linksInstitucional = [
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Projetos', path: '/nossos-projetos' },
    { name: 'Equipe', path: '/integrantes' },
    { name: 'Doar', path: '/doar' },
    { name: 'FAQ', path: '/faq' },
    { name: ''}
  ];

  return (
    <footer className="w-full bg-mantle border-t border-white/5 pt-16 pb-8 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna Logo/Missão */}
          <div className="col-span-1">
            <h2 className="text-accent font-bold text-xl mb-4 tracking-tight flex items-center gap-2">
              <span className="w-2 h-6 bg-accent rounded-full block" />
              Turma do Bem <span className="text-text/30 font-light">| Digital</span>
            </h2>
            <p className="text-subtext text-sm leading-relaxed max-w-xs">
              A maior rede de voluntariado especializado do mundo. Transformando vidas através do sorriso desde 2002.
            </p>
          </div>

          {/* Links Dinâmicos */}
          <div>
            <h3 className="text-text font-semibold text-xs uppercase tracking-widest mb-6">Participar</h3>
            <ul className="space-y-3 text-sm text-subtext">
              {linksParticipar.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent transition-colors block py-1">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text font-semibold text-xs uppercase tracking-widest mb-6">Institucional</h3>
            <ul className="space-y-3 text-sm text-subtext">
              {linksInstitucional.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent transition-colors block py-1">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte e Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-text font-semibold text-xs uppercase tracking-widest mb-4">Suporte</h3>
              <ul className="space-y-3 text-sm text-subtext">
                <li><Link to="/faq" className="hover:text-accent transition-colors">Perguntas Frequentes</Link></li>
                <li><Link to="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-text font-semibold text-xs uppercase tracking-widest mb-4">Conecte-se</h3>
              <div className="flex gap-4">
                {/* Botões sociais com hover consistente */}
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-apple bg-base flex items-center justify-center border border-white/5 hover:border-accent/50 transition-all text-subtext hover:text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-subtext/50">
          <div className="flex gap-6">
            <p>&copy; {currentYear} Turma do Bem. Todos os direitos reservados.</p>
            <Link to="/privacidade" className="hover:text-text transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-text transition-colors">Termos de Uso</Link>
          </div>
          <p className="flex items-center gap-1">
            Desenvolvido com <span className="text-accent animate-pulse">♥</span> para um mundo com mais sorrisos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;