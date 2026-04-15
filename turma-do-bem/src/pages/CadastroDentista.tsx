import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/Button"; // Reutilizando seu componente UI

// Definição da interface para os dados do formulário
interface DentistaFormData {
  nome: string;
  email: string;
  especialidade: string;
  cidade: string;
  telefone: string;
  mensagem: string;
}

const CadastroDentista: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<DentistaFormData>();

  const onSubmit = (data: DentistaFormData) => {
    console.log("Dados do Dentista:", data);
    alert("Inscrição enviada com sucesso! Nossa equipe entrará em contato.");
    reset(); // Limpa o formulário após o envio
  };

  return (
    <div className="min-h-screen bg-base flex items-center justify-center px-6 py-20 transition-colors duration-500">
      <div className="w-full max-w-2xl bg-mantle rounded-apple-lg p-10 shadow-2xl border border-white/5 space-y-8">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-text">
            Seja um <span className="text-accent">Dentista do Bem</span>
          </h2>
          <p className="text-subtext text-sm">
            Junte-se à maior rede de voluntariado especializado do mundo.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Nome Completo */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-subtext mb-1">Nome Completo</label>
            <input
              type="text"
              {...register("nome", { required: "O nome é obrigatório" })}
              className={`w-full p-3 rounded-apple bg-base border outline-none transition
              ${errors.nome ? "border-danger" : "border-white/10 focus:border-accent"}`}
            />
            {errors.nome && <span className="text-danger text-xs mt-1">{errors.nome.message}</span>}
          </div>

          {/* E-mail */}
          <div>
            <label className="block text-sm font-medium text-subtext mb-1">E-mail Profissional</label>
            <input
              type="email"
              {...register("email", { 
                required: "E-mail é obrigatório",
                pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" }
              })}
              className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition"
            />
          </div>

          {/* Especialidade */}
          <div>
            <label className="block text-sm font-medium text-subtext mb-1">Especialidade</label>
            <select
              {...register("especialidade", { required: "Selecione uma área" })}
              className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition appearance-none"
            >
              <option value="">Selecione...</option>
              <option value="odontopediatria">Odontopediatria</option>
              <option value="ortodontia">Ortodontia</option>
              <option value="clinico-geral">Clínico Geral</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          {/* Cidade */}
          <div>
            <label className="block text-sm font-medium text-subtext mb-1">Cidade</label>
            <input
              type="text"
              {...register("cidade", { required: "A cidade é obrigatória" })}
              className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium text-subtext mb-1">Telefone/WhatsApp</label>
            <input
              type="tel"
              {...register("telefone", { required: "O telefone é obrigatório" })}
              className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition"
            />
          </div>

          {/* Mensagem/Motivação */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-subtext mb-1">Por que deseja ser voluntário?</label>
            <textarea
              rows={4}
              {...register("mensagem")}
              className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition resize-none"
              placeholder="Conte-nos um pouco sobre sua motivação..."
            />
          </div>

          {/* Botão de Envio */}
          <div className="md:col-span-2 pt-4">
            <Button type="submit" variant="primary" className="w-full py-3 bg-accent text-base font-bold rounded-apple transition-all hover:brightness-110 active:scale-95">
              Finalizar Inscrição
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroDentista;