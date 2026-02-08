import axios from 'axios';

/**
 * Configuração base do Axios para a API GameOnTech
 * Base URL aponta para o proxy configurado no Vite
 */
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos de timeout
});

/**
 * Interceptador de requisição
 * Adiciona o token de autenticação em todas as requisições
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptador de resposta
 * Trata erros globalmente e remove token inválido
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Se o token expirou ou é inválido (401), remove do localStorage
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Redireciona para login se não estiver na página de login
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

/**
 * Serviços de Autenticação
 */
export const authService = {
  /**
   * Realiza login do usuário
   * @param {string} email - Email do usuário
   * @param {string} password - Senha do usuário
   * @returns {Promise} Resposta da API com token e dados do usuário
   */
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  /**
   * Realiza logout do usuário
   * Remove token e dados do usuário do localStorage
   */
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Verifica se o usuário está autenticado
   * @returns {boolean} True se houver token válido
   */
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  /**
   * Retorna o usuário atual do localStorage
   * @returns {object|null} Dados do usuário ou null
   */
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};

/**
 * Serviços de Usuários
 */
export const userService = {
  /**
   * Cria um novo usuário
   * @param {object} userData - Dados do usuário (nome, email, senha, role)
   * @returns {Promise} Resposta da API
   */
  create: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  /**
   * Lista todos os usuários (requer autenticação)
   * @returns {Promise} Lista de usuários
   */
  getAll: async () => {
    const response = await api.get('/users/getAll');
    return response.data;
  },
};

export default api;
