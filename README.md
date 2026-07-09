# banco-web-tests

Projeto de testes automatizados da aplicação [banco-web](https://github.com/juliodelimas/banco-web), criado com Cypress e JavaScript para demonstrar, de forma simples e prática, como começar na automação de testes web mesmo sem experiência prévia.

O foco deste repositório é mostrar o básico da automação com Cypress, desde a instalação do ambiente até a organização dos testes com `Custom Commands`, facilitando a leitura, a reutilização de código e a manutenção da suíte.

## Objetivo do projeto

Este projeto foi criado para servir como material de apoio para quem nunca fez automação de testes e quer aprender:

- como estruturar um projeto com Cypress;
- como escrever cenários automatizados de ponta a ponta;
- como reutilizar ações comuns com `Custom Commands`;
- como executar os testes em modo visual ou em linha de comando;
- como gerar relatórios de execução com `cypress-mochawesome-reporter`.

## Tecnologias e componentes

Os principais componentes deste projeto são:

- `Cypress`: framework de automação de testes end-to-end.
- `JavaScript`: linguagem usada na implementação dos testes.
- `Custom Commands`: abstrações para encapsular ações repetidas e deixar os testes mais legíveis.
- `Fixtures`: massa de dados reutilizável para apoiar os cenários.
- `cypress-mochawesome-reporter`: geração de relatório HTML da execução dos testes.

## Aplicações necessárias para executar os testes

Para que os testes funcionem corretamente, é necessário subir os dois projetos abaixo antes da execução:

- API: [banco-api](https://github.com/juliodelimas/banco-api)
- Aplicação web: [banco-web](https://github.com/juliodelimas/banco-web)

Este projeto está configurado para acessar a aplicação web em:

```text
http://localhost:4000
```

Se a aplicação estiver rodando em outra porta, será necessário ajustar a propriedade `baseUrl` no arquivo [cypress.config.js](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress.config.js).

## Estrutura do projeto

```text
banco-web-tests
├── cypress
│   ├── e2e
│   │   ├── login.cy.js
│   │   └── transf.cy.js
│   ├── fixtures
│   │   └── credenciais.json
│   └── support
│       ├── commands
│       │   ├── common.js
│       │   ├── login.js
│       │   └── transf.js
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
└── package.json
```

## Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- `Node.js`
- `npm`
- `Git`

Se quiser validar a instalação, rode:

```bash
node -v
npm -v
git --version
```

## Instalação passo a passo

Se você nunca executou automação antes, siga esta sequência:

### 1. Clonar este repositório

```bash
git clone https://github.com/Leandrordsc/banco-web-tests.git
```

### 2. Acessar a pasta do projeto

```bash
cd banco-web-tests
```

### 3. Instalar as dependências

Todas as dependências do projeto já estão definidas no `package.json`.

```bash
npm install
```

### 4. Subir a API e a aplicação web

Antes de rodar os testes, garanta que estes dois projetos estejam em execução:

- `banco-api`
- `banco-web`

Sem eles, os cenários automatizados não conseguirão acessar a aplicação nem executar os fluxos esperados.

### 5. Executar os testes

Você pode executar os testes de três formas:

#### Abrir a interface do Cypress

Ideal para quem está começando e quer acompanhar os testes visualmente.

```bash
npm run cy:open
```

#### Executar em modo headless

Executa os testes em linha de comando.

```bash
npm test
```

#### Executar com navegador visível

```bash
npm run cy:headed
```

## Scripts disponíveis

Os scripts definidos no projeto são:

- `npm test`: executa a suíte com `cypress run`.
- `npm run cy:open`: abre a interface do Cypress.
- `npm run cy:headed`: executa os testes com o navegador visível.
- `npm run nyan`: executa os testes usando o reporter `nyan`.

## Configuração do Cypress

O arquivo [cypress.config.js](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress.config.js) contém a configuração principal do projeto:

- `baseUrl`: `http://localhost:4000`
- `reporter`: `cypress-mochawesome-reporter`
- `video`: gravação de vídeo habilitada

Além disso, o arquivo [cypress/support/e2e.js](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/support/e2e.js) registra:

- os comandos customizados;
- o `cypress-mochawesome-reporter`.

## Testes automatizados

Os testes estão na pasta [cypress/e2e](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/e2e).

### Login

Arquivo: [cypress/e2e/login.cy.js](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/e2e/login.cy.js)

Cobertura atual:

- login com credenciais válidas deve permitir acesso ao sistema;
- login com credenciais inválidas deve exibir mensagem de erro.

### Transferências

Arquivo: [cypress/e2e/transf.cy.js](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/e2e/transf.cy.js)

Cobertura atual:

- transferência com dados válidos;
- bloqueio de transferência acima de `R$ 5.000,00` sem autenticação;
- validação de transferência com valor menor que `R$ 10,00`.

## Massa de dados

As credenciais usadas nos testes ficam em [cypress/fixtures/credenciais.json](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/fixtures/credenciais.json).

Esse arquivo separa:

- credenciais válidas;
- credenciais inválidas.

O uso de `fixtures` ajuda a evitar dados fixos diretamente dentro dos testes, deixando os cenários mais organizados.

## Custom Commands

Os `Custom Commands` estão organizados na pasta [cypress/support/commands](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/support/commands), e são importados por [cypress/support/commands.js](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/support/commands.js).

Essa abordagem melhora a legibilidade dos testes porque concentra ações repetidas em comandos reutilizáveis.

### Comandos comuns

Arquivo: [cypress/support/commands/common.js](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/support/commands/common.js)

Comandos disponíveis:

- `cy.verificarMensagemNoToast(mensagem)`: valida a mensagem exibida no componente de toast.
- `cy.selecionarFuncaoNaComboBox(labelDoCampo, opcao)`: seleciona uma opção em um campo do tipo combo box.

### Comandos de login

Arquivo: [cypress/support/commands/login.js](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/support/commands/login.js)

Comandos disponíveis:

- `cy.fazerLoginComCredenciasValidas()`: preenche usuário e senha válidos a partir da fixture e confirma o login.
- `cy.fazerLoginComCredenciasInvalidas()`: preenche usuário e senha inválidos e confirma o login.

### Comandos de transferência

Arquivo: [cypress/support/commands/transf.js](/C:/Users/Pichau/Cursos/Projetos/banco-web-tests/cypress/support/commands/transf.js)

Comandos disponíveis:

- `cy.realizarTransferencia(contaOrigem, contaDestino, valor)`: preenche os campos de transferência e envia a operação.

## Relatórios

Os relatórios são gerados com `cypress-mochawesome-reporter`, permitindo acompanhar o resultado das execuções de forma mais visual e detalhada.

Para gerar os relatórios, basta executar os testes normalmente:

```bash
npm test
```

ou

```bash
npm run cy:headed
```

## Boas práticas aplicadas neste projeto

- separação entre testes, massa de dados e comandos customizados;
- reutilização de ações comuns com `Custom Commands`;
- escrita de cenários com foco em legibilidade;
- configuração simples para facilitar o aprendizado de quem está começando.

## Repositório

Projeto disponível em:

- GitHub: [Leandrordsc/banco-web-tests](https://github.com/Leandrordsc/banco-web-tests)
