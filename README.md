## Como executar o projeto
Antes de tudo é necessario ter instalado: 
- Node.js (versão 18 ou superior recomendada)
- npm ou yarn
Instale as dependencias:
- npm install
Executar o comando em modo desenvolvimento:
- npm run dev
- Acessar em http://localhost:5173

### Organização adotada

- **components/** - Componentes visuais
- **composables/** - Lógica de estado e regras de negócio
- **constants/** - Centralização de valores fixos 
- **data/** - Mock de dados dos pedidos
- **views/** - Páginas do projeto

# Decisões Técnicas

## Vue 3
Optei por usar Vue por ter uma expêriencia maior com ele, assim consigo criar de forma mais rápida.

## 🛠 Stack
- Vue 3
- Vite
- JavaScript (ES6+)
- CSS puro

## CSS

Optei por utilizar CSS puro para:
- Evitar dependências externas (bibliotecas de UI)
- Manter foco na lógica e organização do código
Os estilos foram centralizados em `assets/main.css` para:
- Separar responsabilidade de layout da lógica
- Manter os componentes mais limpos
- Facilitar manutenção futura
Em um projeto real de maior escala, poderia considerar:
- CSS Modules
- SCSS
- Tailwind


# Features futuras

## Linkar com projeto de comunicação de microsserviços 
- Adicionar autenticação via JWT Token
- Linkar com api de produtos e pedidos (comunicação assincrona)
### Para essa feature seria necessário mudar a lógica do Front e algumas outras coisas.
