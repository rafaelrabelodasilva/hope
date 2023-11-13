# Bootcamp Cypress eXperience - Fernando Papito ✨

Neste repositório, vou compartilhar minha incrível jornada de aprendizado no curso **Cypress Experience** ministrado pelo Fernando Papito.

<!-- Durante as últimas 5 semanas, mergulhei de cabeça no mundo da automação de testes com Cypress e estou empolgado para contar a vocês tudo o que aprendi. -->

## Sobre o Curso 📕

O **Cypress Experience** é um programa de especialização em automação de testes.

## Tópicos do Curso 📚

Aqui estão alguns dos tópicos incríveis que iremos explorar no curso:

* Cypress
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

## Iniciando com Cypress 13

No terminal digitar o seguinte comando no front do projeto:

`$ npm install cypress --save-dev`

Para abrir o Cypress pela primeira vez basta digitar o comando baixo no terminal:

`$ npx cypress open`

## Biblioteca faker

Instalado a biblioteca faker para que a massa de teste seja dinâmica.

Para instalar basta digitar o comando abaixo no terminal:

`$ npm install --save-dev @faker-js/faker -D`

Site da biblioteca: https://fakerjs.dev/

A biblioteca é utilizada diretamente na suíte de testes. Ex.: register.cy.js

## Biblioteca cypress-mongodb

Ela irá fazer a gestão das collections do MongoDB, como drop, create, insert, find, etc:

`$ npm i cypress-mongodb -D`

Site da biblioteca: https://www.npmjs.com/package/cypress-mongodb

Os arquivos alterados foram: 
* cypress.config.js
* e2e.js

<!-- ## Biblioteca Allure

Gera os relatórios ???
$ npm i @mmisty/cypress-allure-adapter -D

Retorna um binário que vai conseguir ler os arquivos .json que estão dentro da pasta web/allure-results e construir nosso servidor de relatórios:

`$ npm i allure-commandline -D`

Para iniciar basta digitar o comando abaixo no diretório web:

`$ npx allure serve`

Ele precisa do java para conseguir ler e transformar em html como relatório

`https://www.oracle.com/br/java/technologies/downloads/`

`JDK 21, windows, x64 MSI Installer`

Fazer a instalação normalmente.

Fechar o terminal e digitar o comando para saber se está instalado com sucesso no diretório web:

`$ java --version`

Ele faz uns paranauê.

`$ npx allure serve` -->
