import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { TipoDentista } from "../../types/tipoDentista";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/Button";

export default function EditarDentista() {
  const { cro } = useParams<string>();
  const navigate = useNavigate();
  const [dentista, setDentista] = useState<TipoDentista>({
    nome: "",
    cidade: "",
    contato: "", 
    especialidade: "",
    endereco: "",
    cro: "",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
} = useForm<TipoDentista>({ mode: "onChange" });
  
  useEffect(() => {
    const callDentista = async () => {
      if (!cro) return;
      try {
        const response = await fetch(`http://localhost:8080/dentistas/${cro}`);

        if (response.ok) {
          const data: TipoDentista = await response.json();
          setDentista(data);

          setValue("nome", data.nome, { shouldValidate: true });
          setValue("cidade", data.cidade, { shouldValidate: true });
          setValue("contato", data.contato, { shouldValidate: true });
          setValue("especialidade", data.especialidade, { shouldValidate: true });
          setValue("endereco", data.endereco, { shouldValidate: true });
          setValue("cro", data.cro, { shouldValidate: true });
        } else {
          throw new Error("Dentista inexistente");
        }
      } catch (error) {
        console.error(error);
      }
    };

    callDentista();
  }, [cro,setValue]);

  const onSubmit = async (data: TipoDentista) => {
    try {
      const response = await fetch(`http://localhost:8080/dentistas/${cro}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Dentista atualizado com sucesso!");
        navigate("/dentistas");
      }
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

  return (
    <div className="min-h-screen bg-base flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl bg-mantle rounded-apple-lg p-10 shadow-2xl border border-white/5">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text">Editar Dentista</h2>
          <p className="text-subtext text-sm">Atualize as informações do profissional</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-subtext mb-1">Nome</label>
              <input
                type="text"
                {...register("nome", { required: "O nome é obrigatório" })}
                className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition"
              />
              {errors.nome && <span className="text-danger text-xs">{errors.nome.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-subtext mb-1">Cidade</label>
              <input
                type="text"
                {...register("cidade", { required: "A cidade é obrigatória" })}
                className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-subtext mb-1">Contato</label>
              <input
                type="text"
                {...register("contato", { required: "O contato é obrigatório" })}
                className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-subtext mb-1">Especialidade</label>
              <input
                type="text"
                {...register("especialidade", { required: "A especialidade é obrigatória" })}
                className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-subtext mb-1">CRO</label>
              <input
                type="text"
                {...register("cro", { required: "O CRO é obrigatório" })}
                className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-subtext mb-1">Endereço</label>
              <textarea
                rows={3}
                {...register("endereco", { required: "O endereço é obrigatório" })}
                className="w-full p-3 rounded-apple bg-base border border-white/10 focus:border-accent outline-none transition resize-none"
              />
            </div>

            <div className="md:col-span-2 flex gap-4 pt-4">
              <Button 
                type="submit" 
                variant="primary" 
                className="flex-1 py-3 bg-accent text-base font-bold rounded-apple transition-all hover:brightness-110"
              >
                Salvar Alterações
              </Button>
              <Button 
                type="button" 
                onClick={() => navigate(-1)}
                className="flex-1 py-3 bg-surface0 text-text font-bold rounded-apple transition-all hover:bg-surface1"
              >
                Cancelar
              </Button>
            </div>
        </form>
      </div>
    </div>
  );
}