import React from "react";
import { useForm } from "react-hook-form";

interface CadastroFormData {
  nome: string;
  email: string;
  senha: string;
}

const Cadastro: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroFormData>();

  const onSubmit = (data: CadastroFormData) => {
    console.log("Dados validados:", data);
    alert("Cadastro realizado com sucesso (Simulação)!");
  };

  return (
    <div className="min-h-screen bg-base text-text selection:bg-accent/30 selection:text-accent font-sans antialiased flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-mantle rounded-apple-lg p-10 shadow-2xl border border-white/5 space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          🦷 Cadastro para atendimento
        </h2>

        <p className="text-subtext text-center text-sm">
          Comece a transformar sorrisos hoje mesmo.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Nome */}
          <div>
            <label className="block text-sm text-subtext">Nome completo</label>
            <input
              type="text"
              {...register("nome", {
                required: "O nome é obrigatório",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
              className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
              ${errors.nome ? "border-red-500" : "border-white/10 focus:border-accent"}`}
            />
            {errors.nome && (
              <div className="text-red-400 text-xs">
                {errors.nome.message}
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-subtext">E-mail</label>
            <input
              type="email"
              {...register("email", {
                required: "E-mail é obrigatório",
                pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
              })}
              className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
              ${errors.email ? "border-red-500" : "border-white/10 focus:border-accent"}`}
            />
            {errors.email && (
              <div className="text-red-400 text-xs">
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm text-subtext">Senha</label>
            <input
              type="password"
              {...register("senha", {
                required: "A senha é obrigatória",
                minLength: { value: 6, message: "Mínimo 6 caracteres" },
              })}
              className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
              ${errors.senha ? "border-red-500" : "border-white/10 focus:border-accent"}`}
            />
            {errors.senha && (
              <div className="text-red-400 text-xs">
                {errors.senha.message}
              </div>
            )}
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full py-3 bg-accent text-base font-bold rounded-apple transition-all hover:brightness-110 active:scale-95"
          >
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
