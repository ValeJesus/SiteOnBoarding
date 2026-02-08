import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userService } from '../services/api';
import './RegisterForm.css';

/**
 * Componente de Formulário de Registro
 * Permite criar novos usuários na plataforma
 */
function RegisterForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'colaborador',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();

  /**
   * Atualiza os campos do formulário
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Valida os campos do formulário
   * @returns {boolean} True se válido
   */
  const validateForm = () => {
    const { nome, email, password, confirmPassword } = formData;

    if (!nome || !email || !password || !confirmPassword) {
      setError('Preencha todos os campos');
      return false;
    }

    if (nome.length < 3) {
      setError('O nome deve ter pelo menos 3 caracteres');
      return false;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Email inválido');
      return false;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }

    setError('');
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
    setError('');

    try {
      // Remove confirmPassword antes de enviar
      const { confirmPassword, ...userData } = formData;
      
      await userService.create(userData);
      
      // Chama callback de sucesso se fornecido
      if (onSuccess) {
        onSuccess();
      } else {
        // Navega para login por padrão
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao criar usuário');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome">Nome Completo</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Seu nome completo"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
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
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mínimo 6 caracteres"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Digite a senha novamente"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Função</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          disabled={isSubmitting}
        >
          <option value="colaborador">Colaborador</option>
          <option value="gerente">Gerente</option>
          <option value="admin">Administrador</option>
        </select>
      </div>

      {error && (
        <div className="error-message">
          {error}
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
            Criando conta...
          </>
        ) : (
          'Criar Conta'
        )}
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  onSuccess: PropTypes.func,
};

export default RegisterForm;
