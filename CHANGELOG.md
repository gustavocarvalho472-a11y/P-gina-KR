# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-11-07

### ✨ Adicionado

- Dashboard completo de KR de Penetração de Mercado
- Filtros hierárquicos por localização (Região → Estado → Mesorregião → Microrregião → Município)
- Filtro direto de município após seleção de estado (pula mesorregião/microrregião)
- Cards de métricas dinâmicos:
  - TAM (Total/Fixo 65%/Variável 35%)
  - SAM (9.5% do TAM)
  - KR de Penetração
  - Vendas Cogna
- Tabela expansível hierárquica (Região → Estado → Município)
- Loading animation (300ms) ao expandir linhas da tabela
- Limite de 12 municípios por estado na tabela
- Tooltips informativos nos cards com UX Writing
- Componente Dropdown customizado
- Componente AdvancedFilters para filtros adicionais
- Componente Tooltip reutilizável (4 posições: top, bottom, left, right)
- Integração com Material UI Icons
- Dados mockados hierárquicos para todas as regiões do Brasil
- Localização dinâmica no card TAM (Brasil → Região → Estado → Município)

### 🎨 Estilo

- Design moderno com paleta roxa (#8725ff)
- Ícones Material UI substituindo emojis
- Indentação visual na tabela (40px para estados, 80px para municípios)
- Animação de rotação no ícone ChevronRight ao expandir
- Hover states nos elementos interativos
- Tooltips retangulares compactos (200px width)

### 📝 Documentação

- README.md completo com instruções de instalação e uso
- CHANGELOG.md para histórico de versões
- Comentários no código explicando lógica complexa

### 🔧 Técnico

- Create React App 5.0.1
- React 18.3.1
- Material-UI Icons 6.1.10
- Estrutura de pastas organizada (components/, data/)
- .gitignore configurado

## [Unreleased]

### 🔮 Planejado para v1.1

- Gráficos interativos (Chart.js ou Recharts)
- Exportação de dados para Excel/CSV
- Modo escuro (Dark Mode)
- Busca rápida de município
- Carregamento de municípios para todos os estados (não apenas SP)

### 🔮 Planejado para v1.2

- Integração com API real
- Autenticação de usuários
- Filtros salvos (favoritos)
- Comparador de regiões lado a lado

### 🔮 Planejado para v2.0

- Dashboard personalizável com drag & drop
- Sistema de notificações
- Histórico temporal de métricas
- Relatórios automatizados em PDF

---

## Tipos de Mudanças

- `✨ Adicionado` para novas funcionalidades
- `🔄 Modificado` para mudanças em funcionalidades existentes
- `🗑️ Depreciado` para funcionalidades que serão removidas em breve
- `❌ Removido` para funcionalidades removidas
- `🐛 Corrigido` para correções de bugs
- `🔒 Segurança` para correções de vulnerabilidades
- `📝 Documentação` para mudanças na documentação
- `🎨 Estilo` para mudanças que não afetam o significado do código
- `♻️ Refatoração` para mudanças de código que não corrigem bugs nem adicionam funcionalidades
- `⚡ Performance` para melhorias de performance
- `✅ Testes` para adição ou correção de testes

[1.0.0]: https://github.com/gustavocarvalho472-a11y/P-gina-KR/releases/tag/v1.0.0
[Unreleased]: https://github.com/gustavocarvalho472-a11y/P-gina-KR/compare/v1.0.0...HEAD
