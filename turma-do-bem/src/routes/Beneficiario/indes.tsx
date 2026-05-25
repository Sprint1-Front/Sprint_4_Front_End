import { useEffect, useState } from 'react';

interface Beneficiario {
  idBeneficiarios: number;
  nmBeneficiario: string;
  nrCpf: number;
  dtNascimento: string;
  triagem: {
    idTriagem: number;
    stTriagem: string;
  };
}

export default function BeneficiariosPage() {
  const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>([]);

  // Dispara a busca assim que a página carrega
  useEffect(() => {
    fetch('http://localhost:8080/api/beneficiarios')
      .then((res) => res.json())
      .then((data) => setBeneficiarios(data))
      .catch((err) => console.error("BO na integração:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Beneficiários - Turma do Bem</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border p-2">Nome</th>
            <th className="border p-2">CPF</th>
            <th className="border p-2">Status da Triagem</th>
          </tr>
        </thead>
        <tbody>
          {beneficiarios.map((b) => (
            <tr key={b.idBeneficiarios}>
              <td className="border p-2">{b.nmBeneficiario}</td>
              <td className="border p-2">{b.nrCpf}</td>
              {/* Lendo o objeto interno que o INNER JOIN do Java trouxe */}
              <td className="border p-2">{b.triagem?.stTriagem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}