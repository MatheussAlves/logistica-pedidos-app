# Decisões Técnicas

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
