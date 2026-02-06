import { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import axios from 'axios';
import './Feedback.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('/api/feedback')
      .then(response => setFeedbacks(response.data))
      .catch(error => console.error('Erro ao carregar feedback:', error));
  }, []);

  const feedback = feedbacks[0];

  const radarData = feedback ? {
    labels: [
      'Qualidade de Código',
      'Comunicação',
      'Trabalho em Equipe',
      'Resolução de Problemas',
      'Pontualidade',
      'Iniciativa'
    ],
    datasets: [{
      label: 'Suas Competências',
      data: [
        feedback.competencias.qualidadeCodigo,
        feedback.competencias.comunicacao,
        feedback.competencias.trabalhoEquipe,
        feedback.competencias.resolucaoProblemas,
        feedback.competencias.pontualidade,
        feedback.competencias.iniciativa
      ],
      backgroundColor: 'rgba(112, 123, 123, 0.2)',
      borderColor: '#707b7b',
      borderWidth: 2,
      pointBackgroundColor: '#596463',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#596463'
    }]
  } : null;

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Feedback e Avaliações</h1>
        <p>Acompanhe seu desenvolvimento e receba orientações</p>
      </header>

      <main className="feedback-content">
        {/* Gráfico Radar de Competências */}
        {radarData && (
          <section className="competencias-section">
            <h3>Suas Competências</h3>
            <div className="radar-chart-container">
              <Radar data={radarData} options={radarOptions} />
            </div>
          </section>
        )}

        {/* Feedbacks Recebidos */}
        <section className="feedbacks-section">
          <h3>Feedbacks Recebidos</h3>
          <div className="feedbacks-list">
            {feedbacks.map((fb) => (
              <div key={fb.id} className="feedback-card">
                <div className="feedback-header">
                  <div className="feedback-author">
                    <div className="author-avatar">{fb.autor.charAt(0)}</div>
                    <div>
                      <h4>{fb.autor}</h4>
                      <p>{fb.cargo}</p>
                    </div>
                  </div>
                  <div className="feedback-rating">
                    {renderStars(fb.rating)}
                  </div>
                </div>
                <p className="feedback-comment">{fb.comentario}</p>
                <span className="feedback-date">
                  {new Date(fb.data).toLocaleDateString('pt-BR')}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Feedback;
