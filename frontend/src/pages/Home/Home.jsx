import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import './Home.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  const [colaborador, setColaborador] = useState(null);

  useEffect(() => {
    axios.get('/api/colaboradores')
      .then(response => setColaborador(response.data[0]))
      .catch(error => console.error('Erro ao carregar colaborador:', error));
  }, []);

  const progressData = {
    labels: ['Concluído', 'Pendente'],
    datasets: [{
      data: [colaborador?.progressoOnboarding || 33, 67],
      backgroundColor: ['#707b7b', '#879392'],
      borderColor: ['#414c4b', '#596463'],
      borderWidth: 2
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  const exploreItems = [
    { icon: '📚', title: 'Documentos', desc: 'Políticas e manuais' },
    { icon: '🎓', title: 'Treinamentos', desc: 'Cursos e certificações' },
    { icon: '👥', title: 'Equipe', desc: 'Conheça seus colegas' },
    { icon: '💡', title: 'Projetos', desc: 'Trabalhos da empresa' },
    { icon: '🎯', title: 'Metas', desc: 'Objetivos e KPIs' },
    { icon: '📞', title: 'Contatos', desc: 'Diretório da empresa' }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Bem-vindo ao Onboarding</h1>
        <p>Olá, {colaborador?.nome || 'Colaborador'}! Prepare-se para uma jornada incrível.</p>
      </header>

      <main className="home-content">
        {/* Seção de Boas-vindas */}
        <section className="welcome-section">
          <h2>🎉 Seja bem-vindo à GameOnTech!</h2>
          <p>
            Estamos felizes em tê-lo conosco. Este portal foi criado para facilitar sua
            integração e fornecer todas as informações necessárias para um ótimo começo.
          </p>
          <p><strong>Cargo:</strong> {colaborador?.cargo || 'Carregando...'}</p>
          <p><strong>Departamento:</strong> {colaborador?.departamento || 'Carregando...'}</p>
        </section>

        {/* Progresso do Onboarding */}
        <section className="progress-section">
          <h3>Seu Progresso no Onboarding</h3>
          <div className="progress-chart">
            <Doughnut data={progressData} options={chartOptions} />
          </div>
          <p className="progress-text">
            Você completou <strong>{colaborador?.progressoOnboarding || 33}%</strong> do processo de integração
          </p>
        </section>

        {/* Explorar Recursos */}
        <section className="explore-section">
          <h3>Explore os Recursos</h3>
          <div className="explore-grid">
            {exploreItems.map((item, index) => (
              <div key={index} className="explore-card">
                <div className="card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
