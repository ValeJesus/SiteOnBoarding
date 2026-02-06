import { useEffect, useState } from 'react';
import axios from 'axios';
import './Cronograma.css';

function Cronograma() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get('/api/cronograma')
      .then(response => setEventos(response.data))
      .catch(error => console.error('Erro ao carregar cronograma:', error));
  }, []);

  const getTipoClass = (tipo) => {
    const classes = {
      social: 'tipo-social',
      treinamento: 'tipo-treinamento',
      reuniao: 'tipo-reuniao'
    };
    return classes[tipo] || '';
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Cronograma</h1>
        <p>Eventos, reuniões e treinamentos agendados</p>
      </header>

      <main className="cronograma-content">
        <div className="eventos-table-container">
          <table className="eventos-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Horário</th>
                <th>Evento</th>
                <th>Local</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {eventos.map((evento) => (
                <tr key={evento.id}>
                  <td>{new Date(evento.data).toLocaleDateString('pt-BR')}</td>
                  <td>{evento.horario}</td>
                  <td><strong>{evento.evento}</strong></td>
                  <td>{evento.local}</td>
                  <td>
                    <span className={`tipo-badge ${getTipoClass(evento.tipo)}`}>
                      {evento.tipo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="horarios-section">
          <h3>Horários Importantes</h3>
          <table className="horarios-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Horário</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Expediente</td>
                <td>09:00 - 18:00</td>
                <td>Segunda a Sexta</td>
              </tr>
              <tr>
                <td>Almoço</td>
                <td>12:00 - 13:00</td>
                <td>Flexível</td>
              </tr>
              <tr>
                <td>Coffee Break</td>
                <td>15:00 - 15:15</td>
                <td>Diariamente</td>
              </tr>
              <tr>
                <td>Happy Hour</td>
                <td>18:00</td>
                <td>Sextas-feiras</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Cronograma;
