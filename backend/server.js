import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ===== ROTAS API =====

// GET - Colaboradores
app.get('/api/colaboradores', (req, res) => {
  res.json([
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@gameontech.com',
      cargo: 'Desenvolvedor Frontend',
      departamento: 'Tecnologia',
      progressoOnboarding: 33,
      dataAdmissao: '2026-02-01'
    }
  ]);
});

// GET - Trabalhos (Projetos da Empresa)
app.get('/api/trabalhos', (req, res) => {
  res.json([
    {
      id: 1,
      titulo: 'Plataforma E-commerce B2B',
      descricao: 'Desenvolvimento de plataforma completa de vendas B2B com integração de pagamentos e logística.',
      cliente: 'TechCorp Solutions',
      status: 'concluido',
      dataInicio: '2025-03-15',
      dataConclusao: '2025-11-20',
      tecnologias: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      equipe: 8
    },
    {
      id: 2,
      titulo: 'App Mobile de Gestão de Frotas',
      descricao: 'Aplicativo mobile para rastreamento e gestão de frotas de veículos em tempo real.',
      cliente: 'LogiTransport',
      status: 'andamento',
      dataInicio: '2025-12-01',
      dataPrevisao: '2026-04-30',
      progresso: 65,
      tecnologias: ['React Native', 'Firebase', 'Google Maps API'],
      equipe: 5
    },
    {
      id: 3,
      titulo: 'Sistema de Gestão Hospitalar',
      descricao: 'Sistema completo para gestão de prontuários eletrônicos e agendamentos.',
      cliente: 'Hospital Santa Cruz',
      status: 'andamento',
      dataInicio: '2026-01-10',
      dataPrevisao: '2026-07-15',
      progresso: 28,
      tecnologias: ['Angular', 'Java Spring', 'MySQL', 'Docker'],
      equipe: 12
    },
    {
      id: 4,
      titulo: 'Portal de Educação Online',
      descricao: 'Plataforma de cursos online com videoconferência e gamificação.',
      cliente: 'EduTech Academy',
      status: 'pendente',
      dataInicio: '2026-03-01',
      dataPrevisao: '2026-09-30',
      tecnologias: ['Vue.js', 'Python Django', 'WebRTC'],
      equipe: 6
    }
  ]);
});

// GET - Logs (Histórico da Empresa)
app.get('/api/logs', (req, res) => {
  res.json([
    {
      id: 1,
      tipo: 'projeto',
      titulo: 'Lançamento Plataforma E-commerce B2B',
      descricao: 'Entrega bem-sucedida da plataforma para TechCorp Solutions com 2 semanas de antecedência.',
      data: '2025-11-20',
      status: 'concluido',
      impacto: 'alto'
    },
    {
      id: 2,
      tipo: 'expansao',
      titulo: 'Abertura de Escritório em São Paulo',
      descricao: 'Inauguração do novo escritório no Itaim Bibi com capacidade para 50 colaboradores.',
      data: '2025-08-15',
      status: 'concluido',
      impacto: 'alto'
    },
    {
      id: 3,
      titulo: 'Certificação ISO 27001',
      descricao: 'Empresa conquistou certificação internacional de segurança da informação.',
      data: '2025-06-10',
      status: 'concluido',
      impacto: 'alto'
    },
    {
      id: 4,
      tipo: 'premio',
      titulo: 'Prêmio Melhor Startup Tech 2025',
      descricao: 'GameOnTech reconhecida como melhor startup de tecnologia pela TechAwards.',
      data: '2025-10-05',
      status: 'concluido',
      impacto: 'medio'
    },
    {
      id: 5,
      tipo: 'parceria',
      titulo: 'Parceria com AWS',
      descricao: 'Assinatura de acordo de parceria estratégica com Amazon Web Services.',
      data: '2026-01-20',
      status: 'andamento',
      impacto: 'alto'
    },
    {
      id: 6,
      tipo: 'contratacao',
      titulo: 'Expansão do Time - 25 Novas Vagas',
      descricao: 'Abertura de processo seletivo para dobrar o time de desenvolvimento.',
      data: '2026-02-01',
      status: 'andamento',
      impacto: 'medio'
    }
  ]);
});

// GET - Tarefas
app.get('/api/tarefas', (req, res) => {
  res.json([
    {
      id: 1,
      titulo: 'Configurar e-mail corporativo',
      descricao: 'Acessar portal de TI e configurar conta de e-mail',
      status: 'concluido',
      prioridade: 'alta',
      prazo: '2026-02-03'
    },
    {
      id: 2,
      titulo: 'Preencher cadastro de benefícios',
      descricao: 'Completar formulário no sistema de RH',
      status: 'andamento',
      prioridade: 'media',
      prazo: '2026-02-10',
      progresso: 65
    },
    {
      id: 3,
      titulo: 'Assistir vídeos de cultura',
      descricao: 'Completar 3 vídeos sobre cultura da empresa',
      status: 'pendente',
      prioridade: 'baixa',
      prazo: '2026-02-14'
    }
  ]);
});

// GET - Cronograma
app.get('/api/cronograma', (req, res) => {
  res.json([
    {
      id: 1,
      evento: 'Café de Boas-vindas',
      data: '2026-02-03',
      horario: '09:00',
      local: 'Sala de Reuniões A',
      tipo: 'social'
    },
    {
      id: 2,
      evento: 'Treinamento de Segurança',
      data: '2026-02-05',
      horario: '14:00',
      local: 'Sala de Treinamento',
      tipo: 'treinamento'
    },
    {
      id: 3,
      evento: 'Reunião com Equipe',
      data: '2026-02-07',
      horario: '10:30',
      local: 'Sala de Reuniões B',
      tipo: 'reuniao'
    }
  ]);
});

// GET - Feedback
app.get('/api/feedback', (req, res) => {
  res.json([
    {
      id: 1,
      autor: 'Carlos Manager',
      cargo: 'Tech Lead',
      comentario: 'Excelente adaptação! Mostra iniciativa e aprende rápido.',
      rating: 5,
      data: '2026-02-05',
      competencias: {
        qualidadeCodigo: 82,
        comunicacao: 88,
        trabalhoEquipe: 90,
        resolucaoProblemas: 75,
        pontualidade: 95,
        iniciativa: 80
      }
    }
  ]);
});

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'API GameOnTech Onboarding',
    version: '1.0.0',
    endpoints: {
      colaboradores: '/api/colaboradores',
      trabalhos: '/api/trabalhos',
      logs: '/api/logs',
      tarefas: '/api/tarefas',
      cronograma: '/api/cronograma',
      feedback: '/api/feedback'
    }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`📊 API Endpoints disponíveis em http://localhost:${PORT}/api`);
  console.log(`\n✨ Pressione CTRL+C para parar o servidor\n`);
});
