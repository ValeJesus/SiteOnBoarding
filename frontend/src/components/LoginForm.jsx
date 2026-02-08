import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';
import './LoginForm.css';

/**
 * Componente de Formulário de Login
 * Permite que usuários façam login com email e senha
 */
function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, error: authError } = useAuth();
  const navigate = useNavigate();

  /**
   * Valida os campos do formulário
   * @returns {boolean} True se válido
   */
  const validateForm = () => {
    if (!email || !password) {
      setLocalError('Preencha todos os campos');
      return false;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setLocalError('Email inválido');
      return false;
    }

    if (password.length < 6) {
      setLocalError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }

    setLocalError('');
    return true;
  };

  /**
   * Manipulador de submissão do formulário
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setLocalError('');

    try {
      await login(email, password);
      
      // Chama callback de sucesso se fornecido
      if (onSuccess) {
        onSuccess();
      } else {
        // Navega para a home por padrão
        navigate('/');
      }
    } catch (err) {
      setLocalError(err.message || 'Erro ao fazer login');
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayError = localError || authError;

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          disabled={isSubmitting}
          required
        />
      </div>

      {displayError && (
        <div className="error-message">
          {displayError}
        </div>
      )}

      <button 
        type="submit" 
        className="submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            Entrando...
          </>
        ) : (
          'Entrar'
        )}
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onSuccess: PropTypes.func,
};

export default LoginForm;
