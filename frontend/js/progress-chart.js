/* ========================================
   DOCUMENTAÇÃO: JavaScript - Gráfico de Progresso
   ========================================
   
   ELEMENTOS MANIPULADOS:
   - Elemento <canvas id="progressChart">: Canvas onde o gráfico é renderizado
   
   CONFIGURAÇÃO DO GRÁFICO:
   - Tipo: Doughnut (Rosca)
   - Dados: 33% completo, 67% pendente
   - Cores: #6b9997 (completo), #c6cca5 (pendente)
   - Animação: ativada
   - Responsividade: mantém proporção
   
   MÉTODO PRINCIPAL:
   - Chart: Construtor do Chart.js que cria o gráfico
   
   ======================================== */

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o contexto do canvas
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    // Cria o gráfico Doughnut
    const progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completo', 'Pendente'],
            datasets: [{
                data: [33, 67],
                backgroundColor: [
                    '#6b9997', // Completo - Color3
                    '#c6cca5'  // Pendente - Color1
                ],
                borderColor: [
                    '#54787d', // Color4
                    '#8ab8a8'  // Color2
                ],
                borderWidth: 2,
                hoverBorderColor: '#54787d',
                hoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    },
                    backgroundColor: 'rgba(84, 120, 125, 0.9)',
                    padding: 12,
                    titleFont: {
                        size: 12,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 12
                    },
                    borderColor: '#6b9997',
                    borderWidth: 1
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 13,
                            weight: '500'
                        },
                        color: '#2c3e50',
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map((label, i) => ({
                                    text: label + ' - ' + data.datasets[0].data[i] + '%',
                                    fillStyle: data.datasets[0].backgroundColor[i],
                                    strokeStyle: data.datasets[0].borderColor[i],
                                    lineWidth: 2,
                                    hidden: false,
                                    index: i
                                }));
                            }
                            return [];
                        }
                    }
                }
            }
        }
    });
});
