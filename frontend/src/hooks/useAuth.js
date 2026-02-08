import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

/**
 * Hook customizado para acessar o contexto de autenticação
 * Facilita o acesso às funções e estado de autenticação em qualquer componente
 * 
 * @returns {object} Contexto de autenticação
 * @throws {Error} Se usado fora do AuthProvider
 * 
 * @example
 * const { user, login, logout, isAuthenticated } = useAuth();
 */
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}

export default useAuth;
