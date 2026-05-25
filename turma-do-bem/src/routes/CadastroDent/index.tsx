import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CadastroDentista: React.FC = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cro, setCro] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [cidade, setCidade] = useState("");
  const [contato, setContato] = useState("");  // NOVO ESTADO
  const [endereco, setEndereco] = useState(""); // NOVO ESTADO
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const API_URL = "http://localhost:8080/dentista";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    // Montando o objeto exatamente com as 6 chaves que o seu DAO espera receber
    const novoDentista = {
      cro: cro.trim(),
      nome: nome.trim(),
      especialidade: especialidade.trim(),
      cidade: cidade.trim(),
      contato: contato.trim(), 
      endereco: endereco.trim()   
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(novoDentista),
      });

      if (response.ok || response.status === 201) {
        alert(`Dr(a). ${nome} cadastrado(a) com sucesso!`);
        navigate("/seja-voluntario"); 
      } else {
        throw new Error(`Erro no servidor. Status: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Erro ao inserir dentista:", error);
      setErrorMsg("Falha ao salvar o cadastro. Verifique a conexão com o Java.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-base text-text font-sans antialiased pt-20 px-6">
      <div className="max-w-2xl mx-auto bg-mantle rounded-apple-lg p-8 shadow-2xl border border-white/5">
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-accent">Novo Cadastro</h1>
          <Link to="/seja-voluntario" className="text-sm text-subtext hover:text-accent transition">
            Voltar para a rede
          </Link>
        </div>

        {errorMsg && (
          <div className="mb-4 p-4 bg-danger/10 border border-danger/20 text-danger text-sm rounded-md">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-subtext mb-1.5" htmlFor="nome">
              Nome Completo
            </label>
            <input
              id="nome"
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Dr. Alexandre C. Jesus"
              className="w-full p-3 bg-surface0/50 border border-white/10 rounded-lg outline-none text-text focus:ring-2 focus:ring-accent transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-subtext mb-1.5" htmlFor="cro">
                Número do CRO
              </label>
              <input
                id="cro"
                type="text"
                required
                value={cro}
                onChange={(e) => setCro(e.target.value)}
                placeholder="Ex: 12345-SP"
                className="w-full p-3 bg-surface0/50 border border-white/10 rounded-lg outline-none text-text focus:ring-2 focus:ring-accent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-subtext mb-1.5" htmlFor="especialidade">
                Especialidade
              </label>
              <input
                id="especialidade"
                type="text"
                required
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
                placeholder="Ex: Ortodontia"
                className="w-full p-3 bg-surface0/50 border border-white/10 rounded-lg outline-none text-text focus:ring-2 focus:ring-accent transition-all"
              />
            </div>
          </div>

          {/* NOVOS INPUTS ADICIONADOS AQUI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-subtext mb-1.5" htmlFor="contato">
                Contato (E-mail ou Telefone)
              </label>
              <input
                id="contato"
                type="text"
                required
                value={contato}
                onChange={(e) => setContato(e.target.value)}
                placeholder="Ex: alexandre@email.com"
                className="w-full p-3 bg-surface0/50 border border-white/10 rounded-lg outline-none text-text focus:ring-2 focus:ring-accent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-subtext mb-1.5" htmlFor="cidade">
                Cidade
              </label>
              <input
                id="cidade"
                type="text"
                required
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Ex: São Paulo"
                className="w-full p-3 bg-surface0/50 border border-white/10 rounded-lg outline-none text-text focus:ring-2 focus:ring-accent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-subtext mb-1.5" htmlFor="endereco">
              Endereço do Consultório
            </label>
            <input
              id="endereco"
              type="text"
              required
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Ex: Av. Paulista, 1106 - Bela Vista"
              className="w-full p-3 bg-surface0/50 border border-white/10 rounded-lg outline-none text-text focus:ring-2 focus:ring-accent transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-3.5 bg-accent text-mantle font-bold rounded-apple-md shadow-lg transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-50"
          >
            {isSubmitting ? "Salvando no Banco..." : "Finalizar Cadastro Voluntário"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default CadastroDentista;