# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [1.0.0] - 2025-01-04

### 🎉 Modernização Completa

Esta versão representa uma modernização completa do portfolio com as tecnologias mais atuais do mercado.

### ✨ Adicionado

#### **Stack Tecnológica**
- Next.js atualizado de 13.4.4 para 15.1.6
- React atualizado de 18.2.0 para 19.0.0
- TypeScript atualizado de 5.1.3 para 5.7.3
- GSAP atualizado para 3.13.0
- SASS atualizado para 1.83.0

#### **Testes e Qualidade**
- Jest 29.7.0 para testes unitários
- React Testing Library 16.1.0
- Playwright 1.49.1 para testes E2E
- Configuração de coverage (70%+)
- Testes para componentes ButtonArrow e Title

#### **Documentação**
- Storybook 8.5.2 configurado
- Stories para ButtonArrow e Title
- README completo e atualizado
- CHANGELOG criado

#### **Ferramentas de Desenvolvimento**
- ESLint 8.57.1 configurado
- Prettier adicionado
- Husky 9.1.7 para git hooks
- Lint-staged 15.3.0

#### **Estrutura e Arquitetura**
- Custom hooks para animações GSAP:
  - `useScrollAnimation`
  - `useGsapContext`
  - `useFadeIn`
  - `useSlideIn`
- Sistema CMS baseado em JSON:
  - `src/data/jobs.json`
  - `src/data/skills.json`
  - `src/data/content.json`
- API helper functions em `src/lib/api.ts`
- Estrutura de testes organizada
- Configuração Playwright para E2E

#### **Otimizações**
- React.memo() nos componentes
- Next Image para otimização de imagens
- Cleanup de animações GSAP
- Strict Mode habilitado
- Compressão configurada
- PoweredByHeader desabilitado

### 🔄 Modificado

#### **Componentes**
- **ButtonArrow**: Refatorado com React.memo e Next Image
- **Title**: Refatorado com TypeScript strict, cleanup de animações
- Adicionados data-testid para testes

#### **Configurações**
- `next.config.js`: Adicionadas otimizações de imagem e performance
- `tsconfig.json`: Mantido compatível com Next.js 15
- `.eslintrc.json`: Regras atualizadas com suporte ao Storybook
- `package.json`: Scripts organizados e atualizados

### 🗑️ Removido

- Cypress (substituído por Jest + Playwright)
- Scripts de Cypress (`cy:open`, `cy:run`)
- Dependências obsoletas
- Testes antigos do Cypress

### 🐛 Corrigido

- Limpeza de memória nas animações GSAP
- TypeScript strict mode issues
- ESLint warnings
- Image optimization warnings

### 📝 Documentação

- README completamente reescrito
- Estrutura do projeto documentada
- Scripts explicados
- Guia de instalação atualizado
- Seção de testes adicionada
- Performance metrics documentadas

### 🔐 Segurança

- Dependências atualizadas para versões mais recentes
- Vulnerabilidades corrigidas
- Type safety melhorado com TypeScript strict

---

## [0.8.0] - 2023

### Versão Anterior

- Next.js 13.4.4
- React 18.2.0
- TypeScript 5.1.3
- Cypress para testes
- GSAP para animações
- SASS para estilos

---

## Formato

Este changelog segue o formato [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## Tipos de Mudanças

- `Adicionado` para novas funcionalidades
- `Modificado` para mudanças em funcionalidades existentes
- `Descontinuado` para funcionalidades que serão removidas
- `Removido` para funcionalidades removidas
- `Corrigido` para correção de bugs
- `Segurança` para vulnerabilidades
