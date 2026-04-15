import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Dentista = {
  id: number;
  nome: string;
  especialidade: string;
  cidade: string;
  contato: string;
};

const SejaVoluntario: React.FC = () => {
  const [dentistas, setDentistas] = useState<Dentista[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const dadosSimulados: Dentista[] = [
      {
        id: 1,
        nome: "Dra. Ana Souza",
        especialidade: "Odontopediatria",
        cidade: "São Paulo",
        contato: "ana@email.com",
      },
      {
        id: 2,
        nome: "Dr. Carlos Lima",
        especialidade: "Ortodontia",
        cidade: "Rio de Janeiro",
        contato: "carlos@email.com",
      },
      {
        id: 3,
        nome: "Dr. Alexandre C. Jesus",
        especialidade: "Odontia",
        cidade: "São Paulo",
        contato: "alexandrecj@emial.com"
      },
    ];

    setTimeout(() => {
      setDentistas(dadosSimulados);
      setLoading(false);
    }, 800);
  }, []);

  const dentistasFiltrados = useMemo(() => {
    const termo = search.trim().toLowerCase();
    if (!termo) return dentistas;
    return dentistas.filter((d) =>
      [d.nome, d.especialidade, d.cidade, d.contato]
        .join(" ")
        .toLowerCase()
        .includes(termo)
    );
  }, [dentistas, search]);

  return (
    <div className="min-h-screen bg-base text-text selection:bg-accent/30 selection:text-accent font-sans antialiased">
      <main className="max-w-6xl mx-auto pt-20 px-6">
        <section className="bg-mantle rounded-apple-lg p-8 shadow-2xl border border-white/5">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Dentistas Voluntários - TDB
          </h1>
          <p className="text-subtext mb-6 max-w-3xl">
            Encontre profissionais que fazem parte da rede de apoio. Use a busca para localizar pelo nome, especialidade ou cidade.
          </p>

          <div className="mb-6">
          <label htmlFor="voluntario-search" className="sr-only">
            Buscar voluntário
          </label>
          <input
            id="voluntario-search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por nome, especialidade ou cidade"
            className="w-full md:w-1/2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {loading ? (
          <p className="text-subtext animate-pulse">
            Carregando profissionais...
          </p>
        ) : dentistasFiltrados.length === 0 ? (
          <p className="text-subtext">Nenhum voluntário encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dentistasFiltrados.map((dentista) => (
              <div
                key={dentista.id}
                className="bg-mantle p-6 rounded-apple-lg shadow-lg border border-white/10 hover:shadow-2xl transition-all"
              >
                <h2 className="text-xl font-semibold text-text">
                  {dentista.nome}
                </h2>

                <p className="text-accent font-medium">
                  {dentista.especialidade}
                </p>

                <div className="mt-4 text-sm text-subtext">
                  <p>📍 Cidade: {dentista.cidade}</p>
                  <p>📧 Contato: {dentista.contato}</p>
                </div>

                <button
                  onClick={() => window.alert(`Perfil de ${dentista.nome}`)}
                  className="mt-4 w-full bg-accent text-base font-semibold rounded-apple hover:brightness-110 transition-all"
                >
                  Ver Perfil
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      <div className="mt-10 text-center text-sm text-text">
        <button>
          <Link to="/cadastro-dentista" className="w-full py-3 bg-accent text-base font-bold rounded-apple transition-all hover:brightness-110 active:scale-95">
            Seja um Dentista
          </Link>
        </button>
      </div>
    </main>
  </div>
  );
}

export default SejaVoluntario;