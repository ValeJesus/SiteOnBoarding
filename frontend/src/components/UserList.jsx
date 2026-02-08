import { useState, useEffect } from 'react';
import { userService } from '../services/api';
import './UserList.css';

/**
 * Componente de Listagem de Usuários
 * Exibe todos os usuários cadastrados (requer autenticação)
 */
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  /**
   * Carrega a lista de usuários ao montar o componente
   */
  useEffect(() => {
    loadUsers();
  }, []);

  /**
   * Busca todos os usuários da API
   */
  const loadUsers = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await userService.getAll();
      setUsers(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Retorna um badge colorido baseado na role do usuário
   */
  const getRoleBadge = (role) => {
    const badges = {
      admin: { label: 'Administrador', className: 'badge-admin' },
      gerente: { label: 'Gerente', className: 'badge-gerente' },
      colaborador: { label: 'Colaborador', className: 'badge-colaborador' },
    };
    
    const badge = badges[role] || badges.colaborador;
    return <span className={`role-badge ${badge.className}`}>{badge.label}</span>;
  };

  // Estado de carregamento
  if (loading) {
    return (
      <div className="user-list-container">
        <div className="loading-state">
          <div className="spinner-large"></div>
          <p>Carregando usuários...</p>
        </div>
      </div>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <div className="user-list-container">
        <div className="error-state">
          <p className="error-message">{error}</p>
          <button onClick={loadUsers} className="retry-button">
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  // Lista vazia
  if (users.length === 0) {
    return (
      <div className="user-list-container">
        <div className="empty-state">
          <p>Nenhum usuário encontrado</p>
        </div>
      </div>
    );
  }

  // Lista de usuários
  return (
    <div className="user-list-container">
      <div className="user-list-header">
        <h2>Usuários Cadastrados</h2>
        <p className="user-count">Total: {users.length} usuários</p>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id || user._id} className="user-card">
            <div className="user-avatar">
              {user.nome ? user.nome.charAt(0).toUpperCase() : '?'}
            </div>
            <div className="user-info">
              <h3 className="user-name">{user.nome}</h3>
              <p className="user-email">{user.email}</p>
              <div className="user-role">
                {getRoleBadge(user.role)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="refresh-section">
        <button onClick={loadUsers} className="refresh-button">
          🔄 Atualizar lista
        </button>
      </div>
    </div>
  );
}

export default UserList;
