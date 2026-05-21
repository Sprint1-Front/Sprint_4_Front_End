import React from "react";

const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen bg-base text-text px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Título */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-semibold tracking-tight">
            Sobre o Projeto
          </h1>
          <p className="text-subtext text-lg leading-relaxed max-w-2xl mx-auto">
            Transformando vidas através do acesso ao tratamento odontológico e
            devolvendo sorrisos com dignidade.
          </p>
        </div>

        {/* Missão */}
        <div className="bg-mantle border border-gray-200 rounded-apple-lg p-10 shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-accent">
            Nossa missão
          </h2>
          <p className="text-subtext leading-relaxed">
            Nosso objetivo é conectar voluntários e doadores para oferecer
            atendimento odontológico gratuito a crianças e jovens em situação
            de vulnerabilidade. Acreditamos que um sorriso pode mudar vidas,
            trazendo autoestima, saúde e novas oportunidades.
          </p>
        </div>

        {/* O que fazemos */}
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-mantle border border-gray-200 rounded-apple p-6 shadow-sm space-y-3">
            <h3 className="text-lg font-semibold">🦷 Tratamentos</h3>
            <p className="text-subtext text-sm leading-relaxed">
              Organizamos atendimentos com dentistas voluntários para quem mais precisa.
            </p>
          </div>

          <div className="bg-mantle border border-gray-200 rounded-apple p-6 shadow-sm space-y-3">
            <h3 className="text-lg font-semibold">🤝 Voluntariado</h3>
            <p className="text-subtext text-sm leading-relaxed">
              Conectamos profissionais e estudantes a ações sociais reais.
            </p>
          </div>

          <div className="bg-mantle border border-gray-200 rounded-apple p-6 shadow-sm space-y-3">
            <h3 className="text-lg font-semibold">💚 Impacto</h3>
            <p className="text-subtext text-sm leading-relaxed">
              Levamos saúde bucal e autoestima para centenas de crianças.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sobre;
