# DOCUMENTAÇÃO COMPLETA - CSS

## Propriedades e Conceitos CSS Utilizados no Projeto

Este documento detalha **TODOS** os conceitos CSS, propriedades, seletores e técnicas usadas no projeto GameOnTech Onboarding.

---

## 1. Conceitos Fundamentais CSS

### CSS (Cascading Style Sheets)
**Descrição:** Linguagem de estilos para controlar a aparência visual de páginas HTML.
**Três formas de uso:**
1. **Inline:** `<div style="color: red;">`
2. **Interno:** `<style>` dentro de `<head>`
3. **Externo (usado no projeto):** `<link rel="stylesheet" href="style.css">`

### Seletores CSS
**Descrição:** Padrões que identificam quais elementos HTML serão estilizados.

---

## 2. Tipos de Seletores Usados

### Seletor Universal `*`
**Descrição:** Seleciona TODOS os elementos.
**Uso:** Reset de margin/padding.
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Seletor de Elemento
**Descrição:** Seleciona todos os elementos de um tipo.
```css
body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f5f7f4;
}

h1 {
    font-size: 2.2rem;
    color: #54787d;
}
```

### Seletor de Classe `.nome`
**Descrição:** Seleciona elementos com `class="nome"`.
**Mais usado no projeto.**
```css
.sidebar {
    width: 250px;
    background: #c6cca5;
}

.nav-link {
    padding: 12px 15px;
    text-decoration: none;
}
```

### Seletor de ID `#nome`
**Descrição:** Seleciona elemento único com `id="nome"`.
```css
#progressChart {
    width: 200px;
    height: 200px;
}

#messageInput {
    flex: 1;
    padding: 10px;
}
```

### Seletor Descendente (Espaço)
**Descrição:** Seleciona elementos dentro de outros.
```css
.sidebar-nav a {
    color: #2c3e50;
}

.message-group.system .message {
    background-color: #f5f5f5;
}
```

### Seletor de Filho Direto `>`
**Descrição:** Seleciona filhos diretos.
```css
.trabalho-header > div:nth-child(2) {
    flex: 1;
}
```

### Pseudo-classes `:hover`, `:active`, `:focus`, `:first-child`, `:last-child`
**Descrição:** Estados especiais de elementos.
```css
.nav-link:hover {
    background-color: rgba(84, 120, 125, 0.2);
    transform: translateX(5px);
}

.btn-send:active {
    transform: translateY(0);
}

.message-input:focus {
    outline: none;
    border-color: #8ab8a8;
}

.policy-list li:last-child {
    border-bottom: none;
}
```

### Pseudo-elementos `::before`, `::after`
**Descrição:** Cria elementos virtuais antes/depois do conteúdo.
```css
.explore-card::before {
    content: '';
    position: absolute;
    background: linear-gradient(135deg, #6b9997 0%, #8ab8a8 100%);
    opacity: 0;
}

.explore-card:hover::before {
    opacity: 0.05;
}
```

### Seletores de Atributo
**Descrição:** Seleciona elementos baseado em atributos.
```css
input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: #6b9997;
}

input[type="text"] {
    padding: 10px;
    border: 2px solid #e0e0e0;
}

input[type="checkbox"]:disabled {
    opacity: 0.6;
}
```

### Seletores Agrupados (Vírgula)
**Descrição:** Aplica estilos a múltiplos seletores.
```css
.cronograma-table td,
.horarios-table td,
.cronograma-table th,
.horarios-table th {
    padding: 12px 15px;
}
```

---

## 3. Box Model (Modelo de Caixa)

### `box-sizing`
**Valores:** `content-box` (padrão), `border-box`
**Uso:** `border-box` inclui padding/border no width/height.
```css
* {
    box-sizing: border-box;
}
```

### `margin`
**Descrição:** Espaçamento EXTERNO do elemento.
**Valores:** px, rem, %, auto
```css
.welcome-section {
    margin-bottom: 50px;
    margin: 0 auto; /* Centraliza */
}
```

### `padding`
**Descrição:** Espaçamento INTERNO do elemento.
```css
.sidebar {
    padding: 30px 20px;
}

.explore-card {
    padding: 25px;
}
```

### `width` e `height`
**Descrição:** Largura e altura do elemento.
**Valores:** px, %, rem, vh, vw, auto
```css
.sidebar {
    width: 250px;
    height: 100vh;
}

.contact-avatar {
    width: 50px;
    height: 50px;
}

.progress-circle {
    width: 200px;
    height: 200px;
}
```

### `min-width`, `max-width`, `min-height`, `max-height`
**Descrição:** Limites mínimos/máximos de dimensões.
```css
.main-content {
    max-width: 1400px;
    width: 100%;
}

.explore-card {
    min-width: 300px;
    max-width: 400px;
}

.chat-container {
    min-height: 700px;
}
```

---

## 4. Tipografia

### `font-family`
**Descrição:** Define a fonte do texto.
**Fallback:** Lista de fontes alternativas.
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### `font-size`
**Descrição:** Tamanho da fonte.
**Valores:** px, rem, em, %
```css
.welcome-section h1 {
    font-size: 2.2rem;
}

.meta-badge {
    font-size: 0.85rem;
}
```

### `font-weight`
**Descrição:** Peso/espessura da fonte.
**Valores:** 100-900, normal (400), bold (700)
```css
.nav-link {
    font-weight: 500;
}

.welcome-section h1 {
    font-weight: 700;
}

.sidebar-header .logo {
    font-weight: bold;
}
```

### `font-style`
**Descrição:** Estilo da fonte.
**Valores:** normal, italic, oblique
```css
.section-intro {
    font-style: italic;
}
```

### `line-height`
**Descrição:** Altura da linha (espaçamento entre linhas).
**Valores:** número sem unidade (multiplicador), px, rem
```css
body {
    line-height: 1.6;
}

.policy-list li {
    line-height: 1.5;
}
```

### `text-align`
**Descrição:** Alinhamento horizontal do texto.
**Valores:** left, center, right, justify
```css
.header-main {
    text-align: center;
}

.time-cell {
    text-align: center;
}
```

### `text-decoration`
**Descrição:** Decoração do texto (sublinhado, tachado).
**Valores:** none, underline, line-through
```css
.nav-link {
    text-decoration: none;
}

.tarefa-item.status-concluido h4 {
    text-decoration: line-through;
}
```

### `color`
**Descrição:** Cor do texto.
**Valores:** nome, hex, rgb, rgba
```css
.welcome-section h1 {
    color: #54787d;
}

.nav-icon {
    color: white;
}

.text-light {
    color: #7f8c8d;
}
```

### `letter-spacing`, `word-spacing`
**Descrição:** Espaçamento entre letras/palavras.
```css
/* Não muito usado no projeto, mas disponível */
.header-main h2 {
    letter-spacing: 0.5px;
}
```

---

## 5. Cores e Backgrounds

### `background-color`
**Descrição:** Cor de fundo sólida.
```css
.sidebar {
    background-color: #c6cca5;
}

.message-input {
    background-color: white;
}
```

### `background`
**Descrição:** Propriedade shorthand para fundo.
**Pode incluir:** color, image, gradient, repeat, position
```css
body {
    background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
}

.contact-avatar {
    background: linear-gradient(135deg, #8ab8a8 0%, #6b9997 100%);
}
```

### `linear-gradient()`
**Descrição:** Gradiente linear de cores.
**Parâmetros:** ângulo, cor1 posição, cor2 posição
```css
background: linear-gradient(135deg, #8ab8a8 0%, #6b9997 100%);
background: linear-gradient(180deg, #c6cca5 0%, #8ab8a8 100%);
background: linear-gradient(90deg, #8ab8a8 0%, #6b9997 100%);
```

### `opacity`
**Descrição:** Transparência do elemento.
**Valores:** 0 (invisível) a 1 (opaco)
```css
.explore-card::before {
    opacity: 0;
}

.explore-card:hover::before {
    opacity: 0.05;
}

.sidebar-header p {
    opacity: 0.8;
}
```

### `rgba()`
**Descrição:** Cor com canal alpha (transparência).
**Parâmetros:** red, green, blue, alpha
```css
.nav-link:hover {
    background-color: rgba(84, 120, 125, 0.2);
}

.status-concluido {
    background-color: rgba(107, 153, 151, 0.2);
}
```

---

## 6. Bordas e Arredondamento

### `border`
**Descrição:** Borda do elemento.
**Sintaxe:** [largura] [estilo] [cor]
```css
.message-input {
    border: 2px solid #e0e0e0;
}

.tab-btn.active {
    border-bottom: 3px solid #6b9997;
}

.cronograma-table {
    border: 1px solid #e0e0e0;
}
```

### `border-left`, `border-top`, `border-right`, `border-bottom`
**Descrição:** Bordas específicas por lado.
```css
.politica-section {
    border-left: 5px solid #8ab8a8;
}

.section-header {
    border-bottom: 2px solid #f0f0f0;
}

.event-row.highlight {
    border-left: 5px solid #8ab8a8;
}
```

### `border-radius`
**Descrição:** Arredonda os cantos.
**Valores:** px, %, em
```css
.sidebar-header .logo {
    border-radius: 50%; /* Círculo perfeito */
}

.explore-card {
    border-radius: 12px;
}

.status-badge {
    border-radius: 20px;
}

.message-input {
    border-radius: 6px;
}
```

### `border-collapse` (tabelas)
**Descrição:** Colapsa bordas da tabela.
**Valores:** collapse, separate
```css
.cronograma-table {
    border-collapse: collapse;
}
```

### `border-color`, `border-width`, `border-style`
**Descrição:** Propriedades individuais de borda.
**Estilos:** solid, dashed, dotted, none
```css
.palette-card:hover {
    border-color: #333;
}

.tooltip {
    border-width: 1px;
}

.progress-meta {
    border-dash: [5, 5]; /* Chart.js */
}
```

---

## 7. Espaçamento e Layout

### `display`
**Descrição:** Como o elemento é exibido.
**Valores principais:**
- `block`: Novo bloco (linha inteira)
- `inline`: Na mesma linha
- `inline-block`: Na mesma linha mas aceita width/height
- `flex`: Flexbox container
- `grid`: Grid container
- `none`: Oculta elemento

```css
.container-main {
    display: flex;
}

.nav-link {
    display: flex; /* Para alinhar ícone e texto */
}

.work-item.hidden {
    display: none;
}

.explore-grid {
    display: grid;
}
```

### Flexbox

#### `display: flex`
**Descrição:** Ativa o layout flexível.
```css
.container-main {
    display: flex;
}
```

#### `flex-direction`
**Valores:** row (padrão), column, row-reverse, column-reverse
```css
.sidebar-nav {
    flex-direction: column;
}

.content {
    flex-direction: column;
}
```

#### `justify-content`
**Descrição:** Alinhamento no eixo principal (horizontal se row).
**Valores:** flex-start, center, flex-end, space-between, space-around
```css
.footer-links {
    justify-content: center;
}

.chat-header {
    justify-content: space-between;
}

.message-group.user {
    justify-content: flex-end;
}
```

#### `align-items`
**Descrição:** Alinhamento no eixo cruzado (vertical se row).
**Valores:** flex-start, center, flex-end, stretch
```css
.chat-contact {
    align-items: center;
}

.trabalho-header {
    align-items: flex-start;
}
```

#### `flex`
**Descrição:** Shorthand para flex-grow, flex-shrink, flex-basis.
**Uso comum:** `flex: 1` (ocupa espaço disponível).
```css
.tarefa-info {
    flex: 1;
}

.message-input {
    flex: 1;
}
```

#### `flex-wrap`
**Valores:** nowrap, wrap, wrap-reverse
```css
.footer-links {
    flex-wrap: wrap;
}

.tarefas-tabs {
    flex-wrap: wrap;
}
```

#### `gap`
**Descrição:** Espaçamento entre itens flex/grid.
**Valores:** px, rem, %
```css
.palette-options {
    gap: 40px;
}

.chat-contact {
    gap: 15px;
}

.explore-grid {
    gap: 25px;
}
```

#### `flex-shrink`
**Descrição:** Capacidade de diminuir quando necessário.
```css
.contact-avatar {
    flex-shrink: 0; /* Não diminui */
}
```

### Grid Layout

#### `display: grid`
**Descrição:** Ativa layout de grade.
```css
.explore-grid {
    display: grid;
}
```

#### `grid-template-columns`
**Descrição:** Define colunas do grid.
**Valores:** fr (fração), px, %, auto, repeat()
```css
.explore-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.summary-list {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.quick-replies {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

/* Específico */
.horarios-table colgroup {
    grid-template-columns: 40% 60%;
}
```

---

## 8. Posicionamento

### `position`
**Valores:** static (padrão), relative, absolute, fixed, sticky

#### `position: relative`
**Descrição:** Posiciona relativo à sua posição original.
```css
.explore-card {
    position: relative;
}
```

#### `position: absolute`
**Descrição:** Posiciona relativo ao pai `position: relative/absolute`.
```css
.explore-card::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.card-number {
    position: absolute;
    top: 15px;
    right: 20px;
}
```

#### `position: fixed`
**Descrição:** Fixo na viewport (não move ao scroll).
```css
.sidebar {
    position: fixed;
    height: 100vh;
}
```

### `top`, `right`, `bottom`, `left`
**Descrição:** Posições para elementos `position: absolute/fixed`.
```css
.sidebar-footer {
    position: absolute;
    bottom: 30px;
    left: 20px;
    right: 20px;
}
```

### `z-index`
**Descrição:** Camada de sobreposição (maior = mais acima).
```css
.sidebar {
    z-index: 1000;
}
```

---

## 9. Tamanhos e Overflow

### `overflow`
**Descrição:** Como lidar com conteúdo que transborda.
**Valores:** visible, hidden, scroll, auto
```css
.messages-area {
    overflow-y: auto; /* Scroll vertical */
}

.explore-card {
    overflow: hidden; /* Oculta overflow */
}

.chat-container {
    overflow: hidden;
}
```

### `overflow-x`, `overflow-y`
**Descrição:** Overflow por eixo específico.
```css
.cronograma-table-section {
    overflow-x: auto; /* Scroll horizontal */
}
```

---

## 10. Sombras

### `box-shadow`
**Descrição:** Sombra ao redor do elemento.
**Sintaxe:** [horizontal] [vertical] [blur] [spread] [cor]
```css
.explore-card {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.explore-card:hover {
    box-shadow: 0 10px 30px rgba(107, 153, 151, 0.15);
}

.btn-send:hover {
    box-shadow: 0 4px 12px rgba(107, 153, 151, 0.3);
}

.sidebar {
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.1);
}
```

---

## 11. Transformações

### `transform`
**Descrição:** Aplica transformações 2D/3D.

#### `translate()`
**Descrição:** Move o elemento.
```css
.nav-link:hover {
    transform: translateX(5px);
}

.explore-card:hover {
    transform: translateY(-10px);
}

.btn-send:hover {
    transform: translateY(-2px);
}
```

#### `scale()`
**Descrição:** Redimensiona o elemento.
```css
.btn-select:hover {
    transform: scale(1.05);
}

.btn-select:active {
    transform: scale(0.98);
}

.color-box:hover {
    transform: scale(1.1);
}
```

---

## 12. Transições e Animações

### `transition`
**Descrição:** Anima mudanças de propriedades.
**Sintaxe:** [propriedade] [duração] [timing-function] [delay]
```css
.nav-link {
    transition: all 0.3s ease;
}

.explore-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.message-input {
    transition: border-color 0.3s ease;
}

.btn-send {
    transition: all 0.3s ease;
}
```

### `scroll-behavior`
**Descrição:** Comportamento de scroll.
```css
.messages-area {
    scroll-behavior: smooth;
}
```

---

## 13. Variáveis CSS (Custom Properties)

### `:root`
**Descrição:** Pseudo-classe para definir variáveis globais.
```css
:root {
    --color1: #c6cca5;
    --color2: #8ab8a8;
    --color3: #6b9997;
    --color4: #54787d;
    --color5: #615145;
    --bg-light: #f5f7f4;
    --text-dark: #2c3e50;
    --text-light: #7f8c8d;
}
```

### `var()`
**Descrição:** Usa variável CSS.
```css
.sidebar {
    background-color: var(--color1);
}

.nav-link.active {
    background-color: var(--color3);
}
```

---

## 14. Media Queries (Responsividade)

### `@media`
**Descrição:** Aplica estilos baseado em condições (tamanho tela).
```css
/* Tablets */
@media (max-width: 1024px) {
    .explore-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Smartphones médios */
@media (max-width: 768px) {
    .sidebar {
        width: 220px;
    }
    
    .main-content {
        padding: 25px;
    }
}

/* Smartphones pequenos */
@media (max-width: 480px) {
    .sidebar {
        position: fixed;
        left: -250px;
        transition: left 0.3s ease;
    }
    
    .content {
        margin-left: 0;
    }
}
```

**Breakpoints usados:**
- `1024px`: Tablets
- `768px`: Smartphones médios
- `480px`: Smartphones pequenos

---

## 15. Propriedades Específicas

### `cursor`
**Valores:** pointer, default, text, move
```css
.btn-send {
    cursor: pointer;
}

.tab-btn {
    cursor: pointer;
}
```

### `white-space`
**Valores:** normal, nowrap, pre, pre-wrap
```css
.feedback-rating {
    white-space: nowrap; /* Não quebra linha */
}
```

### `word-wrap` / `word-break`
**Descrição:** Como quebrar palavras longas.
```css
.message {
    word-wrap: break-word;
}
```

### `object-fit`
**Descrição:** Como imagens/vídeos se ajustam ao container.
**Valores:** contain, cover, fill, none, scale-down
```css
/* Não muito usado, mas disponível para imagens */
img {
    object-fit: cover;
}
```

### `list-style`
**Descrição:** Estilo de marcadores de lista.
```css
.policy-list {
    list-style: none; /* Remove bullets */
}
```

### `accent-color`
**Descrição:** Cor de elementos de formulário (checkbox, radio).
```css
input[type="checkbox"] {
    accent-color: #6b9997;
}
```

---

## 16. Scrollbar Personalizada (Webkit)

### `::-webkit-scrollbar`
**Descrição:** Estiliza barra de scroll (Chrome/Edge/Safari).
```css
.messages-area::-webkit-scrollbar {
    width: 6px;
}

.messages-area::-webkit-scrollbar-track {
    background: transparent;
}

.messages-area::-webkit-scrollbar-thumb {
    background: #c6cca5;
    border-radius: 3px;
}

.messages-area::-webkit-scrollbar-thumb:hover {
    background: #8ab8a8;
}
```

---

## 17. Tabelas Específicas

### `border-collapse`
**Descrição:** Colapsa bordas de tabelas.
```css
.cronograma-table {
    border-collapse: collapse;
}
```

### `table-column-group` / `table-column`
**Descrição:** Propriedades de display para colgroup/col.
```css
.cronograma-table colgroup {
    display: table-column-group;
}

.cronograma-table col {
    display: table-column;
}
```

---

## 18. Propriedades Shorthand

### `margin`, `padding`
**Sintaxe:** 
- 1 valor: todos os lados
- 2 valores: (top/bottom) (left/right)
- 3 valores: top (left/right) bottom
- 4 valores: top right bottom left
```css
.explore-card {
    padding: 25px; /* todos */
}

.sidebar {
    padding: 30px 20px; /* vertical horizontal */
}

.header-main {
    padding: 40px; /* todos */
}
```

### `border`
**Sintaxe:** [width] [style] [color]
```css
.message-input {
    border: 2px solid #e0e0e0;
}
```

### `font`
**Sintaxe:** [style] [weight] [size]/[line-height] [family]
```css
/* Raramente usado como shorthand no projeto, preferimos propriedades individuais */
```

---

## 19. Unidades CSS Usadas

### Absolutas
- **`px`** (pixels): Unidade fixa

### Relativas
- **`rem`** (root em): Relativo ao font-size do `<html>`
- **`em`**: Relativo ao font-size do elemento pai
- **`%`**: Porcentagem do elemento pai
- **`vh`** (viewport height): % da altura da tela
- **`vw`** (viewport width): % da largura da tela

### Exemplos
```css
.welcome-section h1 {
    font-size: 2.2rem; /* Relativo ao root */
}

.sidebar {
    height: 100vh; /* 100% da viewport */
    width: 250px; /* Fixo em pixels */
}

.main-content {
    max-width: 1400px; /* Fixo */
    width: 100%; /* Porcentagem */
}
```

---

## 20. Paletas de Cores

### Paleta 1 (Natural)
```css
:root {
    --color1: #c6cca5; /* Bege claro */
    --color2: #8ab8a8; /* Verde menta */
    --color3: #6b9997; /* Verde-azulado */
    --color4: #54787d; /* Azul-cinza escuro */
    --color5: #615145; /* Marrom escuro */
}
```

### Paleta 2 (Profissional)
```css
:root {
    --color1: #879392; /* Cinza esverdeado */
    --color2: #707b7b; /* Cinza médio */
    --color3: #596463; /* Cinza escuro */
    --color4: #414c4b; /* Cinza muito escuro */
    --color5: #2a3433; /* Quase preto */
}
```

---

## Resumo das Propriedades por Categoria

### Layout
`display`, `flex`, `grid`, `position`, `top/right/bottom/left`, `z-index`, `overflow`, `float`

### Box Model
`width`, `height`, `min-*`, `max-*`, `margin`, `padding`, `box-sizing`, `border`

### Tipografia
`font-family`,`font-size`, `font-weight`, `font-style`, `line-height`, `text-align`, `text-decoration`, `color`, `letter-spacing`

### Visual
`background`, `background-color`, `opacity`, `border-radius`, `box-shadow`, `cursor`

### Transformação
`transform`, `transition`, `animation`

### Responsividade
`@media`, `viewport units (vh, vw)`

---

**Fim da Documentação CSS**
