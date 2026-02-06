# GameOnTech Onboarding System

Sistema completo de onboarding para facilitar a recepção de novos colaboradores na empresa.

## 🚀 Tecnologias

### Frontend
- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Navegação entre páginas
- **Chart.js** - Visualização de dados (gráficos)
- **React-Chartjs-2** - Integração Chart.js com React
- **Axios** - Cliente HTTP para requisições à API
- **Vite** - Build tool e dev server ultrarrápido

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimalista
- **CORS** - Habilitação de requisições cross-origin
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

```
GameOnTech/
├── frontend/                 # Aplicação React
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── Layout/      # Layout principal
│   │   │   └── Sidebar/     # Barra lateral de navegação
│   │   ├── pages/           # Páginas da aplicação
│   │   │   ├── Home/        # Dashboard principal
│   │   │   ├── Logs/        # Histórico da empresa
│   │   │   ├── Trabalhos/   # Projetos realizados
│   │   │   ├── Cronograma/  # Eventos e agenda
│   │   │   ├── Politicas/   # Políticas da empresa
│   │   │   ├── Feedback/    # Avaliações e competências
│   │   │   ├── Chat/        # Assistente virtual
│   │   │   └── Tarefas/     # Gestão de tarefas
│   │   ├── App.jsx          # Componente principal
│   │   ├── main.jsx         # Ponto de entrada
│   │   └── index.css        # Estilos globais
│   ├── index.html           # HTML base
│   ├── package.json         # Dependências frontend
│   └── vite.config.js       # Configuração Vite
│
├── backend/                  # API Node.js/Express
│   ├── server.js            # Servidor principal
│   ├── package.json         # Dependências backend
│   └── .env                 # Variáveis de ambiente
│
├── package.json             # Workspace root
└── README.md               # Esta documentação
```

## 🎨 Paleta de Cores

```css
--color1: #879392  /* Cinza esverdeado */
--color2: #707b7b  /* Cinza médio */
--color3: #596463  /* Cinza escuro */
--color4: #414c4b  /* Cinza muito escuro */
--color5: #2a3433  /* Quase preto */
```

- **Sidebar:** Cor sólida (--color4)
- **Background:** Gradiente (--color1 até --color3)
- **Cards e elementos:** Variações das cores principais

## 📋 Páginas e Funcionalidades

### 🏠 Home
- Dashboard com boas-vindas
- Gráfico de progresso do onboarding (Doughnut Chart)
- Cards de exploração de recursos

### 📊 Logs
- Histórico de eventos da empresa
- Projetos concluídos
- Conquistas e marcos importantes
- Badges de status e impacto

### 💼 Trabalhos
- Portfólio de projetos da empresa
- Filtros por status (Todos, Pendentes, Em Andamento, Concluídos)
- Detalhes de clientes, tecnologias e equipe
- Barras de progresso

### 📅 Cronograma
- Tabela de eventos e reuniões
- Horários importantes da empresa
- Tipos de eventos (social, treinamento, reunião)

### 📋 Políticas
- Diversidade e Inclusão
- Código de Conduta
- Benefícios
- Segurança da Informação
- Saúde e Bem-estar

### 💬 Feedback
- Gráfico radar de competências
- Avaliações recebidas
- Sistema de ratings

### 💭 Chat
- Assistente virtual simulado
- Respostas automáticas baseadas em palavras-chave
- Respostas rápidas sugeridas
- Interface de chat moderna

### ✓ Tarefas
- Lista de tarefas do colaborador
- Resumo estatístico
- Filtros por status
- Badges de prioridade
- Barras de progresso

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### 1. Instalar todas as dependências

```powershell
# Na raiz do projeto
npm run install:all
```

Ou manualmente:

```powershell
# Na raiz
npm install

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 2. Executar o projeto

#### Opção 1: Executar tudo junto (recomendado)

```powershell
# Na raiz do projeto
npm run dev
```

Isso iniciará:
- Backend na porta 5000
- Frontend na porta 3000

#### Opção 2: Executar separadamente

**Backend:**
```powershell
cd backend
npm run dev
```

**Frontend (em outro terminal):**
```powershell
cd frontend
npm run dev
```

### 3. Acessar a aplicação

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## 🔌 Endpoints da API

### GET /api/colaboradores
Retorna informações do colaborador atual

### GET /api/trabalhos
Lista todos os projetos da empresa

### GET /api/logs
Histórico de eventos e conquistas

### GET /api/tarefas
Tarefas do colaborador

### GET /api/cronograma
Eventos e reuniões agendadas

### GET /api/feedback
Avaliações e competências

## 🏗️ Build para Produção

```powershell
cd frontend
npm run build
```

Os arquivos otimizados serão gerados em `frontend/dist/`

## 📦 Dependências Principais

### Frontend
```json
{
	"react": "^18.2.0",
	"react-router-dom": "^6.22.0",
	"axios": "^1.6.7",
	"chart.js": "^4.4.1",
	"react-chartjs-2": "^5.2.0"
}
```

### Backend
```json
{
	"express": "^4.18.2",
	"cors": "^2.8.5",
	"dotenv": "^16.4.1"
}
```

## 🎯 Próximos Passos

- [ ] Adicionar autenticação JWT
- [ ] Conectar com banco de dados real (MongoDB/PostgreSQL)
- [ ] Adicionar testes unitários
- [ ] Deploy em produção
- [ ] PWA (Progressive Web App)
- [ ] Notificações push

## 👥 Autor

**GameOnTech Development Team**

## 📄 Licença

MIT License - Sinta-se livre para usar este projeto como base para seus próprios sistemas de onboarding.

---

**Desenvolvido com ❤️ usando React e Node.js**
Hackathon - OnBoarding

# Tipos de Conventional Commits

## Principais tipos
- **feat**: adiciona uma nova funcionalidade.
- **fix**: corrige um bug.
- **docs**: mudanças apenas na documentação.
- **style**: alterações de formatação (espaços, ponto e vírgula, indentação), sem impacto no código.
- **refactor**: mudanças no código que não corrigem bugs nem adicionam funcionalidades.
- **perf**: melhorias de performance.
- **test**: inclusão ou alteração de testes.
- **build**: mudanças que afetam o sistema de build ou dependências externas.
- **ci**: alterações em configuração de integração contínua (CI/CD).
- **chore**: tarefas menores, manutenção, ajustes que não afetam código de produção.
- **revert**: desfaz um commit anterior.

## Estrutura da mensagem
tipo(escopo opcional): descrição curta

### Exemplos
- `feat(user-service): adicionar endpoint de cadastro`
- `fix(auth): corrigir erro de validação no login`
- `docs: atualizar README com instruções de execução`
- `style: ajustar indentação no UserController`
- `refactor: simplificar lógica de autenticação`
- `perf: otimizar consulta no repositório`
- `test: criar testes unitários para UserService`
- `build: atualizar versão do Maven`
- `ci: configurar pipeline no GitHub Actions`
- `chore: atualizar dependências no pom.xml`
- `revert: revert "feat: adicionar endpoint de cadastro"`
