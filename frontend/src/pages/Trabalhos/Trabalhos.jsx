import { useEffect, useState } from 'react';
import axios from 'axios';
import './Trabalhos.css';

function Trabalhos() {
  const [trabalhos, setTrabalhos] = useState([]);
  const [filter, setFilter] = useState('todos');

  useEffect(() => {
    axios.get('/api/trabalhos')
      .then(response => setTrabalhos(response.data))
      .catch(error => console.error('Erro ao carregar trabalhos:', error));
  }, []);

  const filteredTrabalhos = trabalhos.filter(trabalho => {
    if (filter === 'todos') return true;
    return trabalho.status === filter;
  });

  const getStatusBadge = (status) => {
    const badges = {
      concluido: { label: 'Concluído', class: 'badge-concluido' },
      andamento: { label: 'Em Andamento', class: 'badge-andamento' },
      pendente: { label: 'Pendente', class: 'badge-pendente' }
    };
    return badges[status] || badges.pendente;
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Projetos da Empresa</h1>
        <p>Conheça os principais trabalhos realizados pela GameOnTech</p>
      </header>

      <main className="trabalhos-content">
        {/* Filtros */}
        <div className="trabalhos-filters">
          <button 
            className={`filter-btn ${filter === 'todos' ? 'active' : ''}`}
            onClick={() => setFilter('todos')}
          >
            Todos ({trabalhos.length})
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
            Concluídos
          </button>
        </div>

        {/* Lista de Projetos */}
        <div className="trabalhos-grid">
          {filteredTrabalhos.map((trabalho) => {
            const badge = getStatusBadge(trabalho.status);
            return (
              <div key={trabalho.id} className="trabalho-card">
                <div className="trabalho-header">
                  <h3>{trabalho.titulo}</h3>
                  <span className={`badge ${badge.class}`}>{badge.label}</span>
                </div>
                
                <p className="trabalho-description">{trabalho.descricao}</p>
                
                <div className="trabalho-info">
                  <div className="info-item">
                    <strong>Cliente:</strong> {trabalho.cliente}
                  </div>
                  <div className="info-item">
                    <strong>Equipe:</strong> {trabalho.equipe} pessoas
                  </div>
                  {trabalho.status === 'concluido' ? (
                    <>
                      <div className="info-item">
                        <strong>Início:</strong> {new Date(trabalho.dataInicio).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="info-item">
                        <strong>Conclusão:</strong> {new Date(trabalho.dataConclusao).toLocaleDateString('pt-BR')}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="info-item">
                        <strong>Início:</strong> {new Date(trabalho.dataInicio).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="info-item">
                        <strong>Previsão:</strong> {new Date(trabalho.dataPrevisao).toLocaleDateString('pt-BR')}
                      </div>
                    </>
                  )}
                </div>

                {trabalho.progresso && (
                  <div className="trabalho-progress">
                    <div className="progress-label">
                      <span>Progresso</span>
                      <span>{trabalho.progresso}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${trabalho.progresso}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="trabalho-tech">
                  <strong>Tecnologias:</strong>
                  <div className="tech-tags">
                    {trabalho.tecnologias.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Trabalhos;
