import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm';
import '../LoginPage/LoginPage.css'; // Reutiliza os estilos da página de login

/**
 * Página de Registro
 * Exibe o formulário de registro e link para login
 */
function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>GameOnTech</h1>
          <h2>Criar nova conta</h2>
          <p>Preencha os dados abaixo para começar</p>
        </div>

        <RegisterForm />

        <div className="auth-footer">
          <p>
            Já tem uma conta?{' '}
            <Link to="/login" className="auth-link">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
