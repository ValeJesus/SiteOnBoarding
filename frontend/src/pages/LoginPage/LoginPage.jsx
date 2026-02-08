import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import './LoginPage.css';

/**
 * Página de Login
 * Exibe o formulário de login e link para registro
 */
function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>GameOnTech</h1>
          <h2>Bem-vindo de volta</h2>
          <p>Entre com suas credenciais para acessar o sistema</p>
        </div>

        <LoginForm />

        <div className="auth-footer">
          <p>
            Não tem uma conta?{' '}
            <Link to="/register" className="auth-link">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
