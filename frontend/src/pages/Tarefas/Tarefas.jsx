import { useEffect, useState } from 'react';
import axios from 'axios';
import './Tarefas.css';

function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [filter, setFilter] = useState('todas');

  useEffect(() => {
    axios.get('/api/tarefas')
      .then(response => setTarefas(response.data))
      .catch(error => console.error('Erro ao carregar tarefas:', error));
  }, []);

  const filteredTarefas = tarefas.filter(tarefa => {
    if (filter === 'todas') return true;
    return tarefa.status === filter;
  });

  const getStatusBadge = (status) => {
    const badges = {
      concluido: { label: 'Concluído', class: 'status-concluido', icon: '✓' },
      andamento: { label: 'Em Andamento', class: 'status-andamento', icon: '⚡' },
      pendente: { label: 'Pendente', class: 'status-pendente', icon: '○' }
    };
    return badges[status] || badges.pendente;
  };

  const getPrioridadeClass = (prioridade) => {
    const classes = {
      alta: 'prioridade-alta',
      media: 'prioridade-media',
      baixa: 'prioridade-baixa'
    };
    return classes[prioridade] || '';
  };

  const countByStatus = (status) => {
    return tarefas.filter(t => t.status === status).length;
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Minhas Tarefas</h1>
        <p>Gerencie suas atividades e acompanhe seu progresso</p>
      </header>

      <main className="tarefas-content">
        {/* Resumo */}
        <div className="tarefas-summary">
          <div className="summary-card">
            <h4>Total</h4>
            <span className="summary-number">{tarefas.length}</span>
          </div>
          <div className="summary-card">
            <h4>Concluídas</h4>
            <span className="summary-number concluido">{countByStatus('concluido')}</span>
          </div>
          <div className="summary-card">
            <h4>Em Andamento</h4>
            <span className="summary-number andamento">{countByStatus('andamento')}</span>
          </div>
          <div className="summary-card">
            <h4>Pendentes</h4>
            <span className="summary-number pendente">{countByStatus('pendente')}</span>
          </div>
        </div>

        {/* Filtros */}
        <div className="tarefas-filters">
          <button 
            className={`filter-btn ${filter === 'todas' ? 'active' : ''}`}
            onClick={() => setFilter('todas')}
          >
            Todas
          </button>
          <button 
            className={`filter-btn ${filter === 'pendente' ? 'active' : ''}`}
            onClick={() => setFilter('pendente')}
          >
            Pendentes
          </button>
          <button 
            className={`filter-btn ${filter === 'andamento' ? 'active' : ''}`}
            onClick={() => setFilter('andamento')}
          >
            Em Andamento
          </button>
          <button 
            className={`filter-btn ${filter === 'concluido' ? 'active' : ''}`}
            onClick={() => setFilter('concluido')}
          >
            Concluídas
          </button>
        </div>

        {/* Lista de Tarefas */}
        <div className="tarefas-list">
          {filteredTarefas.map((tarefa) => {
            const badge = getStatusBadge(tarefa.status);
            return (
              <div key={tarefa.id} className="tarefa-item">
                <div className="tarefa-checkbox">{badge.icon}</div>
                <div className="tarefa-content">
                  <div className="tarefa-header-row">
                    <h3>{tarefa.titulo}</h3>
                    <span className={`badge ${badge.class}`}>{badge.label}</span>
                  </div>
                  <p className="tarefa-description">{tarefa.descricao}</p>
                  <div className="tarefa-meta">
                    <span className={`prioridade ${getPrioridadeClass(tarefa.prioridade)}`}>
                      🎯 {tarefa.prioridade.charAt(0).toUpperCase() + tarefa.prioridade.slice(1)}
                    </span>
                    <span className="prazo">
                      📅 {new Date(tarefa.prazo).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  {tarefa.progresso !== undefined && (
                    <div class="tarefa-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${tarefa.progresso}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{tarefa.progresso}% concluído</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Tarefas;
