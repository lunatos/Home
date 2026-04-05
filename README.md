# Portfolio — Lucas Camarino

Portfolio pessoal desenvolvido com React para apresentar minha trajetória, habilidades e projetos.

**Ao vivo:** https://lunatos.github.io/Home/

## Tecnologias

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) 5
- [React Router](https://reactrouter.com/) 6 — rotas SPA
- [React Bootstrap](https://react-bootstrap.github.io/) 2 / [Bootstrap](https://getbootstrap.com/) 5.3
- GitHub Pages para deploy

## Estrutura

```
src/
├── components/
│   ├── bio-section/         # Página "Bio" — mini biografia + habilidades (accordion)
│   ├── footer/              # Rodapé com links e redes sociais
│   ├── intro-section/       # Página inicial — perfil + texto introdutório
│   ├── nav-bar/             # Barra de navegação com toggle de tema
│   ├── pages/               # Páginas roteadas (home, bio, projects)
│   └── projects-section/    # Página "Projetos" — repos do GitHub via API
├── context/
│   └── ThemeContext.jsx     # Gerenciamento de tema light/dark
└── App.jsx
```

## Principais recursos

- **Tema claro/escuro** — `data-bs-theme` do Bootstrap 5.3 combinado com variáveis CSS customizadas para contraste adequado em ambos os modos
- **Repositórios dinâmicos** — lista de projetos puxada diretamente da API pública do GitHub
- **Navegação SPA** — rotas com React Router sem recarregamento
- **Layout responsivo** — menu colapsável no mobile, cards adaptáveis

## Rodando localmente

```bash
npm install
npm run dev
```

O servidor inicia em `http://localhost:5173/`.

## Build e deploy

```bash
npm run build
```

O build gera os arquivos estáticos em `dist/` que são publicados via GitHub Actions no workflow `.github/workflows/deploy.yml`.

## Licença

Uso pessoal.