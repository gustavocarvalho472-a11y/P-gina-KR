# 📊 Página KR - Dashboard de Penetração de Mercado

Dashboard interativo para visualização e análise de penetração de mercado da Cogna B2G no setor educacional brasileiro.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-Icons-0081CB?style=flat&logo=mui&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Roadmap](#roadmap)

## 🎯 Sobre o Projeto

O **Página KR** é um dashboard desenvolvido para análise de Key Results (KR) de penetração de mercado da Cogna no segmento B2G (Business to Government).

O sistema permite visualizar e filtrar dados de TAM (Total Addressable Market), SAM (Serviceable Addressable Market) e penetração de mercado em diferentes níveis hierárquicos: região, estado, mesorregião, microrregião e município.

### Destaques:

- ✨ Interface intuitiva e responsiva
- 🗺️ Filtros hierárquicos por localização
- 📈 Cards de métricas dinâmicos (TAM Total/Fixo/Variável)
- 📊 Tabela expansível com 3 níveis (Região → Estado → Município)
- 🔄 Animações de loading suaves
- 💡 Tooltips informativos com UX Writing
- 🎨 Design moderno com Material UI Icons

## ⚡ Funcionalidades

### 1. Filtros Hierárquicos
- Seleção em cascata: Região → Estado → Mesorregião → Microrregião → Município
- Filtro direto de município após selecionar estado
- Filtros avançados (contratos ativos, valores mínimos, etc)
- Limpar todos os filtros com um clique

### 2. Cards de Métricas
- **TAM (Total Addressable Market)**
  - Visualização em Total, Fixo (65%) e Variável (35%)
  - Valor dinâmico conforme região selecionada
- **SAM (Serviceable Addressable Market)**: 9.5% do TAM
- **KR de Penetração**: Participação atual no mercado
- **Vendas Cogna**: Total de contratos ativos

### 3. Tabela Expansível
- Inicia fechada mostrando 5 regiões do Brasil
- Expansão de região → mostra todos os estados
- Expansão de estado → mostra até 12 municípios
- Loading animation (300ms) ao expandir
- Indentação visual para hierarquia

### 4. Tooltips Informativos
- Descrições concisas seguindo UX Writing
- Aparecem ao hover ou clique
- Posicionamento inteligente (top, bottom, left, right)

## 🛠️ Tecnologias

- **React** 18.x - Framework JavaScript
- **Material-UI Icons** - Biblioteca de ícones
- **CSS3** - Estilização (CSS Modules + Variáveis CSS)
- **JavaScript ES6+** - Lógica e manipulação de dados

### Dependências Principais

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@mui/icons-material": "^6.1.10",
  "react-scripts": "5.0.1"
}
```

## 📦 Instalação

### Pré-requisitos

- Node.js 14+ e npm (ou yarn)
- Git

### Passo a passo

1. **Clone o repositório**

```bash
git clone https://github.com/gustavocarvalho472-a11y/P-gina-KR.git
cd P-gina-KR
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm start
# ou
yarn start
```

4. **Acesse no navegador**

```
http://localhost:3000
```

## 🚀 Como Usar

### Filtrando por Localização

1. Selecione uma **Região** (Norte, Nordeste, Centro-Oeste, Sudeste, Sul)
2. Escolha um **Estado** dentro da região
3. (Opcional) Refine por **Mesorregião** e **Microrregião**
4. Ou selecione diretamente um **Município**

### Visualizando TAM

Clique nos botões no card TAM:
- **Total**: Orçamento total de educação
- **Fixo**: 65% do TAM (recursos garantidos)
- **Variável**: 35% do TAM (recursos negociáveis)

### Expandindo a Tabela

1. Clique em uma **Região** (ex: Sudeste) para ver os estados
2. Clique em um **Estado** (ex: São Paulo) para ver até 12 municípios
3. O ícone de seta rotaciona indicando expansão
4. Aguarde o loading de 300ms

### Aplicando Filtros Avançados

1. Clique no botão **"Filtros avançados"**
2. Selecione os filtros desejados:
   - Apenas contratos ativos
   - Incluir inativos
   - Contratos de 2024/2023
   - Valor mínimo
3. Clique em **"Aplicar filtros"**

## 📁 Estrutura do Projeto

```
painel-kr-penetracao/
│
├── public/                      # Arquivos públicos
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/              # Componentes React
│   │   ├── AdvancedFilters.jsx  # Filtros avançados
│   │   ├── AdvancedFilters.css
│   │   ├── Dropdown.jsx         # Dropdown customizado
│   │   ├── Dropdown.css
│   │   ├── MetricsCards.jsx     # Cards de métricas
│   │   ├── MetricsCards.css
│   │   ├── Tooltip.jsx          # Tooltip informativo
│   │   └── Tooltip.css
│   │
│   ├── data/                    # Dados mockados
│   │   └── mockData.js          # Hierarquia completa BR
│   │
│   ├── App.js                   # Componente principal
│   ├── App.css                  # Estilos principais
│   └── index.js                 # Entry point
│
├── .gitignore                   # Arquivos ignorados pelo Git
├── package.json                 # Dependências e scripts
├── package-lock.json            # Lock de dependências
└── README.md                    # Este arquivo
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estas etapas:

1. **Fork o projeto**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Commit suas mudanças**
   ```bash
   git commit -m "feat: Adiciona nova funcionalidade"
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra um Pull Request**

### Padrão de Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação (não afeta lógica)
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Manutenção

## 🗺️ Roadmap

### v1.1 (Próxima versão)
- [ ] Implementar gráficos (Chart.js ou Recharts)
- [ ] Exportação para Excel/CSV
- [ ] Modo escuro (Dark Mode)
- [ ] Busca rápida de município

### v1.2
- [ ] Integração com API real
- [ ] Autenticação de usuários
- [ ] Filtros salvos (favoritos)
- [ ] Comparador de regiões

### v2.0
- [ ] Dashboard personalizável (drag & drop)
- [ ] Notificações de mudanças
- [ ] Histórico temporal
- [ ] Relatórios automatizados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Gustavo Carvalho** - [@gustavocarvalho472-a11y](https://github.com/gustavocarvalho472-a11y)

---

## 📞 Contato

Para dúvidas ou sugestões, abra uma [issue](https://github.com/gustavocarvalho472-a11y/P-gina-KR/issues) no GitHub.

---

**Desenvolvido com ❤️ por Cogna B2G**

🤖 Generated with [Claude Code](https://claude.com/claude-code)
