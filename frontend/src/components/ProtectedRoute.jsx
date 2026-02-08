import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';

/**
 * Componente de Rota Protegida
 * Protege rotas que requerem autenticação
 * Redireciona para login se o usuário não estiver autenticado
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  // Mostra loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Carregando...</p>
      </div>
    );
  }

  // Redireciona para login se não autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Renderiza os componentes filhos se autenticado
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
