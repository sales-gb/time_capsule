# Time Capsule 🚀

Projeto de estudo Full Stack que simula uma "cápsula do tempo" profissional. A aplicação permite que o usuário crie uma linha do tempo visual de sua carreira, postando fotos e marcos importantes para registrar sua evolução ao longo dos anos.

O projeto foi construído com uma arquitetura de monorepo, contendo:

Server: Uma API RESTful desenvolvida com Node.js, Express e Prisma para gerenciar usuários, posts e autenticação.
Mobile: Um aplicativo móvel desenvolvido em React Native e TypeScript para o usuário interagir com a plataforma.
Web: Uma aplicação web desenvolvida em React com estilização em StyledComponents

### Este projeto foi um estudo prático para consolidar habilidades em desenvolvimento Full Stack, focando na integração entre um back-end moderno e um aplicativo móvel híbrido.

## 🛠️ Tecnologias Utilizadas

O projeto é dividido em duas partes principais:

📱 Mobile (Front-end)

React Native: Para o desenvolvimento do aplicativo móvel.
TypeScript: Para adicionar tipagem estática e segurança ao código.
Axios: Para realizar as chamadas à API RESTful.
React Navigation: Para gerenciar a navegação e o fluxo de telas.

🖥️ Server (Back-end)
Node.js: Ambiente de execução da API.
Express.js: Para a construção das rotas da API RESTful.
Prisma: ORM para interação com o banco de dados (provavelmente PostgreSQL ou SQLite).
TypeScript: Para tipagem no back-end.
JWT (JSON Web Token): Para autenticação e autorização de rotas.

## 🚀 Como Rodar o Projeto

Este projeto está em um monorepo. Você precisará rodar o server e o mobile em terminais separados.

1. Configurando o Servidor (Back-end)

O servidor precisa estar rodando para que o aplicativo móvel possa se autenticar e buscar os dados.

### 1. Navegue até a pasta do servidor
cd server

### 2. Instale as dependências
npm install

### 3. Configure suas variáveis de ambiente
- Crie um arquivo .env na raiz da pasta /server
- Você precisará (no mínimo) de uma DATABASE_URL para o Prisma
- Exemplo para PostgreSQL:
DATABASE_URL="postgresql://user:password@localhost:5432/timecapsule?schema=public"

### 4. Rode as migrações do Prisma para criar as tabelas no banco
npx prisma migrate dev

### 5. Inicie o servidor de desenvolvimento
npm run dev


## 🎉 O servidor estará rodando em http://localhost:3333

2. Configurando o Aplicativo (Mobile)

Com o servidor rodando, você pode iniciar o aplicativo móvel.

### 1. Navegue até a pasta do aplicativo
cd mobile

### 2. Instale as dependências
npm install

### 3. Configure a URL da API
-  Verifique se há um arquivo de configuração de ambiente (ex: /src/services/api.js)
-  e garanta que o endereço da API aponta para o seu servidor local.
- (Ex: 'http://localhost:3333' ou 'http://SEU_IP_LOCAL:3333' se for rodar no celular físico)

### 4. Inicie o metro bundler do React Native
npx react-native start

### 5. Em um NOVO terminal, rode o app no emulador/simulador
#### Para Android:
npx react-native run-android

#### Para iOS:
npx react-native run-ios


📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.
