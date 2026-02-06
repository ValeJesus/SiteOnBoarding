# DOCUMENTAÇÃO COMPLETA - HTML

## Elementos HTML Utilizados no Projeto GameOnTech Onboarding

Este documento detalha **TODOS** os elementos HTML usados no projeto, com explicações e exemplos.

---

## 1. Estrutura Básica HTML5

### `<!DOCTYPE html>`
**Descrição:** Declaração obrigatória no início do documento HTML5.
**Uso:** Define que o documento está usando HTML5.
```html
<!DOCTYPE html>
```

### `<html lang="pt-BR">`
**Descrição:** Elemento raiz do documento HTML.
**Atributo `lang`:** Define o idioma do documento (pt-BR = Português Brasileiro).
```html
<html lang="pt-BR">
  <!-- Conteúdo -->
</html>
```

---

## 2. Seção `<head>` - Metadados

### `<head>`
**Descrição:** Contém metadados sobre o documento (não visível ao usuário).
```html
<head>
  <!-- Metadados aqui -->
</head>
```

### `<meta charset="UTF-8">`
**Descrição:** Define a codificação de caracteres como UTF-8 (suporta todos os idiomas).
```html
<meta charset="UTF-8">
```

### `<meta name="viewport">`
**Descrição:** Controla o comportamento responsivo em dispositivos móveis.
**Atributo `content`:** Define width=device-width para adaptar ao tamanho da tela.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### `<title>`
**Descrição:** Define o título exibido na aba do navegador.
```html
<title>Home - GameOnTech Onboarding</title>
```

### `<link rel="stylesheet">`
**Descrição:** Conecta um arquivo CSS externo ao HTML.
**Atributo `href`:** Caminho do arquivo CSS.
```html
<link rel="stylesheet" href="css/styles-palette1.css">
```

### `<script src="">`
**Descrição:** Conecta um arquivo JavaScript externo.
**Atributo `src`:** Caminho do arquivo JS.
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="js/progress-chart.js"></script>
```

---

## 3. Seção `<body>` - Conteúdo Visível

### `<body>`
**Descrição:** Contém todo o conteúdo visível da página.
```html
<body>
  <!-- Conteúdo visível aqui -->
</body>
```

---

## 4. Estrutura Semântica

### `<aside>`
**Descrição:** Elemento para conteúdo lateral ou secundário (sidebar).
**Uso no projeto:** Barra lateral de navegação.
```html
<aside class="sidebar">
  <!-- Navegação lateral -->
</aside>
```

### `<nav>`
**Descrição:** Seção de navegação com links.
**Uso:** Contém os links de navegação entre páginas.
```html
<nav class="sidebar-nav">
  <a href="index-palette1.html">Home</a>
  <a href="logs-palette1.html">Logs</a>
</nav>
```

### `<header>`
**Descrição:** Cabeçalho de uma seção ou página.
**Uso:** Topo de cada página com título e descrição.
```html
<header class="header-main">
  <h2>Bem-vindo</h2>
  <p>Descrição...</p>
</header>
```

### `<main>`
**Descrição:** Conteúdo principal da página (único por página).
**Uso:** Container do conteúdo principal.
```html
<main class="main-content">
  <!-- Conteúdo principal -->
</main>
```

### `<section>`
**Descrição:** Seção temática de conteúdo.
**Uso:** Divide a página em seções lógicas (progress, explore, feedback, etc).
```html
<section class="welcome-section">
  <h1>Olá, leobuso.souza!</h1>
</section>
```

### `<footer>`
**Descrição:** Rodapé da página ou seção.
**Uso:** Rodapé com links e créditos.
```html
<footer class="footer-main">
  <p>&copy; 2026 GameOnTech | João Vitor, Davi Tavares e Felipe Buso</p>
</footer>
```

---

## 5. Elementos de Texto

### `<h1>` a `<h6>`
**Descrição:** Títulos hierárquicos (h1 = mais importante, h6 = menos importante).
**Uso:**
- `<h1>`: Nome do usuário na home
- `<h2>`: Títulos principais de seções
- `<h3>`: Subtítulos
- `<h4>` e `<h5>`: Títulos de cards e feedback
```html
<h1>Olá, leobuso.souza! 👋</h1>
<h2>Bem-vindo ao seu onboarding</h2>
<h3>Seu Progresso de Onboarding</h3>
<h4>Logs</h4>
```

### `<p>`
**Descrição:** Parágrafo de texto.
**Uso:** Textos descritivos, mensagens, descrições.
```html
<p>Estamos felizes em ter você conosco.</p>
```

### `<strong>`
**Descrição:** Texto em negrito com ênfase semântica (importante).
**Uso:** Destacar partes importantes do texto.
```html
<p><strong>Respeito à Diversidade:</strong> Todos os colaboradores...</p>
```

---

## 6. Links e Navegação

### `<a>`
**Descrição:** Link/âncora para navegação entre páginas ou seções.
**Atributos:**
- `href`: URL de destino
- `class`: Classes CSS
```html
<a href="index-palette1.html" class="nav-link">Home</a>
<a href="logs-palette1.html" class="card-btn">Acessar ></a>
```

---

## 7. Containers Genéricos

### `<div>`
**Descrição:** Container genérico sem significado semântico específico.
**Uso:** Agrupar elementos para estilização e layout com CSS.
```html
<div class="container-main">
  <div class="sidebar">...</div>
  <div class="content">...</div>
</div>

<div class="progress-container">
  <div class="progress-circle">...</div>
</div>
```

### `<span>`
**Descrição:** Container inline genérico para texto.
**Uso:** Estilizar partes específicas de texto sem quebrar linha.
```html
<span class="nav-icon">🏠</span>
<span class="log-status">✓ Concluído</span>
```

---

## 8. Listas

### `<ul>` - Lista Não-Ordenada
**Descrição:** Lista de itens sem ordem específica (bullets).
**Uso:** Listas de políticas, benefícios, etc.
```html
<ul class="policy-list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### `<li>` - Item de Lista
**Descrição:** Item individual dentro de `<ul>` ou `<ol>`.
```html
<li>
  <strong>Respeito à Diversidade:</strong>
  Todos os colaboradores...
</li>
```

---

## 9. Tabelas

### `<table>`
**Descrição:** Cria uma tabela de dados.
**Atributo `border`:** Define bordas visíveis (border="1").
```html
<table class="cronograma-table" border="1">
  <!-- Conteúdo da tabela -->
</table>
```

### `<colgroup>` e `<col>`
**Descrição:** Define grupos de colunas e suas propriedades (ex: largura).
```html
<colgroup>
  <col style="width: 12%;">
  <col style="width: 15%;">
  <col style="width: 35%;">
</colgroup>
```

### `<thead>` - Table Head
**Descrição:** Agrupa linhas de cabeçalho da tabela.
```html
<thead>
  <tr>
    <th>Horário</th>
    <th>Evento</th>
  </tr>
</thead>
```

### `<tbody>` - Table Body
**Descrição:** Agrupa linhas de dados da tabela.
```html
<tbody>
  <tr>
    <td>09:00</td>
    <td>Café de boas-vindas</td>
  </tr>
</tbody>
```

### `<tr>` - Table Row
**Descrição:** Define uma linha na tabela.
```html
<tr class="event-row">
  <td>09:00</td>
  <td>Café</td>
</tr>
```

### `<th>` - Table Header Cell
**Descrição:** Célula de cabeçalho (negrito automático).
**Atributo `colspan`:** Mescla colunas horizontalmente.
```html
<th colspan="5">Título Principal</th>
<th>Horário</th>
```

### `<td>` - Table Data Cell
**Descrição:** Célula de dados na tabela.
**Atributo `colspan`:** Mescla colunas.
**Atributo `rowspan`:** Mescla linhas verticalmente.
```html
<td class="time-cell">09:00</td>
<td colspan="5">Separador de dia</td>
```

---

## 10. Formulários e Inputs

### `<input>`
**Descrição:** Campo de entrada de dados.
**Tipos usados:**
- `type="text"`: Campo de texto
- `type="checkbox"`: Caixa de seleção

**Atributos:**
- `id`: Identificador único
- `class`: Classes CSS
- `placeholder`: Texto de dica
- `onkeypress`: Evento JavaScript ao pressionar tecla
- `checked`: Checkbox marcado por padrão (boolean)
- `disabled`: Desabilita o input (boolean)

```html
<!-- Input de texto -->
<input 
  type="text" 
  id="messageInput" 
  class="message-input" 
  placeholder="Digite sua pergunta..." 
  onkeypress="handleKeyPress(event)"
>

<!-- Checkbox -->
<input type="checkbox" checked disabled>
```

---

## 11. Botões

### `<button>`
**Descrição:** Botão clicável.
**Atributos:**
- `class`: Classes CSS
- `onclick`: Evento JavaScript ao clicar
- `data-filter`: Atributo personalizado para filtros

```html
<button class="btn-select">Selecionar Paleta 1</button>
<button class="tab-btn active" data-filter="todos">Todos</button>
<button class="btn-send" onclick="sendMessage()">➤ Enviar</button>
<button class="reply-btn" onclick="sendMessage('Pergunta aqui')">
  ❓ O que devo fazer?
</button>
```

---

## 12. Canvas (Gráficos)

### `<canvas>`
**Descrição:** Elemento para desenhos e gráficos com JavaScript.
**Uso no projeto:** Gráficos Chart.js para progresso e desempenho.
**Atributo `id`:** Identificador para JavaScript manipular.
```html
<canvas id="progressChart"></canvas>
<canvas id="performanceChart"></canvas>
```

---

## 13. Caracteres Especiais HTML

### `&copy;`
**Descrição:** Símbolo de copyright (©).
```html
<p>&copy; 2026 GameOnTech</p>
```

---

## 14. Emojis

**Descrição:** Emojis Unicode usados diretamente no HTML para ícones.
**Uso:** Substitui ícones de imagem para simplicidade.
```html
<span class="nav-icon">🏠</span>
<span class="event-icon">☕</span>
<h1>Olá, leobuso.souza! 👋</h1>
<p>💡 <strong>Dica:</strong> ...</p>
```

**Emojisusados:**
- 🏠 Home
- 📊 Logs/Gráficos
- 💼 Trabalhos
- 📅 Cronograma
- 📋 Políticas
- 💬 Feedback
- 💭 Chat
- ✓ Tarefas/Concluído
- ⏱ Pendente
- ⚡ Em andamento
- ✕ Cancelado
- 👋 Aceno/Bem-vindo
- 💡 Dica/Ideia
- 🎯 Meta/Objetivo
- ⭐ Estrela/Avaliação
- 📄📚💻📋🎁🔒⚠️ ... e muitos mais

---

## Resumo de Elementos por Página

### Seletor de Paleta:
`<!DOCTYPE>`, `<html>`, `<head>`, `<meta>`, `<title>`, `<link>`, `<body>`, `<div>`, `<h1>`, `<h2>`, `<p>`, `<a>`, `<footer>`

### Home:
Anterior + `<aside>`, `<nav>`, `<span>`, `<header>`, `<main>`, `<section>`, `<canvas>`, `<script>`

### Logs:
Anterior + `<h3>`, `<button>`

### Trabalhos:
Anterior + `<h4>`

### Cronograma:
Anterior + `<table>`, `<colgroup>`, `<col>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`

### Políticas:
Anterior + `<ul>`, `<li>`, `<strong>`

### Feedback:
Anterior + `<h5>`

### Chat:
Anterior + `<input>`

### Tarefas:
Anterior + `<input type="checkbox">`

---

## Boas Práticas HTML Aplicadas

1. **Semântica:** Uso de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`)
2. **Acessibilidade:** `lang="pt-BR"` para leitores de tela
3. **Responsive:** `<meta name="viewport">` para dispositivos móveis
4. **UTF-8:** Suporte a caracteres especiais e emojis
5. **Hierarquia:** Uso correto de `<h1>` a `<h6>`
6. **IDs únicos:** Elementos manipulados por JavaScript têm IDs únicos
7. **Classes descritivas:** Classes nomeadas de forma clara e significativa

---

**Fim da Documentação HTML**
