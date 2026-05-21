import React from "react";
import { useForm } from "react-hook-form";

interface CadastroFormData {
 nome: string;
 email: string;
 colegio: string;
 nomeResponsavel: string;
 contatoResponsavel: string;
 cpf: string;
 dataNascimento: string;
 endereco: string;
 telefone: string;

}
const CadastroAluno: React.FC = () => {
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

           {/* colegio */}
           <div>
             <label className="block text-sm text-subtext">Colegio</label>
             <input
               type="text"
               {...register("colegio", {
                 required: "O colegio é obrigatório",
               })}
               className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
               ${errors.colegio ? "border-red-500" : "border-white/10 focus:border-accent"}`}
             />
             {errors.colegio && (
               <div className="text-red-400 text-xs">
                 {errors.colegio.message}
               </div>
             )}
           </div>
 
           {/* dataNascimento */}
           <div>
             <label className="block text-sm text-subtext">Data de Nascimento</label>
             <input
               type="date"
               {...register("dataNascimento", {
                 required: "A data de nascimento é obrigatória",
               })}
               className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
               ${errors.dataNascimento ? "border-red-500" : "border-white/10 focus:border-accent"}`}
             />
             {errors.dataNascimento && (
               <div className="text-red-400 text-xs">
                 {errors.dataNascimento.message}
               </div>
             )}
           </div>
             {/* Endereço */}
             <div>
               <label className="block text-sm text-subtext">Endereço</label>
               <input
                 type="text"
                 {...register("endereco", {
                   required: "O endereço é obrigatório",
                 })}
                 className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
                 ${errors.endereco ? "border-red-500" : "border-white/10 focus:border-accent"}`}
               />
               {errors.endereco && (
                 <div className="text-red-400 text-xs">
                   {errors.endereco.message}
                 </div>
               )}
             </div>
             {/* Telefone */}
             <div>
               <label className="block text-sm text-subtext">Telefone</label>
               <input
                 type="tel"
                 {...register("telefone", {
                   required: "O telefone é obrigatório",
                 })}
                 className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
                 ${errors.telefone ? "border-red-500" : "border-white/10 focus:border-accent"}`}
               />
               {errors.telefone && (
                 <div className="text-red-400 text-xs">
                   {errors.telefone.message}
                 </div>
               )}
             </div>
             {/* CPF */}
             <div>
               <label className="block text-sm text-subtext">CPF</label>
               <input
                 type="text"
                 {...register("cpf", {
                   required: "O CPF é obrigatório",
                   pattern: { value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, message: "CPF inválido" },
                 })}
                 className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
                 ${errors.cpf ? "border-red-500" : "border-white/10 focus:border-accent"}`}
               />
               {errors.cpf && (
                 <div className="text-red-400 text-xs">
                   {errors.cpf.message}
                 </div>
               )}
             </div>
                {/* Nome do Responsável */}
           <div>
             <label className="block text-sm text-subtext">Nome do Responsável</label>
             <input
               type="text"
               {...register("nomeResponsavel", {
                 required: "O nome do responsável é obrigatório",
               })}
               className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
               ${errors.nomeResponsavel ? "border-red-500" : "border-white/10 focus:border-accent"}`}
             />
             {errors.nomeResponsavel && (
               <div className="text-red-400 text-xs">
                 {errors.nomeResponsavel.message}
               </div>
             )}
           </div>
            {/* Contato do Responsável */}
            <div>
             <label className="block text-sm text-subtext">Contato do Responsável</label>
             <input
               type="tel"
               {...register("contatoResponsavel", {
                 required: "O contato do responsável é obrigatório",
               })}
               className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
               ${errors.contatoResponsavel ? "border-red-500" : "border-white/10 focus:border-accent"}`}
             />
             {errors.contatoResponsavel && (
               <div className="text-red-400 text-xs">
                 {errors.contatoResponsavel.message}
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

export default CadastroAluno;