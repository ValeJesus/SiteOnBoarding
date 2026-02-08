import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import UsersPage from './pages/UsersPage/UsersPage';
import Home from './pages/Home/Home';
import Logs from './pages/Logs/Logs';
import Trabalhos from './pages/Trabalhos/Trabalhos';
import Cronograma from './pages/Cronograma/Cronograma';
import Politicas from './pages/Politicas/Politicas';
import Feedback from './pages/Feedback/Feedback';
import Chat from './pages/Chat/Chat';
import Tarefas from './pages/Tarefas/Tarefas';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas de autenticação */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Rotas protegidas com Layout */}
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Home />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="logs" element={<Logs />} />
          <Route path="trabalhos" element={<Trabalhos />} />
          <Route path="cronograma" element={<Cronograma />} />
          <Route path="politicas" element={<Politicas />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="chat" element={<Chat />} />
          <Route path="tarefas" element={<Tarefas />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
