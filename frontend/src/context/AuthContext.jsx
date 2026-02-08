import { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { authService } from '../services/api';

/**
 * Contexto de Autenticação
 * Gerencia o estado global de autenticação da aplicação
 */
export const AuthContext = createContext(null);

/**
 * Provider do Contexto de Autenticação
 * Fornece funções e estado de autenticação para toda a aplicação
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Carrega o usuário do localStorage ao inicializar
   */
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error('Erro ao carregar usuário do localStorage:', err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  /**
   * Realiza o login do usuário
   * @param {string} email - Email do usuário
   * @param {string} password - Senha do usuário
   * @returns {Promise<object>} Dados do usuário
   */
  const login = useCallback(async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await authService.login(email, password);
      
      // Salva o token e dados do usuário
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      setUser(data.user);
      return data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erro ao fazer login';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Realiza o logout do usuário
   */
  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
    setError(null);
  }, []);

  /**
   * Atualiza os dados do usuário no contexto
   * @param {object} updatedUser - Dados atualizados do usuário
   */
  const updateUser = useCallback((updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  }, []);

  /**
   * Limpa o erro do contexto
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    updateUser,
    clearError,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
