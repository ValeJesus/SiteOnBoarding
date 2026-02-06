import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/logs', icon: '📊', label: 'Logs' },
    { path: '/trabalhos', icon: '💼', label: 'Trabalhos' },
    { path: '/cronograma', icon: '📅', label: 'Cronograma' },
    { path: '/politicas', icon: '📋', label: 'Políticas' },
    { path: '/feedback', icon: '💬', label: 'Feedback' },
    { path: '/chat', icon: '💭', label: 'Chat' },
    { path: '/tarefas', icon: '✓', label: 'Tarefas' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">O</div>
        <div>
          <h3>Onboarding</h3>
          <p>Portal do Colaborador</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>Precisa de ajuda?</p>
        <p>Fale com seu gestor ou acesse o chat virtual.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
