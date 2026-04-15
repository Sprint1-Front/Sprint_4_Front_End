import React from 'react';
import feitosaImg from '../assets/integrantes/feitosa.jpg';
import munizImg from '../assets/integrantes/muniz.png';
import matudaImg from '../assets/integrantes/matuda.jpg';


import GithubIcon from '../assets/icons/github.svg?react';
import LinkedinIcon from '../assets/icons/linkedin.svg?react';

interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
}

const integrantes: Integrante[] = [
  {
    nome: "Andre Sousa Matuda",
    rm: "566733",
    turma: "1TDSPB",
    foto: matudaImg,
    github: "https://github.com/Andre-Matuda",
    linkedin: "https://www.linkedin.com/in/andrematuda/",
  },
  {
    nome: "Paulo Henrique Muniz Diedrich",
    rm: "567618",
    turma: "1TDSPB",
    foto: munizImg, 
    github: "https://github.com/paulodiedrich",
    linkedin: "https://www.linkedin.com/in/paulo-henrique-muniz-diedrich-496aba389",
  },
  {
    nome: "Guilherme Olivera Feitosa",
    rm: "566842",
    turma: "1TDSPB",
    foto: feitosaImg, 
    github: "https://github.com/GuilherOliverFeitosa",
    linkedin: "https://www.linkedin.com/in/guilherme-oliveira-feitosa-762b56389",
  },
];

const Integrantes: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-base transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <header className="mb-16 text-center">
          <div className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">
            Sprint 3 - Front End
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Conheça Nossa <div className="text-accent">Equipe Dedicada</div>
          </h2>
          <p className="mt-4 text-subtext text-lg max-w-2xl mx-auto">
            Os desenvolvedores por trás da transformação digital da Turma do Bem, 
            unindo tecnologia e impacto social.
          </p>
        </header>

        {/* Grid de Integrantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {integrantes.map((member) => (
            <div 
              key={member.rm} 
              className="group bg-mantle rounded-apple-lg p-8 border border-white/5 hover:border-accent/30 transition-all duration-500 shadow-xl flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Efeito de brilho ao fundo no Hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Moldura da Foto */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <img 
                  src={member.foto} 
                  alt={`Foto de ${member.nome}`} 
                  className="w-36 h-36 rounded-full object-cover border-2 border-accent/20 p-1.5 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105 cursor-pointer"
                />
              </div>

              {/* Informações */}
              <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                {member.nome}
              </h3>
              
              <div className="flex gap-3 mb-8">
                <div className="bg-base px-4 py-1.5 rounded-full border border-white/5 text-xs font-medium text-subtext">
                  RM: <div className="text-text font-mono">{member.rm}</div>
                </div>
                <div className="bg-base px-4 py-1.5 rounded-full border border-white/5 text-xs font-medium text-text">
                  {member.turma}
                </div>
              </div>

              {/* Botões de Redes Sociais */}
              <div className="flex gap-4 w-full mt-auto">
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group/btn flex-1 flex items-center justify-center gap-2 py-3.5 rounded-apple bg-base border border-white/5 hover:bg-accent hover:text-base transition-all duration-300 font-semibold text-sm shadow-sm"
                >
                  <GithubIcon className="w-5 h-5 fill-current transition-transform group-hover/btn:scale-110" />
                  Github
                </a>
                
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group/btn flex-1 flex items-center justify-center gap-2 py-3.5 rounded-apple bg-base border border-white/5 hover:bg-[#0077b5] hover:text-white transition-all duration-300 font-semibold text-sm shadow-sm"
                >
                  <LinkedinIcon className="w-5 h-5 fill-current transition-transform group-hover/btn:scale-110" />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
