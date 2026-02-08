import UserList from '../../components/UserList';
import './UsersPage.css';

/**
 * Página de Usuários
 * Exibe a lista de todos os usuários cadastrados
 * Requer autenticação
 */
function UsersPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Gerenciamento de Usuários</h1>
        <p>Visualize todos os usuários cadastrados no sistema</p>
      </header>

      <main className="users-content">
        <UserList />
      </main>
    </div>
  );
}

export default UsersPage;
