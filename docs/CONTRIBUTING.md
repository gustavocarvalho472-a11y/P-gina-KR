# Guia de Contribuição

Obrigado por considerar contribuir com o projeto **Página KR**! 🎉

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Fluxo de Trabalho](#fluxo-de-trabalho)
- [Padrões de Código](#padrões-de-código)
- [Padrão de Commits](#padrão-de-commits)
- [Pull Requests](#pull-requests)

## 📜 Código de Conduta

Este projeto adere a um código de conduta. Ao participar, você concorda em manter um ambiente respeitoso e colaborativo.

## 🤝 Como Posso Contribuir?

### Reportando Bugs

Encontrou um bug? Ajude-nos a corrigi-lo!

1. Verifique se o bug já não foi reportado nas [Issues](https://github.com/gustavocarvalho472-a11y/P-gina-KR/issues)
2. Se não encontrar, [abra uma nova issue](https://github.com/gustavocarvalho472-a11y/P-gina-KR/issues/new)
3. Use um título claro e descritivo
4. Descreva os passos para reproduzir o problema
5. Inclua screenshots se possível
6. Mencione seu ambiente (OS, navegador, versão do Node)

**Template de Bug Report:**

```markdown
## Descrição
[Descreva o bug de forma clara]

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que está acontecendo]

## Screenshots
[Se aplicável]

## Ambiente
- OS: [ex: macOS 13.0]
- Navegador: [ex: Chrome 120]
- Node: [ex: 18.17.0]
```

### Sugerindo Melhorias

Tem uma ideia para melhorar o projeto?

1. Verifique se a sugestão já não existe nas [Issues](https://github.com/gustavocarvalho472-a11y/P-gina-KR/issues)
2. Abra uma nova issue com a tag `enhancement`
3. Descreva a melhoria proposta
4. Explique por que seria útil

### Contribuindo com Código

Quer implementar uma nova funcionalidade ou corrigir um bug?

1. Escolha uma issue para trabalhar (ou crie uma nova)
2. Comente na issue dizendo que vai trabalhar nela
3. Siga o [Fluxo de Trabalho](#fluxo-de-trabalho) abaixo

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js 14+ e npm
- Git
- Editor de código (VS Code recomendado)

### Instalação

1. **Fork o repositório**
   - Clique em "Fork" no canto superior direito do GitHub

2. **Clone seu fork**
   ```bash
   git clone https://github.com/SEU-USUARIO/P-gina-KR.git
   cd P-gina-KR
   ```

3. **Adicione o repositório original como upstream**
   ```bash
   git remote add upstream https://github.com/gustavocarvalho472-a11y/P-gina-KR.git
   ```

4. **Instale as dependências**
   ```bash
   npm install
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```

## 🔄 Fluxo de Trabalho

### 1. Sincronize com o repositório original

```bash
git checkout main
git pull upstream main
```

### 2. Crie uma branch para sua feature/fix

```bash
# Para nova funcionalidade
git checkout -b feature/nome-da-funcionalidade

# Para correção de bug
git checkout -b fix/descricao-do-bug

# Para melhoria de documentação
git checkout -b docs/descricao-da-melhoria
```

### 3. Faça suas alterações

- Escreva código limpo e comentado
- Siga os [Padrões de Código](#padrões-de-código)
- Teste suas mudanças localmente

### 4. Commit suas alterações

```bash
git add .
git commit -m "feat: Adiciona nova funcionalidade X"
```

Siga o [Padrão de Commits](#padrão-de-commits)

### 5. Push para seu fork

```bash
git push origin feature/nome-da-funcionalidade
```

### 6. Abra um Pull Request

- Vá para seu fork no GitHub
- Clique em "Compare & pull request"
- Preencha o template do PR
- Aguarde revisão

## 💻 Padrões de Código

### JavaScript/React

- Use **arrow functions** para componentes funcionais
- Sempre use **destructuring** para props
- Prefira **const** sobre **let**, evite **var**
- Use **template literals** para strings dinâmicas
- Organize imports: React → bibliotecas → componentes locais → CSS

**Exemplo:**

```javascript
import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import Dropdown from './Dropdown';
import './Component.css';

const Component = ({ data, onUpdate }) => {
  const [value, setValue] = useState('');
  
  useEffect(() => {
    // Efeito aqui
  }, [value]);

  return (
    <div className="component">
      {/* JSX aqui */}
    </div>
  );
};

export default Component;
```

### CSS

- Use **variáveis CSS** para cores e valores reutilizáveis
- Nomes de classes em **kebab-case**
- Organize por seção (layout, components, utilities)
- Evite `!important` (use especificidade)

**Exemplo:**

```css
:root {
  --primary-color: #8725ff;
  --spacing-unit: 8px;
}

.metrics-card {
  padding: calc(var(--spacing-unit) * 2);
  background: var(--primary-color);
}
```

### Estrutura de Arquivos

```
src/
├── components/
│   ├── ComponentName/
│   │   ├── index.js          # Export principal
│   │   ├── ComponentName.jsx  # Componente
│   │   ├── ComponentName.css  # Estilos
│   │   └── ComponentName.test.jsx  # Testes (futuro)
```

## 📝 Padrão de Commits

Seguimos o [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

### Formato

```
tipo(escopo): descrição curta

[corpo opcional]

[rodapé opcional]
```

### Tipos

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação (não muda lógica)
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

### Exemplos

```bash
# Boa prática ✅
git commit -m "feat: Adiciona filtro de busca de municípios"
git commit -m "fix: Corrige expansão de tabela para todos os estados"
git commit -m "docs: Atualiza README com instruções de deploy"

# Má prática ❌
git commit -m "mudanças"
git commit -m "fix"
git commit -m "atualização do código"
```

## 🔍 Pull Requests

### Antes de Abrir um PR

- ✅ Código funciona localmente
- ✅ Sem erros no console
- ✅ Commits seguem o padrão
- ✅ Branch está atualizada com `main`
- ✅ Código está comentado onde necessário

### Template do PR

```markdown
## Descrição
[Descreva as mudanças de forma clara]

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Breaking change
- [ ] Documentação

## Como Testar
1. Passo 1
2. Passo 2
3. Resultado esperado

## Checklist
- [ ] Código segue os padrões do projeto
- [ ] Commits seguem Conventional Commits
- [ ] Testei localmente
- [ ] Documentação atualizada (se necessário)

## Screenshots (se aplicável)
[Adicione screenshots]
```

### Revisão de Código

Seu PR será revisado por mantenedores. Eles podem:

- ✅ Aprovar e fazer merge
- 💬 Solicitar mudanças
- ❌ Fechar (se não adequado)

Seja paciente e receptivo a feedback!

## 🎯 Dicas

1. **Commits pequenos**: Prefira commits frequentes e pequenos
2. **Branch por feature**: Uma branch para cada funcionalidade
3. **Teste antes de commitar**: Sempre teste suas mudanças
4. **Comunique-se**: Comente nas issues, pergunte quando tiver dúvidas
5. **Seja consistente**: Siga os padrões existentes no código

## 🆘 Precisa de Ajuda?

- Abra uma [issue de dúvida](https://github.com/gustavocarvalho472-a11y/P-gina-KR/issues/new)
- Entre em contato com os mantenedores

---

**Obrigado por contribuir! 🚀**
