# Bootcamp Cypress eXperience - Fernando Papito ✨

Neste repositório, compartilho minha jornada de aprendizado no curso **Cypress Experience** ministrado pelo Fernando Papito.

# Sumário 📚

- [**Sobre o Bootcamp 📕**](#sobre-o-bootcamp-📕)
    - [**Tópicos do Bootcamp**](#tópicos-do-bootcamp)
- [**Testes automatizados 🧙‍♂️**](#testes-automatizados-🧙‍♂️)
- [**Comandos do projeto 🪄**](#comandos-do-projeto-🪄)
- [**Dependências e suas instalações 🔍**](#dependências-e-suas-instalações-🔍)
    - [**Cypress 13**](#cypress-13)
    - [**Biblioteca faker**](#biblioteca-faker)
    - [**Biblioteca cypress-mongodb**](#biblioteca-cypress-mongodb)
    - [**Biblioteca Allure**](#biblioteca-allure)
        - [**Como utilizar o relatório da Allure**](#como-utilizar-o-relatório-da-allure)
        - [**Instalação e configuração**](#instalação-e-configuração)

## Sobre o Bootcamp 📕

O **Cypress Experience** é um programa de especialização em automação de testes.

### Tópicos do Bootcamp

Aqui estão alguns dos tópicos incríveis que exploramos no curso:

* Cypress 13
* Roadmap
* Testes E2E (End-to-End)
* Testes de Integração
* Cypress Seed
* Arquitetura Limpa
* Intercepts
* Custom Commands
* MongoDB
* Google Maps
* DevOps
* Cloud Reports

## Testes automatizados 🧙‍♂️

* Hope web deve estar online: valida se a aplicação está online.

* Deve escolher um orfanato no mapa: valida se o mapa está sendo exibido na tela.

* Cadastro de orfanatos:
    * Deve cadastrar um novo orfanato: valida o cadastro de um novo orfanato com sucesso;
    * Não deve cadastrar orfanato quando o nome é duplicado: valida erro no cadastro de um orfanato duplicado.

* Campos obrigatórios:
    * Não deve cadastrar se o nome não for preenchido: valida erro no cadastro sem o nome;
    * Não deve cadastrar se sobre não for preenchido: valida erro no cadastro sem o sobre;
    * Não deve cadastrar não anexar a imagem: valida erro no cadastro sem a imagem;
    * Não deve cadastrar se o horário não for informado: valida erro no cadastro sem o horário;
    * Não deve cadastrar os campos obrigatórios não forem preenchidos: valida erro no cadastro sem informações.

## Comandos do projeto 🪄

Abrir o Cypress com interface:

`$ npx cypress open`

Executar os testes em modo headless:

`$ npx cypress run`

Abrir o relatório dos testes no navegador:

`$ npx allure serve`

## Dependências e suas instalações 🔍

### Cypress 13

No terminal digitar o seguinte comando no front do projeto:

`$ npm install cypress --save-dev`

Para abrir o Cypress pela primeira vez basta digitar o comando baixo no terminal:

`$ npx cypress open`

### Biblioteca faker

A biblioteca Faker.js é uma ferramenta útil para gerar dados falsos e aleatórios para testes ou preenchimento de dados de exemplo na aplicação. Ela permite criar informações fictícias, como nomes, endereços, e-mails, números de telefone, etc., de maneira realista.

Site da biblioteca: https://fakerjs.dev/

Passo 1: Instalado a biblioteca faker para que a massa de teste seja dinâmica.

Para instalar basta digitar o comando abaixo no terminal:

`$ npm install --save-dev @faker-js/faker -D`

A biblioteca é utilizada diretamente na suíte de testes. Ex.: register.cy.js

### Biblioteca cypress-mongodb

A biblioteca cypress-mongodb é uma extensão do Cypress para facilitar a interação e a limpeza de bancos de dados MongoDB durante os testes de integração. O Cypress é uma ferramenta de teste end-to-end para a web, e o cypress-mongodb é projetado para trabalhar em conjunto com o Cypress, permitindo a execução de comandos MongoDB diretamente nos testes do Cypress.

Ao usar o cypress-mongodb, podemos criar cenários de teste que envolvem operações no banco de dados MongoDB, como inserção, atualização e consulta de dados. Além disso, a biblioteca oferece funcionalidades para limpar o banco de dados antes ou depois da execução dos testes, garantindo um estado consistente entre as execuções dos testes.

Em poucas palavras, ela irá fazer a gestão das collections do MongoDB, como drop, create, insert, find, etc:

Site da biblioteca: https://www.npmjs.com/package/cypress-mongodb

No diretório /web digitar o comando abaixo:
`$ npm i cypress-mongodb -D`

Os arquivos alterados foram: 
* cypress.config.js
* e2e.js

### Biblioteca Allure

A biblioteca Allure é uma estrutura de relatórios de testes que fornece uma visão detalhada e visualmente atraente dos resultados dos testes. É amplamente utilizada na automação de testes, especialmente em contextos como o teste de software e o teste de integração contínua.

#### Como utilizar o relatório da Allure

Passos para abrir o relatório dos testes no navegador.

Passo 1: Colocar a API no ar:
`$ yarn dev`

Passo 2: Colocar o front no ar:

`$ yarn dev`

Passo 3: Abrir outro terminal e rodar os testes em headless:

`$ npx cypress run`

Irá ser gerado uma pasta no diretório /web com o nome "allure-results".

Passo 4: Digitar o comando abaixo para subir o servidor da Allure:

`$ npx allure serve`

Após isso o relatório será exibido no navegador.

#### Instalação e configuração

Passo 1: Instalar o allure para gerar os arquivos dos resultados dos testes.

Este comando instala o adaptador Allure para o Cypress. Ele é responsável por coletar e estruturar os resultados dos testes Cypress de uma forma que possa ser interpretada e exibida corretamente pelo Allure.

No diretório /web digitar o comando abaixo no terminal:

`$ npm i @mmisty/cypress-allure-adapter -D`

Site da biblioteca: https://www.npmjs.com/package/@mmisty/cypress-allure-adapter

Passos após instalação do Passo 1:

* No arquivo e2e.ts ou e2e.js colocar o import abaixo acima de todos os outros imports:

```
import '@mmisty/cypress-allure-adapter/support';
```

* No arquivo cypress.config.ts adicionar os ajustes abaixo e para melhor entendimento verificar o arquivo no meu projeto:

```
// Se for .TS
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      
      return config;
    },
    // ...
  }
});

// Se for .JS deverá ser conforme abaixo:
const { configureAllureAdapterPlugins } = require ('@mmisty/cypress-allure-adapter/plugins')

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      
      return config;
    },
    // ...
  }
});
```

* No arquivo cypress.config.js ou cypress.config.ts deve ser feito um ajuste na variável env adicionando a propriedade allure com a chave true:

```
env: {
      allure: true,
      baseApi: process.env.BASE_API,
      mongodb: {
        uri: process.env.MONGO_URI,
        database: process.env.DATABASE_NAME
      }
    }
```

Passo 2: Instalar a biblioteca para ver os relatórios JSON

No diretório /web digirar o comando abaixo, ele irá retornar um binário que irá conseguir ler os arquivos JSON gerados pelo passo 1 e construir o servidor de relatórios.

Este comando instala a linha de comando do Allure globalmente (-g) e o adiciona como uma dependência de desenvolvimento no projeto (--save-dev). A linha de comando do Allure permite que você gere relatórios a partir dos resultados coletados pelo adaptador Allure.

`$ npm install -g allure-commandline --save-dev`

Passo 3: Instalar o Java
O Allure precisa do java para conseguir ler e transformar em html como relatório.

Site para instalar o Java: `https://www.oracle.com/br/java/technologies/downloads/`
Versão que utilizei no meu projeto: `JDK 21, windows, x64 MSI Installer`

Fazer a instalação normalmente.

Restartar o terminal e digitar o comando para saber se está instalado com sucesso no diretório web:

`$ java --version`

Se apresentar a versão do Java então está tudo certo. 

Passo 4: Configurar a variável de ambiente:

Fechar os terminais por garantia.

No windows 11 acessar as configurações avançadas do sistema:
`Configurações/Sistema/Sobre/Configurações avançadas do sistema`

Será aberto uma janela e nela deve ser clicado no botão "Variáveis de Ambiente..."

Será aberto outra janela. Na sessão "Variáveis do sistema" clicar no botão "Novo...".

Será aberto outra janela.

No nome da variável digitar: JAVA_HOME

No valor va variável clicar no botão "Procurar no Diretório..." e chegar em `Este computador/Arquivos e Programas/Java/jdk-21` e clicar no botão "OK".
Clicar em OK novamente para adicionar a variável de ambiente.

Ainda na sessão "Variáveis do sistema" buscar por uma variável chamada "Path" clicar sobre ela e clicar no botão "Editar".

Na janela aberta clicar no botão "Novo" e digitar: %JAVA_HOME%\bin
Clicar em OK e depois em OK novamente para finalizar as alterações.

Colocar a API no ar:

`$ yarn dev`

Colocar o front no ar:

`$ yarn dev`

Abrir outro terminal e rodar os testes em headless:

`$ npx cypress run`

Irá ser gerado uma pasta no diretório /web com o nome "allure-results".

E depois de finalizado digitar o comando abaixo para subir o servidor da Allure:

`$ npx allure serve`

Após isso o relatório será exibido no navegador.