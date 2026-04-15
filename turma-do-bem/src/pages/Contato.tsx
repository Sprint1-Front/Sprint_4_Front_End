import React from "react";

const Contato: React.FC = () => {
  return (
    <div className="min-h-screen bg-base text-text px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Título */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-semibold tracking-tight">
            Fale Conosco
          </h1>
          <p className="text-subtext text-lg leading-relaxed max-w-2xl mx-auto">
            Estamos aqui para ouvir você! Seja para dúvidas, sugestões ou
            parcerias, entre em contato conosco.
          </p>
        </div>
        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Formulário */}
          <div className="bg-mantle border border-gray-200 rounded-apple-lg p-8 shadow-sm space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-accent">
              Envie uma mensagem
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
              />

              <textarea
                placeholder="Sua mensagem"
                rows={4}
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
              />

              <label htmlFor="assunto">Tipo de Suporte:</label>
              <select id="assunto" name="assunto" required>
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="dentista">Sou Dentista (Voluntariado)</option>
                <option value="cadastro">Dúvidas sobre Cadastro</option>
                <option value="parcerias">Parcerias e Doações</option>
                <option value="outros">Outros Assuntos</option>
              </select>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-white rounded-apple font-semibold hover:brightness-110 transition"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
        {/* Informações */}
        <div className="space-y-6">
          <div className="bg-mantle boder border-gray-200 rounded-apple-lg p-6 shadow-sm">
            <h3 className="font-semibold text-lg">📍 Endereço</h3>
            <p className="text-subtext text-sm mt-2">
              Rua Exemplo, 123 - Bairro, Cidade - Estado, CEP 00000-000
            </p>
          </div>
          <div className="bg-mantle border border-gray-200 rounded-apple p-6 shadow-sm">
            <h3 className="font-semibold text-lg">📧 E-mail</h3>
            <p className="text-subtext text-sm mt-2">contato@turmadobem.org</p>
          </div>

          <div className="bg-mantle border border-gray-200 rounded-apple p-6 shadow-sm">
            <h3 className="font-semibold text-lg">📱 Telefone</h3>
            <p className="text-subtext text-sm mt-2">(11) 99999-9999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
