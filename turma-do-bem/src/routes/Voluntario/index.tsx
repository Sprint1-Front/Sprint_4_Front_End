import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Interface espelhando a entidade mapeada no Java
type Dentista = {
  cro: string;
  nome: string;
  especialidade: string;
  cidade: string;
};

export const SejaVoluntario: React.FC = () => {
  const [dentistas, setDentistas] = useState<Dentista[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  const API_URL = "http://localhost:8080/dentista";

  useEffect(() => {
    const buscarDentistasDoJava = async () => {
      try {
        setLoading(true);
        setErrorMsg(null);

        // Fetch puro nativo do navegador
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const dados: Dentista[] = await response.json();
        setDentistas(dados);
      } catch (error) {
        console.error("Erro na comunicação com a API Java:", error);
        setErrorMsg("Não foi possível carregar os dentistas voluntários do banco de dados.");
      } finally {
        setLoading(false);
      }
    };

    buscarDentistasDoJava();
  }, []); 

  const dentistasFiltrados = useMemo(() => {
    const termo = search.trim().toLowerCase();
    if (!termo) return dentistas;
    return dentistas.filter((d) =>
      [d.nome, d.especialidade, d.cidade, d.cro]
        .join(" ")
        .toLowerCase()
        .includes(termo)
    );
  }, [dentistas, search]);

  return (
    <div className="min-h-screen bg-base text-text selection:bg-accent/30 selection:text-accent font-sans antialiased">
      <main className="max-w-6xl mx-auto pt-20 px-6 pb-20">
        
        <section className="bg-mantle rounded-apple-lg p-8 shadow-2xl border border-white/5">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Dentistas Voluntários - TDB
          </h1>
          <p className="text-subtext mb-6 max-w-3xl">
            Encontre profissionais que fazem parte da rede de apoio da ONG Turma do Bem. Use a busca para localizar pelo nome, especialidade ou cidade.
          </p>

          {/* Input de Busca */}
          <div className="mb-8">
            <label htmlFor="voluntario-search" className="sr-only">
              Buscar voluntário
            </label>
            <input
              id="voluntario-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por nome, especialidade, cidade ou CRO..."
              className="w-full md:w-1/2 p-3 bg-surface0/50 border border-white/10 rounded-lg outline-none text-text focus:ring-2 focus:ring-accent transition-all placeholder:text-subtext/50"
            />
          </div>

          {loading && (
            <div className="py-12 text-center">
              <p className="text-accent animate-pulse font-medium text-lg">
                Buscando registros na API Java com Fetch nativo...
              </p>
            </div>
          )}

          {errorMsg && !loading && (
            <div className="p-6 bg-surface0/30 border border-danger/20 rounded-apple-md text-center">
              <p className="text-danger font-medium mb-3">{errorMsg}</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-surface0 hover:bg-surface1 text-text text-xs font-bold rounded-md transition"
              >
                Recarregar Página
              </button>
            </div>
          )}

          {!loading && !errorMsg && dentistasFiltrados.length === 0 && (
            <p className="text-subtext italic text-center py-8">
              Nenhum voluntário cadastrado ou correspondente à busca.
            </p>
          )}

          {!loading && !errorMsg && dentistasFiltrados.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dentistasFiltrados.map((dentista) => (
                <div
                  key={dentista.cro}
                  className="bg-base p-6 rounded-apple-lg shadow-lg border border-white/5 hover:border-accent/30 hover:shadow-2xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-xl font-bold text-text tracking-tight">
                      {dentista.nome}
                    </h2>
                    <p className="text-accent font-semibold text-sm mt-0.5">
                      {dentista.especialidade}
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm text-subtext">
                      <p className="flex items-center gap-1.5">
                        <span>📍</span> Cidade: <strong className="text-text">{dentista.cidade}</strong>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <span>🪪</span> CRO: <code className="bg-surface0/50 px-1.5 py-0.5 rounded text-xs text-text">{dentista.cro}</code>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => window.alert(`Perfil do(a) Dr(a). ${dentista.nome}\nRegião: ${dentista.cidade}`)}
                    className="mt-6 w-full py-2.5 bg-surface0 hover:bg-surface1 text-text text-sm font-semibold rounded-apple-md transition-all active:scale-[0.98]"
                  >
                    Ver Perfil Completo
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="mt-12 text-center">
          <Link 
            to="../cadastro-dentista" 
            className="inline-block px-8 py-3.5 bg-accent text-base font-bold text-mantle rounded-apple shadow-lg transition-all hover:brightness-110 active:scale-95 duration-150"
          >
            Seja um Dentista Voluntário
          </Link>
        </div>

      </main>
    </div>
  );
};

export default SejaVoluntario;