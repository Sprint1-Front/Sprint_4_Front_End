import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CadastroAluno from './pages/CadastroAluno';
import Doar from './pages/Doar';
import Integrantes from './pages/Integrantes';
import Cadastro from './pages/Cadastro';
import Voluntario from './pages/SejaVoluntario';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Faq from './pages/Faq';
import Solucao from './pages/Solucao';
import CadastroDentista from './pages/CadastroDentista';
import './index.css';
import NossosProjetos from './pages/NossosProjetos';



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-base text-text font-sans antialiased selection:bg-accent/30 selection:text-accent">
        
        {/* Header */}
        <Header />

        {/* Conteúdo */}
        <main className="flex-1 px-4 md:px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doar" element={<Doar />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/seja-voluntario" element={<Voluntario />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path="/nossos-projetos" element={<NossosProjetos />} />

            {/* Cadastros */}
            <Route path="/cadastrar-aluno" element={<CadastroAluno />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/seja-voluntario" element={<Voluntario />} />
            <Route path="/cadastro-dentista" element={<CadastroDentista />} />


            {/* 404 */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                  <h1 className="text-6xl font-bold tracking-tight text-accent">
                    404
                  </h1>
                  <p className="text-subtext text-lg leading-relaxed">
                    Página não encontrada.
                  </p>
                  <a
                    href="/"
                    className="mt-4 px-6 py-3 bg-accent text-white rounded-apple font-semibold hover:brightness-110 transition"
                  >
                    Voltar para início
                  </a>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;