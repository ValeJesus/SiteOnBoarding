# Documentação da Integração com API GameOnTech

## Visão Geral

Este documento descreve a integração do frontend React com a API GameOnTech, incluindo a configuração do Axios, autenticação JWT, e os componentes criados para consumir os endpoints da API.

## Estrutura de Diretórios

```
frontend/src/
├── services/          # Serviços de API
│   └── api.js        # Configuração Axios e serviços
├── context/          # Contextos React
│   └── AuthContext.jsx
├── hooks/            # Custom Hooks
│   └── useAuth.js
├── components/       # Componentes reutilizáveis
│   ├── LoginForm.jsx
│   ├── RegisterForm.jsx
│   ├── UserList.jsx
│   └── ProtectedRoute.jsx
└── pages/           # Páginas da aplicação
    ├── HomePage/
    ├── LoginPage/
    ├── RegisterPage/
    └── UsersPage/
```

## Configuração do Axios

### Serviço API (`services/api.js`)

O serviço API é configurado com:

- **Base URL**: `/api` (proxy configurado no Vite para `http://localhost:5000`)
- **Timeout**: 10 segundos
- **Headers**: `Content-Type: application/json`

#### Interceptadores

**Requisição:**
- Adiciona automaticamente o token JWT do localStorage em todas as requisições
- Header: `Authorization: Bearer <token>`

**Resposta:**
- Trata erros 401 (Unauthorized) removendo token e redirecionando para login
- Mantém tokens inválidos sempre limpos

## Endpoints da API

### 1. Autenticação

#### POST `/api/auth/login`

Autentica um usuário no sistema.

**Request:**
```json
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```

**Response (Success):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123",
    "nome": "João Silva",
    "email": "usuario@exemplo.com",
    "role": "colaborador"
  }
}
```

**Uso no código:**
```javascript
import { authService } from '../services/api';

const data = await authService.login(email, password);
localStorage.setItem('token', data.token);
localStorage.setItem('user', JSON.stringify(data.user));
```

### 2. Criar Usuário

#### POST `/api/users`

Cria um novo usuário no sistema (não requer autenticação).

**Request:**
```json
{
  "nome": "Maria Santos",
  "email": "maria@exemplo.com",
  "password": "senha123",
  "role": "colaborador"
}
```

**Response (Success):**
```json
{
  "id": "456",
  "nome": "Maria Santos",
  "email": "maria@exemplo.com",
  "role": "colaborador"
}
```

**Uso no código:**
```javascript
import { userService } from '../services/api';

const userData = {
  nome: "Maria Santos",
  email: "maria@exemplo.com",
  password: "senha123",
  role: "colaborador"
};

const newUser = await userService.create(userData);
```

### 3. Listar Usuários

#### GET `/api/users/getAll`

Lista todos os usuários cadastrados (requer autenticação).

**Headers:**
```
Authorization: Bearer <token>
```

**Response (Success):**
```json
[
  {
    "id": "123",
    "nome": "João Silva",
    "email": "joao@exemplo.com",
    "role": "colaborador"
  },
  {
    "id": "456",
    "nome": "Maria Santos",
    "email": "maria@exemplo.com",
    "role": "gerente"
  }
]
```

**Uso no código:**
```javascript
import { userService } from '../services/api';

const users = await userService.getAll();
```

## Contexto de Autenticação

### AuthContext (`context/AuthContext.jsx`)

Gerencia o estado global de autenticação da aplicação.

**Estado fornecido:**
- `user`: Dados do usuário autenticado
- `loading`: Estado de carregamento
- `error`: Mensagens de erro
- `isAuthenticated`: Boolean indicando se está autenticado

**Funções fornecidas:**
- `login(email, password)`: Realiza login
- `logout()`: Realiza logout
- `updateUser(updatedUser)`: Atualiza dados do usuário
- `clearError()`: Limpa erros

**Uso:**
```javascript
import { useAuth } from '../hooks/useAuth';

function MyComponent() {
  const { user, login, logout, isAuthenticated } = useAuth();
  
  // Usar as funções...
}
```

## Componentes

### LoginForm

Formulário de login com validação e feedback de erros.

**Props:**
- `onSuccess`: Callback opcional executado após login bem-sucedido

**Funcionalidades:**
- Validação de email e senha
- Estados de carregamento
- Mensagens de erro
- Desabilita campos durante submissão

### RegisterForm

Formulário de registro de novos usuários.

**Props:**
- `onSuccess`: Callback opcional executado após registro bem-sucedido

**Funcionalidades:**
- Validação completa de campos
- Confirmação de senha
- Seleção de role (colaborador, gerente, admin)
- Estados de carregamento

### UserList

Lista todos os usuários cadastrados.

**Funcionalidades:**
- Carregamento automático ao montar
- Estados de loading, erro e lista vazia
- Cards com avatar gerado a partir do nome
- Badges coloridos por role
- Botão de atualização

### ProtectedRoute

Protege rotas que requerem autenticação.

**Props:**
- `children`: Componentes a serem protegidos

**Comportamento:**
- Mostra loading durante verificação
- Redireciona para `/login` se não autenticado
- Renderiza children se autenticado

## Páginas

### HomePage (`/home`)

Página inicial pública do sistema.

**Para usuários não autenticados:**
- Informações sobre o sistema
- Grid de features
- Botões para login e registro

**Para usuários autenticados:**
- Mensagem de boas-vindas personalizada
- Informações do usuário
- Links rápidos para funcionalidades
- Botão de logout

### LoginPage (`/login`)

Página de login com formulário e link para registro.

### RegisterPage (`/register`)

Página de registro com formulário e link para login.

### UsersPage (`/users`)

Página protegida que exibe a lista de usuários.

## Fluxo de Autenticação

### 1. Login

```
Usuário → LoginForm → authService.login() → API
                          ↓
                    Salva token + user
                          ↓
                    Atualiza contexto
                          ↓
                    Redireciona para /
```

### 2. Requisições Autenticadas

```
Componente → userService.getAll()
                ↓
          Interceptor adiciona token
                ↓
          Request para API
                ↓
          Response OK ou Erro 401
                ↓
          Se 401: Remove token + Redireciona
```

### 3. Logout

```
Usuário → logout() → Remove token + user
                          ↓
                    Limpa contexto
                          ↓
                    Redireciona para /login
```

## Tratamento de Erros

### Tipos de Erro

1. **Erro de Validação**: Mensagens locais no formulário
2. **Erro de API**: Mensagens do backend exibidas ao usuário
3. **Erro 401**: Logout automático e redirecionamento
4. **Erro de Rede**: Mensagem genérica de erro

### Exemplo de Tratamento

```javascript
try {
  const data = await authService.login(email, password);
  // Sucesso
} catch (err) {
  const errorMessage = err.response?.data?.message || 'Erro ao fazer login';
  setError(errorMessage);
}
```

## Estados de Carregamento

Todos os componentes que fazem requisições implementam:

- **Loading spinner** durante requisições
- **Desabilita inputs** durante submissão
- **Feedback visual** com botões animados

## Persistência

### LocalStorage

Dados persistidos:
- `token`: JWT token de autenticação
- `user`: Objeto com dados do usuário (JSON string)

**Importante:** O token é automaticamente adicionado em todas as requisições pelo interceptor do Axios.

## Configuração do Proxy (Vite)

```javascript
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
```

Isso permite fazer requisições para `/api/*` sem CORS issues durante desenvolvimento.

## Segurança

### Boas Práticas Implementadas

1. ✅ Token JWT armazenado no localStorage
2. ✅ Token enviado apenas em headers Authorization
3. ✅ Logout automático em caso de token inválido
4. ✅ Validação de inputs no frontend
5. ✅ Timeout em requisições (10s)
6. ✅ HTTPS recomendado em produção

### Melhorias Futuras

- [ ] Refresh token implementation
- [ ] Token expiration handling
- [ ] Rate limiting no frontend
- [ ] Criptografia adicional para dados sensíveis

## Testing

### Como Testar

1. **Registro de Usuário:**
   - Acesse `/register`
   - Preencha o formulário
   - Verifique criação bem-sucedida

2. **Login:**
   - Acesse `/login`
   - Use credenciais criadas
   - Verifique redirecionamento e token salvo

3. **Listar Usuários:**
   - Com usuário autenticado, acesse `/users`
   - Verifique listagem dos usuários
   - Teste botão de atualizar

4. **Logout:**
   - Clique em logout
   - Verifique remoção de token
   - Tente acessar rota protegida

## Troubleshooting

### Problema: "Network Error"
- Verifique se o backend está rodando
- Confirme a porta correta no proxy (5000)
- Verifique logs do console

### Problema: "401 Unauthorized"
- Token pode estar expirado
- Faça logout e login novamente
- Verifique implementação JWT no backend

### Problema: Rotas protegidas não funcionam
- Verifique se AuthProvider está envolvendo a aplicação no `main.jsx`
- Confirme se o token está sendo salvo no localStorage
- Verifique console para erros

## Referências

- [Axios Documentation](https://axios-http.com/)
- [React Router v6](https://reactrouter.com/)
- [React Context API](https://react.dev/reference/react/useContext)
- [JWT.io](https://jwt.io/)

---

**Versão:** 1.0.0  
**Última Atualização:** 2024  
**Mantenedor:** Equipe GameOnTech
