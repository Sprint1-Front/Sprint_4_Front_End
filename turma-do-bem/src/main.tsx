import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import EditarDentista from './routes/EditarDentista/index.tsx'
import CadastroDent from './routes/CadastroDent/index.tsx'
import Dentistas from './routes/CadastroDent/index.tsx'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import NossosProjetos from './routes/Projetos/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Solucao from './routes/Solucao/index.tsx'
import Doar from './routes/Doar/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import SejaVoluntario from './routes/Voluntario/index.tsx'
import CadastroAluno from './routes/CadastroAlu/index.tsx'
import CadastroDentista from './routes/CadastroDent/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dentistas", element: <Dentistas /> },
      { path: "/editar/dentista/:cro", element: <EditarDentista /> },
      { path: "/cadastrar/dentista", element: <CadastroDent /> },
      { path: "/nossos-projetos", element: <NossosProjetos /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/contato", element: <Contato /> },
      { path: "/faq", element: <Faq /> },
      { path: "/solucao", element: <Solucao /> },
      { path: "/doar", element: <Doar /> },
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/seja-voluntario", element: <SejaVoluntario /> },
      { path: "/cadastrar-aluno", element: <CadastroAluno /> },
      { path: "/cadastro-dentista", element: <CadastroDentista /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
