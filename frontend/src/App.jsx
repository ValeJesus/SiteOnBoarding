import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
