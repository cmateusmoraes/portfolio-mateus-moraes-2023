# 🚀 Portfolio | Mateus Moraes - Desenvolvedor Front-End Sênior

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Testing](https://img.shields.io/badge/Testing-Jest%20%2B%20Playwright-green)](https://jestjs.io/)
[![Storybook](https://img.shields.io/badge/Storybook-8.5-ff69b4)](https://storybook.js.org/)

**Deploy:** [mateus-moraes.vercel.app](http://mateus-moraes.vercel.app/)
**Performance:** [PageSpeed Insights](https://pagespeed.web.dev/analysis/http-mateus-moraes-vercel-app/8xn4ey20kg?form_factor=desktop)
**Contato:** [LinkedIn](https://www.linkedin.com/in/cmateusmoraes/)

<br>

![Portfolio Preview](https://mateus-moraes.vercel.app/image/img-share.jpg)

---

## ✨ Modernização Completa 2025

Este portfolio foi completamente modernizado com as tecnologias mais atuais e melhores práticas do mercado front-end:

### 🎯 Principais Melhorias

#### **Stack Tecnológica Atualizada**
- ⚡ **Next.js 15.1** - App Router com React Server Components
- ⚛️ **React 19** - Com novos hooks e otimizações
- 📘 **TypeScript 5.7** - Tipagem estática completa
- 🎨 **SASS 1.83** - Estilização modular e performática
- 🎭 **GSAP 3.13** - Animações suaves e profissionais

#### **Testes Automatizados**
- ✅ **Jest 29** - Testes unitários e de integração
- 🧪 **React Testing Library 16** - Testes de componentes
- 🎬 **Playwright 1.49** - Testes E2E automatizados
- 📊 **Cobertura de 70%+** - Coverage configurado

#### **Desenvolvimento e Documentação**
- 📚 **Storybook 8.5** - Documentação visual de componentes
- 🔍 **ESLint + Prettier** - Código consistente e limpo
- 🪝 **Husky + Lint-staged** - Pre-commit hooks
- 🎯 **TypeScript Strict Mode** - Máxima segurança de tipos

#### **Otimizações de Performance**
- ⚡ **React.memo()** - Componentes otimizados
- 🖼️ **Next Image** - Imagens otimizadas (AVIF/WebP)
- 🔄 **Code Splitting** - Carregamento otimizado
- 📦 **Tree Shaking** - Bundle size mínimo
- 🎯 **Lazy Loading** - Componentes sob demanda

#### **Arquitetura e Padrões**
- 🎨 **Design System** - Componentes reutilizáveis
- 🪝 **Custom Hooks** - Lógica compartilhada
- 📁 **Estrutura Modular** - Código organizado
- 🔧 **API Routes** - Backend integrado
- 📝 **CMS JSON-based** - Conteúdo administrável

---

## 🛠️ Tecnologias

<div align="center">

| Categoria | Tecnologias |
|-----------|-------------|
| **Framework** | Next.js 15, React 19 |
| **Linguagem** | TypeScript 5.7 |
| **Estilização** | SASS, CSS Modules |
| **Animações** | GSAP 3.13, ScrollTrigger |
| **Testes** | Jest, Testing Library, Playwright |
| **Documentação** | Storybook 8.5 |
| **Qualidade** | ESLint, Prettier, Husky |
| **Deploy** | Vercel |

</div>

---

## 📦 Instalação e Uso

### Pré-requisitos

- **Node.js** 18.15.0+ ou 20.x
- **npm** 9+ ou **yarn** 1.22+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/cmateusmoraes/portfolio-mateus-moraes-2023.git

# Entre no diretório
cd portfolio-mateus-moraes-2023

# Instale as dependências
npm install

# Configure os hooks do git
npm run prepare
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
# Acesse: http://localhost:3000

# Iniciar Storybook
npm run storybook
# Acesse: http://localhost:6006
```

### Testes

```bash
# Testes unitários (modo watch)
npm test

# Testes unitários com coverage
npm run test:ci

# Testes E2E
npm run test:e2e

# Testes E2E com UI
npm run test:e2e:ui
```

### Build e Deploy

```bash
# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint

# Lint com auto-fix
npm run lint:fix
```

---

## 📁 Estrutura do Projeto

```
portfolio-mateus-moraes-2023/
├── .storybook/           # Configuração do Storybook
├── e2e/                  # Testes E2E com Playwright
├── public/               # Arquivos estáticos
│   └── image/           # Imagens e ícones
├── src/
│   ├── app/             # App Router (Next.js 15)
│   │   ├── layout.tsx   # Layout principal
│   │   ├── page.tsx     # Página inicial
│   │   └── reset.css    # Reset CSS global
│   ├── components/      # Componentes React
│   │   ├── ButtonArrow/ # Botão de seta
│   │   ├── Footer/      # Rodapé
│   │   ├── Header/      # Cabeçalho
│   │   ├── Logo/        # Logo
│   │   ├── Menu/        # Menu de navegação
│   │   ├── Number/      # Contador animado
│   │   ├── Technologies/# Lista de tecnologias
│   │   ├── Title/       # Título com animação
│   │   └── Sections/    # Seções da página
│   │       ├── AboutSite/   # Sobre o site
│   │       ├── AboutUs/     # Sobre mim
│   │       ├── Hero/        # Hero section
│   │       └── Portfolio/   # Portfolio
│   ├── data/            # Dados JSON
│   │   ├── jobs.json    # Projetos do portfolio
│   │   ├── skills.json  # Skills e tecnologias
│   │   └── content.json # Textos e conteúdo
│   ├── hooks/           # Custom Hooks
│   │   ├── useScrollAnimation.ts
│   │   └── useGsapContext.ts
│   ├── lib/             # Utilitários
│   │   └── api.ts       # API para leitura de dados
│   └── styles/          # Estilos globais
├── jest.config.js       # Configuração do Jest
├── jest.setup.js        # Setup do Jest
├── playwright.config.ts # Configuração do Playwright
├── next.config.js       # Configuração do Next.js
├── tsconfig.json        # Configuração do TypeScript
└── package.json         # Dependências e scripts
```

---

## 🎨 Storybook

Todos os componentes possuem stories documentadas:

```bash
npm run storybook
```

Componentes documentados:
- ✅ ButtonArrow
- ✅ Title (com variações light/dark)
- 📝 Demais componentes em desenvolvimento

---

## 🧪 Testes

### Cobertura Atual

- **Componentes:** ButtonArrow, Title
- **Coverage:** 70%+ (configurado)
- **Testes E2E:** Home page navigation

### Executar Testes

```bash
# Watch mode
npm test

# Coverage report
npm run test:ci

# E2E tests
npm run test:e2e
```

---

## 🚀 Performance

### Otimizações Implementadas

- ✅ React.memo() em componentes
- ✅ Lazy loading de componentes
- ✅ Otimização de imagens (Next Image)
- ✅ Code splitting automático
- ✅ Compressão gzip/brotli
- ✅ Font optimization
- ✅ GSAP cleanup em useLayoutEffect
- ✅ Strict Mode habilitado

### Métricas

- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Lighthouse Score:** 90+ (objetivo: 100)

---

## 🔄 Sistema CMS

O portfolio possui um sistema de conteúdo administrável baseado em arquivos JSON:

### Arquivos de Dados

- `src/data/jobs.json` - Projetos do portfolio
- `src/data/skills.json` - Skills e tecnologias
- `src/data/content.json` - Textos e conteúdo geral

### API

Funções helper em `src/lib/api.ts`:
- `getJobs()` - Retorna lista de projetos
- `getSkills()` - Retorna lista de skills
- `getContent()` - Retorna conteúdo geral

---

## 📝 Scripts Disponíveis

```json
{
  "dev": "Inicia servidor de desenvolvimento",
  "build": "Gera build de produção",
  "start": "Inicia servidor de produção",
  "lint": "Verifica código com ESLint",
  "lint:fix": "Corrige problemas com ESLint",
  "test": "Executa testes em watch mode",
  "test:ci": "Executa testes com coverage",
  "test:e2e": "Executa testes E2E",
  "test:e2e:ui": "Executa testes E2E com UI",
  "storybook": "Inicia Storybook",
  "build-storybook": "Build do Storybook"
}
```

---

## 🤝 Contribuindo

Embora este seja um portfolio pessoal, sugestões são bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados © 2025 Mateus Moraes

---

## 👤 Autor

**Mateus Moraes**
Desenvolvedor Front-End Sênior
20+ anos de experiência

- 🌐 [Portfolio](http://mateus-moraes.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/cmateusmoraes/)
- 📧 Entre em contato via LinkedIn

---

## 🙏 Agradecimentos

- Next.js team pela incrível framework
- Vercel pela hospedagem gratuita
- Comunidade open source

---

<div align="center">

### ⭐ Se este projeto te ajudou, considere dar uma estrela!

Feito com ❤️ e muito ☕ por [Mateus Moraes](https://github.com/cmateusmoraes)

</div>
