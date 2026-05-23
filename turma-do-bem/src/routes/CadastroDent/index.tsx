import { useEffect, useState } from "react";
import type { TipoDentista } from "../../types/tipoDentista";
import { Link } from "react-router-dom";

export default function Dentistas() {

  const [dentistas, setDentistas] = useState<TipoDentista[]>([]);

  useEffect(() => {

    const callList = async ()=>{
      try {
        const response = await fetch("http://localhost:8080/dentistas");
        
        if(response.ok){
          const data:TipoDentista[] = await response.json();
          setDentistas(data);
        }else{
          throw new Error("Listagem incompleta!");
        }

      } catch (error) {
        console.error(error);
      }
    }

    callList();
    
  }, []);
  
  return (
    <main className="min-h-screen bg-base p-10">
        <h1 className="text-3xl font-bold text-text mb-6">Lista de Dentistas</h1>
        <table className="w-full border-collapse bg-mantle rounded-apple-lg overflow-hidden shadow-xl">
          
          <thead className="bg-surface0">
            <tr>
              <th className="p-4 text-left text-subtext font-medium">ID</th>
              <th className="p-4 text-left text-subtext font-medium">NOME</th>
              <th className="p-4 text-left text-subtext font-medium">CRO</th>
              <th className="p-4 text-left text-subtext font-medium">CIDADE</th>
              <th className="p-4 text-left text-subtext font-medium">AÇÕES</th>
            </tr>
          </thead>

          <tbody>
            {dentistas.map((d)=>(
              <tr key={d.cro} className="border-t border-white/5 hover:bg-surface0/50 transition">
                <td className="p-4 text-text">{d.cro}</td>
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
                      if(confirm("Deseja realmente excluir?")) {
                        await fetch(`http://localhost:3000/dentistas/${d.cro}`, { method: 'DELETE' });
                        setDentistas(dentistas.filter(item => item.cro !== d.cro));
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
  )
}