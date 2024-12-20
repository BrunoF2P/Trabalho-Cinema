import {BrowserRouter as Router, Routes, Route, Outlet, useLocation} from 'react-router-dom';
import Registrar from './pages/Registrar.jsx';
import BarraMenu from "./pages/components/BarraMenu.jsx";
import Search from "./pages/components/Search.jsx";
import Entrar from "./pages/Entrar.jsx";
import TelaPrincipal from "./pages/TelaPrincipal.jsx";
import NotFound from "./pages/components/NotFound.jsx";
import Dashboard from "./pages/components/Dashboard.jsx";
import CriarSala from "./pages/Salas/CriarSala.jsx";
import ListarSalas from "./pages/Salas/ListarSalas.jsx";
import EditarSala from "./pages/Salas/EditarSala.jsx";
import TelaFilme from "./pages/TelaFilme.jsx";
import Programacao from "./pages/Programacao.jsx";
import CriarSessao from './pages/Sessao/CriarSessao.jsx';
import {AssentoProvider} from "./contexts/AssentoContext.jsx";
import CompraIngressos from "./pages/CompraIngressos.jsx";
import {useEffect} from "react";
import TelaUsuario from './pages/TelaUsuario.jsx';
import CriarGenero from './pages/Generos/CriarGenero.jsx';
import ListarGeneros from './pages/Generos/ListarGenero.jsx';
import ListarFilmes from './pages/FIlmes/ListarFilmes.jsx';
import CriarFilme from './pages/FIlmes/CriarFilme.jsx';
import EditarFilme from './pages/FIlmes/EditarFilme.jsx';
import ListarSessoes from './pages/Sessao/ListarSessoes.jsx';
import AdminRoute from "./pages/components/DaquiNinguemPassa.jsx";

const App = () => {
    return (
        <Router>
            <ThemedRoutes /> {/* Separa as rotas e o uso de temas */}
        </Router>
    );
};

    const ThemedRoutes = () => {
        const location = useLocation();

        // Define temas com base na rota
        useEffect(() => {
            document.body.className = ""; // Remove todas as classes anteriores
            if (location.pathname === "/entrar" || location.pathname === "/registrar") {
                document.body.classList.add("tema1");
            } else {
                document.body.classList.add("tema2");
            }
        }, [location]);

    return (

        <AssentoProvider>
                <Routes>
                    <Route element={<LayoutWithMenu />}>
                        <Route path="/" element={<TelaPrincipal />} />
                        <Route path="/compra-ingresso" element={<CompraIngressos />} />
                        <Route path="/programacao" element={<Programacao />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
                        <Route path="/criar-sessao" element={<AdminRoute><CriarSessao/></AdminRoute>}/>
                        <Route path="/criar-genero" element={<AdminRoute><CriarGenero/></AdminRoute>}/>
                        <Route path="/listar-generos" element={<AdminRoute><ListarGeneros/></AdminRoute>}/>
                        <Route path="/criar-filme" element={<AdminRoute><CriarFilme/></AdminRoute>}/>
                        <Route path="/listar-filmes" element={<AdminRoute><ListarFilmes/></AdminRoute>}/>
                        <Route path="/listar-sessoes" element={<AdminRoute><ListarSessoes/></AdminRoute>}/>
                        <Route path="/editar-filme/:id_filme" element={<AdminRoute><EditarFilme /></AdminRoute>} />
                        <Route path="/criar-sala" element={<AdminRoute><CriarSala /></AdminRoute>} />
                        <Route path="/listar-salas" element={<AdminRoute><ListarSalas /></AdminRoute>} />
                        <Route path="/editar-sala/:id_sala" element={<AdminRoute><EditarSala /></AdminRoute>} />
                        <Route path="/filme/:id/:slug" element={<TelaFilme />} />
                        <Route path="/perfil" element={<TelaUsuario />} />
                    </Route>
                    <Route path="/entrar" element={<Entrar />} />
                    <Route path="/registrar" element={<Registrar />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
        </AssentoProvider>
    );
};

const LayoutWithMenu = () => {
    return (
        <div>
            <BarraMenu />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default App;
