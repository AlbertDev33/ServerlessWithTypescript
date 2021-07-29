# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

### Locally

- `yarn dev --path src/main/app/` if you're using Yarn

## Template features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

<!-- - `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas -->

```
📦serverlessProject
 ┣ 📂src
 ┃ ┣ 📂Entitie
 ┃ ┃ ┗ 📜User.ts
 ┃ ┣ 📂UserCase
 ┃ ┃ ┣ 📂protocol
 ┃ ┃ ┃ ┗ 📜ICreateUser.ts
 ┃ ┃ ┗ 📜CreateUserUseCase.ts
 ┃ ┣ 📂dtos
 ┃ ┃ ┗ 📜IUserDTO.ts
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜app.ts
 ┃ ┃ ┗ 📜implementation.ts
 ┃ ┗ 📂shared
 ┃ ┃ ┗ 📂infra
 ┃ ┃ ┃ ┣ 📂database
 ┃ ┃ ┃ ┃ ┗ 📜mongoConnection.ts
 ┃ ┃ ┃ ┗ 📂repository
 ┃ ┃ ┃ ┃ ┣ 📂implementation
 ┃ ┃ ┃ ┃ ┃ ┗ 📜mongoRepository.ts
 ┃ ┃ ┃ ┃ ┗ 📂protocol
 ┃ ┃ ┃ ┃ ┃ ┗ 📜IMongoRepository.ts
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.nvmrc
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜package.json
 ┣ 📜serverless.yml
 ┣ 📜tsconfig.json
 ┣ 📜tsconfig.paths.json
 ┣ 📜webpack.config.js
 ┗ 📜yarn.lock
```
