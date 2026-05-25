import { useEffect, useState } from "react";
import type { TipoDentista } from "../../types/tipoDentista";
import { Link } from "react-router-dom";

export default function Dentistas() {
  const [dentistas, setDentistas] = useState<TipoDentista[]>([]);
  const API_URL = "http://localhost:8080/dentista";

  useEffect(() => {
    const callList = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data: TipoDentista[] = await response.json();
          setDentistas(data);
        } else {
          throw new Error("Listagem incompleta!");
        }
      } catch (error) {
        console.error("Erro ao buscar dentistas:", error);
      }
    };

    callList();
  }, []);
  
  return (
    <main className="min-h-screen bg-base p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-text">Lista de Dentistas</h1>
          
          <Link 
            to="/cadastro/dentista" 
            className="bg-accent text-base font-semibold px-5 py-2.5 rounded-apple-md hover:opacity-90 transition shadow-lg flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Cadastrar Dentista
          </Link>
        </div>

        {/* Tabela de Dentistas */}
        <table className="w-full border-collapse bg-mantle rounded-apple-lg overflow-hidden shadow-xl">
          <thead className="bg-surface0">
            <tr>
              <th className="p-4 text-left text-subtext font-medium">#</th>
              <th className="p-4 text-left text-subtext font-medium">NOME</th>
              <th className="p-4 text-left text-subtext font-medium">CRO</th>
              <th className="p-4 text-left text-subtext font-medium">CIDADE</th>
              <th className="p-4 text-left text-subtext font-medium">AÇÕES</th>
            </tr>
          </thead>

          <tbody>
            {dentistas.map((d, index) => (
              <tr key={d.cro} className="border-t border-white/5 hover:bg-surface0/50 transition">
                <td className="p-4 text-text font-mono text-sm">{index + 1}</td>
                <td className="p-4 text-text">{d.nome}</td>
                <td className="p-4 text-text">{d.cro}</td>
                <td className="p-4 text-text">{d.cidade}</td>
                <td className="p-4 flex gap-3"> 
                  <Link 
                    to={`/editar/dentista/${d.cro}`} 
                    className="text-accent hover:underline"
                  >
                    Editar
                  </Link> 
                  <span className="text-subtext">|</span>
                  <button 
                    onClick={async () => {
                      if (confirm(`Deseja realmente excluir o(a) Dr(a). ${d.nome}?`)) {
                        try {
                          const response = await fetch(`${API_URL}/${d.cro}`, { method: 'DELETE' });
                          if (response.ok) {
                            setDentistas(dentistas.filter(item => item.cro !== d.cro));
                          } else {
                            alert("Erro ao excluir o registro no servidor.");
                          }
                        } catch (error) {
                          console.error("Erro na requisição DELETE:", error);
                        }
                      }
                    }}
                    className="text-danger hover:underline"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          
          <tfoot>
            <tr className="bg-surface0/30">
              <td colSpan={5} className="p-4 text-subtext text-sm">Total de Profissionais: {dentistas.length}</td>
            </tr>
          </tfoot>
        </table>
    </main>
  );
}