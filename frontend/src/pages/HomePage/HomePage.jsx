import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './HomePage.css';

/**
 * Página Inicial Pública
 * Mostra informações sobre o sistema e links para login/registro
 */
function HomePage() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="homepage">
      <div className="homepage-container">
        <header className="homepage-header">
          <h1>🎮 GameOnTech Onboarding</h1>
          <p className="subtitle">Sistema de Integração de Colaboradores</p>
        </header>

        {isAuthenticated ? (
          <div className="authenticated-section">
            <div className="welcome-card">
              <h2>Bem-vindo, {user?.nome}!</h2>
              <p>Você está autenticado no sistema.</p>
              
              <div className="user-info-card">
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Função:</strong> {user?.role}</p>
              </div>

              <div className="action-buttons">
                <Link to="/users" className="btn btn-primary">
                  👥 Ver Usuários
                </Link>
                <Link to="/trabalhos" className="btn btn-secondary">
                  📋 Trabalhos
                </Link>
                <Link to="/cronograma" className="btn btn-secondary">
                  📅 Cronograma
                </Link>
                <button onClick={logout} className="btn btn-danger">
                  🚪 Sair
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="unauthenticated-section">
            <div className="info-card">
              <h2>Sobre o Sistema</h2>
              <p>
                O GameOnTech Onboarding é uma plataforma completa para gerenciar
                o processo de integração de novos colaboradores.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">🔐</span>
                  <h3>Autenticação Segura</h3>
                  <p>Sistema de login com JWT</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">👥</span>
                  <h3>Gestão de Usuários</h3>
                  <p>Controle completo de colaboradores</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <h3>Dashboard Interativo</h3>
                  <p>Acompanhamento em tempo real</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🚀</span>
                  <h3>Interface Moderna</h3>
                  <p>React com experiência otimizada</p>
                </div>
              </div>

              <div className="auth-buttons">
                <Link to="/login" className="btn btn-primary">
                  Entrar
                </Link>
                <Link to="/register" className="btn btn-outline">
                  Criar Conta
                </Link>
              </div>
            </div>
          </div>
        )}

        <footer className="homepage-footer">
          <p>© 2024 GameOnTech. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
